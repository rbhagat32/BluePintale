import Button from "../../Partials/Button";

export default function Grid({
  images,
}: {
  images: { src: string; title: string }[];
}) {
  return (
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
  );
}
