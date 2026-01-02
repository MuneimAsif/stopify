import { useState } from "react";

const Contact = () => {
  const navigate = useState()
  return (

    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-10">Get in Touch with <span className="text-[#F59E0B]">Stopify</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Section */}
          <div className="text-white space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-[#111827]">Contact Info</h3>
              <p className="text-gray-700">Have a question or need support? We're here to help you with your electronics journey.</p>
            </div>
            <div>
              <p className="text-gray-800"><strong>📍 Address:</strong> 123 ABC Road, Multan, Pakistan</p>
              <p className="text-gray-800"><strong>📧 Email:</strong> support@stopify.com</p>
              <p className="text-gray-800"><strong>📞 Phone:</strong> +92 312 3456789</p>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6">
            <div>
              <label className="block text-[#111827] mb-1">Your Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-4 py-2 bg-white/20 border border-white/30 !text-gray-600 placeholder-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div>
              <label className="block text-[#111827] mb-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full px-4 py-2 !text-gray-600 bg-white/20 border border-white/30 rounded-xl placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div>
              <label className="block text-[#111827] mb-1">Your Message</label>
              <textarea rows="4" placeholder="Type your message..." className="w-full px-4 py-2 !text-gray-600 bg-white/20 border border-[#bcbbbbe9] rounded-xl placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
            </div>
            <button onClick={()=>navigate("/contact")} type="submit" className="w-full bg-[#F59E0B] text-white font-semibold py-2 rounded-xl hover:opacity-90 transition-all duration-300">
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;