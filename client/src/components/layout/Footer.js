import './Footer.css';
const Footer = () => {
  return (
    <div className="footer mt-20 h-[540px] bg-gray-light pt-20">
      <div className="footer-inner mx-auto flex w-3/4 justify-between whitespace-nowrap pr-16">
        <div className="footer-main flex flex-col">
          <div className="mb-10 text-5xl">
            Post
            <br /> Melon
          </div>
          <div className="text-2xl">
            We love music.
            <br />
            Share music and get tokens.
            <br />
            Buy and sell various digital NFTs.
            <br />
            Your eternal music friend.
          </div>
        </div>
        <div className="footer-category flex pt-6">
          <div className="footer-item1 flex flex-col items-center px-16">
            <div className="mb-10 text-4xl">Marketplace</div>
            <ul className="child:py-3 text-xl">
              <li>all NFT</li>
              <li>Music</li>
              <li>Photo</li>
            </ul>
          </div>
          <div className="footer-item2 flex flex-col items-center px-16">
            <div className="mb-10 text-4xl">My Account</div>
            <ul className="child:py-3 text-xl">
              <li>Profile</li>
              <li>Favorites</li>
              <li>My Collections</li>
              <li>Create</li>
              <li>Settings</li>
            </ul>
          </div>
          <div className="footer-item3 flex flex-col items-center px-16">
            <div className="mb-10 text-4xl">Company</div>
            <ul className="child:py-3 text-xl">
              <li>About</li>
              <li>Careers</li>
              <li>Ventures</li>
              <li>Grants</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
