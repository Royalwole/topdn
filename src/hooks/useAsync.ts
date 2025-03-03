import { useState, useCallback } from 'react';

interface UseAsyncReturn<T> {
  loading: boolean;
  error: Error | null;
  data: T | null;
  execute: (...args: any[]) => Promise<void>;
}

function useAsync<T>(asyncFunction: (...args: any[]) => Promise<T>): UseAsyncReturn<T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(async (...args: any[]) => {
    try {
      setLoading(true);
      setError(null);
      const result = await asyncFunction(...args);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  return { loading, error, data, execute };
}

export default useAsync;
