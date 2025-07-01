import React from 'react';
import { Award, Users, Leaf, Shield, Heart, ChefHat } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2010', event: 'Founded with a dream to create the perfect burger' },
    { year: '2012', event: 'Opened our first location in downtown' },
    { year: '2015', event: 'Expanded to 5 locations across the city' },
    { year: '2018', event: 'Introduced our signature wagyu burger line' },
    { year: '2020', event: 'Launched online ordering and delivery service' },
    { year: '2022', event: 'Achieved carbon-neutral operations' },
    { year: '2024', event: 'Celebrating 15 locations and 1M+ satisfied customers' },
  ];

  const team = [
    {
      name: 'Chef Marcus Thompson',
      role: 'Executive Chef & Co-Founder',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Culinary Institute graduate with 20+ years of experience in fine dining and burger craftsmanship.'
    },
    {
      name: 'Sarah Williams',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'MBA in Operations Management, ensuring every location maintains our high standards of quality and service.'
    },
    {
      name: 'David Park',
      role: 'Sustainability Director',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Environmental science expert leading our eco-friendly initiatives and sustainable sourcing programs.'
    },
  ];

  const certifications = [
    { name: 'USDA Organic Certified', icon: Leaf },
    { name: 'Food Safety Grade A', icon: Shield },
    { name: 'Sustainable Restaurant Certified', icon: Award },
    { name: 'Local Sourcing Partner', icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-serif text-primary-900 mb-4">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small dream to a culinary destination, discover the passion and dedication 
            behind every burger we serve.
          </p>
        </div>

        {/* Hero Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary-900 mb-6">
                Where It All Began
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In 2010, Chef Marcus Thompson had a simple yet ambitious vision: to create the perfect burger 
                experience that would satisfy both food enthusiasts and casual diners alike. What started as 
                a small food truck operation has grown into a beloved restaurant chain known for its commitment 
                to quality, innovation, and exceptional customer service.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We believe that great food brings people together, and every burger we craft tells a story 
                of carefully selected ingredients, masterful preparation, and genuine care for our customers' 
                dining experience.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we're proud to serve over 10,000 customers weekly across our 15 locations, 
                each maintaining the same dedication to excellence that started it all.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Chef preparing burgers"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-lg">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-serif text-primary-900 mb-8 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-center mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20 text-right mr-6">
                  <span className="text-2xl font-bold text-primary-600">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mr-6 relative">
                  {index < milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-primary-200"></div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kitchen Tour */}
        <section className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <ChefHat className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold font-serif text-primary-900">Kitchen Excellence</h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Step inside our state-of-the-art kitchen where culinary magic happens daily. Our open-kitchen 
                concept allows you to witness the artistry and precision that goes into every burger.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Fresh ingredients prepared daily on-site</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Hand-formed patties made to order</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Specialized grilling techniques for perfect texture</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="text-gray-700">Zero artificial preservatives or additives</span>
                </li>
              </ul>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Schedule Kitchen Tour
              </button>
            </div>
            <div 
              className="h-64 lg:h-full bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&w=600)'
              }}
            ></div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-primary-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind your perfect burger experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Ingredients */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl shadow-lg text-white p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold font-serif mb-4">Premium Ingredients, Every Time</h2>
              <p className="text-xl text-green-100">
                We partner with local farms and premium suppliers to ensure the highest quality ingredients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥩</span>
                </div>
                <h3 className="font-semibold mb-2">Premium Beef</h3>
                <p className="text-sm text-green-100">Grass-fed, hormone-free beef from local ranches</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥬</span>
                </div>
                <h3 className="font-semibold mb-2">Fresh Produce</h3>
                <p className="text-sm text-green-100">Organic vegetables delivered daily from local farms</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧀</span>
                </div>
                <h3 className="font-semibold mb-2">Artisan Cheese</h3>
                <p className="text-sm text-green-100">Hand-selected cheeses from award-winning dairies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍞</span>
                </div>
                <h3 className="font-semibold mb-2">Fresh Baked Buns</h3>
                <p className="text-sm text-green-100">Baked fresh daily in our own bakery kitchens</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-primary-900 mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-600">Committed to the highest standards of quality and safety</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold">{cert.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Sustainability */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold font-serif text-primary-900 mb-4">Sustainability Commitment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're dedicated to protecting our planet while serving delicious food
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-50 rounded-lg p-6 mb-4">
                <h3 className="font-semibold text-lg mb-2">Carbon Neutral Operations</h3>
                <p className="text-gray-600">100% renewable energy across all locations</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <h3 className="font-semibold text-lg mb-2">Zero Waste Initiative</h3>
                <p className="text-gray-600">95% of our waste is recycled or composted</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-50 rounded-lg p-6 mb-4">
                <h3 className="font-semibold text-lg mb-2">Local Sourcing</h3>
                <p className="text-gray-600">80% of ingredients sourced within 100 miles</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;