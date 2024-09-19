import axios from "axios";

export const SaveBooking = async (values) => {
  values.bookingDate = new Date(values.bookingDate).toLocaleDateString();
  //values.bookingTime = new Date(values.bookingTime).toLocaleTimeString();
  console.log(values);
  try {
    const datas = values;
    let res = await axios.post(`http://localhost:5000/booking/save`, datas);
    console.log(res);
  } catch (error) {
    alert(error.response.data.msg);
  }
};

export const SaveUser = async (values) => {
  console.log(values);
  try {
    const datas = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
    };
    console.log(datas);
    let res = await axios.post(`http://localhost:5000/users/save`, datas);
    console.log(res);
  } catch (error) {
    alert(error.response.data.msg);
  }
};
