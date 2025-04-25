import type { Actions, PageData } from '.$types';
import { MongoClient } from 'mongodb';
import { SECRET_MONGODB_URI } from "$env/static/private";
let isClientConnected = false;

if (!SECRET_MONGODB_URI || typeof SECRET_MONGODB_URI !== 'string') {
    throw new Error('Invalid or undefined MongoDB connection string in environment variables.');
}

const client = new MongoClient(SECRET_MONGODB_URI);

export const actions: Actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const qid_val = formData.get('qid_val') as string;

            if (!isClientConnected) {
                await client.connect();
                isClientConnected = true;
            }

            const database = client.db();
            const coll = database.collection('quests');
            const user = await coll.findOne({ qid_val: qid_val });

            if (user) {
                return {
                    quest_type: user.quest_type,
                    quest_title: user.quest_title,
                    name: user.name,
                    email: user.email,
                    qid_val: user.qid_val,
                };
            } else {
                return { error: "No document found with that QID." };
            }
        } catch (error) {
            throw new Error(`Error processing request: ${error}`);
        }
    }
};
