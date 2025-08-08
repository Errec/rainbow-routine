import { z } from 'zod';

export const routineSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string().optional(),
  image: z.string().optional(),
  text: z.string().optional(),
});

export const routinesResponseSchema = z.array(routineSchema);

export type Routine = z.infer<typeof routineSchema>;

export async function fetchRoutines(): Promise<Routine[]> {
  const response = await fetch('https://example.com/api/routines');
  const data = await response.json();
  return routinesResponseSchema.parse(data);
}
