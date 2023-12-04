import HeroImage from "@assets/images/phone.png";
import { DefaultButton } from "@components/buttons";

interface Props {
  children: React.ReactNode;
  subText:  string;
}

const Hero = ({ children, subText }: Props) => {
  return (
    <div
      className="w-full sm:w-screen h-screen portrait:h-full text-white"
      style={{
        background:
          "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)",
      }}
    >
      <div className="container mx-auto flex px-5 py-24 items-center justify-evenly flex-wrap h-full">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center"
          alt="hero"
          src={HeroImage}
        />
        <div className="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">{children}</h1>
          <p className="text-2xl mb-8">
            {subText}
          </p>
          <div className="flex justify-center gap-5">
            <DefaultButton to="products">View our products</DefaultButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
