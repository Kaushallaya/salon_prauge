import React from "react";
import { TextField } from "@mui/material";

const InputField = (props) => {
  const { name, label, value, error = null, onChange } = props;

  return (
    <TextField
      sx={{ mb: 1, minWidth: 500 }}
      fullWidth
      //required
      size="small"
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error === null ? "" : error}
    />
  );
};

export default InputField;
