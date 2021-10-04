import React from "react";

export default function Languages(props) {
  return (
    <div>
      <p class="w3-large w3-text-theme">
        <b>
          <i class="fa fa-globe fa-fw w3-margin-right w3-text-black"></i>
          Languages
        </b>
      </p>

      {props.allInfo.map((e, index) => {
        return (
          <div>
            <p>{e.key} - {e.value}</p>
          </div>
        );
      })}

      <br />
    </div>
  );
}
