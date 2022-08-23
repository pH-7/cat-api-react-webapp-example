import Cats from "./Cats";
import Header from "./Header";

const Home = ({ greeting }) => {
  return (
    <div className="mt-4">
      <Header text={greeting} />
      <Cats />
    </div>
  );
};

export default Home;
