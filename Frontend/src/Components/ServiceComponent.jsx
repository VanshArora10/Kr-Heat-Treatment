import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Settings,
    Zap,
    Shield,
    Cog,
    Thermometer,
    Wrench,
    Target,
    CheckCircle,
    ArrowRight,
    Clock,
    Award,
    Users,
    ChevronRight,
    Factory,
    Gauge,
    Flame
} from 'lucide-react';

const ServiceComponent = () => {
    const [activeService, setActiveService] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveService(prev => (prev + 1) % 4);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Add custom CSS for slow spin animation
    const styles = `
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
        }
    `;

    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
        return () => document.head.removeChild(styleSheet);
    }, []);

    const mainServices = [
        {
            id: 1,
            title: "BB Axles Treatment",
            description: "Precision heat treatment for cycle bottom bracket axles ensuring optimal strength and durability",
            icon: Settings,
            features: ["High-precision heating", "Controlled cooling", "Quality testing", "Durability enhancement"],
            temperature: "1200°C",
            duration: "2-4 hours",
            applications: ["Bicycle manufacturing", "Cycle components", "Racing bikes"]
        },
        {
            id: 2,
            title: "Nuts & Bolts Strengthening",
            description: "Industrial-grade heat treatment for fasteners and hardware components",
            icon: Zap,
            features: ["Uniform heating", "Stress relief", "Hardness improvement", "Corrosion resistance"],
            temperature: "950°C",
            duration: "1-3 hours",
            applications: ["Automotive industry", "Construction", "Industrial machinery"]
        },
        // {
        //     id: 3,
        //     title: "End Caps Protection",
        //     description: "Specialized treatment for protective end caps and closure components",
        //     icon: Shield,
        //     features: ["Surface hardening", "Wear resistance", "Impact protection", "Longevity enhancement"],
        //     temperature: "1100°C",
        //     duration: "1-2 hours",
        //     applications: ["Protective components", "Industrial equipment", "Safety applications"]
        // },
        // {
        //     id: 4,
        //     title: "Cycle Spindles",
        //     description: "High-performance heat treatment for bicycle spindles and rotating components",
        //     icon: Cog,
        //     features: ["Precision treatment", "Fatigue resistance", "Smooth operation", "Extended lifespan"],
        //     temperature: "1150°C",
        //     duration: "2-3 hours",
        //     applications: ["Performance bikes", "Professional cycling", "Sports equipment"]
        // }
    ];
    const navigate = useNavigate();

    const processes = [
        {
            title: "Preparation & Inspection",
            description: "Initial component assessment and preparation for treatment",
            icon: Target,
            steps: ["Visual inspection", "Dimensional check", "Material verification", "Surface preparation"]
        },
        {
            title: "Controlled Heating",
            description: "Precise temperature management for optimal results",
            icon: Thermometer,
            steps: ["Gradual heating", "Temperature monitoring", "Uniform heat distribution", "Critical point control"]
        },
        {
            title: "Quenching Process",
            description: "Rapid cooling in controlled medium",
            icon: Flame,
            steps: ["Medium selection", "Cooling rate control", "Temperature monitoring", "Stress management"]
        },
        {
            title: "Quality Assurance",
            description: "Comprehensive testing and validation",
            icon: Award,
            steps: ["Hardness testing", "Dimensional verification", "Visual inspection", "Performance validation"]
        }
    ];

    const additionalServices = [
        {
            title: "Automotive Components",
            description: "Gears, shafts, transmission parts, and engine components",
            icon: Factory,
            specialties: ["Transmission gears", "Drive shafts", "Engine valves", "Brake components"]
        },
        {
            title: "Industrial Tools",
            description: "Cutting tools, dies, and precision machine components",
            icon: Wrench,
            specialties: ["Cutting tools", "Dies & molds", "Machine parts", "Precision instruments"]
        },
        {
            title: "Custom Solutions",
            description: "Tailored heat treatment for specific applications",
            icon: Gauge,
            specialties: ["Custom processes", "Specialized materials", "Unique requirements", "R&D support"]
        }
    ];

    const benefits = [
        "Increased component lifespan by 300%",
        "Enhanced mechanical properties",
        "Superior wear and fatigue resistance",
        "Improved dimensional stability",
        "Reduced maintenance requirements",
        "Cost-effective production solutions"
    ];

    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            {/* Hero Section - Full viewport height */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center">
                        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 animate-spin-slow">
                                <Thermometer className="w-12 h-12 text-white" />
                            </div>
                        </div>
                        <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
                        </h1>
                        <p className={`text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            Comprehensive heat treatment solutions for industrial excellence and precision engineering
                        </p>
                        <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="flex items-center space-x-2 text-gray-400 text-lg">
                                <Shield className="w-6 h-6 text-blue-400" />
                                <span>Professional</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400 text-lg">
                                <Award className="w-6 h-6 text-purple-400" />
                                <span>Reliable</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400 text-lg">
                                <CheckCircle className="w-6 h-6 text-green-400" />
                                <span>Certified</span>
                            </div>
                        </div>
                        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button 
                            onClick={() => navigate('/Contact')}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                                Contact us Now
                            </button>
                            
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Services Section */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Core Services</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Specialized heat treatment processes designed for precision and performance
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {mainServices.map((service, index) => (
                            <div
                                key={service.id}
                                className={`group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transition-all duration-500 hover:bg-gray-800/50 hover:border-gray-600 hover:scale-105 ${activeService === index ? 'ring-2 ring-blue-500/50' : ''}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-blue-600/10 rounded-2xl transition-all duration-500"></div>

                                <div className="relative z-10">
                                    <div className="flex items-start space-x-4 mb-6">
                                        <div className="p-3 bg-gray-700 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                                            <service.icon className="w-8 h-8" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                            <p className="text-gray-300">{service.description}</p>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-white">Key Features</h4>
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                    <span className="text-sm text-gray-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-gray-700/30 rounded-lg p-4">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-400">Temperature</span>
                                                    <span className="text-white font-semibold">{service.temperature}</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-700/30 rounded-lg p-4">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-400">Duration</span>
                                                    <span className="text-white font-semibold">{service.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-white mb-3">Applications</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {service.applications.map((app, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                                                    {app}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => navigate('/Contact')}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                                        <span>Get Quote</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Process</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Four-step methodology ensuring consistent quality and optimal results
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {processes.map((process, index) => (
                            <div key={index} className="relative group">
                                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 h-full flex flex-col min-h-[320px]">
                                    <div className="text-center mb-6">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-all duration-300">
                                            <process.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="mb-2">
                                            <span className="text-sm font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                                                Step {index + 1}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
                                    </div>
                                    <div className="space-y-3 flex-grow">
                                        {process.steps.map((step, idx) => (
                                            <div key={idx} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 mt-2"></div>
                                                <span className="text-sm text-gray-300">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {index < processes.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                            <ArrowRight className="w-4 h-4 text-gray-300" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Additional Services</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Comprehensive solutions for diverse industrial applications
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {additionalServices.map((service, index) => (
                            <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 hover:scale-105">
                                <div className="text-center mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-4">
                                        <service.icon className="w-8 h-8 text-gray-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-gray-300 text-sm">{service.description}</p>
                                </div>
                                <div className="space-y-3">
                                    {service.specialties.map((specialty, idx) => (
                                        <div key={idx} className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                                            <span className="text-sm text-gray-300">{specialty}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Benefits of Our Services</h2>
                            <p className="text-lg text-gray-300 mb-8">
                                Transform your components with our precision heat treatment solutions
                            </p>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-gray-300">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
                                <Users className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Components?</h3>
                                <p className="text-gray-300 mb-6">
                                    Contact our experts today for customized heat treatment solutions that meet your specific requirements.
                                </p>
                                <button 
                                    onClick={() => navigate('/Contact')}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                                    Contact Us Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceComponent;