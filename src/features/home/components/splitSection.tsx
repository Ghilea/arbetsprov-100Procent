interface Props {
  title: string;
  children: React.ReactNode;
  image?: string;
  reverse?: boolean;
}

const SplitSection = ({ children, title, image, reverse }: Props) => {
  return (
    <div
      className={`flex items-center justify-center ${
        reverse ? "flex-row-reverse" : "flex-row"
      } portrait:flex-col`}
    >
      <div className="portrait:w-full w-1/2 h-full">
        <img src={image} alt="" />
      </div>
      <div className="portrait:w-full w-1/2 flex flex-col my-16 gap-5 px-5 h-full portrait:min-h-[400px] justify-center items-center">
        <h1 className="text-4xl font-bold text-white uppercase">{title}</h1>
        <p className="text-xl text-white max-w-[400px]">{children}</p>
      </div>
    </div>
  );
};

export default SplitSection;