export type clientsProps = {
  title: string;
  description: string;
  clients: Clients[];
};

export type Clients = {
  id: string;
  name: string;
  logo: string;
  website: string;
};
