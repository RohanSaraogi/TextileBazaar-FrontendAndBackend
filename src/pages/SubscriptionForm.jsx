// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import { toast } from 'react-toastify';
// import { createSubscription } from '../redux/actions/subscriptionActions';

// function SubscriptionForm() {
//     const [email, setEmail] = useState('');
//     const [planType, setPlanType] = useState('premium');
//     const dispatch = useDispatch();
//     const stripe = useStripe();
//     const elements = useElements();

//     // Handle form submission
//     const handleCreateSubscription = async (e) => {
//         e.preventDefault();

//         try {
//             // Dispatch the createSubscription action to get the payment client secret
//             const subscriptionResult = await dispatch(createSubscription(email, planType));
//             const clientSecret = subscriptionResult.payload.client_secret;

//             // Check if the client secret was returned successfully
//             if (!clientSecret) {
//                 toast.error('Unable to retrieve payment details.');
//                 return;
//             }

//             // Use Stripe Elements to process the payment
//             const cardElement = elements.getElement(CardElement);
//             const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//                 payment_method: {
//                     card: cardElement,
//                     billing_details: {
//                         email: email,
//                     },
//                 },
//             });

//             if (paymentResult.error) {
//                 // Handle payment error
//                 toast.error(paymentResult.error.message);
//             } else if (paymentResult.paymentIntent.status === 'succeeded') {
//                 // Payment successful
//                 toast.success('Payment successful!');

//                 // Handle subscription success (e.g., navigate to a success page)
//                 // You may also need to dispatch another Redux action to update the app state
//             }
//         } catch (error) {
//             // Handle potential errors
//             toast.error(`Payment failed: ${error.message}`);
//         }
//     };

//     return (
//         <div>
//             <h1>Subscription Form</h1>
//             <form onSubmit={handleCreateSubscription}>
//                 {/* Input field for email */}
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     required
//                 />

//                 {/* Plan type selection */}
//                 <select
//                     value={planType}
//                     onChange={(e) => setPlanType(e.target.value)}
//                     required
//                 >
//                     <option value="premium">Premium</option>
//                     {/* Add other plan types if available */}
//                 </select>

//                 {/* Card element */}
//                 <CardElement
//                     options={{
//                         style: {
//                             base: {
//                                 fontSize: '16px',
//                                 color: '#424770',
//                                 '::placeholder': {
//                                     color: '#aab7c4',
//                                 },
//                             },
//                             invalid: {
//                                 color: '#9e2146',
//                             },
//                         },
//                     }}
//                 />

//                 {/* Submit button */}
//                 <button type="submit">Subscribe</button>
//             </form>
//         </div>
//     );
// }

// export default SubscriptionForm;



// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import { toast } from 'react-toastify';
// import { createSubscription, fetchAllSubscriptionDetails } from '../redux/actions/subscriptionActions';

// function SubscriptionForm() {
//     const [email, setEmail] = useState('');
//     const [planType, setPlanType] = useState('free');
//     const [clientSecret, setClientSecret] = useState(null);
//     const dispatch = useDispatch();
//     const stripe = useStripe();
//     const elements = useElements();

//     // Handle subscription purchase
//     const handleSubscriptionPurchase = async () => {
//         try {
//             // Call the action to create a subscription
//             const { payload } = await dispatch(createSubscription(email, planType));
//             const clientSecret = payload.client_secret;

//             // Store the clientSecret for later use
//             setClientSecret(clientSecret);
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };

//     // Handle payment submission
//     const handlePaymentSubmit = async (e) => {
//         e.preventDefault();

//         if (!stripe || !elements) {
//             toast.error('Stripe is not loaded.');
//             return;
//         }

//         try {
//             const cardElement = elements.getElement(CardElement);

//             // Confirm the card payment
//             const result = await stripe.confirmCardPayment(clientSecret, {
//                 payment_method: {
//                     card: cardElement,
//                     billing_details: {
//                         email,
//                     },
//                 },
//             });

//             if (result.error) {
//                 toast.error(result.error.message);
//             } else if (result.paymentIntent.status === 'succeeded') {
//                 toast.success('Subscription purchase successful!');

//                 // Refresh the subscription details
//                 dispatch(fetchAllSubscriptionDetails());
//             }
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };

