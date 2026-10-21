import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function BrandLogo() {
  return (
    <span className="monivo-brand">
      <Image src={siteConfig.brand.logo} alt="" width={36} height={36} sizes="36px" className="monivo-brand__mark" priority />
      <span className="monivo-brand__name">{siteConfig.name}</span>
    </span>
  );
}
