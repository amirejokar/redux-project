import React from "react";
import { useDispatch } from "react-redux";
import { removeCourse } from "../../Redux/store/courses";
import swal from "sweetalert";

export default function CourseBox({
  _id,
  title,
  price,
  category,
  discount,
  registersCount,
  desc,
}) {
  const dispatch = useDispatch();

  const removeHandler = (_id) => {
    swal({
      title: "are you sure ? ",
      icone: "warning",
      buttons: ["no", "yes"],
    }).then((result) => {
      if (result) {
        dispatch(removeCourse(_id));
      }
      swal({
        title: "course removed successfully",
        icon: "success",
      });
    });
  };

  return (
    <div className="products__item">
      <img
        src="../../img/store/redux.png"
        alt="product-img-1"
        className="products__img"
      />
      <div className="products__details w-100">
        <div className="products__info">
          <h3 className="products__name">{title}</h3>
          <p className="products__short-desc">{desc} </p>
        </div>
        <div className="products__tags">
          <div className="products__boxes">
            <div className="products__price-box">
              <span className="fa fa-wallet"></span>

              <span className="product__teg-text">قیمت :</span>
              <span className="product__teg-text products__price-value">
                {price === 0 ? "رایگان" : price.toLocaleString()}
              </span>
            </div>
            <div className="products__category-box">
              <span className="fa fa-folder"></span>

              <span className="product__teg-text">دسته بندی:</span>
              <span className="product__teg-text products__category">
                {category}
              </span>
            </div>
            <div className="products__shop-box">
              <span className="fa fa-users"></span>

              <span className="product__teg-text">تعداد ثبت‌نامی :</span>
              <span className="product__teg-text products__sell">
                {registersCount}
              </span>
            </div>
          </div>
          <div className="products__btns">
            <button className="btn btn-danger btn-lg" onClick={removeHandler}>
              حذف
            </button>
            <button className="btn btn-info btn-lg">ویرایش</button>
          </div>
        </div>
      </div>

      <div className="product__discount-Box">{discount}%</div>
    </div>
  );
}
