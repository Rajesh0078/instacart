import React, { useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

const PaymentForm = ({ stripe }) => {
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { token, error } = await stripe.createToken();

        if (error) {
            setError(error.message);
        } else {
            // Handle the token (e.g., send it to your server for processing)
            console.log(token);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Card details
                <CardElement />
            </label>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Pay</button>
        </form>
    );
};

export default injectStripe(PaymentForm);
