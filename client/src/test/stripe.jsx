import StripeCheckout from "react-stripe-checkout";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { BannerPaidButton } from "../styles/booking";

const MySwal = withReactContent(Swal);

const StripeGateway = () => {
  const service = { name: "Haircut", price: 25 };
  const navigate = useNavigate();
  const priceForStripe = service.price * 100;

  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Payment was successful",
      time: 4000,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/confirm");
      }
    });
  };

  const handleFailure = () => {
    MySwal.fire({
      icon: "error",
      title: "Payment was not successful",
      time: 4000,
    });
  };
  const payNow = async (token) => {
    try {
      const response = await axios({
        url: "http://localhost:5000/payment",
        method: "post",
        data: {
          amount: service.price * 100,
          token,
        },
      });
      if (response.status === 200) {
        handleSuccess();
        console.log("success");
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  return (
    <div className="container">
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
        label="Pay Now"
        name="Pay With Credit Card"
        amount={priceForStripe}
        description={`Your total is $${service.price}`}
        token={payNow}
      >
        <BannerPaidButton>Pay now</BannerPaidButton>
      </StripeCheckout>
    </div>
  );
};

export default StripeGateway;
