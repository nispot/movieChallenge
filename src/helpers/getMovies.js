export const getMovies = async (url) => {
  const resp = await fetch(url);
  const { results } = await resp.json();

  return results;
};
