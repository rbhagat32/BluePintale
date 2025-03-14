export default function Button({
  text = "View Projects",
  invert,
}: {
  text?: string;
  invert?: boolean;
}) {
  return (
    <button
      className={`${
        invert && "invert"
      } px-4 py-2 rounded-full text-xs font-semibold border-2 text-black border-black hover:bg-black hover:text-white transition-all duration-300`}
    >
      {text}
    </button>
  );
}
