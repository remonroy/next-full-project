import { useState } from "react";
import { postRequest } from "../../client/request";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = user;

  //Error message handling
  const [eMessage, setEmessage] = useState({});

  //onchange data handling
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //onsubmit data handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, email, password, confirmPassword };
    const result = await postRequest(payload);
    if (Object.keys(result) !== 0) {
      setEmessage(result);
    }
    if (result.errorType === false) {
      setUser({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setTimeout(() => {
        setEmessage(true);
        router.replace("/login");
      }, 2000);
    }
  };
  return (
    <>
      <div className="form-signin">
        <form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center" }} className="h3 mb-3 fw-normal">
            Please sign up
          </h1>
          <p
            style={{
              color: eMessage.errorType === false ? "green" : "red",
              textAlign: "center",
            }}
          >
            {eMessage.errorType
              ? eMessage.errorMessage
              : eMessage.errorType === false
              ? "Thnx for submitting"
              : ""}
          </p>
          <div className="form-floating">
            <label htmlFor="floatingInput">Name</label>
            <input
              type="text"
              value={name}
              name="name"
              className="form-control"
              id="floatingInput"
              placeholder="Enter Your Name."
              onChange={handleChange}
            />
          </div>
          <div className="form-floating">
            <label htmlFor="floatingInput">Email address</label>
            <input
              type="text"
              value={email}
              name="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={handleChange}
            />
          </div>
          <div className="form-floating">
            <label htmlFor="floatingPassword">Password</label>
            <input
              type="password"
              value={password}
              name="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="form-floating">
            <label htmlFor="floatingPassword">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              name="confirmPassword"
              className="form-control cPassword"
              id="floatingPassword"
              placeholder="ConfirmPassword"
              onChange={handleChange}
            />
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <input
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            value="submit"
          />

          <p className="mt-5 mb-3 text-muted">
            &copy;{new Date().getFullYear()}
          </p>
        </form>
        <style jsx>{`
          .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
          }
          .cPassword {
            margin-bottom: 1rem;
          }
          @media (min-width: 768px) {
            .bd-placeholder-img-lg {
              font-size: 3.5rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default index;
