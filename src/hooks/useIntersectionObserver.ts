import { useEffect, useState, useRef } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [node, setNode] = useState<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const isThresholdArray = Array.isArray(threshold);

    if (!isThresholdArray && typeof threshold !== 'number') {
      console.warn(
        `threshold must be a number or an array of numbers. Received: ${threshold}`
      );
      return;
    }

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(updateEntry, observerParams);

    const { current: currentObserver } = observer;

    currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, JSON.stringify(threshold), root, rootMargin, frozen]);

  const cleanup = () => {
    if (observer.current) {
      observer.current.disconnect();
      observer.current = null;
    }
  };

  useEffect(() => {
    return cleanup;
  }, []);

  return [setNode, !!entry?.isIntersecting, entry, cleanup] as const;
}