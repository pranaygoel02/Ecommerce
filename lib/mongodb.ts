import {connect, connection} from 'mongoose';

export const connectDB = async () => {
    try {
        if(connection.readyState === 0) {
            console.log('Connecting to MongoDB', process.env.MONGODB_URI);
            
            await connect(process.env.MONGODB_URI as string);
            console.log('MongoDB connected');
        }
    } catch (error: any) {
        console.log("mongo error: ", error);
    }
}