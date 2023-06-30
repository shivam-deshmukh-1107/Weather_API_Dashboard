import React from "react";

function Error404() {
  return (
    <section className="error-content" data-error-content>
      <h2 className="heading">404</h2>

      <p className="body-1">Page not Found!</p>

      <a href="#" className="btn-primary">
        <span className="span">Go Home</span>
      </a>
    </section>
  );
}

export default Error404;
