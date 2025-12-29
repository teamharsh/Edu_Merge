'use client';

import React, { useState } from 'react';
import { FaCheckCircle, FaRegTimesCircle } from 'react-icons/fa';

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: 'Intro',
      price: 29,
      description: 'Perfect for individuals starting their journey',
      features: [
        '5GB Storage',
        'Basic Email Support',
        '2 Basic Integrations',
        'Basic Performance Metrics',
        'Limited API Access',
        '1 Custom Domain',
        '1 Training Session',
        'Standard Security',
        'Monthly Updates',
        'Basic Community Access',
      ],
      color: 'bg-blue-50',
      buttonColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
    },
    {
      name: 'Base',
      price: 49,
      description: 'Designed for small teams and growing businesses',
      features: [
        '20GB Storage',
        'Priority Email Support',
        '5 Premium Integrations',
        'Advanced Performance Metrics',
        'Full API Access',
        '3 Custom Domains',
        '3 Training Sessions',
        'Enhanced Security',
        'Weekly Updates',
        'Full Community Access',
      ],
      color: 'bg-green-50',
      buttonColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
    },
    {
      name: 'Popular',
      price: 99,
      description: 'Advanced features for professional developers',
      features: [
        '50GB Storage',
        '24/7 Phone Support',
        'Unlimited Integrations',
        'Real-time Performance Metrics',
        'Advanced API Tools',
        '5 Custom Domains',
        '10 Training Sessions',
        'Premium Security Suite',
        'Daily Updates',
        'Premium Community Access',
      ],
      color: 'bg-purple-50',
      buttonColor: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700',
      popular: true,
    },
    {
      name: 'Premium',
      price: 199,
      description: 'Enterprise-grade solutions for large organizations',
      features: [
        'Unlimited Storage',
        '24/7 Dedicated Support',
        'Custom Integrations',
        'Custom Performance Metrics',
        'Enterprise API Solutions',
        'Unlimited Custom Domains',
        'Unlimited Training',
        'Enterprise Security',
        'Instant Updates',
        'VIP Community Access',
      ],
      color: 'bg-orange-50',
      buttonColor: 'bg-orange-600',
      hoverColor: 'hover:bg-orange-700',
    },
  ];

  //@ts-ignore
  const handlePlanSelect = (planName) => {
    setSelectedPlan(planName);
    console.log(`Selected plan: ${planName}`);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg:dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get an attractive price here
          </h2>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
            Choose the perfect plan that suits your needs. Unlock powerful
            features and grow your business with our flexible pricing options.
          </p>
        </div>

        <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${plan.color}`}>
              <div className="p-6">
                {plan.popular && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-4xl font-extrabold">${plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </div>
                <p className="mt-4 text-sm text-gray-600">{plan.description}</p>
              </div>
              <div className="px-6 pt-6 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-sm text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button
                    onClick={() => handlePlanSelect(plan.name)}
                    className={`w-full px-6 py-3 text-base font-medium text-white ${plan.buttonColor} ${plan.hoverColor} rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 transition-colors duration-200`}>
                    Choose {plan.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
