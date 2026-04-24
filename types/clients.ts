export type clientsProps = {
  title: string;
  description: string;
  clients: Clients[];
};

export type Clients = {
  id: number;
  name: string;
  logo: string;
  website: string;
};
