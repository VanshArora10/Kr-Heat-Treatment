import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Zap, Shield, Settings, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EnhancedHeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentTemp, setCurrentTemp] = useState(1200);
    const [particleCount, setParticleCount] = useState(0);

    useEffect(() => {
        setIsVisible(true);

        // Animated temperature counter
        const tempInterval = setInterval(() => {
            setCurrentTemp(prev => {
                const newTemp = prev + Math.floor(Math.random() * 20) - 10;
                return Math.max(1180, Math.min(1220, newTemp));
            });
        }, 2000);

        // Particle animation counter
        const particleInterval = setInterval(() => {
            setParticleCount(prev => (prev + 1) % 20);
        }, 300);

        return () => {
            clearInterval(tempInterval);
            clearInterval(particleInterval);
        };
    }, []);

    const services = [
        { icon: Settings, label: "Gear Shafts", delay: "0ms" },
        { icon: Zap, label: "Pistons", delay: "100ms" },
        { icon: Shield, label: "Bike Components", delay: "200ms" },
        { icon: Settings, label: "Automotive Parts", delay: "300ms" }
    ];

    const stats = [
        { number: "1200°C", label: "Max Temperature" },
        { number: "15+", label: "Years Experience" },
        { number: "98%", label: "Success Rate" }
    ];

    const navigate = useNavigate();

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Geometric patterns */}
                <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-gray-800/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-gray-700/20 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-gray-400 rounded-full animate-ping"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className={`space-y-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

                        {/* Status Badge */}
                        <div className="inline-flex mt-1 mb-4 items-center space-x-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-3 py-3">
                            <div className="relative">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-30"></div>
                            </div>
                            <span className="text-sm font-medium text-gray-300">Industrial Heat Treatment Active</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-2x">
                            <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                                <span className="block text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text">
                                    Precision
                                </span>
                                <span className="block text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text animate-pulse">
                                    Heat Treatment
                                </span>
                                <span className="block text-xl lg:text-2xl font-normal text-gray-400 mt-4">
                                    for Industrial Metal Excellence
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                Advanced thermal processing that transforms ordinary metal components into
                                <span className="text-white font-semibold"> high-performance industrial parts</span>.
                                Engineered for strength, built for durability.
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group flex items-center space-x-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:bg-gray-700/40 hover:border-gray-600 transition-all duration-300"
                                    style={{ animationDelay: service.delay }}
                                >
                                    <div className="p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors">
                                        <service.icon className="w-5 h-5 text-gray-300" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                        {service.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                            onClick={() => navigate('/services')}
                            className="group relative bg-white text-black font-bold py-4 px-8 rounded-full overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <div className="relative flex items-center justify-center space-x-2">
                                    <span>Explore Services</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </button>

                           
                        </div>
                    </div>

                    {/* Right Content - Enhanced Visual */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

                        {/* Main Image Container */}
                        <div className="relative group">
                            {/* Glowing border effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                            <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
                                {/* Image */}
                                <img
                                    src="https://images.pexels.com/photos/13122870/pexels-photo-13122870.jpeg"
                                    alt="Industrial Heat Treatment Process"
                                    className="w-full h-96 object-cover"
                                />

                                {/* Overlay with data */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20">

                                    {/* Temperature Display - Responsive */}
                                    <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm rounded-xl p-3 lg:p-4 border border-gray-700">
                                        <div className="text-xl lg:text-2xl font-bold text-white">{currentTemp}°C</div>
                                        <div className="text-xs text-gray-400 hidden sm:block">ACTIVE PROCESSING</div>
                                    </div>

                                    {/* Status Indicators - Responsive */}
                                    <div className="absolute top-6 right-6 space-y-2">
                                        <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-xs text-gray-300 hidden sm:inline">FURNACE ACTIVE</span>
                                            <span className="text-xs text-gray-300 sm:hidden">ACTIVE</span>
                                        </div>
                                        <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                                            <span className="text-xs text-gray-300 hidden sm:inline">QUENCHING READY</span>
                                            <span className="text-xs text-gray-300 sm:hidden">READY</span>
                                        </div>
                                    </div>

                                    {/* Bottom Stats - Responsive */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-black/50 backdrop-blur-sm rounded-xl p-3 lg:p-4 border border-gray-700">
                                            <div className="grid grid-cols-3 gap-2 lg:gap-4 text-center">
                                                {stats.map((stat, index) => (
                                                    <div key={index}>
                                                        <div className="text-sm lg:text-lg font-bold text-white">{stat.number}</div>
                                                        <div className="text-xs text-gray-400 hidden sm:block">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements - Hidden on mobile */}
                        <div className="hidden lg:block absolute -top-8 -right-8 bg-gray-900 border border-gray-700 rounded-2xl p-4 shadow-2xl">
                            <div className="text-center">
                                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                <div className="text-lg font-bold text-white">98%</div>
                                <div className="text-xs text-gray-400">SUCCESS RATE</div>
                            </div>
                        </div>

                        <div className="hidden lg:block absolute -bottom-8 -left-8 bg-gray-900 border border-gray-700 rounded-2xl p-4 shadow-2xl">
                            <div className="text-center">
                                <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                                <div className="text-lg font-bold text-white">24/7</div>
                                <div className="text-xs text-gray-400">AVAILABLE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};

export default EnhancedHeroSection;