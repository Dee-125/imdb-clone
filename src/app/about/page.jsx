import Link from "next/link";

export default function About() {
    return (
        <div className="flex m-3 mx-auto items-center justify-center min-h-screen max-w-2xl bg-white border-2 rounded-md shadow-lg">
            <div>
                <h3 className="flex items-center justify-center min-w-full font-stretch-50% text-3xl font-bold dark:text-black">about ImBD Clone</h3>
                <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 p-3">
                    This is an IMDb Clone project built with Next.js 13, React, and Tailwind CSS. The goal of this app is to provide a modern, responsive interface for browsing and searching movies, similar to the original IMDb website.
                </p>
                <ul className="mt-6 list-disc list-inside text-gray-900 pl-15 space-y-2">
                    <li>Browse and search for movies</li>
                    <li>Sign up and sign in functionality</li>
                    <li>Light and dark mode support</li>
                    <li>Modern UI with Tailwind CSS</li>
                </ul>
                <p className="mt-6 text-sm text-gray-900 p-4">
                    This project is for educational purposes and is not affiliated with IMDb.
                </p>
                <Link href={"/"} className="flex items-center justify-center gap-2 text-amber-500 hover:underline mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to HomePage
                </Link>
            </div>
        </div>
    );
}