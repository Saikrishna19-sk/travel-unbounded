import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
    title: "Plan Your Trip | Travel Unbounded",
    description:
        "Tell Travel Unbounded about your next journey and our travel experts will help create a personalised travel experience.",
};

export default function ContactPage() {
    return (
        <main className="bg-gray-50">
            <section className="bg-gray-900 px-6 py-20 text-white">
                <div className="mx-auto max-w-7xl">
                    <p className="font-medium uppercase tracking-[0.2em] text-emerald-400">
                        Plan Your Journey
                    </p>

                    <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-6xl">
                        Let&apos;s create a journey around you.
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                        Tell us about your travel plans and our experts will help design
                        an experience that fits your interests.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-3xl px-6 py-16">
                <BookingForm />
            </section>
        </main>
    );
}