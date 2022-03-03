import { QueryClient } from 'react-query';

import config from '@perseus-shared/config';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: config.defaulDataStaleTime,
      retry: config.queryRetryCount,
      refetchOnWindowFocus: false,
    },
  },
});

export default queryClient;
