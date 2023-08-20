export default async function getGifs(n) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const offset = getRandomInt(100);
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=i7wu21HcofsCVQkecmNw6G9Io6QCi6R9&q=cats&limit=${n}&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`,
      { mode: 'cors' }
    );
    const data = await response.json();
    const gifs = data.data.map((gif) => gif.images.fixed_height.url);
    return gifs;
  } catch (error) {
    console.error('Error:', error);
  }
}
