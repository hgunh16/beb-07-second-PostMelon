import React from "react";
import Form from "../components/layout/SignupForm";

const Signup = (props) => {
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [birth, setBirth] = React.useState("");

  const [passwordMessage, setPasswordMessage] = React.useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = React.useState("");
  const [phoneMessage, setPhoneMessage] = React.useState("");

  const [isPassword, setIsPassword] = React.useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
  const [isPhone, setIsPhone] = React.useState(false);
  const [isBirth, setIsBirth] = React.useState(false);

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);

    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("떼잉~ 비밀번호가 똑같지 않아요!");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
      setIsPasswordConfirm(true);
    }
  };

  const onChangePhone = (getNumber) => {
    const currentPhone = getNumber;
    setPhone(currentPhone);
    const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (!phoneRegExp.test(currentPhone)) {
      setPhoneMessage("올바른 형식이 아닙니다!");
      setIsPhone(false);
    } else {
      setPhoneMessage("사용 가능한 번호입니다:-)");
      setIsPhone(true);
    }
  };

  const addHyphen = (e) => {
    const currentNumber = e.target.value;
    setPhone(currentNumber);
    if (currentNumber.length === 3 || currentNumber.length === 8) {
      setPhone(currentNumber + "-");
      onChangePhone(currentNumber + "-");
    } else {
      onChangePhone(currentNumber);
    }
  };

  const onChangeBirth = (e) => {
    const currentBirth = e.target.value;
    setBirth(currentBirth);
    setIsBirth(true);
  };

  return (
    //style={{ width: "500px", margin: "0 auto"
    <div className="bg-yellow">
      <h3>Sign Up</h3>
      <div className="">
        <Form
          htmlFor="id"
          id="id"
          name="id"
          text="ID"
          sucessMsg="사용가능한 아이디 입니다."
          errorMsg="4-12사이 대소문자 또는 숫자만 입력해 주세요!"
          reg="0"
        />

        <Form
          htmlFor="name"
          id="name"
          name="name"
          text="Nick Name"
          sucessMsg="사용가능한 닉네임 입니다."
          errorMsg="닉네임은 2글자 이상 5글자 이하로 입력해주세요!"
        />

        {/* <Form
          htmlFor="password"
          id="password"
          name="password"
          text="Password"
          sucessMsg="안전한 비밀번호 입니다."
          errorMsg="숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
          reg="1"
        />
        <Form
          htmlFor="passwordConfirm"
          id="passwordConfirm"
          name="passwordConfirm"
          text="passwordConfirm"
          sucessMsg="떼잉~ 비밀번호가 똑같지 않아요!"
          errorMsg="똑같은 비밀번호를 입력했습니다."
        />  */}
        <div className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-3">
          <label htmlFor="password">Password</label> <br />
          <input
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
          <p className="message">{passwordMessage}</p>
        </div>
        <div className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-3">
          <label htmlFor="passwordConfirm">Password Confirm</label> <br />
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
          />
          <p className="message">{passwordConfirmMessage}</p>
        </div>
        <Form
          htmlFor="email"
          id="email"
          name="email"
          text="Email"
          sucessMsg="사용 가능한 이메일 입니다."
          errorMsg="이메일의 형식이 올바르지 않습니다!"
          reg="2"
        />

        <div className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-3">
          <label htmlFor="phone">Phone</label> <br />
          <input id="phone" name="phone" value={phone} onChange={addHyphen} />
          <p className="message">{phoneMessage}</p>
        </div>

        <div className="bg-black">
          <label htmlFor="birth">Birth</label> <br />
          <input
            type="date"
            id="birth"
            name="birth"
            value={birth}
            onChange={onChangeBirth}
          />
        </div>
        <br />
        <br />

        <button
          className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-3"
          type="submit"
          disabled={
            isPassword === true &&
            isPasswordConfirm === true &&
            isPhone === true &&
            isBirth === true
              ? false
              : true
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Signup;