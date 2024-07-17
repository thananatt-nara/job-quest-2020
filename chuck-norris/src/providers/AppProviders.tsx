'use client'

import { getQueryClient } from '@/libs/react-query/queryClient'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'
import React from 'react'

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
	const queryClient = getQueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<CacheProvider>
				<ChakraProvider>{children}</ChakraProvider>
			</CacheProvider>
		</QueryClientProvider>
	)
}

export default Providers
