import { useQuery } from '@tanstack/react-query';

const getTasks = async (status: string) => {
  const response = await fetch(`/api/tasks?status=${status}`);
  return response.json() as Promise<[]>;
};

export const useTasksQuery = (status: string) => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: () => getTasks(status),
    enabled: true,
    staleTime: Infinity,
  });
};
