import hero from "@/data/hero.json";
import stats from "@/data/stats.json";
import features from "@/data/features.json";
import testimonials from "@/data/testimonials.json";
import clients from "@/data/client.json";
import accredianData from "@/data/accredian.json";
import cat from "@/data/cat.json";
import works from "@/data/works.json";
import footer from "@/data/footer.json";

import type { accredians } from "@/types/accredian";

export function getHomeData() {
  return {
    hero,
    stats,
    clients,
    accredian: accredianData as accredians,
    features,
    testimonials,
    cat,
    works,
    footer,
  };
}
