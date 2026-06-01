import { useInfiniteQuery } from '@tanstack/react-query';

import { getMovieLists } from '../api/getMovieLists';

export const useInfiniteMovies = () => {
  return useInfiniteQuery({
    queryKey: ['movieList'],
    queryFn: ({ pageParam }) => getMovieLists(pageParam),
    initialPageParam: 1,
    getNextPageParam: lastPage =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
  });
};
