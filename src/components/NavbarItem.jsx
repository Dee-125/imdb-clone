'use client'; // 'use client' is required at the top of a file to enable React Client Components in Next.js, which allows the use of client-side hooks like usePathname. Hooks cannot be used in server components.

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarItem({ title, param }) {
    const genre = usePathname().split('/')[2];
    return (
        <div>
            <Link
                className={`hover:text-amber-600 font-semibold ${
                    genre === param
                        ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
                        : ''
                    }`}
                href={`/top/${param}`}
                >
                    {title}
                </Link>
        </div>
    )
}