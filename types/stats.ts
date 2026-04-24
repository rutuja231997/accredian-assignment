export type stats = {
  title: string;
  description: string;
  stats_data: Stats_Data[];
};

export type Stats_Data = {
  id: number;
  value: number;
  label: string;
};
