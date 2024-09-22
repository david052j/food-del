import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://itambodavid94:2YzuTr4Np3uMRSoL@cluster0.hl6utou.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}