/**
 * http client to help fetch data
 * @param  {...any} args
 */
 const fetcher = (...args) =>
 fetch(...args)
   .then((res) => res.json())
   .then((data) => data);

export default fetcher;
