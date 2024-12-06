import mongoose, { Schema, Document, Types } from 'mongoose';

export interface PumpCoin {
    mint: string;
    curve: string;
    createdAt: number;
    migratedAt: number;
    migrated: boolean;// Array of ObjectIds referencing PumpTransactions
}

const pumpCoinSchema = new Schema<PumpCoin & Document>({
    mint: { type: String, required: true },
    curve: { type: String, required: true },
    createdAt: { type: Number, required: true },
    migratedAt: { type: Number, required: true },
    migrated: { type: Boolean, required: true }
}, {
    versionKey: false
});

const PumpCoinModel = mongoose.model<PumpCoin & Document>('PumpCoin', pumpCoinSchema);

export default PumpCoinModel;