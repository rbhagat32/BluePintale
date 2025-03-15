import Button from "../Partials/Button";

export default function Contact() {
  const phoneNumber = "+91 98850 28382";

  const formData = [
    {
      label: "First Name *",
      type: "text",
      required: true,
    },
    {
      label: "Email *",
      type: "email",
      required: true,
    },
    {
      label: "Location",
      type: "text",
      required: false,
    },
    {
      label: "Link/Company Profile",
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
        <form className="w-full flex flex-col items-center justify-center gap-5 py-5">
          {formData.map((data, index) => (
            <label key={index} className="flex flex-col">
              {data.label}
              <input
                type={data.type}
                required={data.required}
                className="mt-2 bg-white rounded-full border-2 outline-none border-black px-5 py-2 w-[80vw] md:w-[60vw] lg:w-[50vw]"
              />
            </label>
          ))}

          <label className="flex flex-col">
            Requirement *
            <select
              required
              className="mt-2 bg-white rounded-full border-2 outline-none border-black px-5 py-2 w-[80vw] md:w-[60vw] lg:w-[50vw]"
            >
              {dropdownData.map((data, index) => (
                <option key={index} value={data}>
                  {data}
                </option>
              ))}
            </select>
          </label>

          <button className="mt-10" type="submit">
            <Button text="Submit" />
          </button>
        </form>
      </div>
    </div>
  );
}
