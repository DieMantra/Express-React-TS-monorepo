import { initTRPC } from '@trpc/server';

import { Context } from '../api/main';

const t = initTRPC.context<Context>().create();

export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
