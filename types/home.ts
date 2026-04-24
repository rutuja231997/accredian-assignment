export type Hero = {
  title: string;
  description: string;
  features: Feature[];
  cta: {
    text: string;
    link: string;
  };
  image: string;
};

export type Feature = {
  id: string;
  text: string;
};
