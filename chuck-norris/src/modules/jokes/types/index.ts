import { z } from 'zod'

import { JOKE_CATEGORY_ENUM } from '../schemas/jokeSchema'

export type JokeCategory = z.infer<typeof JOKE_CATEGORY_ENUM>

export type JokeResponse = {
	categories: JokeCategory[]
	created_at: Date
	icon_url: string
	id: string
	updated_at: Date
	url: string
	value: string
}
