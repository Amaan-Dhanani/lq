import type { PageServerLoad } from './$types';
import { MongoClient } from 'mongodb';
import { SECRET_MONGODB_URI } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

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


    //GET EMAIL FROM COOKIES
	const email = cookies.get("email");

    //IF EMAIL ISN'T FOUND, THEY DIDN'T 

	const user = await db.collection('users').findOne({ email });

	if (!user) {
		console.log("User not found.");
	}
	else {

		const userId = user._id.toString();
		console.log("User ID:", userId);
	}
};
