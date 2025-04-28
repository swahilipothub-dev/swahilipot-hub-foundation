
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactComponent from "@/components/Contact";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact <span className="text-gradient-blue">Us</span>
              </h1>
              <p className="text-xl text-gray-700">
                We'd love to hear from you. Reach out with questions, partnership ideas, or to learn more 
                about our programs.
              </p>
            </div>
          </div>
        </section>
        
        <ContactComponent />
        
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254936.21127516923!2d39.58233579866645!3d-4.033552651579887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e78ec02c15%3A0xcb618bbc35d0af11!2sMombasa%2C%20Kenya!5e0!3m2!1sen!2sus!4v1712786141818!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Swahilipot Hub location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
