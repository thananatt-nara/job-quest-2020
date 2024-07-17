import { getJoke } from '@/modules/jokes/apis'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import { JokeDTO } from '../dto/jokeDto'

const useGetJokes = (initialAmount = 10) => {
	const queryClient = useQueryClient()
	const [amount, setAmount] = useState(initialAmount)
	const [name, setName] = useState('Chuck Norris')

	const fetchJokes = async () => {
		const jokes = await Promise.all(
			Array.from({ length: amount }).map(() => getJoke())
		)
		return jokes
	}

	const query = useQuery({
		queryKey: ['jokes', amount],
		queryFn: fetchJokes,
		refetchOnWindowFocus: false,
		select: (response) => {
			return response.map((joke) => JokeDTO(joke.data, name))
		},
	})

	const refetchWithNewAmount = async (newAmount: number, newName: string) => {
		setAmount(newAmount)
		setName(newName)
		await queryClient.invalidateQueries({ queryKey: ['jokes', newAmount] })
	}

	return {
		...query,
		refetchWithNewAmount,
	}
}

export default useGetJokes
