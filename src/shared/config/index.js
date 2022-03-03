const config = {
  env: process.env.ENV,
  defaulDataStaleTime: 1000 * 60 * parseInt(process.env.STALE_TIME_IN_MINS, 10),
  queryRetryCount: parseInt(process.env.QUERY_RETRY_COUNT, 10),
};

export const endpoints = {
  episodes: 'https://rickandmortyapi.com/api/episode',
  characters: 'https://rickandmortyapi.com/api/character',
};

export default config;
