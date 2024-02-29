import React, { useState, useContext } from "react";
import imageBackground from "../assets/images/illustration-sign-up-desktop.svg";
import { Navigate, useNavigate } from "react-router-dom";
import { LocalStorageContext } from "../context/success.context";

const HomeSubscription = () => {

    const items = [
        " Product discovery and building what matters",
        " Measuring to ensure updates are a success",
        " And much more!"
    ];

    const listItems = items.map((items, index) => <li key={index} style={{listStyleType: "none"}}><i class="fas fa-check-circle" style={{color: "#FF0000"}} ></i>{items}</li>);

    const { email, setEmail } = useContext(LocalStorageContext);

    const [error, setError] = useState(null);

    const Navigate = useNavigate();

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
        event.preventDefault();
    };

    const handleSubscribing = (event) => {
        event.preventDefault();
        const structureEmail = /\S+@\S+\.\S+/;
        const isValidateEmail = structureEmail.test(email);
        setError(null);
        if (isValidateEmail) {
            console.log({email});
            Navigate("/Success")
        } else {
            setError("Valid email required");
        }
    };

    return (
        <div className="newsletter-card">
            <div className="newsletter-card-left">
                <div className="newsletter-card-text">
                    <h1>Stay update!</h1>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul className="iconList">{listItems}</ul>
                </div>
                    { error && (
                        <div className="newsletter-card-form">
                        <div className="email_error">
                            <p>Email address</p>
                            <div className="messageError">
                                {error}
                            </div>
                        </div>
                        <form>
                            <label className="labelEmail" htmlFor="email"></label>
                                <input
                                className="error_email_design"
                                id="email"
                                name="email"
                                type="email"
                                placeholder= "email@company.com"
                                onChange={handleChangeEmail}
                                value={email}
                                />
                        </form>
                    </div>
                    )
                    }
                    { !error && (
                        <div className="newsletter-card-form">
                        <div className="email_error">
                            <p>Email address</p>
                            <div className="messageError">
                                {error}
                            </div>
                        </div>
                        <form>
                            <label className="labelEmail" htmlFor="email"></label>
                                <input
                                className="noerror_email_design"
                                id="email"
                                name="email"
                                type="email"
                                placeholder= "email@company.com"
                                onChange={handleChangeEmail}
                                value={email}
                                />
                        </form>
                    </div>
                    )
                    }
                <div className="containerBtnSubscribe">
                        <input
                        className="btnSubscribe"
                        type="button"
                        value="Subscribe to monthly newsletter"
                        onClick={handleSubscribing}
                        />
                </div>
            </div>
            <div className="newsletter-card-image">
                <img src={imageBackground}></img>
            </div>
        </div>
      );

};

export default HomeSubscription;