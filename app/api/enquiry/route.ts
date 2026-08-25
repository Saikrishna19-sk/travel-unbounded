import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { enquirySchema } from "@/lib/validations";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const validationResult = enquirySchema.safeParse(body);

        if (!validationResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please check the submitted information.",
                    errors: validationResult.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        const client = await clientPromise;

        const db = client.db("travel-unbounded");

        const enquiry = {
            ...validationResult.data,
            createdAt: new Date(),
        };

        await db.collection("enquiries").insertOne(enquiry);

        return NextResponse.json(
            {
                success: true,
                message:
                    "Thank you! Our travel expert will contact you within 24 hours.",
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Enquiry submission error:", error);

        return NextResponse.json(
            {
                success: false,
                message:
                    "Something went wrong while submitting your enquiry. Please try again.",
            },
            { status: 500 }
        );
    }
}