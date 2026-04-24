// import hero from "@/data/hero.json";
// import stats from "@/data/stats.json";
// import features from "@/data/features.json";
// import testimonials from "@/data/testimonials.json";
// import clients from "@/data/client.json";
// import accredian from "@/data/accredian.json";
// import cat from "@/data/cat.json";
// import works from "@/data/works.json";
// import footer from "@/data/footer.json";

import { getHomeData } from "@/lib/homeData";

export async function GET() {
  return Response.json(getHomeData());
}
