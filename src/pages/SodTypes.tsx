import React from 'react';
import { Sun, Cloud, Droplet, Leaf, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const SodType: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    {children}
  </div>
);

const SodTypes: React.FC = () => {
  return (
    <>
      <SEO
        title="Premium Sod Varieties Jacksonville FL | St Augustine, Zoysia, Bermuda | Jax Sod"
        description="Expert sod installation in Jacksonville with premium grass varieties. Choose from St. Augustine Floratam, Zoysia, Bermuda & more. Get your perfect lawn today with Jax Sod's professional installation."
        canonicalUrl="/sod-types"
        schema={{
          "@type": "Product",
          "name": "Jacksonville Sod Installation",
          "description": "Professional sod varieties and installation services",
          "brand": "Jax Sod"
        }}
      />
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">Sod Types</h1>
          <p className="text-xl text-green-700 mb-8">
            At Jax Sod, we offer a variety of sod types to suit different needs and conditions. Explore our selection to find the perfect grass for your lawn.
          </p>

          <SodType title="St. Augustine Floratam" icon={<Sun className="text-yellow-500" size={24} />}>
            <p className="mb-4">St. Augustine Floratam is a popular choice for Florida lawns due to its excellent heat tolerance and dense growth. It thrives in full sun, needing 8 to 10 hours of sunlight daily.</p>
            <h3 className="font-semibold mb-2">Benefits:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Thrives in Florida climate</li>
              <li>Robust growth</li>
              <li>Ideal for residential and commercial properties</li>
            </ul>
            <h3 className="font-semibold mb-2">Care Tips:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Water twice a week (20 minutes to an hour per zone)</li>
              <li>Regular fertilization and mowing</li>
            </ul>
            <p className="font-semibold">Ideal For: Sunny areas with 8-10 hours of daily sunlight and proper irrigation.</p>
          </SodType>

          <SodType title="Shade-Tolerant St. Augustine" icon={<Cloud className="text-gray-500" size={24} />}>
            <p className="mb-4">Shade-tolerant St. Augustine is a hybrid variety that performs well in areas with 4 to 6 hours of sunlight, making it perfect for properties with partial shade.</p>
            <h3 className="font-semibold mb-2">Benefits:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Thrives in partial shade</li>
              <li>More drought-tolerant and bug-resistant</li>
              <li>Increased resistance to cold</li>
            </ul>
            <p className="mb-4"><strong>Note:</strong> Cannot be matched with regular Floratam due to growth differences.</p>
            <p className="font-semibold">Ideal For: Yards with partial shade and those seeking a versatile, all-around better sod option.</p>
          </SodType>

          <SodType title="Zoysia" icon={<Leaf className="text-green-500" size={24} />}>
            <p className="mb-4">Zoysia is an excellent choice for areas where other grasses may struggle, particularly in shaded locations. It has an incredibly strong root system that allows it to thrive in various conditions.</p>
            <h3 className="font-semibold mb-2">Benefits:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Thrives in partial shade</li>
              <li>Dense growth that crowds out weeds</li>
              <li>Requires less frequent mowing</li>
            </ul>
            <p className="mb-4"><strong>Installation Note:</strong> Must be laid in a staggered, zigzag pattern and rolled after installation.</p>
            <p className="font-semibold">Ideal For: Shady areas, high-traffic zones, and areas needing tough, resilient grass with less maintenance.</p>
          </SodType>

          <SodType title="Bermuda" icon={<Zap className="text-yellow-500" size={24} />}>
            <p className="mb-4">Bermuda grass is a common choice for golf courses, athletic fields, and residential lawns due to its durability and resilience in high-traffic areas.</p>
            <h3 className="font-semibold mb-2">Benefits:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Excellent drought tolerance</li>
              <li>Thrives in full sun</li>
              <li>Withstands heavy use</li>
            </ul>
            <p className="mb-4"><strong>Note:</strong> Requires full sun and doesn't do well in shady areas.</p>
            <p className="font-semibold">Ideal For: High-traffic lawns, sports fields, and sunny areas.</p>
          </SodType>

          <SodType title="Bahia" icon={<Droplet className="text-blue-500" size={24} />}>
            <p className="mb-4">Bahia grass is an excellent choice for areas where low maintenance is key. It's frequently used for common areas like medians, roadsides, and around ponds.</p>
            <h3 className="font-semibold mb-2">Benefits:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>No sprinkler system needed</li>
              <li>Extremely hardy and resilient</li>
              <li>Low maintenance</li>
            </ul>
            <p className="mb-4"><strong>Unique Feature:</strong> Can grow even if placed upside down!</p>
            <p className="font-semibold">Ideal For: Low-maintenance areas that need to survive with minimal care, like roadsides or open spaces.</p>
          </SodType>

          <div className="mt-12 text-center">
            <h2 className="text-3xl font-semibold text-green-800 mb-6">Need Help Choosing the Right Sod?</h2>
            <p className="text-xl mb-8">Our experts can help you select the perfect sod type for your specific needs and conditions.</p>
            <a href="/contact" className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
              Get Expert Advice
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SodTypes;

const SodImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="w-full h-auto rounded-lg"
      onError={(e) => {
        e.currentTarget.src = '/fallback-image.jpg';
      }}
    />
  );
};
