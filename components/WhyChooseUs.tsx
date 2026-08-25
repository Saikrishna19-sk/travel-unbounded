const reasons = [
    {
        number: "01",
        title: "Personally-Vetted Experiences",
        description:
            "Every destination, stay and activity is carefully evaluated so you can travel with confidence.",
    },
    {
        number: "02",
        title: "Local Expertise",
        description:
            "Our local partners and guides help you experience each destination beyond the usual tourist route.",
    },
    {
        number: "03",
        title: "Custom Itineraries",
        description:
            "Your journey is designed around your interests, travel style, budget and pace.",
    },
    {
        number: "04",
        title: "24x7 Support",
        description:
            "Our team stays available throughout your journey whenever you need assistance.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-gray-950 px-6 py-20 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-2xl">
                    <p className="font-medium uppercase tracking-wider text-emerald-400">
                        Why Travel Unbounded
                    </p>

                    <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                        Travel designed around you.
                    </h2>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason) => (
                        <div
                            key={reason.number}
                            className="rounded-2xl border border-white/10 p-6"
                        >
                            <span className="text-sm font-semibold text-emerald-400">
                                {reason.number}
                            </span>

                            <h3 className="mt-5 text-xl font-semibold">
                                {reason.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}