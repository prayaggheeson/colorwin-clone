import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="mx-6">
     
      <h1 className="my-6 text-3xl text-center font-bold ">Welcome !!</h1>
      <div className="flex items-center justify-center p-4">
        <ProductCard/>
      </div>
    </div>
  );
};

export default Home;
