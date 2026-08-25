import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
                <div>
                    <h2 className="text-xl font-bold">
                        Travel <span className="text-emerald-400">Unbounded</span>
                    </h2>

                    <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
                        Creating meaningful journeys that combine comfort, culture,
                        nature and unforgettable experiences.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold">Quick Links</h3>

                    <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
                        <Link href="/" className="hover:text-white">
                            Home
                        </Link>

                        <Link href="/about" className="hover:text-white">
                            About
                        </Link>

                        <Link href="/contact" className="hover:text-white">
                            Plan Your Trip
                        </Link>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold">Our Offices</h3>

                    <div className="mt-4 space-y-3 text-sm leading-6 text-gray-400">
                        <p>Bengaluru — India</p>
                        <p>Kochi — Kerala, India</p>
                        <p>Nairobi — Kenya</p>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 px-6 py-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Travel Unbounded. All rights reserved.
            </div>
        </footer>
    );
}