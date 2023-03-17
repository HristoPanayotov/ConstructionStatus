import React from 'react'
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

const ConfirmedPayment = () => {
    
  return (
    <div>
        You paid £5.00!
    </div>
  )
}

export default ConfirmedPayment