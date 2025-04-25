import type { Actions, PageData } from '.$types';
import { MongoClient } from 'mongodb';
import { SECRET_MONGODB_URI } from "$env/static/private";

if (!SECRET_MONGODB_URI || typeof SECRET_MONGODB_URI !== 'string') {
    throw new Error('Invalid or undefined MongoDB connection string in environment variables.');
}

let result = "";
const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
let newResult = "a8e4p0";

const client = new MongoClient(SECRET_MONGODB_URI);
let isClientConnected = false;

export const actions: Actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const email_val = formData.get('email') as string;
            let qid_val = newResult;

            // Connect to MongoDB if not already connected
            if (!isClientConnected) {
                await client.connect();
                isClientConnected = true;
            }

            const database = client.db();
            const coll = database.collection('achievements');
            const doc = await coll.findOne({ email: email_val });

            if (!doc) {
                // Document doesn't exist, insert with level 1
                await coll.insertOne({ email: email_val, level: 2 });
            } else {
                if ('level' in doc) {
                    // Increment existing level
                    await coll.updateOne(
                        { email: email_val },
                        { $inc: { level: 1 } }
                    );
                } else {
                    // Add level field with value 2
                    await coll.updateOne(
                        { email: email_val },
                        { $set: { level: 2 } }
                    );
                }
            }

        } catch (error) {
            throw new Error(`Error processing request: ${error}`);
        }

    }

};