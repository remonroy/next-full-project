import React from "react";
import Link from "next/link";
const index = () => {
  return (
    <>
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <Link href={"/profile"}>
                <a className="text-muted">Subscribe</a>
              </Link>
            </div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-dark" href="#">
                Large
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="text-muted" href="#" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  class="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
              </a>
              <Link href={`/login`}>
                <a className="btn btn-sm btn-outline-secondary m-2">Sign in</a>
              </Link>
              <Link href={`/signup`}>
                <a className="btn btn-sm btn-outline-secondary">Sign up</a>
              </Link>
            </div>
          </div>
        </header>
        <style jsx>{`
          .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
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
