import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function Contact() {
  const phoneNumber = "+91 98850 28382";

  type FormDataType = {
    name: string;
    email: string;
    location: string;
    link: string;
    requirement: string;
  };

  const formDataFields = [
    { label: "Name *", name: "name", type: "text", required: true },
    { label: "Email *", name: "email", type: "email", required: true },
    { label: "Location", name: "location", type: "text", required: false },
    {
      label: "Link/Company Profile",
      name: "link",
      type: "text",
      required: false,
    },
  ];

  const dropdownData = [
    "",
    "Social Media Marketing",
    "Photography & Videography",
    "Packaging Design",
    "Logo Design & Branding",
    "Graphic Design",
  ];

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    location: "",
    link: "",
    requirement: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form Data Submitted:", formData);

    axios
      .post("/api", JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setFormData({
          name: "",
          email: "",
          location: "",
          link: "",
          requirement: "",
        });
        setLoading(false);
        toast.success("Form submitted successfully!");
      })
      .catch((error) => {
        setFormData({
          name: "",
          email: "",
          location: "",
          link: "",
          requirement: "",
        });
        setLoading(false);
        toast.error("Some error occurred while submitting the form!");
        console.log(error);
      });
  };

  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
        get in touch, <span className="text-zinc-400">we would</span>
        <br />
        <span className="text-zinc-400">love to hear from you!</span>
      </h1>

      <h2 className="text-center text-lg md:text-xl text-zinc-400">
        Please fill out the form below
        <br />
        we will connect with you shortly
      </h2>

      <p className="font-semibold">You can also Whatsapp us on {phoneNumber}</p>

      <div className="w-full bg-[#efdace] py-10">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center justify-center gap-5 py-5"
        >
          {formDataFields.map((data, index) => (
            <label key={index} className="flex flex-col">
              {data.label}
              <input
                name={data.name}
                type={data.type}
                required={data.required}
                value={formData[data.name as keyof FormDataType]} // Type-safe access
                onChange={handleChange}
                className="mt-2 bg-white rounded-full border-2 outline-none border-black px-5 py-2 w-[80vw] md:w-[60vw] lg:w-[50vw]"
              />
            </label>
          ))}

          <label className="flex flex-col">
            Requirement *
            <select
              required
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              className="mt-2 bg-white rounded-full border-2 outline-none border-black px-5 py-2 w-[80vw] md:w-[60vw] lg:w-[50vw]"
            >
              {dropdownData.map((data, index) => (
                <option key={index} value={data}>
                  {data}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="mt-10 px-4 py-2 rounded-full text-xs font-semibold border-2 text-black border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
