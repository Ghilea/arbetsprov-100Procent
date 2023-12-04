import InputField from "@/components/fields/inputfield";

const ContactForm = () => {
  return (
    <form className="flex flex-col min-w-[500px] text-white gap-3">
      <InputField
        label="Full name"
        name="FullName"
        placeholder="Ex: Dennis Karlsson"
      />
      <InputField
        label="Email"
        name="Email"
        placeholder="Ex: dennis@karlsson.com"
      />
      <InputField
        label="Phone number"
        name="PhoneNumber"
        placeholder="Ex: xxx-xxx-xxxx"
      />

      <InputField
        label="Subject"
        name="subject"
        placeholder="Ex: My product is broken"
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        className="placeholder:text-gray-700/60 bg-white rounded-md p-2 shadow-xl text-black"
        placeholder="Ex: message here"
      ></textarea>

      <div className="w-full flex items-center justify-center my-5">
        <input
          className="text-center hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8 w-32 hover:cursor-pointer"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  );
};

export default ContactForm;
