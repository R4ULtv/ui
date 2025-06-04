export const fetcher = <T>(...args: Parameters<typeof fetch>): Promise<T> =>
  fetch(...args).then((res: Response) => res.json() as T);
