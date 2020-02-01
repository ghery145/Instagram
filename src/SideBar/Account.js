import React from "react";
import lala from "../assets/image/lala.jpg";
import "./Account.css";

function Account() {
  return (
    <div className="Account">
      <img src={lala} className="ImageAccountUser" alt="ImageUser" />

      <div className="Name">
        <strong>Gherygap</strong>
        <span className="initial">Hakuna Matata</span>
      </div>
    </div>
  );
}
export default Account;
