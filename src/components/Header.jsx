import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
    return (
        <div className="flex justify-between max-w-6xl p-3 mx-auto border-b rounded-b-xl font-bold">
            <ul className="flex gap-4">
                <li className="hover:text-amber-500">
                    <Link href={"/sign-in"}>Sign-in</Link>
                </li>
                <li className="hidden sm:block hover:text-amber-500">
                    <Link href={"/"}>Home</Link>
                </li>
                <li className="hidden sm:block hover:text-amber-500">
                    <Link href={"/about"}>About</Link>
                </li>
            </ul>
            <div className="flex gap-4">
                <DarkModeSwitch />
                <Link 
                    className="rounded-lg overflow-hidden font-bold"
                    href={"/"}>
                        <span className="bg-amber-400 p-1">
                            ImDB
                        </span>
                        <span className="bg-white text-gray-300 p-1">
                            Clone
                        </span>
                </Link>
            </div>
        </div>
    );
}