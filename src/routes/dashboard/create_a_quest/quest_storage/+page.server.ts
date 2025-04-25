import type { Actions, PageData } from '.$types';
import { MongoClient } from 'mongodb';
import { SECRET_MONGODB_URI } from "$env/static/private";

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
            const collection = database.collection('tempquest');
            const doc = await collection.findOne({ email: email_val });
            if (doc) {  
                const user = await collection.findOne({ email: email_val });
                if (user) {
                    return  { 
                        quest_type: user.quest_type, questionCount: user.questionCount, quest_title: user.quest_title,
                        ca_1: user.ca_1, q1: user.q1, q1_a: user.q1_a, q1_b: user.q1_b, q1_c: user.q1_c, q1_d: user.q1_d, q1_des: user.q1_des,  
ca_2: user.ca_2, q2: user.q2, q2_a: user.q2_a, q2_b: user.q2_b, q2_c: user.q2_c, q2_d: user.q2_d, q2_des: user.q2_des,  
ca_3: user.ca_3, q3: user.q3, q3_a: user.q3_a, q3_b: user.q3_b, q3_c: user.q3_c, q3_d: user.q3_d, q3_des: user.q3_des,  
ca_4: user.ca_4, q4: user.q4, q4_a: user.q4_a, q4_b: user.q4_b, q4_c: user.q4_c, q4_d: user.q4_d, q4_des: user.q4_des,  
ca_5: user.ca_5, q5: user.q5, q5_a: user.q5_a, q5_b: user.q5_b, q5_c: user.q5_c, q5_d: user.q5_d, q5_des: user.q5_des,  
ca_6: user.ca_6, q6: user.q6, q6_a: user.q6_a, q6_b: user.q6_b, q6_c: user.q6_c, q6_d: user.q6_d, q6_des: user.q6_des,  
ca_7: user.ca_7, q7: user.q7, q7_a: user.q7_a, q7_b: user.q7_b, q7_c: user.q7_c, q7_d: user.q7_d, q7_des: user.q7_des,  
ca_8: user.ca_8, q8: user.q8, q8_a: user.q8_a, q8_b: user.q8_b, q8_c: user.q8_c, q8_d: user.q8_d, q8_des: user.q8_des,  
ca_9: user.ca_9, q9: user.q9, q9_a: user.q9_a, q9_b: user.q9_b, q9_c: user.q9_c, q9_d: user.q9_d, q9_des: user.q9_des,  
ca_10: user.ca_10, q10: user.q10, q10_a: user.q10_a, q10_b: user.q10_b, q10_c: user.q10_c, q10_d: user.q10_d, q10_des: user.q10_des  


                     }
                }

            }
            else {
                throw new Error('No document found with the provided email.');
            }
        } catch (error) {
            throw new Error(`Error processing request: ${error}`);
        }

    }
    
};