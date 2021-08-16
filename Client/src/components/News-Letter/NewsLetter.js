import React from 'react';
import "./NewsLetter.css";

const NewsLetter = () => {
    return (
        <div className="NEWSLETTER-CONTAINER">
            <div className="NEWSLETTER-Icon">
                <img alt="email-icon" src="./asset/icons/email.svg" />
                <h2>SUBSCRIBE TO THE NEWSLETTER</h2>
            </div>
            <div className="NEWSLETTER-FORM">
                <form>
                    <input className="NEWSLETTER-INPUT-EMAIL" type="email" name="email" placeholder="E-mail" />
                    <input className="NEWSLETTER-INPUT-SUBMIT" type="submit" name="submit" />
                </form>
            </div>
        </div>
    );
}

export default NewsLetter;