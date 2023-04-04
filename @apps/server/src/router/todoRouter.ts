import { z } from 'zod';

// import { prisma } from '../lib/prismaClient';
import { publicProcedure, router } from '../lib/trpc';

export const todoRouter = router({
	getUser: publicProcedure.input(z.string()).query((req) => {
		req.input; // string
		return { id: req.input, name: 'Bilbo' };
	}),
});
