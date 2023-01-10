import "./Footer.css";

// const Footer = () => {
//   return (
//     <div className="h-25 grid w-screen place-items-center bg-gray text-center text-black">
//       <div className="container px-6 pt-6">
//         <div className="mb-2.5 font-bold uppercase text-black">Marketplace</div>

//         <ul className="mb-0 list-none">
//           <li>
//             <a className="text-black">All NFTs</a>
//           </li>
//           <li>
//             <a className="text-black">Music</a>
//           </li>
//           <li>
//             <a className="text-black">Photo</a>
//           </li>
//         </ul>

//         <div className="mb-2.5 font-bold uppercase text-black">My Account</div>

//         <ul className="mb-0 list-none">
//           <li>
//             <a className="text-black">Profile</a>
//           </li>
//           <li>
//             <a className="text-black">Favorites</a>
//           </li>

//           <li>
//             <a className="text-black">My Collections</a>
//           </li>
//           <li>
//             <a className="text-black">Create</a>
//           </li>
//           <li>
//             <a className="text-black">Settings</a>
//           </li>
//         </ul>
//       </div>

//       <div className="mb-6">
//         <div className="mb-2.5 font-bold uppercase text-black">Company</div>

//         <ul className="mb-0 list-none">
//           <li>
//             <a className="text-black">About</a>
//           </li>
//           <li>
//             <a className="text-black">Careers</a>
//           </li>
//           <li>
//             <a className="text-black">Ventures</a>
//           </li>
//           <li>
//             <a className="text-black">Grants</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

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

            <ul className="text-xl child:py-3">
              <li>all NFT</li>
              <li>Music</li>
              <li>Photo</li>
            </ul>
          </div>
          <div className="footer-item2 flex flex-col items-center px-16">
            <div className="mb-10 text-4xl">My Account</div>

            <ul className="text-xl child:py-3">
              <li>Profile</li>
              <li>Favorites</li>
              <li>My Collections</li>
              <li>Create</li>
              <li>Settings</li>
            </ul>
          </div>
          <div className="footer-item3 flex flex-col items-center px-16">
            <div className="mb-10 text-4xl">Company</div>

            <ul className="text-xl child:py-3">
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
