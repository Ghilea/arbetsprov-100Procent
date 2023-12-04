import ContactForm from "./contactForm";

interface Props {
  title: string;
  children: React.ReactNode;
}

const AloneSection = ({ children, title }: Props) => {
  return (
    <div className={`flex flex-col items-center justify-center my-32`}>
      <div className="w-full flex flex-col gap-5 px-5 h-full min-h-[400px] justify-center items-center">
        <h1 className="text-4xl font-bold text-white uppercase">{title}</h1>
        <p className="text-xl text-white max-w-[600px] mb-10">{children}</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default AloneSection;
