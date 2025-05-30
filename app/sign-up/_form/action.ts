"use server";

import { auth } from "@/lib/auth";

export async function signUpFormAction(_prev: unknown, formData: FormData) {
	try {
		const email = formData.get("email");
		const password = formData.get("password");
		const name = formData.get("fullName");

		const response = auth.api.signUpEmail({
			body: {
				name,
				email,
				password,
			},
		});

		console.log(response);
	} catch (error) {
		return error;
	}
}
