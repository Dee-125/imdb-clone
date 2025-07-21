import Results from "@/components/Results";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function Home({ params }) {
    const { genre } = await params;
    const req = await fetch(
        `https://api.themoviedb.org/3${
            genre === 'rated'?  '/movie/top_rated' : '/trending/all/week'
        }?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await req.json();
    if (!req.ok) {
        throw new Error('Failed to Fetch data');
    }
    const results = data.results;

    return (
        <div>
            <Results results = {results} />
        </div>
    );
}