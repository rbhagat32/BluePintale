import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import Routing from "./Utils/Routing";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <Toaster richColors position="top-center" duration={1500} />
      <Navbar />
      <div className="pt-28">
        <Routing />
      </div>
      <Footer />
    </>
  );
}
