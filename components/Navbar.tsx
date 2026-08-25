import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-gray-900"
                >
                    Travel <span className="text-emerald-600">Unbounded</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/"
                        className="text-sm font-medium text-gray-700 transition hover:text-emerald-600"
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="text-sm font-medium text-gray-700 transition hover:text-emerald-600"
                    >
                        About
                    </Link>

                    <Link
                        href="/contact"
                        className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
                    >
                        Plan Your Trip
                    </Link>
                </div>
            </nav>
        </header>
    );
}