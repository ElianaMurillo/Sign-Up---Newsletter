import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LocalStorageContext } from "../context/success.context";

const SuccessSubscription = () => {

    const Navigate = useNavigate();

    const { email, setEmail } = useContext(LocalStorageContext);

    const handleSuccess = () => {
        Navigate("/");
        setEmail("")
    }

    return (
        <div className="card_success">
            <div className="card_success_items">
                <i class="fas fa-check-circle" style={{color: "#FF0000", fontSize: "2.5rem"}} ></i>
                <h1>Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription.</p>
                <input
                    className="btnSuccess"
                    type="button"
                    value="Dismiss message"
                    onClick={handleSuccess}
                />
            </div>
        </div>
    );
}

export default SuccessSubscription;