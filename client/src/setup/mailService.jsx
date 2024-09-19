import axios from "axios";

const serviceArray = ["HairCut", "Tatoo", "Mecup", "Styles"];

export const SendEmail = async (values) => {
  values.bookingDate = new Date(values.bookingDate).toLocaleDateString();
  values.serviceId = serviceArray[values.serviceId - 1];
  console.log(values);
  try {
    const datas = values;
    let res = await axios.post(`http://localhost:5000/api/sendemail`, datas);
    console.log(res);
  } catch (error) {
    alert(error.response.data.msg);
  }
};
