import axios from 'axios'

import { JokeResponse } from '../types'

export async function getJoke() {
	return axios.get<JokeResponse>('https://api.chucknorris.io/jokes/random')
}
