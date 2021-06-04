import React, { useEffect, useState, useCallback } from "react";
import { ryanOptions } from "../data/Options";

import { CheckedItems } from "../component/CheckBoxItems";
import _ from "lodash";

function CheckBoxCom() {
  const [newOptions, setNewOptions] = useState(ryanOptions);

  useEffect(() => {
    console.log(newOptions);
  }, [newOptions]);

  const changeOptions = useCallback(
    (field, option, ix) => (e) => {
      let newOpt = _.cloneDeep(newOptions);
      newOpt[field][option].fields[ix].value = e.target.checked;
      setNewOptions(newOpt);
    },
    [newOptions]
  );

  const changeOptionsWithOutUseCallback = (field, option, ix) => (e) => {
    let obj = {
      [field]: {
        ...newOptions[field],
        [option]: {
          ...newOptions[field][option],
          ["fields"]: {
            ...newOptions[field][option]["fields"],
            [ix]: {
              field: e.target.name,
              value: e.target.checked,
            },
          },
        },
      },
    };
    obj[field][option]["fields"] = Object.values(obj[field][option]["fields"]);

    setNewOptions((preState) => {
      return { ...preState, ...obj };
    });
  };

  return (
    <div>
      {Object.keys(newOptions.Ryan).map((o, idx) => {
        return (
          <div key={idx}>
            <CheckedItems
              field="Ryan"
              label={newOptions.Ryan[o].label}
              options={newOptions.Ryan[o].fields}
              changeOptions={changeOptions}
              o={o}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CheckBoxCom;
