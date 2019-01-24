import React from "react";
import "./wideCta.css";

const WideCta = props => {
  return (
    <section className="quote-bar">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <a href="{props.button.link}" className="ghost-btn">
              <svg>
                <defs>
                  <linearGradient>
                    <stop offset="0%" stop-color="#FF8282" />
                    <stop offset="100%" stop-color="#E178ED" />
                  </linearGradient>
                </defs>
                <rect
                  width="206"
                  height="50"
                  x="5"
                  y="5"
                  rx="25"
                  fill="none"
                  stroke="#ffffff"
                />
              </svg>
              <span>{props.button.text}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WideCta;
