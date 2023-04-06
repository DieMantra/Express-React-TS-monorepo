import { inferAsyncReturnType } from '@trpc/server';
import {
	CreateExpressContextOptions,
	createExpressMiddleware,
} from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';

import { appRouter } from './router/appRouter';

// created for each request

interface CreateContextReturnType {
	req: express.Request;
	res: express.Response;
}

const createContext = ({
	req,
	res,
}: CreateExpressContextOptions): CreateContextReturnType => ({
	req,
	res,
}); // no context
export type Context = inferAsyncReturnType<typeof createContext>;

const app = express();
app.use(cors());

app.use(
	'/api',
	createExpressMiddleware({
		router: appRouter,
		createContext,
	})
);

export default app;

// app.listen(3000, () => {
// 	console.log('trpc listening on port 3000');
// });
