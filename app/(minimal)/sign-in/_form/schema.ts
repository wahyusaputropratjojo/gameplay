import { z } from "zod/v4";

export const signInFormSchema = z.object({
	email: z
		.string()
		.min(1, { error: "Email is required." })
		.regex(
			/^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i,
			{ error: "Please enter a valid email address." },
		),
	password: z.string().min(1, { error: "Password is required." }),
});

export const emailSchema = z
	.string()
	.min(1, { error: "Email is required." })
	.regex(
		/^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i,
		{ error: "Please enter a valid email address." },
	);

export const passwordSchema = z
	.string()
	.min(1, { error: "Password is required." });
