import { connect_to_db } from "./db";
import { error } from "@sveltejs/kit";
import { get_user_id } from "./utils";


export async function tempquest_pass(email: string, info: Record<string, any>): Promise<void> {
    const mongoose = await connect_to_db();
    if (!mongoose || !mongoose.connection.db) throw error(500, "Database connection failed");
    const _id = await get_user_id(email);
    
}