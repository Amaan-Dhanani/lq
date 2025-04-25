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
            const q8 = formData.get('q8') as string;
            const q8_a = formData.get('q8_a') as string;
            const q8_b = formData.get('q8_b') as string;
            const q8_c = formData.get('q8_c') as string;
            const q8_d = formData.get('q8_d') as string;
            const q8_des = formData.get('q8_des') as string;
            const ca_8 = formData.get('ca_8') as string;
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
            const data = { q8, q8_a, q8_b, q8_c, q8_d, ca_8, q8_des };

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