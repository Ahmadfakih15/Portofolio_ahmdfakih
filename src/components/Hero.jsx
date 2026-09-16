import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  MapPin, 
} from 'lucide-react';

// Custom SVG Icons
const CustomGithub = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const CustomLinkedin = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const CustomInstagram = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const CustomTiktok = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const TypewriterText = ({ text, className }) => {
  return (
    <motion.span
      variants={{
        visible: {
          transition: { staggerChildren: 0.03, delayChildren: 1.2 }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Hero = () => {
  // Animasi Stagger untuk kolom kiri
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section id="beranda" className="min-h-screen flex items-center justify-center scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        
        {/* KOLOM KIRI (Teks dengan Stagger Animation) */}
        <motion.div 
          className="space-y-8 max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge Lokasi */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-primary mb-4 bg-primary/10 w-fit px-4 py-1.5 rounded-full border border-primary/30 backdrop-blur-sm">
              <MapPin size={16} className="text-primary animate-bounce" />
              <span>TITIK KOORDINAT: 3.153 MASL</span>
            </div>
          </motion.div>

          {/* Judul & Sub-judul */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-[var(--color-text-main)] leading-[1.1] tracking-tight">
              AHMAD
              <br />
              FAKIH
            </h1>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[var(--color-text-sub)]">
              Seorang <span className="text-primary">ELECTRIK INSTALATION</span> & Web Developer
            </h2>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-5 text-[var(--color-text-muted)]">
            <a href="https://github.com/Ahmadfakih15" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
              <CustomGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ahmad-fakih-a33ab427a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
              <CustomLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/ahmdfakih__" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
              <CustomInstagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@ujangkl15" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
              <CustomTiktok size={24} />
            </a>
          </motion.div>

          {/* Deskripsi */}
          <motion.div variants={itemVariants}>
            <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-lg">
              Merancang arsitektur otomasi industri yang presisi, sembari merawat nalar untuk terus mengawal isu infrastruktur dan lingkungan di daerah. Saya percaya, mengintegrasikan logika sistem sama pentingnya dengan berdiri tegak bersama masyarakat. 
              <br/><br/>
              <TypewriterText 
                text='"Seorang terpelajar harus sudah berbuat adil sejak dalam pikiran apalagi dalam perbuatan." _Pramoedya Ananta Toer.'
                className="text-[var(--color-text-sub)] italic"
              />
            </p>
          </motion.div>

          {/* Tombol */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#proyek"
              className="px-7 py-3.5 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/50 text-primary hover:text-primary transition-all font-medium text-sm backdrop-blur-sm"
            >
              Mulai Penjelajahan
            </a>
            <a
              href="#kontak"
              className="px-7 py-3.5 rounded-full bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)] border border-[var(--color-border)] text-[var(--color-text-main)] transition-all font-medium text-sm"
            >
              Kontak Saya
            </a>
          </motion.div>
        </motion.div>

        {/* KOLOM KANAN (Kartu Profil Interaktif) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#ffffff"
            glarePosition="all"
            scale={1.02}
            className="w-full max-w-md"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-teal-900/20 border border-white/10 group">
              {/* Background Image Gunung */}
              <img 
                src="/images/Profile.jpeg" 
                alt="Ahmad Fakih di Gunung" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Hitam Gradasi */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10"></div>

              {/* Teks Kiri Atas */}
              <div className="absolute top-6 left-6">
                <h3 className="text-xl font-bold text-white tracking-wide">AhmadFakih</h3>
                <p className="text-sm text-primary font-medium">Software Engineer</p>
              </div>

              {/* Badge Bawah */}
              <div className="absolute bottom-6 left-6 right-6 p-4 flex items-center justify-between rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden border border-white/20">
                    <img
                      src="/images/Profile.jpeg"
                      className="w-full h-full object-cover"
                      alt="Avatar"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">@ahmdfakih__</p>
                    <p className="text-xs text-primary flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      Online
                    </p>
                  </div>
                </div>
                <a
                  href="#kontak"
                  className="px-4 py-2 bg-white/10 hover:bg-primary/20 border border-white/5 hover:border-primary/30 rounded-xl text-xs font-medium text-white transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </Tilt>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
