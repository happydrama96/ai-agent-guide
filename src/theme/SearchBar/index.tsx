import React, {useEffect, useMemo, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

type SearchDocument = {
  title: string;
  description: string;
  content: string;
  url: string;
};

type SearchData = {documents: SearchDocument[]};

function normalize(value: string): string {
  return value.normalize('NFKC').toLocaleLowerCase('ko-KR');
}

export default function SearchBar(): React.JSX.Element {
  const {documents} = usePluginData('local-search') as SearchData;
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    if (terms.length === 0) return [];
    return documents
      .filter((document) => {
        const haystack = normalize(`${document.title} ${document.description} ${document.content}`);
        return terms.every((term) => haystack.includes(term));
      })
      .slice(0, 8);
  }, [documents, query]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (open) window.setTimeout(() => inputRef.current?.focus(), 0);
    else setQuery('');
  }, [open]);

  return (
    <>
      <button className={styles.trigger} type="button" onClick={() => setOpen(true)} aria-label="문서 검색 열기">
        <span aria-hidden="true">⌕</span>
        <span className={styles.triggerLabel}>검색</span>
        <kbd>⌘K</kbd>
      </button>
      {open && (
        <div className={styles.backdrop} role="presentation" onMouseDown={() => setOpen(false)}>
          <section className={styles.dialog} role="dialog" aria-modal="true" aria-label="문서 검색" onMouseDown={(event) => event.stopPropagation()}>
            <div className={styles.inputRow}>
              <span aria-hidden="true">⌕</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="한글 또는 제품명 검색"
                aria-label="검색어"
              />
              <button type="button" onClick={() => setOpen(false)} aria-label="검색 닫기">ESC</button>
            </div>
            <div className={styles.results} aria-live="polite">
              {query.trim() === '' && <p className={styles.hint}>검색어는 외부로 전송되지 않습니다.</p>}
              {query.trim() !== '' && results.length === 0 && <p className={styles.hint}>일치하는 문서가 없습니다.</p>}
              {results.map((result) => (
                <Link key={result.url} className={styles.result} to={result.url} onClick={() => setOpen(false)}>
                  <strong>{result.title}</strong>
                  <span>{result.description}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
