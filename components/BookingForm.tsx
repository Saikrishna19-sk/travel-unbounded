"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    enquirySchema,
    type EnquiryInput,
} from "@/lib/validations";

const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "USA / Canada" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "Australia" },
    { code: "+971", country: "UAE" },
    { code: "+254", country: "Kenya" },
];

export default function BookingForm() {
    const [serverError, setServerError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<EnquiryInput>({
        resolver: zodResolver(enquirySchema),
        defaultValues: {
            countryCode: "+91",
            hotelCategory: "Standard",
            numberOfPeople: 1,
            numberOfChildren: 0,
        },
    });

    async function onSubmit(data: EnquiryInput) {
        setServerError("");
        setSuccessMessage("");

        try {
            const response = await fetch("/api/enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                setServerError(
                    result.message || "Unable to submit your enquiry."
                );
                return;
            }

            setSuccessMessage(result.message);
            reset();
        } catch {
            setServerError(
                "Something went wrong. Please check your connection and try again."
            );
        }
    }

    return (
        <div className="rounded-3xl bg-white p-6 shadow-xl md:p-10">
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                    Start Your Journey
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    Tell us about your trip
                </h2>

                <p className="mt-3 text-gray-600">
                    Share your travel requirements and our travel expert will get back
                    to you.
                </p>
            </div>

            {successMessage && (
                <div
                    className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800"
                    role="status"
                >
                    <p className="font-semibold">
                        Enquiry submitted successfully!
                    </p>

                    <p className="mt-1 text-sm">{successMessage}</p>
                </div>
            )}

            {serverError && (
                <div
                    className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700"
                    role="alert"
                >
                    {serverError}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label
                        htmlFor="fullName"
                        className="mb-2 block text-sm font-medium text-gray-800"
                    >
                        Full Name *
                    </label>

                    <input
                        id="fullName"
                        type="text"
                        {...register("fullName")}
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />

                    {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.fullName.message}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="contactNumber"
                        className="mb-2 block text-sm font-medium text-gray-800"
                    >
                        Contact Number *
                    </label>

                    <div className="flex gap-2">
                        <select
                            {...register("countryCode")}
                            className="w-36 rounded-xl border border-gray-300 bg-white px-3 py-3 outline-none focus:border-emerald-500"
                        >
                            {countryCodes.map((item) => (
                                <option key={item.code} value={item.code}>
                                    {item.code} {item.country}
                                </option>
                            ))}
                        </select>

                        <input
                            id="contactNumber"
                            type="tel"
                            {...register("contactNumber")}
                            placeholder="9876543210"
                            className="min-w-0 flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                        />
                    </div>

                    {errors.contactNumber && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.contactNumber.message}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-800"
                    >
                        Email *
                    </label>

                    <input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />

                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="dateOfTravel"
                        className="mb-2 block text-sm font-medium text-gray-800"
                    >
                        Date of Travel *
                    </label>

                    <input
                        id="dateOfTravel"
                        type="date"
                        {...register("dateOfTravel")}
                        min={new Date(Date.now() + 86400000)
                            .toISOString()
                            .split("T")[0]}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
                    />

                    {errors.dateOfTravel && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.dateOfTravel.message}
                        </p>
                    )}
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="numberOfPeople"
                            className="mb-2 block text-sm font-medium text-gray-800"
                        >
                            Number of People *
                        </label>

                        <input
                            id="numberOfPeople"
                            type="number"
                            min="1"
                            {...register("numberOfPeople", {
                                valueAsNumber: true,
                            })}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
                        />

                        {errors.numberOfPeople && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.numberOfPeople.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="numberOfChildren"
                            className="mb-2 block text-sm font-medium text-gray-800"
                        >
                            Number of Children
                        </label>

                        <input
                            id="numberOfChildren"
                            type="number"
                            min="0"
                            {...register("numberOfChildren", {
                                valueAsNumber: true,
                            })}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
                        />

                        {errors.numberOfChildren && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.numberOfChildren.message}
                            </p>
                        )}
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="hotelCategory"
                        className="mb-2 block text-sm font-medium text-gray-800"
                    >
                        Hotel Category *
                    </label>

                    <select
                        id="hotelCategory"
                        {...register("hotelCategory")}
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-emerald-500"
                    >
                        <option value="Standard">Standard</option>
                        <option value="Deluxe">Deluxe</option>
                        <option value="Luxury">Luxury</option>
                    </select>

                    {errors.hotelCategory && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.hotelCategory.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-gray-900 px-6 py-4 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                </button>
            </form>
        </div>
    );
}