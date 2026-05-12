import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">
      <h2 className="text-lg text-blue-600 dark:text-blue-400">Get In Touch</h2>
      <h3 className="text-3xl font-bold mb-8">Contact Me</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Mail className="text-blue-600" size={20} />
            <span>reddysekhar@example.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-blue-600" size={20} />
            <span>+91 XXXXX XXXXX</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-blue-600" size={20} />
            <span>India</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default ContactSection;
