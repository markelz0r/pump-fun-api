import mongoose, {Document, Schema} from "mongoose";

export interface PumpTransaction {
    curve: string;
    quantity: number;
    price: number;
    timestamp: number;
}

const pumpTransactionSchema = new Schema<PumpTransaction & Document>({
    curve: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    timestamp: { type: Number, required: true },
},{
    versionKey: false
});

const PumpTransactionModel = mongoose.model<PumpTransaction & Document>('PumpTransaction', pumpTransactionSchema);

export default PumpTransactionModel;