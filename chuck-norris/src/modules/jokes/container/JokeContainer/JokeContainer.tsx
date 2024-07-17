import { JokeCard, JokeForm } from '@/modules/jokes/components'
import { useGetJoke } from '@/modules/jokes/hooks'
import { Flex, Spinner, Stack } from '@chakra-ui/react'
import React from 'react'

const JokeContainer = () => {
	const {
		isLoading,
		isFetching,
		data: jokes,
		refetchWithNewAmount,
	} = useGetJoke(5)
	const showLoading = isLoading || isFetching

	return (
		<Flex gap={12} p={8} justify="center">
			<JokeForm fetch={refetchWithNewAmount} />
			{showLoading ? (
				<Spinner />
			) : (
				<Stack gap={2}>
					{jokes?.map((joke) => (
						<JokeCard key={joke.joke} joke={joke.joke} />
					))}
				</Stack>
			)}
		</Flex>
	)
}

export default JokeContainer
