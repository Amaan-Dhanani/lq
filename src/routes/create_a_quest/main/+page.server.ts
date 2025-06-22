// +page.server.ts
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
<<<<<<< HEAD
import { connect_to_db } from '$lib/server/db';
import { error } from "@sveltejs/kit";
import { get_user_id } from '$lib/server/utils';
export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const mongoose = await connect_to_db();
		if (!mongoose || !mongoose.connection.db) throw error(500, "Database connection failed");
=======

//CONNECTION STRING FOUND, BUT WE HAVE TO CONFIRM THE CONNECTION... 
const client = new MongoClient(SECRET_MONGODB_URI);
let isClientConnected = false;

//COOKIES TO GET EMAIL
export const load: PageServerLoad = async ({ cookies }) => {

    //CONFIRMING CONNECTION...
	if (!isClientConnected) {
		await client.connect();
		isClientConnected = true;
	}

	const db = client.db();
>>>>>>> 958ec43e8a89d9e91fc995d90f6f2ab6f8421020


		const email = cookies.get("email");
		if (!email) {
			console.log("Email cookie missing.");
			return;
		}

		const user = await mongoose.connection.db.collection('users').findOne({ email });
		if (!user) {
			console.log("User not found for email:", email);
			return;
		}
		const _id = user._id;

		const formData = await request.formData();
		const quest_type = formData.get('quest_type') as string;
		const quest_title = formData.get('quest_title') as string;
		const access = formData.get('access') as string;
		const info = { quest_type, quest_title, access };

		await mongoose.connection.db.collection('tempquest').updateOne(
			{ _id },
			{ $set: info },
			{ upsert: true }
		);

		throw redirect(303, '/create_a_quest/quest_storage');
	}
};
