import { connect_to_db } from "./db";
import { error } from "@sveltejs/kit";
import { get_user_id } from "./utils";
import { ObjectId } from "mongodb";

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
			if (`question${i}` in updatedDoc) {
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
