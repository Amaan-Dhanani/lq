import { authenticate } from "$lib/server/authenticate";
import { redirect, type Handle } from "@sveltejs/kit";
import { cookie_options } from "$lib/server/utils";

export const handle: Handle = async ({ event, resolve }) => {
	const is_protected =
		event.url.pathname.startsWith("/dashboard") ||
		event.url.pathname.startsWith("/account") ||
		event.url.pathname.startsWith("/create") ;

	const auth = authenticate(event.cookies);

	if (is_protected && !auth) {
		event.cookies.delete("email", cookie_options);
		event.cookies.delete("name", cookie_options);
		throw redirect(307, "/login");
	}

	const response = await resolve(event);
	return response;
};
