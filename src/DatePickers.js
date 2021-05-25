import React, { useState } from "react";
import "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  }
}));

var handleDateChange = function (a) {
  return a - 1911;
};

export default function DatePickers() {
  const [selectedDate, setSelecteDate] = useState(new Date("2021-07-25"));
  const year = handleDateChange(selectedDate.getFullYear());
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          id="date-picker-inline"
          label="阿公店開店日選擇"
          variant="inline"
          value={selectedDate}
          onChange={setSelecteDate}
          format={"民國" + year + "年 - MM月 - dd號"}
          margin="normal"
          fullWidth
          alignItems='center'
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </MuiPickersUtilsProvider>
    </form>
  );
}


