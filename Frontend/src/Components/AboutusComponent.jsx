import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Factory,
    Shield,
    Award,
    Users,
    Target,
    Zap,
    Thermometer,
    Droplets,
    CheckCircle,
    ArrowRight,
    MapPin,
    Calendar,
    TrendingUp,
    Heart,
    Star,
    Settings,
    Wrench,
    Cog,
    Flame,
    HardHat,
    Clock
} from 'lucide-react';

const AboutusComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeProcess, setActiveProcess] = useState(0);
    const [stats, setStats] = useState({
        experience: 0,
        clients: 0,
        projects: 0,
        satisfaction: 0
    });

    const navigate = useNavigate();
    useEffect(() => {
        setIsVisible(true);

        // Animate stats
        const timer = setTimeout(() => {
            setStats({
                experience: 15,
                clients: 500,
                projects: 10000,
                satisfaction: 99
            });
        }, 1000);

        // Rotate active process
        const interval = setInterval(() => {
            setActiveProcess(prev => (prev + 1) % 4);
        }, 3000);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, []);

    // Add custom CSS for animations
    const styles = `
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 4s linear infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        .animate-float {
            animation: float 3s ease-in-out infinite;
        }
        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
            50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
        }
        .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
        }
    `;

    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
        return () => document.head.removeChild(styleSheet);
    }, []);

    const companyValues = [
        {
            icon: Shield,
            title: "Quality Assurance",
            description: "Every component undergoes rigorous testing to ensure it meets the highest industry standards for durability and performance."
        },
        {
            icon: Target,
            title: "Precision Engineering",
            description: "Our controlled heating and quenching processes are calibrated to deliver exact specifications for each component type."
        },
        {
            icon: Heart,
            title: "Customer Focus",
            description: "We build lasting partnerships with manufacturers by understanding their unique requirements and delivering tailored solutions."
        },
        {
            icon: TrendingUp,
            title: "Continuous Innovation",
            description: "We invest in advanced technology and processes to stay ahead of industry trends and deliver cutting-edge solutions."
        }
    ];

    const heatTreatmentSteps = [
        {
            title: "Inspection & Preparation",
            description: "Kneeling or straightening parts when required, ensuring proper alignment and readiness for treatment",
            icon: Settings,
            details: ["Visual inspection", "Dimensional check", "Straightening process", "Surface preparation"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Controlled Heating",
            description: "Using industrial furnaces to bring components to critical temperature based on metal type",
            icon: Thermometer,
            details: ["Temperature calibration", "Gradual heating", "Uniform distribution", "Critical point monitoring"],
            color: "from-red-500 to-orange-500"
        },
        {
            title: "Quenching Process",
            description: "Rapid cooling in specialized liquid medium (oil or water) to transform internal structure",
            icon: Droplets,
            details: ["Medium selection", "Rapid cooling", "Structure transformation", "Hardness development"],
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Quality Control",
            description: "Final inspection and testing to ensure maximum durability, performance, and longevity",
            icon: CheckCircle,
            details: ["Hardness testing", "Durability assessment", "Performance validation", "Quality certification"],
            color: "from-green-500 to-teal-500"
        }
    ];

    const specializations = [
        { name: "BB Axles", icon: Cog, description: "Precision treatment for cycle bottom bracket axles" },
        { name: "Nuts & Bolts", icon: Wrench, description: "Industrial fasteners and hardware components" },
        { name: "End Caps", icon: Shield, description: "Protective closure components" },
        { name: "Cycle Spindles", icon: Settings, description: "High-performance bicycle rotating components" },
        { name: "Industrial Fasteners", icon: HardHat, description: "Heavy-duty industrial applications" },
        { name: "Precision Shafts", icon: Target, description: "Automotive and machinery shafts" }
    ];

    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center">
                        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 animate-spin-slow">
                                <Factory className="w-12 h-12 text-white" />
                            </div>
                        </div>
                        <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">KR Heat Treatment</span>
                        </h1>
                        <p className={`text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            Leading industrial heat treatment specialist in India, transforming metal components for cycle and automotive industries
                        </p>
                        <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="flex items-center space-x-2 text-gray-400 text-lg">
                                <MapPin className="w-6 h-6 text-blue-400" />
                                <span>Based in India</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400 text-lg">
                                <Award className="w-6 h-6 text-purple-400" />
                                <span>Industry Leader</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400 text-lg">
                                <Shield className="w-6 h-6 text-green-400" />
                                <span>Quality Certified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Story Section */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Story</h2>
                            <div className="space-y-6 text-gray-300">
                                <p className="text-lg leading-relaxed">
                                    KR Heat Treatment stands as a specialized industrial service provider dedicated to delivering precision heat treatment solutions for metal components across India's thriving cycle and automotive industries.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Our expertise spans a comprehensive range of critical components including BB axles, nuts and bolts, end caps, cycle spindles, industrial fasteners, and precision shafts. Each component undergoes our meticulously designed thermal treatment process to achieve optimal mechanical properties.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    What sets us apart is our commitment to precision at every stage. From the initial preparation phase—where we perform kneeling or straightening when required—to the final quality inspection, every step is carefully managed to ensure maximum durability, performance, and longevity.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center">
                                        <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
                                            {stats.experience}+
                                        </div>
                                        <div className="text-gray-300">Years Experience</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
                                            {stats.clients}+
                                        </div>
                                        <div className="text-gray-300">Happy Clients</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">
                                            {stats.projects.toLocaleString()}+
                                        </div>
                                        <div className="text-gray-300">Projects Completed</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">
                                            {stats.satisfaction}%
                                        </div>
                                        <div className="text-gray-300">Client Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 lg:py-24 bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Values</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            The principles that guide our commitment to excellence and customer satisfaction
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {companyValues.map((value, index) => (
                            <div key={index} className="text-center group">
                                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 h-full">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-all duration-300">
                                        <value.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Heat Treatment Process */}
          

            {/* Specializations */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Specializations</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Comprehensive heat treatment solutions for diverse industrial components
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specializations.map((spec, index) => (
                            <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 hover:scale-105 group">
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-4 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <spec.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{spec.name}</h3>
                                    <p className="text-sm text-gray-300">{spec.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Values */}
           

            {/* Call to Action */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-sm border border-gray-700">
                        <Users className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Partner with Us?</h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join the growing list of manufacturers who trust KR Heat Treatment for their precision heat treatment needs. Let's transform your components together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => navigate('/Contact')}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                                Contact us Now
                            </button>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutusComponent;