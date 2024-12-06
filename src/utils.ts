export const average = (transactions, field) =>
    transactions.length > 1
        ? transactions.reduce((sum, txn) => sum + txn[field], 0) / transactions.length
        : 0

export const stdDev = (transactions, field) => {
    const avg = average(transactions, field);
    return Math.sqrt(
        transactions.reduce((sum, txn) => sum + Math.pow(txn[field] - avg, 2), 0) / transactions.length
    );
};

export const sum = (transactions, field) =>
    transactions.reduce((total, txn) => total + txn[field], 0);

export const momentum = (transactions) =>
    transactions.length > 1
        ? transactions[transactions.length - 1].price - transactions[0].price
        : 0;

export const determineLabel = (curveTransactions) => {
    // Example logic: Dumped if the last price < 50% of the average price
    const avgPrice = average(curveTransactions, 'price');
    const lastPrice = curveTransactions[curveTransactions.length - 1]?.price || 0;
    return lastPrice < 0.5 * avgPrice ? 1 : 0;
};