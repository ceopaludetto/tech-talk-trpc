import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "../../server/src/app";

export const { Provider, createClient, useQuery, useMutation } =
  createReactQueryHooks<AppRouter>();
