'use client';

import { useEffect } from 'react';

export default function error({error, reset}) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <div className='text-center mt-10'>
            <h2>ERROR! ERROR! Something went wrong...</h2>
            <h5>Please try again later...</h5>
            <p className="text-red-500 mt-4">{error?.message || String(error)}</p>
            <br /><br /><br />
            <button className='hover:text-amber-600' onClick={() => reset()}>Try again</button>
        </div>
    )
}