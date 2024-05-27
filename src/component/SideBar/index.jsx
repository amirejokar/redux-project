/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import face from "./face.avif"
import nature from "./nature.jpg"
export default function Sidebar() {
  return (
    <div className="col-10 col-md-3 sidebar mx-auto mx-md-0 px-0">
      <div className="sidebar-content">
        <div className="card position-relative text-center">
          <img
            className="card-img-top sidebar__img-banner"
            src={nature}
            alt="banner admin photo"
          />
          <div className="card-body">
            <h4 className="card-title sidebar__top-name">ممد ممدیان</h4>
            <p className="card-text sidebar__top-email" lang="en">
                از خوبای کوزه گری
            </p>
            <ul className="list px-0">
              <li className="list__item">
                <span className="fa fa-text-height"></span>
                <p className="list__text mb-0">
                  <span className="">نام </span>
                  <span className="list__firstname">ممد</span>
                </p>
              </li>
              <li className="list__item">
                <span className="fa fa-text-width"></span>

                <p className="list__text mb-0">
                  <span className="">نام خانوادگی</span>
                  <span className="list__lastname">ممدیان</span>
                </p>
              </li>
              <li className="list__item">
                <span className="fa fa-wallet"></span>

                <p className="list__text mb-0">
                  <span className="">تعداد دوره</span>
                  <span className="list__course-count">35</span>
                </p>
              </li>
            </ul>
            <button className="btn-custome btn-custome__blue btn-sidebar w-100">
              تغییر اطلاعات
              <span className="fa fa-pencil"></span>
            </button>
          </div>

          <div className="sidebar__profile">
            <img
              src={face}
              alt="admin photo"
              className="sidebar__img-profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
