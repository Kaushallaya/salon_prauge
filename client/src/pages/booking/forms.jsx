import axios from "axios";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import { useForm, Form } from "../../common/useForm";
import * as userServices from "../../setup/userService";
import StripeCheckout from "react-stripe-checkout";
import { BannerPaidButton, BannerSubTitle } from "../../styles/booking";
import withReactContent from "sweetalert2-react-content";
import FormControl from "../../common/FormControls";
import { SendEmail } from "../../setup/mailService";
import { handleFailure } from "../../setup/stripeService";
import Button from "../../common/Button";
import { format } from "date-fns";
import moment from "moment";
import { SaveBooking, SaveUser } from "../../setup/bookingService";

const MySwal = withReactContent(Swal);
const data = [
  { id: 0, price: 0, title: "null value" },
  { id: 1, price: 25, title: "Haircut" },
  { id: 2, price: 75, title: "Hair Styling" },
  { id: 3, price: 20, title: "Makeup" },
  { id: 4, price: 30, title: "Tatoo" },
  { id: 2, price: 75, title: "Hair Styling" },
  { id: 3, price: 20, title: "Makeup" },
];

const BookingForms = (props) => {
  const { serviceId } = props;
  const [service, setService] = useState({ name: "Haircut", price: 25 });
  const navigate = useNavigate();

  const priceForStripe = service.price * 100;

  const initialFValues = {
    // id: 0,
    firstName: "",
    lastName: "",
    email: "",
    serviceId: serviceId,
    bookingDate: null,
    bookingTime: null,
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("firstName" in fieldValues) {
      temp.firstName = fieldValues.firstName ? "" : "First Name is required.";
    }
    if ("lastName" in fieldValues) {
      temp.lastName = fieldValues.lastName ? "" : "Last Name is required.";
    }
    if ("email" in fieldValues)
      temp.email =
        /$^|.+@.+..+/.test(fieldValues.email) && fieldValues.email
          ? ""
          : "Email is not valid.";

    if ("serviceId" in fieldValues)
      temp.serviceId = fieldValues.serviceId ? "" : "Service is required.";
    if ("bookingDate" in fieldValues) {
      temp.bookingDate = fieldValues.bookingDate
        ? ""
        : "Date Field is required.";
    }
    if ("bookingTime" in fieldValues) {
      temp.bookingTime =
        fieldValues.bookingTime !== null ? null : "Time Field is required.";
      // temp.bookingTime =
      //   new Date().toDateString() ==
      //   new Date(fieldValues.bookingDate).toDateString()
      //     ? "Time in Invalid"
      //     : null;
    }
    console.log(temp.bookingTime);
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange } = useForm(
    initialFValues,
    true,
    validate
  );

  const priceObj = data.find(
    (item) => item.id === parseInt(values.serviceId, 10)
  );

  let checkError = true;

  if (
    values.serviceId !== "" &&
    values.firstName !== "" &&
    values.lastName !== "" &&
    values.email !== "" &&
    /$^|.+@.+..+/.test(values.email) &&
    values.bookingDate !== null &&
    values.bookingTime !== null
  ) {
    checkError = false;
  }

  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Payment was successful",
      time: 4000,
    }).then((result) => {
      if (result.isConfirmed) {
        SendEmail(values);
        SaveBooking(values);
        navigate("/confirm");
      }
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
        handleSuccess(values);
        console.log("success");
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    SaveUser(values);
    //console.log(errors.bookingTime + " " + errors.bookingDate);
    // SendEmail(values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container width={500}>
        <FormControl.SelectField
          name="serviceId"
          label="Service"
          value={values.serviceId}
          onChange={handleInputChange}
          options={userServices.getServiceCollection}
          error={errors.serviceId}
        />
        <FormControl.InputField
          name="firstName"
          label="First Name"
          value={values.firstName}
          onChange={handleInputChange}
          error={errors.firstName}
        />
        <FormControl.InputField
          name="lastName"
          label="Last Name"
          value={values.lastName}
          onChange={handleInputChange}
          error={errors.lastName}
        />
        <FormControl.InputField
          name="email"
          label="Email"
          value={values.email}
          onChange={handleInputChange}
          error={errors.email}
        />
        <FormControl.DatePickerField
          name="bookingDate"
          label="Date"
          value={values.bookingDate}
          onChange={handleInputChange}
          error={errors.bookingDate}
        />
        <FormControl.TimePickerFirld
          name="bookingTime"
          label="Time"
          value={values.bookingTime}
          onChange={handleInputChange}
          error={errors.bookingTime}
          dateValue={values.bookingDate}
        />

        {/* <Button type="submit" text="Submit" /> */}
        <Box>
          <BannerSubTitle>Total: USD {priceObj.price}.00</BannerSubTitle>
          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
            label="Pay Now"
            name="Pay With Credit Card"
            amount={priceForStripe}
            description={`Your total is $${priceObj.price}`}
            token={payNow}
            disabled={checkError}
          >
            <BannerPaidButton type="submit">pay now</BannerPaidButton>
          </StripeCheckout>
        </Box>
      </Grid>
    </Form>
  );
};

export default BookingForms;
