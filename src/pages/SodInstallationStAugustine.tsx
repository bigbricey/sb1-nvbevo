import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const SodInstallationStAugustine = () => {
    return (
        <Layout>
            <SEO 
                title="St. Augustine Sod Installation & Lawn Services | Jax Sod" 
                description="Expert sod installation in St. Augustine, FL. Premium grass varieties, professional installation, soil preparation & lawn renovation services. Free estimates." 
            />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Sod Installation in St. Augustine</h1>
                <p>Transform your lawn with our professional sod installation services in St. Augustine. Our team of experts ensures a lush, green lawn that enhances your property's curb appeal.</p>
                <h2 className="text-2xl font-bold mt-6 mb-2">Why Choose Us?</h2>
                <ul className="list-disc pl-5">
                    <li>Experienced professionals with a passion for lawn care.</li>
                    <li>High-quality sod varieties suitable for Florida's climate.</li>
                    <li>Comprehensive installation and maintenance services.</li>
                </ul>
                <h2 className="text-2xl font-bold mt-6 mb-2">Contact Us</h2>
                <p>Ready to upgrade your lawn? Contact us today for a free consultation and quote. Our team is here to help you achieve the lawn of your dreams.</p>
            </div>
        </Layout>
    );
};

export default SodInstallationStAugustine;
