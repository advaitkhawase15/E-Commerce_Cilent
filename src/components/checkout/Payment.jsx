import React, { useState, useEffect } from "react";
import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import PaymentForm from "./PaymentForm";
import "./payment.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51MlW1ISI7JGkwt8OyKClMma66GP0hTZ0d1ZhDiPevTlZyUgjRpJK8DUKr7eagluzf9XWJR5wvnjFr7dE5445yepm00KE4FEzal");

export default function Payment() {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        axios.post("/send/create-payment-intent", {
            price: 1000
        }).then((res) => setClientSecret(res.data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
        variables: {
            colorPrimary: '#1d4ed8',
            colorText: '#4b5563',
        },
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="payment">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <PaymentForm />
                </Elements>
            )}
        </div>
    );
}