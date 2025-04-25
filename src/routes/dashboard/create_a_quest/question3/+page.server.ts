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
            const q3 = formData.get('q3') as string;
            const q3_a = formData.get('q3_a') as string;
            const q3_b = formData.get('q3_b') as string;
            const q3_c = formData.get('q3_c') as string;
            const q3_d = formData.get('q3_d') as string;
            const q3_des = formData.get('q3_des') as string;
            const ca_3 = formData.get('ca_3') as string;
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
            const data = { q3, q3_a, q3_b, q3_c, q3_d, ca_3, q3_des };

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