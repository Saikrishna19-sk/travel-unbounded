import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Travel Unbounded",
    description:
        "Learn about Travel Unbounded and our approach to experiential travel across India, Asia and Africa.",
};

const offices = [
    {
        city: "Bengaluru — Headquarters",
        address: [
            "541, 7th Main Rd, HAL 2nd Stage",
            "Indiranagar, Bengaluru – 560008",
            "India",
        ],
    },
    {
        city: "Kochi — Kerala Office",
        address: [
            "LR Towers, S Janatha Road",
            "Palavivatton, Kochi – 682025",
            "India",
        ],
    },
    {
        city: "Nairobi — Kenya Office",
        address: [
            "Westpark Towers, Muthithi Road",
            "Nairobi, P.O. Box 6950",
            "Postal Code 00100",
            "Kenya",
        ],
    },
];

const values = [
    {
        title: "Personally-Vetted Experiences",
        description:
            "We recommend destinations, resorts and activities that our team has personally experienced or carefully evaluated.",
    },
    {
        title: "Local Guides",
        description:
            "Our local partners bring destinations to life with authentic knowledge and meaningful interactions.",
    },
    {
        title: "Custom Itineraries",
        description:
            "No two travellers are the same. We shape every journey around your preferences and pace.",
    },
    {
        title: "24x7 Support",
        description:
            "From the planning stage to your return home, our team remains available whenever you need us.",
    },
];

export default function AboutPage() {
    return (
        <main>
            <section className="bg-gray-950 px-6 py-24 text-white">
                <div className="mx-auto max-w-7xl">
                    <p className="font-medium uppercase tracking-[0.2em] text-emerald-400">
                        About Travel Unbounded
                    </p>

                    <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                        India&apos;s Most Trusted Experiential Travel Experts
                    </h1>
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-6 py-20">
                <p className="text-lg leading-8 text-gray-700">
                    Travel Unbounded was born from a simple belief — that the best
                    journeys aren&apos;t sold from a catalogue. They&apos;re built
                    around the people taking them.
                </p>

                <p className="mt-6 text-lg leading-8 text-gray-700">
                    Headquartered in Bangalore with offices in Kerala and Nairobi, we
                    design trips that blend comfort, culture, and raw nature. Every
                    destination, resort, and activity we recommend has been personally
                    experienced by our team.
                </p>

                <p className="mt-6 text-lg leading-8 text-gray-700">
                    From spotting the Big Five at dawn in the Masai Mara to cruising Ha
                    Long Bay at sunset — we go where real stories are written, and we
                    bring you along.
                </p>
            </section>

            <section className="bg-gray-50 px-6 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12">
                        <p className="font-medium uppercase tracking-wider text-emerald-600">
                            Our Locations
                        </p>

                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            Wherever the journey takes you
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {offices.map((office) => (
                            <div
                                key={office.city}
                                className="rounded-2xl bg-white p-7 shadow-sm"
                            >
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {office.city}
                                </h3>

                                <div className="mt-5 space-y-1 text-sm leading-6 text-gray-600">
                                    {office.address.map((line) => (
                                        <p key={line}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-20">
                <p className="font-medium uppercase tracking-wider text-emerald-600">
                    Why Choose Us
                </p>

                <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                    Thoughtful travel, from start to finish.
                </h2>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {values.map((value) => (
                        <div
                            key={value.title}
                            className="rounded-2xl border border-gray-200 p-7"
                        >
                            <h3 className="text-xl font-semibold text-gray-900">
                                {value.title}
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}