import Grid from "../Shared/Grid";
import Headings from "./Headings";

const images = [
  { src: "/images/01.avif", title: "Branding" },
  { src: "/images/09.avif", title: "Social Media" },
  { src: "/images/14.avif", title: "Packaging" },
  { src: "/images/10.avif", title: "Digital Marketing" },
  { src: "/images/17.avif", title: "Video Content" },
  { src: "/images/13.avif", title: "Visual Content" },
];

export default function Showcase() {
  return (
    <div className="md:mx-6 lg:mx-12 py-20">
      <Headings
        titleBold="Showcase"
        titleLight="of Excellence"
        description="Explore our portfolio of innovative creative solutions delivering
        exceptional results tailor-made for your brand."
      />

      <Grid images={images} />
    </div>
  );
}
