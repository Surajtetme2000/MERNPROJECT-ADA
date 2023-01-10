import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import pic1_1 from "../../images/pic1_1.jpg"
import pic1 from "../../images/pic1.jpg"
import pic3 from "../../images/pic3.jpg"
import pic4 from "../../images/pic4.jpg"


const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Welcome to ADA" />

          <div className="banner">
            <p>Welcome to ADA</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading"> Services </h2>
          <div className="container" id="container">
            <div className="productCard">
              <img src={pic1_1} alt="">
              </img>
              <h2>AC DC Drive Repair </h2>
              <div>

                <span className="productCardSpans">At Alpha Drives & Automation,
                  AC/DC Drives Repair / Buy business is a premier
                  repair service provider for all makes and models
                  of AC and DC drives and motor controls</span>
              </div>

            </div>

            <div className="productCard">
              <img src={pic4} alt="">
              </img>
              <h2>A Touch Screen(Industrial HMI)</h2>
              <div>

                <span className="productCardSpans">Repair a component level repair that results more
economical as compared to authorized repairing centre or
product replacement.</span>
              </div>

            </div>

            <div className="productCard">
              <img src={pic1} alt="">
              </img>
              <h2>VFD repair services</h2>
              <div>

                <span className="productCardSpans">Variable Frequency Drive (VFD) is a type of motor
                  controller that drives an electric motor by varying the
                  frequency and voltage supplied to the electric motor.
                  A VFD Repair offered an array of services is rendered
                  by talented teams with following the industry.</span>
              </div>

            </div>

            <div className="productCard">
              <img src={pic3} alt="">
              </img>
              <h2> SMPS REPAIR </h2>
              <div>

                <span className="productCardSpans">As an affordable enterprise, Alpha Drives & Automation are offering the best quality
                  SMPS Repairing Services to our customers.SMPS Repair services are provided using
progressive machines and the latest tools
                </span>
              </div>

            </div>
          </div>



          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
