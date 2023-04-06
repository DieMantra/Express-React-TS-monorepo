import { inferAsyncReturnType } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';

import { appRouter } from '../router/index';

// created for each request

interface CreateContextReturnType {
	req: express.Request;
	res: express.Response;
}

const createContext = ({
	req,
	res,
}: trpcExpress.CreateExpressContextOptions): CreateContextReturnType => ({
	req,
	res,
}); // no context
export type Context = inferAsyncReturnType<typeof createContext>;

const app = express();
app.use(cors());

app.use(
	'/api',
	trpcExpress.createExpressMiddleware({
		router: appRouter,
		createContext,
	})
);

app.listen(3000, () => {
	console.log('trpc listening on port 3000');
});
