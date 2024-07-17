import { z } from 'zod'

export const JOKE_CATEGORY = [
	'animal',
	'career',
	'celebrity',
	'dev',
	'explicit',
	'fashion',
	'food',
	'history',
	'money',
	'movie',
	'music',
	'political',
	'religion',
	'science',
	'sport',
	'travel',
] as const
export const JOKE_CATEGORY_ENUM = z.enum(JOKE_CATEGORY)

export const jokeFormSchema = z.object({
	name: z
		.string()
		.min(3, { message: 'Name is required and must be at least 3 character' }),
	amount: z
		.number()
		.min(1, { message: 'Number must be between 1 and 20' })
		.max(20, { message: 'Number must be between 1 and 20' }),
})
export type JokeFormType = z.infer<typeof jokeFormSchema>
