import * as TRPCExpress from "@trpc/server/adapters/express";
import express from "express";
import cors from "cors";

import { router } from "./app";

const app = express();

// created for each request
const createContext = ({
  req,
  res,
}: TRPCExpress.CreateExpressContextOptions) => ({}); // no context

app.use(cors());
app.use(
  "/trpc",
  TRPCExpress.createExpressMiddleware({ router, createContext })
);

app.listen(3001);
