import React from "react";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const selectField = (props) => {
  const { name, label, value, error = null, onChange, options } = props;
  return (
    <FormControl
      variant="outlined"
      sx={{ mb: 1, minWidth: 500 }}
      {...(error && { error: true })}
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        size="small"
        label={label}
        name={name}
        value={value == 0 ? "" : value}
        onChange={onChange}
      >
        <MenuItem value={1}>HairCut</MenuItem>
        <MenuItem value={2}>Hair Styling</MenuItem>
        <MenuItem value={3}>Mecup</MenuItem>
        <MenuItem value={4}>Tatoo</MenuItem>
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default selectField;
