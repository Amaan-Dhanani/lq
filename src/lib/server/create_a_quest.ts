import { connect_to_db } from "./db";
import { error } from "@sveltejs/kit";
import { get_user_id } from "./utils";
import { ObjectId } from "mongodb";
import { redirect } from '@sveltejs/kit';


export async function return_tempquest_data(email: string): Promise<any> {
	const mongoose = await connect_to_db();
	if (!mongoose || !mongoose.connection.db) throw error(500, "Database connection failed");

	const _idStr = await get_user_id(email);
	if (!_idStr) throw error(404, "User ID not found");

	const _id = new ObjectId(_idStr);
	const collection = mongoose.connection.db.collection("tempquest");

	const doc = await collection.findOne({ _id });
	if (!doc) { return ""};

	return {
		...doc,
		_id: doc._id.toString(),
	};
}


export async function wrong_question_access(email: string, page_num: number): Promise<void> {
	const mongoose = await connect_to_db();
	if (!mongoose || !mongoose.connection.db) throw error(500, "Database connection failed");

	const _idStr = await get_user_id(email);
	if (!_idStr) throw error(404, "User ID not found");

	const _id = new ObjectId(_idStr);
	const collection = mongoose.connection.db.collection('tempquest');

	const doc = await collection.findOne({ _id });
	if (!doc) {
		throw redirect(303, `/create_a_quest/main`);
	};
	const storedQuestion = doc.question;
	if (page_num >= storedQuestion + 2) {
		throw redirect(303, `/create_a_quest/question${storedQuestion + 1}`);
	}
	

}

export async function tempquest_pass(email: string, info: Record<string, any>): Promise<void> {
	const mongoose = await connect_to_db();
	if (!mongoose || !mongoose.connection.db) throw error(500, "Database connection failed");

	const _idStr = await get_user_id(email);
	if (!_idStr) throw error(404, "User ID not found");

	const _id = new ObjectId(_idStr);
	const collection = mongoose.connection.db.collection('tempquest');

	// First: push data
	await collection.updateOne(
		{ _id },
		{ $set: info },
		{ upsert: true }
	);

	// Then: re-fetch document to determine which question field exists
	const updatedDoc = await collection.findOne({ _id });

	let questionNumber = 0;
	if (updatedDoc) {
		for (let i = 1; i <= 10; i++) {
			if (`question_${i}` in updatedDoc) {
				questionNumber = i;
				break;
			}
		}
	}

	// Update the question field after checking
	await collection.updateOne(
		{ _id },
		{ $set: { question: questionNumber } }
	);
}
