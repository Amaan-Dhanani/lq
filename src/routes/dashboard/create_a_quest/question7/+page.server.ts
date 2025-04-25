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
            const q7 = formData.get('q7') as string;
            const q7_a = formData.get('q7_a') as string;
            const q7_b = formData.get('q7_b') as string;
            const q7_c = formData.get('q7_c') as string;
            const q7_d = formData.get('q7_d') as string;
            const q7_des = formData.get('q7_des') as string;
            const ca_7 = formData.get('ca_7') as string;
            const email = formData.get('email') as string;

            // Validate form data       

            // Connect to MongoDB if not already connected
            if (!isClientConnected) {
                await client.connect();
                isClientConnected = true;
            }

            const database = client.db();
            const collection = database.collection('tempquest');

            // Data to update
            const data = { q7, q7_a, q7_b, q7_c, q7_d, ca_7, q7_des };

            // Update if email exists, insert if not found
            const result = await collection.updateOne(
                { email }, // Search query
                { $set: data }, // Update fields
                { upsert: true } // Insert if not found
            );

        } catch (error) {
            console.error('Error in default action:', error);
        }
        throw redirect(303, "/dashboard/create_a_quest/quest_storage");
    },
};