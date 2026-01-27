// models/Property.ts
import mongoose from 'mongoose';

const PropertySchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        price: Number,
        address: String,
        owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    },
    { timestamps: true }
);

export const Property =
    mongoose.models.Property || mongoose.model('Property', PropertySchema);
