import React, { useState, useEffect } from 'react';
import {
    Phone,
    Mail,
    MapPin,
    Send,
    Clock,
    Shield,
    Award,
    User,
    MessageSquare,
    Building,
    Thermometer,
    ArrowRight,
    Package,
    Wrench,
    Hash,
    Calendar,
    FileText
} from 'lucide-react';

const ContactUsComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        partName: '',
        material: '',
        quantity: '',
        treatmentType: '',
        deadline: '',
        notes: ''
    });

    useEffect(() => {
        setIsVisible(true);
        const style = document.createElement('style');
        style.innerHTML = `
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animate-spin-slow {
        animation: spin-slow 3s linear infinite;
      }
    `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        const requiredFields = ['name', 'email', 'phone', 'partName', 'material', 'treatmentType'];
        const isMissing = requiredFields.some((field) => !formData[field]);

        if (isMissing) {
            alert('Please fill in all required fields: Name, Email, Phone, Part Name, Material, and Treatment Type.');
            return;
        }

        try {
            const res = await fetch("https://kr-heat-treatment.onrender.com/api/inquiry", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!res.ok) throw new Error('Failed to send inquiry');
            alert('Thank you for your message! We will get back to you soon.');

            setFormData({
                name: '',
                email: '',
                phone: '',
                companyName: '',
                partName: '',
                material: '',
                quantity: '',
                treatmentType: '',
                deadline: '',
                notes: ''
            });
        } catch (err) {
            console.error(err);
            alert('Error sending message. Please try again later.');
        }
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "Phone Numbers",
            details: ["+91 88724 14000", "+91 98551 03477"],
            color: "text-blue-400"
        },
        {
            icon: Mail,
            title: "Email Address",
            details: ["aryansharma732005@gmail.com"],
            color: "text-purple-400"
        },
        {
            icon: MapPin,
            title: "Location",
            details: ["Plot no. 13246, Opp. sandhu Petrol Pump", "Dholewal, Ludhiana, Punjab 141010, India"],
            color: "text-green-400"
        }
    ];

    const businessHours = [
        { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
        { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
        { day: "Sunday", hours: "Closed" }
    ];

    const features = [
        { icon: Shield, text: "Professional Service" },
        { icon: Award, text: "Certified Quality" },
        { icon: Clock, text: "Quick Response" }
    ];

    const treatmentTypes = [
        "Annealing", "Hardening", "Tempering", "Normalizing",
        "Carburizing", "Nitriding", "Induction Hardening",
        "Stress Relief", "Other"
    ];

    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 animate-spin-slow">
                            <MessageSquare className="w-12 h-12 text-white" />
                        </div>
                    </div>
                    <h1 className={`text-5xl sm:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Us</span>
                    </h1>
                    <p className={`text-xl text-gray-300 mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        Get in touch with our heat treatment experts for personalized solutions.
                    </p>
                    <div className={`flex flex-col sm:flex-row justify-center gap-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        {features.map((f, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-400 text-lg">
                                <f.icon className="w-5 h-5 text-blue-400" />
                                <span>{f.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-20 relative">
                {/* Decorative Blobs for Mobile & Desktop */}
                <div className="absolute z-0 left-1/2 top-0 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/3 md:w-96 md:h-96 md:left-2/3 md:top-1/4 md:blur-2xl"></div>
                <div className="absolute z-0 right-0 bottom-0 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl translate-x-1/4 translate-y-1/4 md:w-72 md:h-72 md:right-1/4 md:bottom-0"></div>
                <div className="absolute z-0 left-0 bottom-1/3 w-32 h-32 bg-pink-400/10 rounded-full blur-2xl -translate-x-1/3 md:w-52 md:h-52 md:left-0 md:bottom-1/2"></div>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 md:gap-12 relative z-10">
                    {/* Left: Contact Form */}
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-8 shadow-lg mb-8 lg:mb-0">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Send us a Message</h2>
                        <div className="space-y-4 sm:space-y-6">
                            {/* Name + Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <FormInput icon={User} label="Full Name *" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" />
                                <FormInput icon={Mail} label="Email Address *" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" />
                            </div>
                            {/* Phone + Company */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <FormInput icon={Phone} label="Phone Number *" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone" />
                                <FormInput icon={Building} label="Company Name" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Enter company name" />
                            </div>
                            {/* Part + Material */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 border-t border-gray-700 pt-4 sm:pt-6">
                                <FormInput icon={Package} label="Part Name *" name="partName" value={formData.partName} onChange={handleInputChange} placeholder="Enter part name" />
                                <FormInput icon={Wrench} label="Material *" name="material" value={formData.material} onChange={handleInputChange} placeholder="e.g., Steel, Aluminum, etc." />
                            </div>
                            {/* Quantity + Treatment Type */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <FormInput icon={Hash} label="Quantity" name="quantity" value={formData.quantity} onChange={handleInputChange} placeholder="Enter quantity" />
                                <SelectInput icon={Thermometer} label="Treatment Type *" name="treatmentType" value={formData.treatmentType} onChange={handleInputChange} options={treatmentTypes} />
                            </div>
                            {/* Deadline + Notes */}
                            <div className="border-t border-gray-700 pt-4 sm:pt-6">
                                <FormInput icon={Calendar} label="Deadline" name="deadline" type="date" value={formData.deadline} onChange={handleInputChange} />
                                <TextAreaInput icon={FileText} label="Additional Notes" name="notes" value={formData.notes} onChange={handleInputChange} />
                            </div>
                            <button onClick={handleSubmit} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md">
                                <Send className="w-5 h-5" />
                                <span>Send Message</span>
                            </button>
                        </div>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">Get in Touch</h2>
                            <p className="text-gray-300 text-base sm:text-lg">
                                Ready to discuss your heat treatment needs? Our team of experts is here to help you find the perfect solution for your industrial requirements.
                            </p>
                        </div>
                        {/* Info Cards */}
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-gray-800/30 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:bg-gray-800/50 transition-all duration-300 shadow-md flex items-start gap-4"
                                >
                                    <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full ${info.color} flex-shrink-0`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{info.title}</h3>
                                        {info.details.map((d, i) => (
                                            <p key={i} className="text-gray-300 text-sm sm:text-base leading-snug">{d}</p>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}

                        {/* Business Hours */}
                        <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-4 sm:p-6 shadow-md">
                            <div className="flex items-center gap-3 mb-2 sm:mb-4">
                                <Clock className="w-6 h-6 text-blue-400" />
                                <h3 className="text-lg sm:text-xl font-semibold text-white">Business Hours</h3>
                            </div>
                            {businessHours.map((hour, i) => (
                                <div key={i} className="flex justify-between text-gray-300 text-sm sm:text-base">
                                    <span>{hour.day}</span>
                                    <span>{hour.hours}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Contact CTA */}
            <section className="py-16 bg-gray-900/50">
                <div className="text-center max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-4">Need Immediate Assistance?</h2>
                    <p className="text-lg text-gray-300 mb-8">
                        For urgent inquiries or quick quotes, reach out to us directly
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {/* Call Now Button */}
                        <div className="w-full sm:w-auto">
                            <a
                                href="tel:+918872414000"
                                className="w-full sm:w-auto block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2 text-base sm:text-lg"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Call Now</span>
                            </a>
                        </div>

                        {/* Email Us Button */}
                        <div className="w-full sm:w-auto">
                            <a
                                href="mailto:aryansharma732005@gmail.com"
                                className="w-full sm:w-auto block border-2 border-white text-white py-3 px-6 rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 text-base sm:text-lg"
                            >
                                <Mail className="w-5 h-5" />
                                <span>Email Us</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

// Reusable Components
const FormInput = ({ icon: Icon, label, name, type = 'text', value, onChange, placeholder }) => (
    <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
        <div className="relative">
            <Icon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder={placeholder}
            />
        </div>
    </div>
);

const SelectInput = ({ icon: Icon, label, name, value, onChange, options }) => (
    <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
        <div className="relative">
            <Icon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
                <option value="">Select treatment type</option>
                {options.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                ))}
            </select>
        </div>
    </div>
);

const TextAreaInput = ({ icon: Icon, label, name, value, onChange }) => (
    <div className="mt-4">
        <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
        <div className="relative">
            <Icon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={4}
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Write here..."
            />
        </div>
    </div>
);

export default ContactUsComponent;
