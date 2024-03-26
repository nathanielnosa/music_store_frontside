import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate()
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    // Load Stripe asynchronously
    const loadStripeJs = async () => {
      const stripeKey = import.meta.env.VITE_STRIPE_KEY;
      const stripeObj = await loadStripe(stripeKey);
      setStripe(stripeObj);
    };
    loadStripeJs();

  }, []);



  const handlePayment = async () => {
    try {
      if (!stripe) {
        throw new Error('Stripe is not initialized');
      }

      // Prepare the request body with the correct format
      const requestBody = {
        products: cart.products.map(product => ({
          name: product.title,
          amount: product.price,
          image: product.image,
          quantity: product.quantity
        }))
      };

      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/checkout/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error('Failed to process payment');
      } else {
        const session = await response.json();
        const result = await stripe.redirectToCheckout({
          sessionId: session.id
        });

        if (result.error) {
          throw new Error(result.error.message);
        } else {
          // Payment was successful, but let's get payment-related data
          const paymentIntent = await stripe.retrievePaymentIntent(session.payment_intent);

          // Now we navigate to the success page with the payment-related data
          navigate("/success", { state: { paymentData: paymentIntent } });
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section id="cart">
      <div className="container py-4">
        <div className="text-center py-3"><h3>My Cart</h3></div>
        {/* Check if cart is empty */}
        {!cart.products || cart.products.length === 0 ? (
          <div className="text-center bg-danger text-white py-5 display-6 border">
            You don&#39;t have any cart items
          </div>
        ) : (
          <div className="row">
            {/* Cart Products */}
            <div className="col-md-9">
              <table className="table table-responsive table-black">
                {/* Table Headers */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sub Total</th>
                  </tr>
                </thead>
                {/* Cart Items */}
                <tbody>
                  {cart.products.map((product) => (
                    <tr key={product._id}>
                      <td>{product.title}</td>
                      <td><img src={product.image} width={80} alt="" className="img-thumbnail" /></td>
                      <td><strong>{product.price.toLocaleString()}</strong></td>
                      <td >
                        <FaMinusCircle />
                        <span className="px-2">{product.quantity}</span>
                        <FaPlusCircle />
                      </td>
                      <td><strong>{(product.price * product.quantity).toLocaleString()}</strong></td>
                    </tr>
                  ))}
                  {/* Continue Shopping Link */}
                  <tr className="">
                    <td colSpan={4}>
                      <Link className="btn btn-dark " to={'/musics'}>Continue Shopping</Link>
                    </td>
                    {/* Cart Total */}
                    <td colSpan={3}>
                      <strong>Total:</strong><h3>&#8358;{cart.total.toLocaleString()}</h3>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Cart Summary & Checkout */}
            <div className="col-md-3">
              <div className="card">
                <div className="card-header display-6">Summary</div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="d-flex justify-content-between">
                      <strong className="h6">Subtotal</strong> <b>&#8358;{cart.total.toLocaleString()}</b>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong className="h6">Shipping fee</strong> <b>&#8358; 40</b>
                    </li>

                    <li className="d-flex justify-content-between">

                    </li>
                    <li className="d-grid">
                      <button onClick={handlePayment} className="btn btn-dark">Checkout</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
