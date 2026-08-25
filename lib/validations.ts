import { z } from "zod";

export const enquirySchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(2, "Full name must contain at least 2 characters"),

    countryCode: z
        .string()
        .min(1, "Country code is required"),

    contactNumber: z
        .string()
        .trim()
        .min(7, "Please enter a valid contact number")
        .max(15, "Contact number is too long")
        .regex(/^[0-9]+$/, "Contact number must contain only numbers"),

    email: z
        .string()
        .trim()
        .email("Please enter a valid email address"),

    dateOfTravel: z
        .string()
        .refine(
            (date) => {
                const today = new Date();

                today.setHours(0, 0, 0, 0);

                const travelDate = new Date(`${date}T00:00:00`);

                return travelDate > today;
            },
            {
                message: "Date of travel must be in the future",
            }
        ),

    numberOfPeople: z
        .number()
        .int()
        .min(1, "At least one traveller is required"),

    hotelCategory: z.enum([
        "Standard",
        "Deluxe",
        "Luxury",
    ]),

    numberOfChildren: z
        .number()
        .int()
        .min(0, "Number of children cannot be negative"),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;