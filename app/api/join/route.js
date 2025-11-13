import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";
export async function POST(request) {
    try {
        const { firstname, lastname, phone, whatsapp, email, course } = await request.json();

        // Validate required fields and create detailed error messages
    const missingFields = [];
    if (!firstname) missingFields.push("First Name");
    if (!lastname) missingFields.push("Last Name");
    if (!phone) missingFields.push("Phone Number");
    if (!course) missingFields.push("Course");

        if (missingFields.length > 0) {
            return new Response(
                JSON.stringify({ 
                    error: "validation_failed",
                    details: missingFields,
                    msg: [`Missing required fields: ${missingFields.join(", ")}`], 
                    success: false 
                }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                }
            );
        }

        // If an email was provided, validate its format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            return new Response(
                JSON.stringify({ 
                    error: "validation_failed",
                    details: ["email"],
                    msg: ["Please enter a valid email address"], 
                    success: false 
                }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                }
            );
        }

        await connectDB();

        // Only include fields that have values to avoid sending empty strings
        const contactData = {
            firstname,
            lastname,
            phone,
            course,
        };
        if (whatsapp) contactData.whatsapp = whatsapp;
        if (email) contactData.email = email;

        const newContact = await Contact.create(contactData);

        return new Response(
            JSON.stringify({ 
                msg: ["Form submitted successfully!"], 
                success: true 
            }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            }
        );

    } catch (error) {
        console.error("Error processing form submission:", error);
        
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let field in error.errors) {
                errorList.push(error.errors[field].message);
            }
            return new Response(
                JSON.stringify({ 
                    msg: errorList, 
                    success: false 
                }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                }
            );
        }

        return new Response(
            JSON.stringify({ 
                msg: ["An error occurred while submitting the form."], 
                success: false 
            }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            }
        );

    }
}
