import InfiniteSlider from "../../Partials/InfiniteSlider";

const images = [
  "/images/06.avif",
  "/images/16.avif",
  "/images/01.avif",
  "/images/08.avif",
  "/images/12.avif",
  "/images/14.avif",
  "/images/04.avif",
  "/images/09.avif",
  "/images/05.avif",
  "/images/02.avif",
  "/images/17.avif",
  "/images/15.avif",
  "/images/11.avif",
  "/images/13.avif",
  "/images/10.avif",
  "/images/07.avif",
  "/images/03.avif",
];

export default function TopSlider() {
  return (
    <div>
      <InfiniteSlider images={images} />
    </div>
  );
}