//     return (
//         <div>
//             <h1>Choose a Plan</h1>
//             <div>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Plan Type:</label>
//                 <select value={planType} onChange={(e) => setPlanType(e.target.value)}>
//                     <option value="free">Free Plan (INR 499)</option>
//                     <option value="premium">Premium Plan (INR 4000)</option>
//                 </select>
//             </div>
//             <button onClick={handleSubscriptionPurchase}>
//                 {planType === 'free' ? 'Purchase Free Plan' : 'Purchase Premium Plan'}
//             </button>

//             {clientSecret && (
//                 <form onSubmit={handlePaymentSubmit}>
//                     <h2>Payment Information</h2>
//                     <CardElement />
//                     <button type="submit">Submit Payment</button>
//                 </form>
//             )}
//         </div>
//     );
// }

// export default SubscriptionForm;


// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import { toast } from 'react-toastify';
// import { createSubscription } from '../redux/actions/subscriptionActions';
// import { server } from '../server';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";


// const SubscriptionForm = () => {
//     const [planType, setPlanType] = useState('premium');
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const stripe = useStripe();
//     const elements = useElements();

//     // Get the logged-in user's email
//     const { user } = useSelector((state) => state.user);
//     const email = user ? user.email : '';
//     console.log(email)

//     // Handle form submission
//     const handleCreateSubscription = async (e) => {
//         e.preventDefault();

//         // Ensure Stripe and elements are ready
//         if (!stripe || !elements) {
//             toast.error('Stripe is not initialized.');
//             return;
//         }

//         try {
//             // Specify the amount based on the plan type
//             const amount = planType === 'free' ? 499 : 4000;

//             // Send payment request to create a payment intent using the `server` URL
//             const { data: { client_secret } } = await axios.post(`${server}/payment/process`, {
//                 amount: amount * 100, // Convert amount to paisa (smallest currency unit)
//                 currency: 'inr',
//                 payment_method_types: ['card', 'upi'], // Add UPI payment method
//             });

//             // Use Stripe Elements to process the payment
//             const cardElement = elements.getElement(CardElement);
//             const paymentResult = await stripe.confirmCardPayment(client_secret, {
//                 payment_method: {
//                     card: cardElement,
//                     billing_details: {
//                         email,
//                     },
//                 },
//             });

//             if (paymentResult.error) {
//                 // Handle payment error
//                 toast.error(paymentResult.error.message);
//             } else if (paymentResult.paymentIntent.status === 'succeeded') {
//                 // Payment successful

//                 // Calculate the end date based on the plan type
                

//                 // Send a request to create the subscription
//                 await axios.post(`${server}/sub/create-subscription`, {
//                     email,
//                     planType,
                    
//                 });

//                 // Subscription created successfully
//                 toast.success('Subscription created successfully!');
//                 navigate("/");
//             }
//         } catch (error) {
//             // Handle potenial errors
//             toast.error(`Payment failed: ${error.message}`);
//         }
//     };

//     return (
//         <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
//             <h2>Create Subscription</h2>
//             <form onSubmit={handleCreateSubscription}>
//                 {/* Plan type selection */}
//                 <div style={{ marginBottom: '15px' }}>
//                     <label htmlFor="planType">Plan Type:</label>
//                     <select
//                         id="planType"
//                         value={planType}
//                         onChange={(e) => setPlanType(e.target.value)}
//                         style={{ marginLeft: '10px', padding: '5px' }}
//                     >
//                         <option value="premium">Premium (₹4000/year)</option>
//                         <option value="free">Free (₹499 one-time)</option>
//                     </select>
//                 </div>

//                 {/* Display the logged-in user's email */}
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         readOnly // Make the input field read-only
//                         style={{ marginLeft: '10px', padding: '5px' }}
//                     />
//                 </div>

//                 {/* Card element */}
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Card Information:</label>
//                     <div style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}>
//                         <CardElement />
//                     </div>
//                 </div>

//                 {/* Submit button */}
//                 <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
//                     Subscribe
//                 </button>
//             </form>
//         </div>
//     );

// };

// export default SubscriptionForm;





import React, { useCallback, useState, useEffect } from 'react';
import useRazorpay from 'react-razorpay';

import { useDispatch, useSelector } from 'react-redux';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { createSubscription } from '../redux/actions/subscriptionActions';
import { server } from '../server';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';


