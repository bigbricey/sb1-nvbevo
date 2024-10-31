import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Partnerships = () => {
    return (
        <Layout>
            <SEO title="Partnership Opportunities" description="Explore partnership opportunities with JaxSod for mutual growth and backlink benefits." />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Partnership Opportunities</h1>
                <p>At JaxSod, we believe in the power of community and collaboration. We are actively seeking partnerships with local businesses to create mutually beneficial relationships.</p>
                <h2 className="text-2xl font-bold mt-6 mb-2">Why Partner with Us?</h2>
                <ul className="list-disc pl-5">
                    <li>Enhance your business visibility through our network.</li>
                    <li>Gain quality backlinks to improve your SEO.</li>
                    <li>Collaborate on community events and initiatives.</li>
                </ul>
                <h2 className="text-2xl font-bold mt-6 mb-2">Get Involved</h2>
                <p>If you're interested in partnering with us, please contact us to discuss potential opportunities. Together, we can grow and support our local community.</p>
            </div>
        </Layout>
    );
};

export default Partnerships;
