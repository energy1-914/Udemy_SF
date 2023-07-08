import auth, { signInWithEmailAndPassword } from "firebaseConfig";
import { useState, useEffect } from "react";
import styles from "styles/LoginPage.module.css";
import DetailPage from "pages/DetailPage";

const LoginPage = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [loginState, setLoginState] = useState(false);

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = async event => {
    event.preventDefault();
    
    await signInWithEmailAndPassword(auth, values.email, values.password)
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setLoginState(true);
      } else {
        setLoginState(false);
      }
    });
  }, []);

  return (
    <>
      {loginState ? (
        <DetailPage />
      ) : (
        <div className={styles.loginpage}>
          <h3>Google Login</h3>
          <form>
            <input
              type="email"
              name="email"
              placeholder="이메일을 입력하세요"
              value={values.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={values.password}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>제출하기</button>
          </form>
        </div>
      )}
    </>
  );
};
export default LoginPage;
