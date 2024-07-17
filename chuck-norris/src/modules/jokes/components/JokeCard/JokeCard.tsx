import { Card, CardBody, CardHeader } from '@chakra-ui/react'
import React from 'react'

type JokeCardProps = {
	joke: string
}

const JokeCard = ({ joke }: JokeCardProps) => {
	return (
		<Card h="fit-content" w="600px" shadow="xl">
			<CardBody>{joke}</CardBody>
		</Card>
	)
}

export default JokeCard
