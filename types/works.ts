export type WorkItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
  step: number;
};

export type WorksResponse = {
  title: string;
  description: string;
  works: WorkItem[];
};
