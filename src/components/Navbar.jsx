import NavbarItem from "./NavbarItem";

export default function Navbar() {
    return (
        <div className="flex items-center justify-center gap-6 p-1 bg-amber-200 p-v lg:text-lg">
            <NavbarItem title = 'Trending' param = 'trending' />
            <NavbarItem title = 'TopRated' param = 'rated' />
        </div>
    );
}