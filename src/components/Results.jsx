import Card from './Card';

export default function Results({ results }) {
    return (
        <div className='sm:grid sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 max-w-5xl mx-auto py-4'>
            {results.map((result) => (
                <Card key={result.id} result={result} />
            ))}
        </div>
    );
}