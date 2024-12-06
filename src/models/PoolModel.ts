import mongoose, { Schema, Document } from 'mongoose';

export type Pool = {
    address: string,
    mint: string,
    price: number,
    startPrice: number,
    highestPrice: number,
    highestBreached: number,
    lowestPrice: number,
    timestamp: number
}

const poolSchema = new Schema<Pool & Document>({
    address: {type: String, required: true},
    mint: {type: String, required: true},
    price: {type: Number, required: true},
    startPrice: { type: Number, required: true },
    highestPrice: { type: Number, required: true },
    highestBreached: { type: Number, required: true },
    lowestPrice: { type: Number, required: true },
    timestamp: { type: Number, required: true },
}, { versionKey: false });

const PoolModel = mongoose.model<Pool & Document>('RaydiumPool', poolSchema)

export default PoolModel