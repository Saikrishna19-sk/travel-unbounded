import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { destinations } from "@/data/destinations";

type DestinationPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export function generateStaticParams() {
    return destinations.map((destination) => ({
        id: destination.id,
    }));
}

export default async function DestinationPage({
    params,
}: DestinationPageProps) {
    const { id } = await params;

    const destination = destinations.find(
        (item) => item.id === id
    );

    if (!destination) {
        notFound();
    }

    return (
        <main>
            <section className="relative h-[60vh] min-h-[500px]">
                <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-16 text-white">
                    <div>
                        <p className="font-medium uppercase tracking-wider text-emerald-300">
                            {destination.country}
                        </p>

                        <h1 className="mt-3 text-5xl font-bold md:text-7xl">
                            {destination.name}
                        </h1>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-6 py-16">
                <p className="text-xl leading-8 text-gray-700">
                    {destination.description}
                </p>

                <div className="mt-10 rounded-2xl bg-gray-50 p-8">
                    <p className="text-sm text-gray-500">
                        Starting from
                    </p>

                    <p className="mt-1 text-3xl font-bold text-gray-900">
                        ₹{destination.price.toLocaleString("en-IN")}
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                        *Dummy starting price for assignment purposes.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-6 inline-flex rounded-full bg-gray-900 px-7 py-3 font-semibold text-white transition hover:bg-emerald-700"
                    >
                        Enquire About This Trip
                    </Link>
                </div>
            </section>
        </main>
    );
}