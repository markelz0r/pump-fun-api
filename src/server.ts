import app from "./app";
import * as mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config({ path: '../.env' });

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Server running on http://localhost:${PORT}`);
});