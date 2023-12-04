import Hero from "./components/hero";
import SplitSection from "./components/splitSection";
import supportImage from "@assets/images/support.jpg";
import productsImage from "@assets/images/products.jpg";
import confidenceImage from "@assets/images/confidence.jpg";
import AloneSection from "./components/aloneSection";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero
        subText="Ship products 5-10x faster with our new delivery drone
            service."
      >
        Order today to recive exclusive production-ready prototype phone cases
        for free!
      </Hero>
      <SplitSection image={supportImage} title="Userfriendly support">
        We offer 24/7 support to help you with any questions you might have. We
        are here to help you!
      </SplitSection>
      <SplitSection
        reverse={true}
        image={productsImage}
        title="Quality expectations"
      >
        Our products are made with the highest quality materials and are made to
        last.
      </SplitSection>
      <SplitSection
        image={confidenceImage}
        title="What are you waiting for?"
      >
        Order our products today and we promise you satisfactions! If you still
        are not satisfied with our products after 30 days, we will give you a
        full refund. No questions asked! We are that confident in our products.
      </SplitSection>
      <AloneSection title="Contact us">
        If you have any questions, feel free to contact us at <a href="mailto:my@wish.com" className="text-blue-400">my@wish.com</a>
      </AloneSection>
    </div>
  );
};

export default Home;
