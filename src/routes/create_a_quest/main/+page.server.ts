import type { Actions } from './$types';
import { MongoClient } from 'mongodb';
import { SECRET_MONGODB_URI } from "$env/static/private";
import { redirect } from '@sveltejs/kit';

if (!SECRET_MONGODB_URI || typeof SECRET_MONGODB_URI !== 'string') {
    throw new Error('Invalid or undefined MongoDB connection string in environment variables.');
}
const client = new MongoClient(SECRET_MONGODB_URI);
let isClientConnected = false;


//HOW DO I GET THE USER ID??????????????????????


// export const actions: Actions = {
//     default: async ({ request }) => {
//         try {
//             const formData = await request.formData();
//             const name = formData.get('name') as string;
//             const email = formData.get('email') as string;
//             const quest_type = formData.get('quest_type') as string;
//             const quest_title = formData.get('quest_title') as string;

//             // Validate form data
//             if (!name || !email || !quest_type || !quest_title) {
//                 throw new Error('Invalid form data');
//             }

//             // Connect to MongoDB if not already connected
//             if (!isClientConnected) {
//                 await client.connect();
//                 isClientConnected = true;
//             }

//             const database = client.db();
//             const collection = database.collection('tempquest');

//             // Data to update
//             const data = { name, email, quest_type, quest_title };

//             // Update if email exists, insert if not found
//             const result = await collection.updateOne(
//                 { email }, // Search query
//                 { $set: data }, // Update fields
//                 { upsert: true } // Insert if not found
//             );

//         } catch (error) {
//             console.error('Error in default action:', error);
//         }
//         throw redirect(303, "/dashboard/create_a_quest/quest_storage");
//     },
// };
