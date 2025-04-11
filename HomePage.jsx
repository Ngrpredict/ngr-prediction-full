import React from 'react';

const HomePage = () => (
  <div className="p-8 text-center">
    <h1 className="text-3xl font-bold mb-4">Welcome to NGR Predictions</h1>
    <p className="mb-6">98.9% accurate football prediction platform.</p>
    <a href="/free-predictions" className="bg-green-600 text-white px-4 py-2 rounded mr-2">Free Predictions</a>
    <a href="/pricing" className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Pricing</a>
    <a href="/admin" className="bg-gray-800 text-white px-4 py-2 rounded">Admin Panel</a>
  </div>
);

export default HomePage;