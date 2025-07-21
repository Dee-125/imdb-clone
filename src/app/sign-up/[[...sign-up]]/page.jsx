import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function SignUp() {
    return (
        <form 
            action="#"
            className="flex items-center justify-center max-w-1/3 min-h-screen mx-auto mt-10 border-2 bg-slate-50 rounded-2xl backdrop-blur-2xl shadow-amber-200"
        >
            <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
                <h3 className="flex items-center justify-center text-center max-w-full font-semibold p-4 capitalize font-stretch-50% ">Sign up</h3>
                <div className="flex gap-4 justify-around">
                    <Link href={'#'} aria-label="Sign up with Google"><FaGoogle/></Link>
                    <Link href={'#'} aria-label="Sign up with Facebook"><FaFacebook/></Link>
                    <Link href={'#'} aria-label="Sign up with Github"><FaGithub/></Link>
                </div>
                <div className="flex items-center my-2">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-2 text-gray-500">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <label className="flex flex-col">
                    <span className="mb-1">Email</span>
                    <input
                        type="email"
                        name="email"
                        required
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        placeholder="Enter your email"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="mb-1">Password</span>
                    <input
                        type="password"
                        name="password"
                        required
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        placeholder="Enter your password"
                    />
                </label>
                <button
                    type="submit"
                    className="mt-2 bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 rounded"
                >
                    Sign Up
                </button>
                <div className="text-center mt-2 text-sm">
                    Don't have an account?{" "}
                    <Link href="/sign-up" className="text-amber-500 hover:underline">
                        Sign Up
                    </Link>
                </div>
            </div>
        </form>
    );
}