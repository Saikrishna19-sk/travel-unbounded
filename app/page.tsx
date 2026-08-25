import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import DestinationCard from "@/components/DestinationCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
    title: "Travel Unbounded | Experiential Travel Experts",
    description:
        "Discover personalised travel experiences across India and the world with Travel Unbounded.",
};

export default function HomePage() {
    const indiaDestinations = destinations.filter(
        (destination) => destination.category === "india"
    );

    const internationalDestinations = destinations.filter(
        (destination) => destination.category === "international"
    );

    return (
        <main>
            {/* Hero */}
            <section className="relative min-h-[80vh] overflow-hidden">
                <Image
                    src="/images/hero.jpg"
                    alt="Beautiful travel destination"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-20">
                    <div className="max-w-3xl text-white">
                        <p className="mb-4 font-medium uppercase tracking-[0.25em] text-emerald-300">
                            Travel Unbounded
                        </p>

                        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                            India&apos;s Most Trusted Experiential Travel Experts
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
                            We design journeys that blend comfort, culture and raw nature,
                            creating experiences built around the people taking them.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-gray-900 transition hover:bg-emerald-500 hover:text-white"
                        >
                            Plan Your Trip
                        </Link>
                    </div>
                </div>
            </section>

            {/* India */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="mb-10">
                    <p className="font-medium uppercase tracking-wider text-emerald-600">
                        Explore India
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                        India Destinations
                    </h2>

                    <p className="mt-4 max-w-2xl text-gray-600">
                        From Himalayan landscapes to tropical beaches, discover
                        thoughtfully designed experiences across India.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {indiaDestinations.map((destination) => (
                        <DestinationCard
                            key={destination.id}
                            destination={destination}
                        />
                    ))}
                </div>
            </section>

            {/* International */}
            <section className="bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <div className="mb-10">
                        <p className="font-medium uppercase tracking-wider text-emerald-600">
                            Go Beyond Borders
                        </p>

                        <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                            International Destinations
                        </h2>

                        <p className="mt-4 max-w-2xl text-gray-600">
                            Explore unforgettable international journeys designed with
                            comfort, authenticity and adventure in mind.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {internationalDestinations.map((destination) => (
                            <DestinationCard
                                key={destination.id}
                                destination={destination}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <WhyChooseUs />

            {/* CTA */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-5xl rounded-3xl bg-emerald-700 px-6 py-16 text-center text-white md:px-12">
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Ready to plan your next journey?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-emerald-50">
                        Tell us where you want to go and we&apos;ll help create an
                        experience around you.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
                    >
                        Start Planning
                    </Link>
                </div>
            </section>
        </main>
    );
}