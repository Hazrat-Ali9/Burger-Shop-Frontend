import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Users, Car, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const locations = [
    {
      id: 1,
      name: 'Downtown Location',
      address: '123 Main Street, Downtown District',
      city: 'Food City, FC 12345',
      phone: '(555) 123-4567',
      email: 'downtown@gourmetburger.com',
      hours: {
        weekdays: '11:00 AM - 10:00 PM',
        weekends: '11:00 AM - 11:00 PM',
        sunday: '12:00 PM - 9:00 PM'
      },
      features: ['Dine-in', 'Delivery', 'Catering', 'Private Events'],
      manager: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 2,
      name: 'Westside Branch',
      address: '456 Oak Avenue, Westside Mall',
      city: 'Food City, FC 12346',
      phone: '(555) 234-5678',
      email: 'westside@gourmetburger.com',
      hours: {
        weekdays: '10:00 AM - 10:00 PM',
        weekends: '10:00 AM - 11:00 PM',
        sunday: '11:00 AM - 9:00 PM'
      },
      features: ['Dine-in', 'Delivery', 'Drive-thru', 'Kids Area'],
      manager: 'Mike Chen',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 3,
      name: 'Eastgate Store',
      address: '789 Pine Road, Eastgate Plaza',
      city: 'Food City, FC 12347',
      phone: '(555) 345-6789',
      email: 'eastgate@gourmetburger.com',
      hours: {
        weekdays: '11:00 AM - 9:00 PM',
        weekends: '11:00 AM - 10:00 PM',
        sunday: '12:00 PM - 8:00 PM'
      },
      features: ['Dine-in', 'Pickup Only', 'Catering', 'Outdoor Seating'],
      manager: 'Emily Rodriguez',
      image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  const services = [
    {
      title: 'Catering Services',
      description: 'Perfect for corporate events, parties, and special occasions',
      icon: Users,
      details: ['Minimum 10 people', '24-hour advance notice', 'Custom menu options', 'Delivery & setup available']
    },
    {
      title: 'Private Events',
      description: 'Host your celebration in our private dining areas',
      icon: Calendar,
      details: ['Accommodates 20-50 guests', 'Dedicated service staff', 'Customizable menus', 'Audio/visual equipment']
    },
    {
      title: 'Corporate Partnerships',
      description: 'Special rates for businesses and organizations',
      icon: Car,
      details: ['Volume discounts', 'Regular delivery schedules', 'Invoice billing', 'Dedicated account manager']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold font-serif text-primary-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for reservations, catering, or any questions about our delicious burgers!
          </p>
        </div>

        {/* Quick Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-2">(555) 123-BURGER</p>
            <p className="text-sm text-gray-500">Available 10 AM - 10 PM daily</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-2">info@gourmetburger.com</p>
            <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-2">Get instant support</p>
            <button className="text-sm bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
              Start Chat
            </button>
          </div>
        </div>

        {/* Locations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-serif text-primary-900 mb-8 text-center">Our Locations</h2>
          
          {/* Location Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {locations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedLocation === index
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-md'
                }`}
              >
                {location.name}
              </button>
            ))}
          </div>

          {/* Selected Location Details */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{locations[selectedLocation].name}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{locations[selectedLocation].address}</p>
                      <p className="text-gray-600">{locations[selectedLocation].city}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <span>{locations[selectedLocation].phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <span>{locations[selectedLocation].email}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock className="h-5 w-5 text-primary-600" />
                    <h4 className="font-semibold">Operating Hours</h4>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>{locations[selectedLocation].hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>{locations[selectedLocation].hours.weekends}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>{locations[selectedLocation].hours.sunday}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Available Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {locations[selectedLocation].features.map((feature) => (
                      <span key={feature} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Get Directions
                  </button>
                  <button className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-2 rounded-lg font-medium transition-colors">
                    Call Location
                  </button>
                </div>
              </div>
              
              <div className="h-64 lg:h-full">
                <img
                  src={locations[selectedLocation].image}
                  alt={locations[selectedLocation].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-serif text-primary-900 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
                <p className="text-gray-600 text-center mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold font-serif text-primary-900 mb-4">Send Us a Message</h2>
              <p className="text-xl text-gray-600">
                Have a question or special request? We'd love to hear from you!
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="catering">Catering Services</option>
                      <option value="private-events">Private Events</option>
                      <option value="feedback">Feedback</option>
                      <option value="corporate">Corporate Partnerships</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Please share your message, questions, or special requirements..."
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Reservation System */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl shadow-lg text-white p-8 lg:p-12">
          <div className="text-center mb-8">
            <Calendar className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-serif mb-4">Make a Reservation</h2>
            <p className="text-xl text-primary-100">
              Reserve your table for the perfect dining experience
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Same Day</div>
              <p className="text-primary-100 text-sm">Walk-ins welcome based on availability</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Advance</div>
              <p className="text-primary-100 text-sm">Book up to 30 days in advance</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Groups 8+</div>
              <p className="text-primary-100 text-sm">Special arrangements for large parties</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Make Reservation
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;