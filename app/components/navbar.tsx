import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between pb-16">
            <h4 className="text-2xl font-medium">amari</h4>

            <div className="flex items-center gap-6 text-sm">
                <Link href={'/about'}>about</Link>
                <Link href={'/about'}>contact</Link>
                <Link href={'/about'}>login</Link>
            </div>
        </nav>
    )
}

export default Navbar;