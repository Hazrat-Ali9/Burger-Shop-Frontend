import React, { useState } from 'react';
import { MapPin, Clock, CreditCard, Truck, Users, Phone } from 'lucide-react';

const Ordering = () => {
  const [orderType, setOrderType] = useState('delivery');
  const [selectedLocation, setSelectedLocation] = useState('');

  const locations = [
    { id: 1, name: 'Downtown Location', address: '123 Main St, Downtown', phone: '(555) 123-4567' },
    { id: 2, name: 'Westside Branch', address: '456 Oak Ave, Westside', phone: '(555) 234-5678' },
    { id: 3, name: 'Eastgate Store', address: '789 Pine Rd, Eastgate', phone: '(555) 345-6789' },
  ];

  const deliveryZones = [
    { zone: 'Zone 1', time: '20-30 min', fee: 'Free', areas: ['Downtown', 'City Center', 'Financial District'] },
    { zone: 'Zone 2', time: '25-35 min', fee: '$2.99', areas: ['Westside', 'Riverside', 'University Area'] },
    { zone: 'Zone 3', time: '30-45 min', fee: '$4.99', areas: ['Eastgate', 'Suburbs', 'Industrial Area'] },
  ];

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'paypal', name: 'PayPal', icon: CreditCard },
    { id: 'apple', name: 'Apple Pay', icon: CreditCard },
    { id: 'google', name: 'Google Pay', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold font-serif text-primary-900 mb-4">Order Online</h1>
          <p className="text-xl text-gray-600">Fast, convenient ordering with real-time tracking</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Options */}
          <div className="lg:col-span-2 space-y-8">
            {/* Order Type Selection */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">How would you like to receive your order?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setOrderType('delivery')}
                  className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                    orderType === 'delivery'
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <Truck className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Delivery</h3>
                  <p className="text-gray-600 text-sm">We'll bring it to your door</p>
                  <p className="text-primary-600 font-medium mt-2">20-45 min</p>
                </button>

                <button
                  onClick={() => setOrderType('pickup')}
                  className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                    orderType === 'pickup'
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <MapPin className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Pickup</h3>
                  <p className="text-gray-600 text-sm">Order ahead and skip the line</p>
                  <p className="text-primary-600 font-medium mt-2">15-25 min</p>
                </button>
              </div>
            </div>

            {/* Delivery Zones */}
            {orderType === 'delivery' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Delivery Information</h2>
                <div className="space-y-4">
                  {deliveryZones.map((zone) => (
                    <div key={zone.zone} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{zone.zone}</h3>
                        <div className="text-right">
                          <p className="text-primary-600 font-medium">{zone.time}</p>
                          <p className="text-sm text-gray-600">Delivery: {zone.fee}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Covers: {zone.areas.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Truck className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-800">Free Delivery</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    On orders over $25 within Zone 1 • $35 for Zone 2 • $45 for Zone 3
                  </p>
                </div>
              </div>
            )}

            {/* Pickup Locations */}
            {orderType === 'pickup' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Choose Your Pickup Location</h2>
                <div className="space-y-4">
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                        selectedLocation === location.id
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                      onClick={() => setSelectedLocation(location.id)}
                    >
                      <h3 className="font-semibold text-lg mb-1">{location.name}</h3>
                      <p className="text-gray-600 mb-2">{location.address}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Phone className="h-4 w-4" />
                        <span>{location.phone}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Group Ordering */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-primary-600" />
                <h2 className="text-2xl font-bold">Group Ordering</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Planning a meal for your team or family? Start a group order and let everyone add their items!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Start Group Order</h3>
                  <p className="text-sm text-gray-600 mb-3">Create a shared cart that others can add to</p>
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition-colors">
                    Create Group Order
                  </button>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Join Group Order</h3>
                  <p className="text-sm text-gray-600 mb-3">Have an invitation code? Join an existing order</p>
                  <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg font-medium transition-colors">
                    Join Order
                  </button>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="p-4 border rounded-lg text-center hover:border-primary-300 transition-colors cursor-pointer">
                    <method.icon className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                    <p className="text-sm font-medium">{method.name}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Secure Payment</h3>
                <p className="text-blue-700 text-sm">
                  All transactions are encrypted and secure. We never store your payment information.
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="space-y-6">
            {/* Current Order */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h3 className="text-xl font-bold mb-4">Your Order</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b">
                  <div>
                    <p className="font-medium">Wagyu Truffle Deluxe</p>
                    <p className="text-sm text-gray-600">x1</p>
                  </div>
                  <span className="font-medium">$24.99</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <div>
                    <p className="font-medium">Classic Cheeseburger</p>
                    <p className="text-sm text-gray-600">x2</p>
                  </div>
                  <span className="font-medium">$29.98</span>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$54.97</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>$2.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$4.64</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>$62.60</span>
                </div>
              </div>
              
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold mt-6 transition-colors">
                Proceed to Checkout
              </button>
            </div>

            {/* Estimated Time */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-primary-600" />
                <h3 className="text-lg font-semibold">Estimated Time</h3>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">25-35</p>
                <p className="text-gray-600">minutes</p>
              </div>
            </div>

            {/* Special Offers */}
            <div className="bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">🎉 Special Offer</h3>
              <p className="text-sm mb-3">Add one more item over $15 to get free delivery!</p>
              <button className="w-full bg-white text-gold-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Browse Menu
              </button>
            </div>
          </div>
        </div>

        {/* Order Tracking Preview */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold font-serif text-primary-900 mb-6 text-center">
            Real-Time Order Tracking
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-sm font-medium">Order Confirmed</p>
              </div>
              <div className="flex-1 h-1 bg-green-500 mx-4"></div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-sm font-medium">Preparing</p>
              </div>
              <div className="flex-1 h-1 bg-yellow-400 mx-4"></div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2 animate-pulse">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-medium">Out for Delivery</p>
              </div>
              <div className="flex-1 h-1 bg-gray-300 mx-4"></div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-500 font-bold">4</span>
                </div>
                <p className="text-sm font-medium text-gray-500">Delivered</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium mb-2">Your order is on its way!</p>
              <p className="text-gray-600">Estimated arrival: 8 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordering;