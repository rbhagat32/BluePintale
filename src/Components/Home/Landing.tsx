import StarSpan from "../../Partials/StarSpan";

export default function Landing() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-20 md:py-24 lg:py-28 text-3xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap">
      <h1>
        We craft{" "}
        <StarSpan color="bg-[#6b53ed]" textLeft="nscious" textRight="co" />
      </h1>
      <h1>
        brands <span className="text-zinc-500">and</span> captivating
      </h1>
      <h1>
        <StarSpan color="bg-[#f7c23e]" textLeft="d" textRight="brande" />{" "}
        experiences
      </h1>
    </div>
  );
}