const SubscriptionForm=() => {
    const [planType, setPlanType] = useState('premium');
  const [Razorpay] = useRazorpay();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
      const email = user ? user.email : '';
      console.log(email)

      const [subscribe, setSubscribe] = useState([]);

  useEffect(() => {
    axios.get(`${server}/sub/details/email`, {withCredentials: true}).then((res) =>{
     setSubscribe(res.data.subscription);
    })
   }, []);
   console.log(subscribe)
   const hideSubscriptionSection = subscribe && subscribe.status=='active' && subscribe.planType === 'free';
 console.log(hideSubscriptionSection)


      const handlePayment = useCallback(async (e) => {
        e.preventDefault(); 
        try {
          const response = await axios.post(`${server}/razorpay/create-order`, { planType });
          const { orderId } = response.data;
          console.log(orderId)
          const amount = planType === 'premium' ? 399900 : 49900;
    
          // Initialize Razorpay
          const options = {
            key: 'rzp_test_l7XGLcitiOrORm',
            amount: amount, // Amount in paisa
            currency: 'INR',
            order_id: orderId,
            name: 'Your Company',
            description: 'Subscription Payment',
            handler: async (response) => {
              try {
                // Send payment details to backend for verification
                await axios.post(`${server}/razorpay/verify-payment`, {
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                });
    
                // Payment verified, now create subscription
                await axios.post(`${server}/sub/create-subscription`, {
                  email,
                  planType,
                });
    
                toast('Subscription created successfully!');
                navigate("/")
              } catch (error) {
                toast('Error creating subscription');
                console.error('Error verifying payment:', error);
              }
            },
          };
    
          const rzp = new window.Razorpay(options);
          rzp.open();
        } catch (error) {
          console.error('Error creating Razorpay order:', error);
        }
      },[Razorpay,planType]);

  return (
    <>
    <Header/>
    <div className=" mt-10 mb-10" >
        <h1 className='justify-center items-center text-5xl font-bold flex mb-10 tracking-wide text-[#153448]'>Buy Plans</h1>
            <div  style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #948979', borderRadius: '5px' }}>
                <h2 className='border-b-2 border-[#948979] text-center text-[15px] font-bold font-Jakarta text-[#948979]'>Purchase  Subscription and check the plans below <hr/></h2>
                <br/>
                <form onSubmit={handlePayment}>
                    {/* Plan type selection */}
                    <div className='text-center w-[70%] mx-auto' style={{ marginBottom: '15px' }}>
                        <label htmlFor="planType" className='text-[15px] font-bold font-Jakarta text-[#948979]'>SELECT A PLAN</label>
                        {hideSubscriptionSection ? (
            <select
                id="planType"
                value={planType}
                onChange={(e) => setPlanType(e.target.value)}
                style={{ marginLeft: '10px', padding: '5px' }}
                className='text-center w-[70%] mx-auto rounded-md'
            >
                <option value="premium">Premium (₹3999/year)</option>
            </select>
        ) : (
            <select
                id="planType"
                value={planType}
                onChange={(e) => setPlanType(e.target.value)}
                style={{ marginLeft: '10px', padding: '5px' }}
                className='text-center w-full mx-auto font-medium'
            >
                <option value="premium">Premium (₹3999/year)</option>
                <option value="free">Free (₹499 one-time)</option>
            </select>
        )}
                    </div>
    
                    {/* Display the logged-in user's email */}
                    <div  className='text-center W-[50%] mx-auto'  style={{ marginBottom: '15px' }}>
                        <label className='text-[15px] font-bold font-Jakarta text-[#948979]'>REGISTERED EMAIL ADDRESS:</label>
                        <input
                            type="email"
                            value={email}
                            readOnly // Make the input field read-only
                            style={{ marginLeft: '10px', padding: '5px' }}
                           
                            className='text-center w-[70%] mx-auto font-medium text-[#153448]'
                        />
                    </div>
    
                    {/* Card element */}
                    
    
                    {/* Submit button */}
                    <button type="submit" className=' w-[30%] h-[40px] flex justify-center items-center py-2 px-4 border border-transparent text-sm rounded-md text-[#ffffff] bg-[#153448] mx-auto hover:scale-105'>
                        Purchase Now
                    </button>
                </form>
            </div>
            </div>
            <Footer/>
            </>
        );
    
}

export default SubscriptionForm;






