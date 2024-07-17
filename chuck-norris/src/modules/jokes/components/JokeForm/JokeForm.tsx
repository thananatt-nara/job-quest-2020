import {
	Button,
	Card,
	CardBody,
	CardFooter,
	FormLabel,
	Heading,
	Input,
	Stack,
	Text,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

import { jokeFormSchema } from '../../schemas/jokeSchema'

type JokeFormProps = {
	fetch: (newAmount: number, newName: string) => Promise<void>
}

type JokeFormType = {
	name: string
	amount: number
}

const JokeForm = ({ fetch }: JokeFormProps) => {
	const methods = useForm<JokeFormType>({
		defaultValues: {
			name: 'Chuck Norris',
			amount: 5,
		},
		mode: 'onChange',
		reValidateMode: 'onChange',
		resolver: zodResolver(jokeFormSchema),
	})
	const { register, formState } = methods

	const submitForm = async (formData: JokeFormType) => {
		await fetch(formData.amount, formData.name)
	}

	return (
		<Card py={12} w="500px" h="fit-content">
			<form onSubmit={methods.handleSubmit(submitForm)}>
				<CardBody>
					<Stack spacing={4}>
						<Heading>Chuck Noris Joke</Heading>
						<FormLabel>
							Name
							<Input
								my={2}
								placeholder="Enter your name"
								{...register('name')}
							/>
							<Text size="sm" color="red">
								{formState.errors.name?.message}
							</Text>
						</FormLabel>
						<FormLabel>
							# of Jokes
							<Input
								my={2}
								placeholder="Enter a number"
								type="number"
								max={30}
								{...register('amount', { valueAsNumber: true })}
							/>
							<Text size="sm" color="red">
								{formState.errors.amount?.message}
							</Text>
						</FormLabel>
					</Stack>
				</CardBody>
				<CardFooter>
					<Button
						isDisabled={!formState.isValid}
						isLoading={formState.isSubmitting}
						colorScheme="blue"
						ml="auto"
						type="submit"
					>
						Get new jokes
					</Button>
				</CardFooter>
			</form>
		</Card>
	)
}

export default JokeForm
