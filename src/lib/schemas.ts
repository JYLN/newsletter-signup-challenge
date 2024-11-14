import { z } from 'zod';

export const signupSchema = z.object({
	email: z.string().email('Valid email required')
});

export type SignupSchema = z.infer<typeof signupSchema>;
