interface Props {
  children: React.ReactNode;
  text: string[];
}

const Link = ({ text, children }: Props) => {
    return (
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-lg">{children}</h2>
        <ul className="flex flex-col gap-4">
          {text.map((link, index) => (
            <li
              key={link + index}
              className="hover:cursor-pointer hover:opacity-50 hover:underline"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Link;
