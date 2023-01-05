import './Footer.css';

const Footer = () => {
  return (
    <div className="h-25 grid w-screen place-items-center bg-gray text-center text-black">
      <div className="container px-6 pt-6">
        <div className="mb-2.5 font-bold uppercase text-black">Marketplace</div>

        <ul className="mb-0 list-none">
          <li>
            <a className="text-black">All NFTs</a>
          </li>
          <li>
            <a className="text-black">Music</a>
          </li>
          <li>
            <a className="text-black">Photo</a>
          </li>
        </ul>

        <div className="mb-2.5 font-bold uppercase text-black">My Account</div>

        <ul className="mb-0 list-none">
          <li>
            <a className="text-black">Profile</a>
          </li>
          <li>
            <a className="text-black">Favorites</a>
          </li>

          <li>
            <a className="text-black">My Collections</a>
          </li>
          <li>
            <a className="text-black">Create</a>
          </li>
          <li>
            <a className="text-black">Settings</a>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <div className="mb-2.5 font-bold uppercase text-black">Company</div>

        <ul className="mb-0 list-none">
          <li>
            <a className="text-black">About</a>
          </li>
          <li>
            <a className="text-black">Careers</a>
          </li>
          <li>
            <a className="text-black">Ventures</a>
          </li>
          <li>
            <a className="text-black">Grants</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
