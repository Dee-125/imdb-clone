import Results from '@/components/Results';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function Home() {
  // Fetch trending movies from TMDB API and handle errors
  const req = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`
  );
  // Parse the response body as JSON to extract the data returned by the TMDB API.
  // The .json() method reads the response stream and resolves with the result of parsing the body text as JSON.
  // This will give us an object containing all the data from the API, including the 'results' array of movies.
  const data = await req.json();
  if (!req.ok) {
    throw new Error('Failed to fetch data');
  }

  const results = data.results;

  return (
    <div>
      <Results results = {results} />
    </div>
  );
}