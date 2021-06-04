import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";

const CheckedItems = React.memo((props) => {
  return (
    <>
      <FormLabel component="legend">{props.label}</FormLabel>
      <FormGroup row>
        {props.options.map((i, ix) => {
          return (
            <div key={ix}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={i.value}
                    onChange={props.changeOptions(props.field, props.o, ix)}
                    name={i.field}
                    color="primary"
                  />
                }
                label={i.field}
              />
            </div>
          );
        })}
      </FormGroup>
    </>
  );
});

export { CheckedItems };
