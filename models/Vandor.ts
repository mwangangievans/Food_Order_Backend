import mongoose, { Schema, Document, Model } from "mongoose";

interface vadorDocument extends Document {
    name: string;
    ownerName: string;
    foodtype: [string];
    pincode: string;
    address: string;
    phone: string;
    email: string;
    password: string;
    salt: string;
    serviceAvailable: boolean;
    coverImage: [string];
    rating: number;
    // foods: any[];
}

const vadorSchema = new Schema<vadorDocument>({
    name: { type: String, required: true },
    ownerName: { type: String, required: true },
    foodtype: { type: [String] },
    pincode: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    serviceAvailable: { type: Boolean, default: false },
    coverImage: [{ type: String }],
    rating: { type: Number, default: 0 },
    // foods: [{ type: Schema.Types.ObjectId, ref: 'Food' }]
}, {
    toJSON: {
        transform(doc, ret: any) {
            delete ret.password;
            delete ret.salt;
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;
        }
    },
    timestamps: true
});

const Vandor: Model<vadorDocument> = mongoose.model<vadorDocument>('Vandor', vadorSchema);
export { Vandor }; 