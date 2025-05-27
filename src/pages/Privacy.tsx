import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactComponent from "@/components/Contact";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Policy = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy <span className="text-gradient-blue">Policy </span>
              </h1>
              <p className="text-xl text-gray-700">
                We'd love to hear from you. Reach out with questions, partnership ideas, or to learn more
                about our programs.
              </p>
            </div>
          </div>
        </section>

        {/* Policies container with left margin and max width */}
        <div className="max-w-3xl ml-8 md:ml-20">
          <section className="mb-8">
            <h2 className="text-blue-700 font-bold text-xl mb-2">1. Acceptance of Terms</h2>
            <p>By accessing or using this website, you agree to be bound by these Website Policies, including our Privacy Policy, Terms of Service, and Cookie Policy. If you do not agree, please discontinue use of the website.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-blue-700 font-bold text-xl mb-2">2. Privacy Policy</h2>
            <p>We respect your privacy. Information collected through this website is governed by our Privacy Policy, which details how we collect, use, and protect your data. Please review the full <a href="#" className="text-blue-600 underline">Privacy Policy</a> for more information.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-blue-700 font-bold text-xl mb-2">3. Terms of Use</h2>
            <p>You agree to use this website only for lawful purposes. You are prohibited from:</p>
            <ul>
              <li>Violating any applicable laws or regulations;</li>
              <li>Uploading harmful content or malware;</li>
              <li>Attempting unauthorized access to systems or accounts;</li>
              <li>Using the site for fraudulent or misleading activities.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-blue-700 font-bold text-xl mb-2">4. Intellectual Property</h2>
            <p>All content on this website—including text, graphics, logos, images, audio, video, and software—is the property of [Your Company] or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or exploit the content without written permission.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-blue-700 font-bold text-xl mb-2">5. User-Generated Content</h2>
            <p>By submitting content (e.g., comments, reviews) to the website, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and publish it. We reserve the right to moderate or remove user content at our discretion.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-blue-700 font-bold text-xl mb-2">6. Third-Party Links</h2>
            <p>This website may contain links to external sites that are not operated by us. We are not responsible for the content, accuracy, or privacy practices of these third-party sites.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-blue-700 font-bold text-xl mb-2">7. Cookies</h2>
            <p>We use cookies to enhance user experience and analyze website traffic. By continuing to use our site, you consent to our use of cookies as outlined in our <a href="#" className="text-blue-600 underline">Cookie Policy</a>.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-blue-700 font-bold text-xl mb-2">8. Limitation of Liability</h2>
            <p>We make no warranties or representations about the accuracy or completeness of this website’s content. Under no circumstances shall we be liable for any direct or indirect damages arising from the use or inability to use this site.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-blue-700 font-bold text-xl mb-2">9. Modifications to the Policy</h2>
            <p>We may update this policy from time to time. Changes will be posted on this page with an updated effective date. Your continued use of the website signifies acceptance of any changes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-blue-700 font-bold text-xl mb-2">10. Contact Information</h2>
            <p>If you have any questions or concerns about these policies, please contact us at:</p>
            <div className="bg-white shadow-md rounded-xl p-6 mt-4">
              <ul className="space-y-5">
                <li className="flex items-center gap-4">
                  <span className="bg-blue-100 text-blue-700 rounded-full p-3 flex items-center justify-center">
                    <FiMail size={24} />
                  </span>
                  <span className="font-semibold text-gray-800 text-lg">info@swahilipothub.co.ke</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="bg-blue-100 text-blue-700 rounded-full p-3 flex items-center justify-center">
                    <FiPhone size={24} />
                  </span>
                  <span className="font-semibold text-gray-800 text-lg">+254 11 4635505</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="bg-blue-100 text-blue-700 rounded-full p-3 flex items-center justify-center">
                    <FiMapPin size={24} />
                  </span>
                  <span className="font-semibold text-gray-800 text-lg">Mombasa, Kenya</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Policy;
