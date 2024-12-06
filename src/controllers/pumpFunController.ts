import { Request, Response } from "express";
import PumpCoinModel, {PumpCoin} from "../models/PumpCoinModel";
import PumpTransactionModel, {PumpTransaction} from "../models/PumpTransaction";
import {average, momentum, stdDev, sum} from "../utils";

type MintResponse = {
    mint: string,
    avgPrice: number,
    avgQuantity: number,
    priceVolatility: number,
    totalVolume: number,
    momentum: number,
    transactions: number,
}

export async function getMint(req: Request, res: Response) {
    const { mint } = req.params;

    const coin: PumpCoin = await PumpCoinModel.findOne({ mint: mint }).lean();
    const transactions: PumpTransaction[] = await PumpTransactionModel.find({curve: coin.curve}).lean();


    const response: MintResponse = {
        mint: mint,
        avgPrice: average(transactions, 'price'),
        avgQuantity: average(transactions, 'quantity'),
        priceVolatility: stdDev(transactions, 'price'),
        totalVolume: sum(transactions, 'quantity'),
        momentum: momentum(transactions),
        transactions: transactions.length,
    };

    res.json(response)
}