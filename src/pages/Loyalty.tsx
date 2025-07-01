import React, { useState } from 'react';
import { Star, Gift, Crown, Calendar, Users, Trophy, Zap } from 'lucide-react';

const Loyalty = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [currentPoints, setCurrentPoints] = useState(1250);

  const membershipTiers = [
    {
      name: 'Bronze Member',
      points: '0-999',
      color: 'from-amber-600 to-amber-800',
      benefits: ['5% off all orders', 'Birthday burger', 'Exclusive member offers']
    },
    {
      name: 'Silver Member',
      points: '1000-2499',
      color: 'from-gray-400 to-gray-600',
      benefits: ['10% off all orders', 'Free appetizer monthly', 'Priority customer service', 'Early access to new items']
    },
    {
      name: 'Gold Member',
      points: '2500-4999',
      color: 'from-yellow-400 to-yellow-600',
      benefits: ['15% off all orders', 'Free delivery always', 'Monthly free burger', 'VIP events invitation']
    },
    {
      name: 'Platinum Member',
      points: '5000+',
      color: 'from-purple-400 to-purple-600',
      benefits: ['20% off all orders', 'Personal chef consultation', 'Unlimited free sides', 'Custom burger creation']
    }
  ];

  const rewardOptions = [
    { id: 1, name: 'Free Classic Burger', points: 500, image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 2, name: 'Free Fries & Drink', points: 300, image: 'https://images.pexels.com/photos/1552211/pexels-photo-1552211.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 3, name: 'Free Appetizer', points: 400, image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 4, name: 'Signature Burger', points: 800, image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 5, name: '$10 Off Next Order', points: 600, image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 6, name: 'Free Dessert', points: 250, image: 'https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ];

  const specialOffers = [
    {
      title: 'Double Points Weekend',
      description: 'Earn 2x points on all orders this weekend!',
      validity: 'Valid until Sunday',
      icon: Zap,
      color: 'bg-yellow-500'
    },
    {
      title: 'Refer a Friend',
      description: 'Get 500 bonus points for each friend you refer!',
      validity: 'Ongoing offer',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Birthday Special',
      description: 'Free birthday burger + 200 bonus points!',
      validity: 'During your birthday month',
      icon: Gift,
      color: 'bg-pink-500'
    }
  ];

  const currentTier = membershipTiers.find(tier => {
    const [min, max] = tier.points.includes('+') 
      ? [parseInt(tier.points.split('+')[0]), Infinity]
      : tier.points.split('-').map(p => parseInt(p));
    return currentPoints >= min && currentPoints <= max;
  });

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Crown className="h-12 w-12 text-gold-500 mr-3" />
            <h1 className="text-5xl font-bold font-serif text-primary-900">Loyalty Club</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our exclusive loyalty program and earn rewards with every delicious bite!
          </p>
        </div>

        {!isSignedUp ? (
          /* Sign Up Section */
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Join the Club Today!</h2>
              <p className="text-gray-600 mb-6">
                Start earning points immediately and unlock exclusive member benefits
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">100</div>
                  <p className="text-sm text-gray-600">Welcome Bonus Points</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">1:1</div>
                  <p className="text-sm text-gray-600">Point per Dollar Spent</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">Free</div>
                  <p className="text-sm text-gray-600">Birthday Burger</p>
                </div>
              </div>
              <button 
                onClick={() => setIsSignedUp(true)}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Join Now - It's Free!
              </button>
            </div>
          </div>
        ) : (
          /* Member Dashboard */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Points Balance */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">Your Points</h3>
                <div className="text-4xl font-bold text-gold-600 mb-2">{currentPoints.toLocaleString()}</div>
                <p className="text-gray-600">Available to redeem</p>
              </div>
            </div>

            {/* Current Tier */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${currentTier?.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">{currentTier?.name}</h3>
                <p className="text-gray-600 mb-2">{currentTier?.points} points</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gold-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">750 points to next tier</p>
              </div>
            </div>

            {/* Next Reward */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">Next Reward</h3>
                <p className="text-lg font-medium text-green-600 mb-2">Free Fries & Drink</p>
                <p className="text-gray-600">Only 50 more points needed!</p>
              </div>
            </div>
          </div>
        )}

        {/* Membership Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-serif text-primary-900 mb-8 text-center">Membership Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTiers.map((tier, index) => (
              <div key={tier.name} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                currentTier?.name === tier.name ? 'ring-2 ring-gold-400' : ''
              }`}>
                <div className={`h-4 bg-gradient-to-r ${tier.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.points} points</p>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Star className="h-4 w-4 text-gold-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  {currentTier?.name === tier.name && (
                    <div className="mt-4 bg-gold-50 text-gold-800 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      Current Tier
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rewards Catalog */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-serif text-primary-900 mb-8 text-center">Redeem Your Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewardOptions.map((reward) => (
              <div key={reward.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={reward.image}
                  alt={reward.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{reward.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-gold-500 mr-1" />
                      <span className="font-bold text-gold-600">{reward.points}</span>
                      <span className="text-gray-600 ml-1">points</span>
                    </div>
                    <button 
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        currentPoints >= reward.points
                          ? 'bg-primary-600 hover:bg-primary-700 text-white'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={currentPoints < reward.points}
                    >
                      {currentPoints >= reward.points ? 'Redeem' : 'Not Enough Points'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Offers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-serif text-primary-900 mb-8 text-center">Special Member Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialOffers.map((offer) => (
              <div key={offer.title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${offer.color} rounded-full flex items-center justify-center mr-4`}>
                    <offer.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{offer.title}</h3>
                    <p className="text-sm text-gray-500">{offer.validity}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h2 className="text-3xl font-bold font-serif text-primary-900 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Sign Up</h3>
              <p className="text-gray-600 text-sm">Join our loyalty program for free and get 100 welcome points</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Earn Points</h3>
              <p className="text-gray-600 text-sm">Get 1 point for every $1 spent on all your favorite items</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Unlock Tiers</h3>
              <p className="text-gray-600 text-sm">Advance through membership tiers for better rewards and perks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Redeem Rewards</h3>
              <p className="text-gray-600 text-sm">Use your points for free food, discounts, and exclusive offers</p>
            </div>
          </div>
        </section>

        {/* Digital Punch Card */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl shadow-lg text-white p-8 lg:p-12">
          <div className="text-center mb-8">
            <Trophy className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-serif mb-4">Digital Punch Card</h2>
            <p className="text-xl text-primary-100">Buy 9 burgers, get the 10th free!</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="grid grid-cols-5 gap-4 mb-6">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className={`aspect-square rounded-lg border-2 border-dashed flex items-center justify-center ${
                      index < 6
                        ? 'bg-gold-400 border-gold-300'
                        : 'border-white border-opacity-50'
                    }`}
                  >
                    {index < 6 ? (
                      <span className="text-2xl">🍔</span>
                    ) : index === 9 ? (
                      <Gift className="h-6 w-6 text-white opacity-50" />
                    ) : (
                      <span className="text-white opacity-50 text-lg">{index + 1}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-lg mb-2">6 out of 9 purchases complete</p>
                <p className="text-primary-100">Just 3 more burgers to earn your free reward!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Loyalty;