import Footer from "@/features/Footer";
import Header from "@/features/header";
import Routes from "@routes";

const App = () => {
  return (
    <div className="flex flex-col items-center h-full min-h-screen bg-center bg-no-repeat bg-cover bg-cover-image">
      <Header />

      <div className="w-10/12 flex flex-row flex-wrap gap-5 justify-center mb-24">
        <Routes />
      </div>

      <Footer />
    </div>
  );
};

export default App;
