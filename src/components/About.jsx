import React from "react";

export default function About(props) {
  return (
    <div>
      <p>
        <i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-black"></i>
        {props.allInfo.job}
      </p>
      <p>
        <i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-black"></i>
        {props.allInfo.home}
      </p>
      <p>
        <i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-black"></i>
        {props.allInfo.email}
      </p>
      <p>
        <i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-black"></i>
        {props.allInfo.phone}
      </p>
      <hr />
    </div>
  );
}
