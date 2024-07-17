function fib(n: number): number {
	if (n <= 1) {
		return n
	}
	return fib(n - 1) + fib(n - 2)
}

function shift(array: unknown[], direction: 'left' | 'right', number: number) {
	if (number % array.length === 0) {
		return array
	}

	for (let i = 0; i < number; i++) {
		if (direction === 'left') {
			const firstElement = array.shift()
			array.push(firstElement)
		} else {
			const lastElement = array.pop()
			array.unshift(lastElement)
		}
	}

	return array
}

function fizzBuzz(n: number): string {
	const isDivideByThree = n % 3 === 0 ? 'Fizz' : ''
	const isDivideByFive = n % 5 === 0 ? 'Buzz' : ''

	return isDivideByThree + isDivideByFive
}

function secondMax(array: number[]): number {
	const length = array.length
	if (length < 0) {
		throw new Error('Error!')
	}

	let secondMax = array[0]
	let max = array[0]
	let index = 1

	while (index < length) {
		if (array[index] > max) {
			secondMax = max
			max = array[index]
		}

		index++
	}

	return secondMax
}
