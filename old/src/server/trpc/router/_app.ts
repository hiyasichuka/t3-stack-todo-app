import { router } from "../trpc";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
