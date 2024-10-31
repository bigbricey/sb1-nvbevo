import React from 'react';
import {
  Sun,
  Cloud,
  Droplet,
  Shield,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import SEO from '../components/SEO';

export default function SodTypes() {
  return (
    <>
      <SEO
        title="Ultimate Guide to Sod Varieties in Jacksonville, FL | Jax Sod"
        description="Discover the best sod types for your Jacksonville, FL lawn. Explore St. Augustine, Zoysia, Bermuda, and Bahia grass varieties with Jax Sod."
      />

      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <h1 className="text-5xl font-bold text-green-800 mb-10 text-center">
            Ultimate Guide to Sod Varieties in Jacksonville, FL
          </h1>
          <p className="text-xl text-gray-700 mb-16 text-center">
            Choose the perfect sod for your lawn with our comprehensive guide.
            Learn about maintenance, climate tolerance, and find the best fit
            for your Jacksonville yard.
          </p>

          {/* Quick Selection Guide */}
          <section className="mb-16">
            <h2 className="text-4xl font-semibold text-green-700 mb-8">
              Quick Selection Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  For Shaded Yards
                </h3>
                <p className="text-gray-700">
                  <CheckCircle className="inline-block text-green-500 mr-2" />
                  Palmetto St. Augustine
                </p>
                <p className="text-gray-700">
                  <CheckCircle className="inline-block text-green-500 mr-2" />
                  Bitter Blue St. Augustine
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  For Full Sun Areas
                </h3>
                <p className="text-gray-700">
                  <CheckCircle className="inline-block text-green-500 mr-2" />
                  Floratam St. Augustine
                </p>
                <p className="text-gray-700">
                  <CheckCircle className="inline-block text-green-500 mr-2" />
                  Bermuda Grass
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  For High Traffic Areas
                </h3>
                <p className="text-gray-700">
                  <CheckCircle className="inline-block text-green-500 mr-2" />
                  Zoysia Grass
                </p>
                <p className="text-gray-700">
                  <CheckCircle className="inline-block text-green-500 mr-2" />
                  Bermuda Grass
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  For Low Maintenance
                </h3>
                <p className="text-gray-700">
                  <CheckCircle className="inline-block text-green-500 mr-2" />
                  Argentine Bahia
                </p>
              </div>
            </div>
          </section>

          {/* St. Augustine Grass Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-semibold text-green-700 mb-8">
              St. Augustine Grass - Jacksonville's Favorite
            </h2>
            <p className="text-gray-700 mb-6">
              St. Augustine grass is a popular choice among Jacksonville
              homeowners due to its lush appearance and adaptability to the
              local climate. Let's explore the different varieties available.
            </p>

            {/* Floratam St. Augustine */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-green-600 mb-4">
                Floratam St. Augustine
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Best For:</strong> Lawns with full sun exposure.
                </li>
                <li>
                  <strong>Sunlight Needs:</strong> Requires 8-10 hours of direct
                  sunlight daily.
                </li>
                <li>
                  <strong>Water Requirements:</strong> Moderate to high.
                </li>
                <li>
                  <strong>Maintenance Level:</strong> Medium.
                </li>
                <li>
                  <strong>Features:</strong> Excellent heat tolerance, vibrant
                  green color, and resistance to chinch bugs.
                </li>
                <li>
                  <strong>Considerations:</strong> Not suitable for shaded
                  areas.
                </li>
              </ul>
            </div>

            {/* Palmetto St. Augustine */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-green-600 mb-4">
                Palmetto St. Augustine
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Best For:</strong> Yards with partial shade.
                </li>
                <li>
                  <strong>Sunlight Needs:</strong> Thrives with 4-6 hours of
                  sunlight.
                </li>
                <li>
                  <strong>Water Requirements:</strong> Moderate.
                </li>
                <li>
                  <strong>Maintenance Level:</strong> Medium.
                </li>
                <li>
                  <strong>Features:</strong> Exceptional shade tolerance and
                  maintains color in cooler temperatures.
                </li>
                <li>
                  <strong>Considerations:</strong> Slightly less drought
                  tolerant than Floratam.
                </li>
              </ul>
            </div>

            {/* Bitter Blue St. Augustine */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-green-600 mb-4">
                Bitter Blue St. Augustine
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Best For:</strong> Heavily shaded residential areas.
                </li>
                <li>
                  <strong>Sunlight Needs:</strong> Minimum of 3-4 hours of
                  sunlight.
                </li>
                <li>
                  <strong>Water Requirements:</strong> Moderate.
                </li>
                <li>
                  <strong>Maintenance Level:</strong> Low to medium.
                </li>
                <li>
                  <strong>Features:</strong> Superior shade tolerance and
                  distinctive blue-green hue.
                </li>
                <li>
                  <strong>Considerations:</strong> Slower growth rate requires
                  patience during establishment.
                </li>
              </ul>
            </div>
          </section>

          {/* Zoysia Grass Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-semibold text-green-700 mb-8">
              Zoysia Grass - The Luxury Lawn
            </h2>
            <p className="text-gray-700 mb-6">
              Zoysia grass is known for its dense, carpet-like texture and is
              ideal for homeowners seeking a premium look for their lawns.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Best For:</strong> High-end residential lawns with
                moderate traffic.
              </li>
              <li>
                <strong>Sunlight Needs:</strong> Tolerates full sun to partial
                shade.
              </li>
              <li>
                <strong>Water Requirements:</strong> Moderate once established.
              </li>
              <li>
                <strong>Maintenance Level:</strong> Medium to high.
              </li>
              <li>
                <strong>Features:</strong> Excellent wear resistance and
                drought tolerance.
              </li>
              <li>
                <strong>Considerations:</strong> Higher initial cost and slower
                establishment period.
              </li>
            </ul>
          </section>

          {/* Bermuda Grass Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-semibold text-green-700 mb-8">
              Bermuda Grass - The Athletic Choice
            </h2>
            <p className="text-gray-700 mb-6">
              Bermuda grass is favored for its durability and is commonly used on
              sports fields and golf courses.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Best For:</strong> High-traffic areas and athletic
                fields.
              </li>
              <li>
                <strong>Sunlight Needs:</strong> Requires full sun exposure.
              </li>
              <li>
                <strong>Water Requirements:</strong> Moderate.
              </li>
              <li>
                <strong>Maintenance Level:</strong> High.
              </li>
              <li>
                <strong>Features:</strong> Quick recovery from wear and
                excellent heat tolerance.
              </li>
              <li>
                <strong>Considerations:</strong> Aggressive growth can invade
                garden beds.
              </li>
            </ul>
          </section>

          {/* Bahia Grass Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-semibold text-green-700 mb-8">
              Bahia Grass - The Low-Maintenance Option
            </h2>
            <p className="text-gray-700 mb-6">
              Bahia grass is an economical choice that requires minimal
              maintenance, perfect for large properties.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Best For:</strong> Large, open areas with low foot
                traffic.
              </li>
              <li>
                <strong>Sunlight Needs:</strong> Thrives in full sun.
              </li>
              <li>
                <strong>Water Requirements:</strong> Low; highly drought
                tolerant.
              </li>
              <li>
                <strong>Maintenance Level:</strong> Low.
              </li>
              <li>
                <strong>Features:</strong> Deep root system and excellent
                erosion control.
              </li>
              <li>
                <strong>Considerations:</strong> Coarser texture and less
                visually appealing.
              </li>
            </ul>
          </section>

          {/* Maintenance Tips Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-semibold text-green-700 mb-8">
              Essential Maintenance Tips
            </h2>

            {/* Watering Guidelines */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-green-600 mb-4">
                Watering Guidelines
              </h3>
              <p className="text-gray-700 mb-4">
                Proper watering is crucial for a healthy lawn. Here's what you
                need to know:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>New Sod:</strong> Water daily for the first 2-3 weeks.
                </li>
                <li>
                  <strong>Established Sod:</strong> Water 1-2 times per week,
                  depending on rainfall.
                </li>
                <li>
                  <strong>Best Time:</strong> Early morning to reduce
                  evaporation.
                </li>
                <li>
                  <strong>Amount:</strong> Aim for 1 inch of water per week.
                </li>
              </ul>
            </div>

            {/* Mowing Recommendations */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-green-600 mb-4">
                Mowing Recommendations
              </h3>
              <p className="text-gray-700 mb-4">
                Regular mowing keeps your lawn healthy and looking its best.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>St. Augustine:</strong> Mow at 3.5 - 4 inches.
                </li>
                <li>
                  <strong>Zoysia:</strong> Mow at 1.5 - 2.5 inches.
                </li>
                <li>
                  <strong>Bermuda:</strong> Mow at 1 - 2 inches.
                </li>
                <li>
                  <strong>Bahia:</strong> Mow at 3 - 4 inches.
                </li>
                <li>
                  <strong>Tip:</strong> Never cut more than one-third of the
                  grass blade at a time.
                </li>
              </ul>
            </div>

            {/* Fertilization Schedule */}
            <div>
              <h3 className="text-3xl font-bold text-green-600 mb-4">
                Fertilization Schedule
              </h3>
              <p className="text-gray-700 mb-4">
                Fertilizing your lawn provides essential nutrients for growth.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Spring:</strong> Apply a balanced fertilizer in March
                  or April.
                </li>
                <li>
                  <strong>Summer:</strong> Use a nitrogen-rich fertilizer in
                  June.
                </li>
                <li>
                  <strong>Fall:</strong> Apply a potassium-rich fertilizer in
                  September.
                </li>
                <li>
                  <strong>Winter:</strong> Fertilization is generally not
                  necessary.
                </li>
                <li>
                  <strong>Tip:</strong> Always follow the manufacturer's
                  instructions.
                </li>
              </ul>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="mb-16 text-center">
            <h2 className="text-4xl font-semibold text-green-700 mb-8">
              Need Expert Advice?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Choosing the right sod can be overwhelming. Let our experts help
              you make the best decision for your lawn.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:9049011457"
                className="bg-white text-green-800 border border-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
              >
                Call Us at (904) 901-1457
              </a>
              <a
                href="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </section>

          {/* Last Updated */}
          <p className="text-sm text-gray-500 text-center">
            *Last Updated: October 2023*
          </p>
        </div>
      </div>
    </>
  );
}
