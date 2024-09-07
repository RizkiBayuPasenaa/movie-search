

export default async function getData(searchTerm) {
  const apikey = '54ae46e8';
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}`);
  const data = await response.json();
  return data;
}
// 