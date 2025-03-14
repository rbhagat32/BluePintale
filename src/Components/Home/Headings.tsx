export default function Headings({
  titleBold,
  titleLight,
  description,
}: {
  titleBold: string;
  titleLight: string;
  description: string;
}) {
  return (
    <div className="ml-2 flex justify-between items-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl">
        <span className="font-bold">{titleBold}</span>
        <br />
        <span className="font-light">{titleLight}</span>
      </h1>

      <h2 className="max-w-[25ch] md:max-w-[35ch] lg:max-w-[45ch] text-xs md:text-sm lg:text-md font-semibold">
        {description}
      </h2>
    </div>
  );
}
