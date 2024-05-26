/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./index.css";
import faceImage from "./face.avif";

export default function Header() {
  return (
    <div className="container px-0">
      <header className="header col-10 col-md-12 mx-auto">
        <div className="header__info">
          <img src={faceImage} alt="admin photo" className="header__img" />
          <div className="header__details">
            <h4 className="header__name mb-2">ممد ممدیان</h4>
            <p className="header__email my-0" lang="en">
              از خوبای کوزه گری{" "}
            </p>
          </div>
        </div>
        <div className="header__btns">
          <button className="btn-custome btn-header__dark-mode">
            <span className="fa fa-sun header__icon"></span>
          </button>

          <button className="btn-custome btn-header__alert">
            <span className="fa fa-bell header__icon"></span>
            <span className="header__alert-count">5</span>
          </button>

          <button className="btn-custome btn-custome__blue btn-header__log-out">
            <span className="fa fa-sign-out header__icon"></span>
            خروج از پنل
          </button>
        </div>
      </header>
    </div>
  );
}
