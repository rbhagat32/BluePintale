import Button from "../../Partials/Button.tsx";

const images = ["/images/08.avif", "/images/06.avif", "/images/11.avif"];

export default function Excellence() {
  return (
    <div className="py-10 bg-zinc-100">
      <div className="my-10 mx-2 md:mx-20 lg:mx-28 px-8 py-10 bg-black rounded-4xl text-white">
        <div className="flex justify-between items-end">
          <h1 className="text-4xl font-semibold">
            Showcase
            <br />
            <span className="text-zinc-400">of Excellence</span>
          </h1>
          <Button text="View More" invert />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 space-y-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="h-[440px] md:mx-3 rounded-2xl overflow-hidden hover:brightness-70 transition-all duration-300"
            >
              <img
                key={index}
                src={image}
                alt={`IMG_Excellence_${index}`}
                className="object-cover w-full h-full hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
