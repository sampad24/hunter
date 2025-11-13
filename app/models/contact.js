import mongoose, {Schema} from "mongoose";

const contactSchema = new Schema({
    firstname: { type: String, required: true, minLength: [3, "First name must be at least 3 characters long"] },
    lastname: { type: String, required: true, minLength: [3, "Last name must be at least 3 characters long"] },
    phone: { type: String, required: true },
    course: { type: String, required: true },
    whatsapp: { type: String, required: false },
    email: { type: String, required: false }
});

const Contact = mongoose.models.students || mongoose.model('students', contactSchema);

export default Contact;
