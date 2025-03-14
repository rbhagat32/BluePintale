import Button from "../../Partials/Button";
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

      <div className="mt-10 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-6 lg:gap-x-8">
        {images.map((image, index) => (
          <div key={index}>
            <div className="rounded-4xl overflow-hidden hover:brightness-70 transition-all duration-300">
              <img
                className="h-full w-full object-cover hover:scale-105 transition-all duration-300"
                src={image.src}
                alt={`IMG_Showcase_${index}`}
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <h1 className="font-semibold text-xl">{image.title}</h1>
              <Button />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
