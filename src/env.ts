import { z } from "zod";

const envSchema = z.object({
  FDC_API_KEY: z.string(),
});

const env = envSchema.parse(process.env);
export default env;
