import { createNextApiHandler } from '@trpc/server/adapters/next'

import { createTRPCContext } from '~/server/trpc/context'
import { appRouter } from '~/server/trpc/routers/_router'

export default createNextApiHandler({
	router: appRouter,
	createContext: createTRPCContext,
	onError: process.env.NODE_ENV === 'development'
		? ({ path, error }) => {
			console.error(`❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,)
		}
		: undefined
})