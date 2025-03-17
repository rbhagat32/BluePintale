import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function Contact() {
  type FormDataType = {
    name: string;
    email: string;
    phone: string;
    link: string;
    requirement: string;
    description: string;
  };

  const formDataFields = [
    { label: "Name *", name: "name", type: "text", required: true },
    { label: "Email *", name: "email", type: "email", required: true },
    { label: "Phone Number *", name: "phone", type: "tel", required: true },
    {
      label: "Link/Company Profile",
      name: "link",
      type: "text",
      required: false,
    },
  ];

  const dropdownData = [
    "",
    "Social Media Strategy",
    "Performance Marketing",
    "Branding and Packaging",
    "Content Production",
    "PR and Community Engagement",
    "Bussiness Consultancy",
    "End to End Souring and Printing",
    "Web Development",
  ];

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    link: "",
    requirement: "",
    description: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^[0-9]*$/.test(value)) return;
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
          phone: "",
          link: "",
          requirement: "",
          description: "",
        });
        setLoading(false);
        toast.success("Form submitted successfully!");
      })
      .catch((error) => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          link: "",
          requirement: "",
          description: "",
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

      <p className="font-semibold">
        You can also Whatsapp us on +91 98850 28382
      </p>

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
                value={formData[data.name as keyof FormDataType]}
                onChange={handleChange}
                className="mt-2 bg-white rounded-full border-2 outline-none border-black px-5 py-2 w-[80vw] md:w-[60vw] lg:w-[50vw]"
                inputMode={data.name === "phone" ? "numeric" : undefined}
                pattern={data.name === "phone" ? "[0-9]{10}" : undefined}
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

          <label className="flex flex-col">
            Description
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-2 bg-white rounded-lg border-2 outline-none border-black px-5 py-2 w-[80vw] md:w-[60vw] lg:w-[50vw] h-24"
            />
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
