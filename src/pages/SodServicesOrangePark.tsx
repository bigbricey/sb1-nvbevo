import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const SodServicesOrangePark = () => {
    return (
        <Layout>
            <SEO 
                title="Orange Park Sod Installation & Lawn Services | Jax Sod" 
                description="Premium sod installation in Orange Park, FL. St. Augustine, Zoysia & Bermuda grass experts. Quality installation, competitive pricing & 5-star service." 
            />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Sod Services in Orange Park</h1>
                <p>Our professional sod services in Orange Park are designed to give you a beautiful, healthy lawn. Whether you need installation, maintenance, or repair, we have you covered.</p>
                <h2 className="text-2xl font-bold mt-6 mb-2">Our Services</h2>
                <ul className="list-disc pl-5">
                    <li>Sod installation tailored to your landscape.</li>
                    <li>Regular maintenance to keep your lawn in top condition.</li>
                    <li>Repair services for damaged or patchy areas.</li>
                </ul>
                <h2 className="text-2xl font-bold mt-6 mb-2">Get in Touch</h2>
                <p>Contact us today to learn more about our sod services in Orange Park. Our team is ready to assist you with all your lawn care needs.</p>
            </div>
        </Layout>
    );
};

export default SodServicesOrangePark;
