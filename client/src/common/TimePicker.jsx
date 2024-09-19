import React from "react";
import { format } from "date-fns";
import moment from "moment";
import { TimePicker, Space } from "antd";

import "antd/dist/antd.css";

const TimePickerFirld = (props) => {
  const { name, label, value, error = null, onChange, dateValue } = props;
  const today = format(new Date(), "MM/dd/yyyy");
  const selectDate = new Date(dateValue).toLocaleDateString();
  //console.log(error);

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  const disabledHours = () => {
    const hours = [0, 1, 2, 3, 4, 5, 6, 7, 18, 19, 20, 21, 22, 23, 24];
    const minute = [];
    if (selectDate == today) {
      const currentHour = moment().hour();
      const currentMinut = moment().minute();
      for (let i = 8; i < currentHour && i < 18; i++) {
        hours.push(i);
      }
      for (let x = 0; x < currentMinut; x++) {
        minute.push(x);
      }
    }
    return { disabledHours: () => hours };
  };

  return (
    <>
      <div>
        <TimePicker
          use12Hours
          format="h:mm a"
          minuteStep={30}
          onChange={(timeString) =>
            onChange(convertToDefEventPara(name, timeString))
          }
          placeholder="Time"
          style={{
            marginLeft: "10px",
            width: "240px",
            borderRadius: "4px",
            height: "40px",
          }}
          status={error === null ? "" : "error"}
          disabledTime={disabledHours}
          disabled={selectDate == "1/1/1970" ? true : ""}
        />
        <p
          class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeSmall MuiFormHelperText-contained css-k4qjio-MuiFormHelperText-root"
          id=":r7:-helper-text"
        >
          {error === null ? "" : error}
        </p>
      </div>
    </>
  );
};

export default TimePickerFirld;
