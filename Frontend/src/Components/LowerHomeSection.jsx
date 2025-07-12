import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Zap, Shield, Settings, CheckCircle, Thermometer, Wrench, Cog, Target, Users, Clock, Award, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const KRHeatTreatmentHomepage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentTemp, setCurrentTemp] = useState(1200);
    const [activeProcess, setActiveProcess] = useState(0);

    useEffect(() => {
        setIsVisible(true);

        // Animated temperature counter
        const tempInterval = setInterval(() => {
            setCurrentTemp(prev => {
                const newTemp = prev + Math.floor(Math.random() * 20) - 10;
                return Math.max(1180, Math.min(1220, newTemp));
            });
        }, 2000);

        // Process animation
        const processInterval = setInterval(() => {
            setActiveProcess(prev => (prev + 1) % 3);
        }, 3000);

        return () => {
            clearInterval(tempInterval);
            clearInterval(processInterval);
        };
    }, []);

    const services = [
        { icon: Settings, label: "BB Axles", description: "Precision treatment for cycle bottom brackets" },
        { icon: Zap, label: "Nuts & Bolts", description: "Industrial fasteners strengthening" },
        { icon: Shield, label: "End Caps", description: "Durable protective components" },
        { icon: Cog, label: "Cycle Spindles", description: "High-performance spindle hardening" }
    ];

    const processes = [
        {
            title: "Kneeling & Straightening",
            description: "Precise alignment preparation",
            icon: Wrench,
            active: activeProcess === 0
        },
        {
            title: "Controlled Heating",
            description: "Critical temperature achievement",
            icon: Thermometer,
            active: activeProcess === 1
        },
        {
            title: "Rapid Quenching",
            description: "Oil/water medium cooling",
            icon: Zap,
            active: activeProcess === 2
        }
    ];

    const stats = [
        { number: "1200°C", label: "Max Temperature", icon: Thermometer },
        { number: "15+", label: "Years Experience", icon: Award },
        { number: "98%", label: "Success Rate", icon: Target },
        { number: "24/7", label: "Service Available", icon: Clock }
    ];

    const benefits = [
        "Increased hardness and wear resistance",
        "Enhanced strength and durability",
        "Improved component longevity",
        "Precision thermal cycle management"
    ];

    const navigate = useNavigate();

    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">


            {/* Process Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Process</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Three-step precision treatment ensuring optimal strength and durability
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {processes.map((process, index) => (
                            <div key={index} className={`relative p-6 rounded-2xl border transition-all duration-500 ${process.active
                                ? 'bg-gray-800/50 border-gray-600 scale-105'
                                : 'bg-gray-800/30 border-gray-700 hover:bg-gray-800/40'
                                }`}>
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className={`p-4 rounded-full transition-all duration-300 ${process.active
                                        ? 'bg-white text-black'
                                        : 'bg-gray-700 text-gray-300'
                                        }`}>
                                        <process.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{process.title}</h3>
                                    <p className="text-gray-300">{process.description}</p>
                                </div>
                                {index < processes.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ChevronRight className="w-6 h-6 text-gray-600" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            {/* Enhanced Stats Section */}
            <section className="py-16 sm:py-20 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-blue-900/10"></div>
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Our Track Record
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Numbers that speak for our commitment to excellence and reliability
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group relative text-center p-8 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-blue-600/10 rounded-2xl transition-all duration-500"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:scale-110">
                                        <stat.icon className="w-8 h-8 text-gray-300 group-hover:text-black transition-colors duration-300" />
                                    </div>

                                    <div className="text-3xl sm:text-4xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                        {stat.number}
                                    </div>

                                    <div className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300 uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>

                                {/* Decorative corner elements */}
                                <div className="absolute top-3 right-3 w-2 h-2 bg-blue-500/30 rounded-full group-hover:bg-blue-400 transition-colors duration-300"></div>
                                <div className="absolute bottom-3 left-3 w-2 h-2 bg-purple-500/30 rounded-full group-hover:bg-purple-400 transition-colors duration-300"></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom accent */}
                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
                            <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                            <span>Trusted by manufacturers across India</span>
                            <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>
           

            {/* Services We Provide Section */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Services We Provide</h2>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            Comprehensive heat treatment solutions for various industries with precision and expertise
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 hover:scale-105">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-4 bg-gray-700 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <service.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{service.label}</h3>
                                    <p className="text-gray-300 text-sm">{service.description}</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold text-white mb-4">Additional Services</h3>
                            <div className="grid md:grid-cols-3 gap-6 text-left">
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-white">Automotive Components</h4>
                                    <p className="text-sm text-gray-300">Gears, shafts, and transmission parts</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-white">Industrial Tools</h4>
                                    <p className="text-sm text-gray-300">Cutting tools and machine components</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-white">Custom Solutions</h4>
                                    <p className="text-sm text-gray-300">Tailored treatments for specific needs</p>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-700">
                                <p className="text-gray-300 text-sm">
                                    Quality assurance with every service • ISO certified processes • Fast turnaround times
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 sm:py-20 bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Why Choose KR Heat Treatment?</h2>
                            <p className="text-lg text-gray-300 mb-8">
                                Trusted partner for manufacturers in the cycle and automotive industry, delivering precision and reliability.
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
                                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                                <p className="text-gray-300 mb-6">
                                    Contact us today for precision heat treatment solutions tailored to your needs.
                                </p>
                                <button 
                                    onClick={() => navigate('/Contact')}
                                className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors">
                                    Get Quote Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default KRHeatTreatmentHomepage;