import React from "react";

const index = () => {
  return (
    <>
      <div className="form-signin">
        <form>
          <img
            className="mb-4"
            src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Sign In</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign In
          </button>
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
