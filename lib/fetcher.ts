export const fetcher = <T = any>(
  ...args: Parameters<typeof fetch>
): Promise<T> => fetch(...args).then((res: Response) => res.json() as T);
