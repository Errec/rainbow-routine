import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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

const ROUTINES_QUERY_KEY = ['routines'];

async function fetchRoutines(): Promise<Routine[]> {
  const response = await fetch('https://example.com/api/routines');
  const data = await response.json();
  return routinesResponseSchema.parse(data);
}

async function createRoutine(
  newRoutine: Omit<Routine, 'id'>
): Promise<Routine> {
  const response = await fetch('https://example.com/api/routines', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newRoutine),
  });
  const data = await response.json();
  return routineSchema.parse(data);
}

export function useRoutines() {
  return useQuery<Routine[]>({
    queryKey: ROUTINES_QUERY_KEY,
    queryFn: fetchRoutines,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}

export function useCreateRoutine() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createRoutine,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ROUTINES_QUERY_KEY });
    },
  });
}

export { ROUTINES_QUERY_KEY };
