import { Carousel } from "@material-tailwind/react";

interface CarouselTransitionProps {
  imageData: string[];
}

const CarouselTransition = ({ imageData }: CarouselTransitionProps) => {
  return (
    <Carousel transition={{ duration: 1 }} className="rounded-xl h-60">
      {imageData.map((link: string, index: number) => {
        return (
          <img
            key={link + index}
            src={link}
            alt={"image" + index}
            className="h-full w-full object-cover"
          />
        );
      })}
    </Carousel>
  );
};

export default CarouselTransition;
