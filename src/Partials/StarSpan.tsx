import { IoSparkles } from "react-icons/io5";

export default function StarSpan({
  color,
  textLeft,
  textRight,
}: {
  color: string;
  textLeft: string;
  textRight: string;
}) {
  return (
    <span className={`${color} rounded-full text-white pt-0.5 pb-1 px-2`}>
      {textLeft}
      <IoSparkles className="inline-block mx-2" />
      {textRight}
    </span>
  );
}
