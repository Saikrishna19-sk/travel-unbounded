import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/data/destinations";

type DestinationCardProps = {
    destination: Destination;
};

export default function DestinationCard({
    destination,
}: DestinationCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-6">
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-600">
                    {destination.country}
                </p>

                <h3 className="text-2xl font-semibold text-gray-900">
                    {destination.name}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                    {destination.description}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4">
                    <div>
                        <p className="text-xs text-gray-500">Starting from</p>

                        <p className="font-semibold text-gray-900">
                            ₹{destination.price.toLocaleString("en-IN")}
                        </p>
                    </div>

                    <Link
                        href={`/destinations/${destination.id}`}
                        className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </article>
    );
}