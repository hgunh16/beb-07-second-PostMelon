import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";




const Login = () => {
  //서버와 연결전 테스트용 더미데이터
  const realId = "postmelon@naver.com";
  const realPw = "12345678";  

  const navigate = useNavigate();

  const goToHome = () => {
      navigate("/")
  };

  let [id, setId] = useState('');
  let [pw, setPw] = useState('');
  const [button, setButton] = useState(true);
  //유효성 검사를 하여 통과할 경우 로그인 버튼 활성화
  /**아이디에 '@'가 포함되어있고 비밀번호가 5자리 이상일 떄 로그인 버튼 활성화 */
  function changeButton() {
    id.includes('@') && pw.length >= 5 ? setButton(false) : setButton(true);
  }


  return (
          <div className="login">
            <input
              placeholder="사용자 이름 또는 이메일"
              id = "id"
              className="h-10 px-6 font-semibold rounded-md bg-black text-white"
              onChange={e => {
                setId(e.target.value);
              }}
              onKeyUp={changeButton}
              />
            <input
              type="password"
              placeholder="비밀번호"
              id="password"
              className="h-10 px-6 font-semibold rounded-md bg-black text-white"
              onChange={e => {
                setPw(e.target.value);
              }}
              onKeyUp={changeButton}
              />
            <button
              type="button"
              className="h-10 px-6 font-semibold rounded-md bg-black text-white"
              disabled={button}
              onClick={e => {
                if(realId === id) {
                  if(realPw === pw) {
                    e.stopPropagation();
                    goToHome();
                  }
                }else {
                  alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
                }
              }}
              >
              Login
            </button>
            <Link to="/signup">회원가입</Link>
          </div>
)};

export default Login;
