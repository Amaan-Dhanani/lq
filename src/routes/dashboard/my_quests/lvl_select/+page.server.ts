import type { Actions } from './$types';
import { MongoClient } from 'mongodb';
import { SECRET_MONGODB_URI } from "$env/static/private";
import { redirect } from '@sveltejs/kit';

if (!SECRET_MONGODB_URI || typeof SECRET_MONGODB_URI !== 'string') {
    throw new Error('Invalid or undefined MongoDB connection string in environment variables.');
}

const client = new MongoClient(SECRET_MONGODB_URI);
let isClientConnected = false;

export const actions: Actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const email_val = formData.get('email') as string;
    

            // Connect to MongoDB if not already connected
            if (!isClientConnected) {
                await client.connect();
                isClientConnected = true;
            }

            const database = client.db();
            const collection = database.collection('icequest');
            const doc = await collection.findOne({ email: email_val });
            if (doc) {
                return { 
                    time_1: doc.time_1,
                    time_2: doc.time_2,
                    time_3: doc.time_3,
                    time_4: doc.time_4,
                    time_5: doc.time_5,
                    time_6: doc.time_6,
                    time_7: doc.time_7,
                    time_8: doc.time_8,
                    time_9: doc.time_9,
                    time_10: doc.time_10,
                    time_11: doc.time_11,
                    time_12: doc.time_12,
                    time_13: doc.time_13,
                    time_14: doc.time_14,
                    time_15: doc.time_15,
                    time_16: doc.time_16,
                    time_17: doc.time_17,
                    time_18: doc.time_18,
                    time_19: doc.time_19,
                    time_20: doc.time_20,
                }
            }
            else {
                return {
                    message: "",
                }
            }
            // If found, return the times record of 20 levels individually

        } catch (error) {
            console.error('Error in default action:', error);
        }
    },
};