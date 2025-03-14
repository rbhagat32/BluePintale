export default function Video() {
  return (
    <div className="max-h-[70vh] overflow-hidden object-cover">
      <video src="/video.mp4" autoPlay loop muted></video>
    </div>
  );
}
