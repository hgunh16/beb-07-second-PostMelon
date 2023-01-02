import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return <div className="header">
                  <Link to="/">POST MELON&nbsp;</Link>
                  <Link to="/login">&nbsp;Login&nbsp;</Link>
                  <Link to="/market">&nbsp;Market&nbsp;</Link>
                  <Link to="/mypage">&nbsp;Mypage&nbsp;</Link>
                  <Link to="/signup">&nbsp;Signup&nbsp;</Link>
                  <Link to="/post">&nbsp;Post&nbsp;</Link>
        </div>;
};

export default Header;
