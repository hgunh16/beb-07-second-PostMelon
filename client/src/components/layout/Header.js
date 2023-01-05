import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header sticky top-0 z-50 bg-orange">
      <div className="header-inner relative mx-auto h-20 w-5/6 bg-green">
        <Link to="/">
          <div className="logo absolute inset-y-0 my-auto h-[57px] bg-yellow text-[40px] text-white">
            <img className='h-20 rounded-full' src='https://cdnimg.melon.co.kr/svc/images/promotion/202206120039477755.png' alt='' />
          </div>
        </Link>

        <ul className="category absolute inset-y-0 right-0 my-auto flex h-[60px] items-center bg-purple text-xl text-white">
          <Link to="/market" className="category-item">
            Market
          </Link>
          <Link to="/mypage" className="category-item">
            Mypage
          </Link>
          <Link to="/post" className="category-item">
            PostDetail
          </Link>
          <Link to="/login" className="category-item">
            Login
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
