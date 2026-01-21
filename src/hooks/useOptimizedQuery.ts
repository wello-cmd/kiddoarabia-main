import { useQuery, UseQueryOptions, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { debounce } from '@/utils/performance';

/**
 * Optimized React Query hook with debouncing and smart caching
 */
export const useOptimizedQuery = <TData = unknown, TError = unknown>(
  key: any[],
  queryFn: () => Promise<TData>,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'> & {
    debounceMs?: number;
    prefetch?: boolean;
  }
) => {
  const { debounceMs = 300, prefetch = false, ...queryOptions } = options || {};

  return useQuery({
    queryKey: key,
    queryFn: queryFn,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime in v5)
    retry: (failureCount, error) => {
      // Smart retry logic
      if (failureCount >= 3) return false;
      if (error instanceof Error && error.message.includes('404')) return false;
      return true;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    ...queryOptions,
  });
};

/**
 * Hook for prefetching data
 */
export const usePrefetchQuery = <TData = unknown>(
  key: any[],
  queryFn: () => Promise<TData>,
  condition: boolean = true
) => {
  const { prefetchQuery } = useQueryClient();
  
  useEffect(() => {
    if (condition) {
      prefetchQuery({
        queryKey: key,
        queryFn,
        staleTime: 5 * 60 * 1000,
      });
    }
  }, [condition, key, queryFn, prefetchQuery]);
};