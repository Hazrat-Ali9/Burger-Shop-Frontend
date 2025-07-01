import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, Phone, ArrowRight } from 'lucide-react';

const OrderConfirmation = () => {
  const location = useLocation();
  const [orderNumber] = useState(() => Math.floor(Math.random() * 10000) + 1000);
  const orderDetails = location.state?.orderDetails;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900 py-8 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Order Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            We couldn't find your order details. Please try placing a new order.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors space-x-2"
          >
            <span>Browse Menu</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 py-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in">
            <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Thank you for your order. We're preparing your delicious burgers!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Details */}
          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 animate-slide-up">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Order Details</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-2 border-b dark:border-dark-600">
                <span className="font-medium text-gray-900 dark:text-white">Order Number</span>
                <span className="text-primary-600 dark:text-primary-400 font-bold">#{orderNumber}</span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b dark:border-dark-600">
                <span className="font-medium text-gray-900 dark:text-white">Payment Method</span>
                <span className="text-gray-600 dark:text-gray-300 capitalize">{orderDetails.paymentMethod}</span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b dark:border-dark-600">
                <span className="font-medium text-gray-900 dark:text-white">Total Amount</span>
                <span className="text-gray-900 dark:text-white font-bold">${orderDetails.total.toFixed(2)}</span>
              </div>
            </div>

            {/* Ordered Items */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Items Ordered</h3>
              <div className="space-y-3">
                {orderDetails.items.map((item: any) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-dark-700 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Quantity: {item.quantity}</p>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Address */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-blue-800 dark:text-blue-400">Delivery Address</span>
              </div>
              <p className="text-blue-700 dark:text-blue-300">{orderDetails.deliveryAddress}</p>
            </div>
          </div>

          {/* Order Tracking */}
          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 animate-slide-up">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Order Status</h2>
            
            {/* Estimated Delivery */}
            <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="font-medium text-green-800 dark:text-green-400">Estimated Delivery</span>
              </div>
              <p className="text-green-700 dark:text-green-300 text-lg font-semibold">
                {orderDetails.estimatedDelivery}
              </p>
            </div>

            {/* Order Progress */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Order Confirmed</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Your order has been received</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Preparing Your Order</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Our chefs are working on your burgers</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 opacity-50">
                <div className="w-8 h-8 bg-gray-300 dark:bg-dark-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500 dark:text-gray-400">Out for Delivery</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-500">Your order is on its way</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 opacity-50">
                <div className="w-8 h-8 bg-gray-300 dark:bg-dark-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">4</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500 dark:text-gray-400">Delivered</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-500">Enjoy your meal!</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Need Help?</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <Phone className="h-4 w-4" />
                  <span>Call us: (555) 123-BURGER</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Order #: {orderNumber}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            to="/menu"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors space-x-2"
          >
            <span>Order Again</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          <button className="inline-flex items-center bg-gray-200 dark:bg-dark-600 hover:bg-gray-300 dark:hover:bg-dark-500 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Track Order
          </button>
        </div>

        {/* Thank You Message */}
        <div className="mt-12 text-center p-6 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-2">Thank You for Choosing BurgerShop!</h2>
          <p className="text-primary-100">
            We appreciate your business and hope you enjoy your delicious burgers. 
            Don't forget to rate your experience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;