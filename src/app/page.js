import HeroSection from "./components/HeroSection";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a] relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 pointer-events-none"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <Navbar />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
<HeroSection />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AchievementsSection />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AboutSection />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProjectsSection />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <EmailSection />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
