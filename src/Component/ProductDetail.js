import React from "react";
import BasicRating from "./BasicRating";
import { addCart, cartItems } from "../actions";
import { useDispatch } from "react-redux";
import { showToast } from "../Notification/toast";
import "../styles/productItem.css";
const ProductDetail = ({ item }) => {
  const dispatchCart = useDispatch();
  const dispatchTotal = useDispatch();

  const handleClick = (item) => {
    if (!item.qty) {
      item.qty = 1;
      dispatchCart(addCart(item));
      dispatchTotal(cartItems());
      showToast("Item Added to Cart !!!", "success");
    } else {
      dispatchCart(addCart(item));
      dispatchTotal(cartItems());
      showToast("Item Added to Cart !!!", "success");
    }
  };
  return (
    <div className="container-sm d-flex flex-lg-row  flex-column mt-4 gap-5 product_details">
      {item.imageURL ? (
        <div
          className="product_image_div "
          style={{ width: "100%", objectFit: "cover" }}
        >
          <div
            id="carouselExampleDark"
            className=" "
            style={{ height: "100%" }}
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {item.imageURL && (
                <div
                  className="carousel-item active image_container"
                  data-bs-interval="10000"
                >
                  <img
                    src={item.imageURL}
                    className="d-block w-100 image_container "
                    alt="error"
                    style={{ height: "38rem" }}
                  />
                </div>
              )}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      ) : (
        <img src={item.thumbnail} alt="error" id="detailAddedImage" />
      )}

      <div className="d-flex flex-column gap-3">
        <div className="d-flex flex-column gap-2">
          <span className="product_title">{item.title}</span>
          <span>
            <BasicRating value={item.rating} />
          </span>
          <div className="d-flex gap-3 ">
            <span className="text-success price_text">
              <span className="text-danger price_text">Price :</span> ${" "}
              {item.price}
            </span>
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
          <span>{item.description}</span>
        </div>

        <div className="align-self-end">
          <button
            type="button"
            className="btn btn-primary"
            style={{
              width: "9rem",
              backgroundColor: "var(--nav)",
              border: "none",
            }}
            onClick={() => handleClick(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
