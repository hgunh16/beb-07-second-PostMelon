import { Link } from "react-router-dom";


const Market = () => {
  return <div className="market">market
            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">
              <Link to="/nftmint">Create NFT</Link>
            </button>
        </div>;
};

export default Market;
