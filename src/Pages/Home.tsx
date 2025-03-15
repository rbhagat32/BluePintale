import Companies from "../Components/Home/Companies";
import Excellence from "../Components/Home/Excellence";
import Headings from "../Components/Home/Headings";
import Landing from "../Components/Home/Landing";
import Showcase from "../Components/Home/Showcase";
import SwiperJs from "../Components/Home/SwiperJs";
import TopSlider from "../Components/Home/TopSlider";
import Video from "../Components/Home/Video";

export default function Home() {
  return (
    <div>
      <Landing />
      <TopSlider />
      <Companies />
      <Showcase />
      <Video />
      <Text />
      <Excellence />
      <SwiperJs />
    </div>
  );
}

const Text = () => {
  return (
    <div className="my-20 md:mx-6 lg:mx-12">
      <Headings
        titleBold="Delivering brand love,"
        titleLight="one project at a time."
        description="Agile. Adaptable. Human. We love to work closely with you for results that surpass your vision."
      />
    </div>
  );
};
