import homeImg from "static/image/home_img.jpg";

const Home = () => {
  return (
    <div className="home pt-20">
      <img className="home-inner mx-auto w-1/2" src={homeImg} alt="none"></img>
    </div>
  );
};

export default Home;
