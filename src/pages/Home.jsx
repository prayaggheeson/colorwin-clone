import CountdownTimer from "../components/CountdownTimer";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="mx-6">
      <CountdownTimer/>
      <h1 className="my-6 text-3xl text-center font-bold ">Welcome !!</h1>
      <ProductCard />
    </div>
  );
};

export default Home;
