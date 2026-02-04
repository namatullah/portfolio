import { Mail, Phone, MapPin, Github, ExternalLink, Send, Facebook, Linkedin, MessageSquare } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+93 701977584 / +93 745647411",
      href: "tel:+93701977584",
      color: "bg-green-50 text-green-700 border-green-100"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "namatullah.shahbazi444@gmail.com",
      href: "mailto:namatullah.shahbazi444@gmail.com",
      color: "bg-blue-50 text-blue-700 border-blue-100"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Afghanistan",
      href: null,
      color: "bg-purple-50 text-purple-700 border-purple-100"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/namatullah",
      color: "bg-gray-800 hover:bg-gray-900 text-white",
      label: "github.com/namatullah"
    },
    {
      name: "Stack Overflow",
      icon: <ExternalLink className="w-5 h-5" />,
      href: "https://stackoverflow.com/users/5755599",
      color: "bg-orange-500 hover:bg-orange-600 text-white",
      label: "stackoverflow.com/users/5755599"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/your-profile", // Add your LinkedIn URL
      color: "bg-blue-700 hover:bg-blue-800 text-white",
      label: "linkedin.com/in/your-profile"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: "https://facebook.com/your-profile", // Add your Facebook URL
      color: "bg-blue-600 hover:bg-blue-700 text-white",
      label: "facebook.com/your-profile"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a chat about technology. Feel free to reach out via any platform!
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
            </div>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border ${item.color} transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/50 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium opacity-80 mb-1">{item.label}</div>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          target={item.href.startsWith('http') ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="font-semibold hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-semibold">{item.value}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links Section */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect with me</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-lg ${social.color} transition-all duration-300 hover:scale-[1.02]`}
                  >
                    {social.icon}
                    <div className="flex-1">
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm opacity-90">{social.label}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Email CTA */}
          <div>
            <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Send me a message</h3>
                <p className="text-gray-600 mb-8">
                  The best way to reach me is via email. I typically respond within 24 hours for professional inquiries.
                </p>
                <a
                  href="mailto:namatullah.shahbazi444@gmail.com"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg w-full"
                >
                  <Mail className="w-5 h-5" />
                  Email me directly
                </a>
                <div className="mt-6 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Fast response time</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Available for new opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Availability Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Availability & Response Time</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">Preferred Contact Methods</h4>
            <div className="space-y-3">
              {[
                { method: "Email", time: "Within 24 hours", icon: "📧" },
                { method: "Phone/WhatsApp", time: "Business hours", icon: "📱" },
                { method: "LinkedIn", time: "Within 48 hours", icon: "💼" },
                { method: "GitHub Issues", time: "For technical discussions", icon: "🐙" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{item.method}</div>
                    <div className="text-sm text-gray-600">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">Currently Open For</h4>
            <div className="space-y-3">
              {[
                "Full-time Remote Positions",
                "Contract Development Work",
                "Technical Consulting",
                "Open Source Contributions",
                "Mentorship Opportunities"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            {/* Best Time to Contact */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">⏰</span>
                </div>
                <div>
                  <div className="font-medium text-blue-800">Best time to reach me</div>
                  <div className="text-sm text-blue-700">Weekdays, 9 AM - 6 PM (GMT+4:30)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}