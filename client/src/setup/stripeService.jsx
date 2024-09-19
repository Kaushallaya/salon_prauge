import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { SendEmail } from "./mailService";

const MySwal = withReactContent(Swal);
const serviceArray = ["HairCut", "Tatoo", "Mecup", "Styles"];

export const paymentNow = async (token, price) => {
  try {
    let response = await axios({
      url: "http://localhost:5000/payment",
      method: "post",
      data: {
        amount: price * 100,
        token,
      },
    });
    if (response.status === 200) {
      return true;
      console.log("success");
    }
  } catch (error) {
    return false;
    console.log(error);
  }
};

export const handleSuccess = (values) => {
  //const navigate = useNavigate();

  MySwal.fire({
    icon: "success",
    title: "Payment was successful",
    time: 4000,
  }).then((result) => {
    if (result.isConfirmed) {
      // SendEmail(values);
      // SaveBooking(values);
      const navigate = useNavigate();
      navigate("/confirm");
      return true;
    } else {
      return false;
    }
  });
};

export const handleFailure = () => {
  MySwal.fire({
    icon: "error",
    title: "Payment was not successful",
    time: 4000,
  });
};
