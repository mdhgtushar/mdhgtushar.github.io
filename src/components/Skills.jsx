import React from "react";

export default function Skills(props) {
  console.log(props.allInfo);
  return (
    <div>
      <p class="w3-large">
        <b>
          <i class="fa fa-asterisk fa-fw w3-margin-right w3-text-black"></i>
          Skills
        </b>
      </p>
      {props.allInfo.map((e, index) => {
        return (
          <div key={index}>
            <p>{e.key}</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div
                class="w3-container w3-center w3-round-xlarge w3-black"
                style={{ width: `${e.value}%` }}
              >
                {e.value}%
              </div>
            </div>
          </div>
        );
      })}
      <br />
    </div>
  );
}
