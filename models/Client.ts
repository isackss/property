// models/Client.ts
import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        type: { type: String, required: true },
        contact: { type: String, required: true },
        beneficiary: { type: String, required: true },
        properties: { type: String, required: true },
        paymentInstructions: { type: String, required: false },
    },
    { timestamps: true }
);

export const Client =
    mongoose.models.Client || mongoose.model('Client', ClientSchema);
