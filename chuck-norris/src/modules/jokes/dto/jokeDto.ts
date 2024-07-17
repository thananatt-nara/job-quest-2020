import { JokeResponse } from '../types'

export const JokeDTO = (data: JokeResponse, name: string) => {
	return {
		joke: data.value.replace(/Chuck Norris/g, name),
	}
}
