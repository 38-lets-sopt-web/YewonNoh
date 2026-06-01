import { useEffect, useRef } from 'react';

interface UseIntersectionObserverProps {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

export const useIntersectionObserver = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: UseIntersectionObserverProps) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    const target = targetRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return targetRef;
};
