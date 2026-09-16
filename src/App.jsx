import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import {
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Navigation,
  ArrowRight,
  Sun,
  Moon,
  Code2,
  Wind,
  Flame,
  Globe,
  Terminal,
  GitBranch,
  PenTool,
  Image as ImageIcon,
  Sliders,
  PenBox,
  Layout,
  Diamond,
  Video,
  Film,
  Scissors,
  MonitorPlay,
  Mic,
  MonitorUp,
  User,
  Calendar,
  Heart,
  Compass,
  Mountain,
  Map,
  Tent,
  GraduationCap,
  Users,
} from "lucide-react";

// Custom SVG Icons matching the elegant look
const Github = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const Linkedin = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Instagram = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Tiktok = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3"></path>
  </svg>
);

const techStack = [
  {
    name: "React",
    category: "FRONTEND LIB",
    Icon: Code2,
    color: "text-cyan-400",
  },
  {
    name: "Tailwind",
    category: "CSS FRAMEWORK",
    Icon: Wind,
    color: "text-sky-400",
  },
  {
    name: "Firebase",
    category: "BACKEND SERVICE",
    Icon: Flame,
    color: "text-orange-400",
  },
  {
    name: "Next.js",
    category: "WEB FRAMEWORK",
    Icon: Globe,
    color: "text-gray-200",
  },
  {
    name: "VS Code",
    category: "CODE EDITOR",
    Icon: Terminal,
    color: "text-blue-500",
  },
  {
    name: "Git / Github",
    category: "VERSION CONTROL",
    Icon: GitBranch,
    color: "text-gray-300",
  },
  {
    name: "Figma",
    category: "UI/UX DESIGN",
    Icon: PenTool,
    color: "text-purple-400",
  },
  {
    name: "Photoshop",
    category: "IMAGE EDITING",
    Icon: ImageIcon,
    color: "text-blue-400",
  },
  {
    name: "Lightroom",
    category: "COLOR GRADING",
    Icon: Sliders,
    color: "text-cyan-300",
  },
  {
    name: "Illustrator",
    category: "VECTOR ART",
    Icon: PenBox,
    color: "text-orange-500",
  },
  {
    name: "Canva",
    category: "LAYOUT DESIGN",
    Icon: Layout,
    color: "text-cyan-500",
  },
  {
    name: "Sketch",
    category: "MOCKUP / UI",
    Icon: Diamond,
    color: "text-yellow-400",
  },
  {
    name: "Premiere Pro",
    category: "VIDEO EDITING",
    Icon: Video,
    color: "text-purple-500",
  },
  {
    name: "After Effects",
    category: "VFX / MOTION",
    Icon: Film,
    color: "text-indigo-500",
  },
  {
    name: "CapCut",
    category: "VIDEO EDITING",
    Icon: Scissors,
    color: "text-gray-100",
  },
  {
    name: "DaVinci",
    category: "COLOR & VIDEO",
    Icon: MonitorPlay,
    color: "text-red-500",
  },
  {
    name: "Audition",
    category: "AUDIO EDITING",
    Icon: Mic,
    color: "text-emerald-400",
  },
  {
    name: "OBS Studio",
    category: "STREAMING",
    Icon: MonitorUp,
    color: "text-blue-400",
  },
];

const galleryPhotos = [
  { src: "/images/poto1.jpeg", caption: "Pendakian Merbabu" },
  { src: "/images/poto2.jpeg", caption: "Pendakian Sindoro" },
  { src: "/images/poto3.jpeg", caption: "Pendakian Sindoro" },
  { src: "/images/poto4.jpeg", caption: "Ekplore Curug Panetean" },
  { src: "/images/poto5.jpeg", caption: "Sunrise Gunung Sindoro" },
  { src: "/images/poto6.jpeg", caption: "Pengenalan BEM" },
  { src: "/images/poto7.jpeg", caption: "Orasi Pengenalan BEM" },
  { src: "/images/poto8.jpeg", caption: "Pengurus PMII" },
  { src: "/images/poto9.jpeg", caption: "Pengurus PMII" },
  { src: "/images/poto10.jpeg", caption: "Pengurus PMII" },
  { src: "/images/poto11.jpeg", caption: "Santai" },
  { src: "/images/poto12.jpeg", caption: "Ospek Terakhir Wisudawan" },
  { src: "/images/poto13.jpeg", caption: "Ospek Jurusan Mahasiswa Baru" },
  { src: "/images/poto14.jpeg", caption: "Sunrise Gunung Sindoro" },
  { src: "/images/poto15.jpeg", caption: "MT.Cikuray" },
  { src: "/images/poto16.jpeg", caption: "MT.Cikuray" },
  { src: "/images/poto17.jpeg", caption: "MT.Cikuray" },
  { src: "/images/poto18.jpg", caption: "MT.Merbabu" },
  { src: "/images/poto19.jpg", caption: "MT.Sindoro" },
  { src: "/images/poto20.jpg", caption: "MT.Sindoro" },
  { src: "/images/poto21.jpg", caption: "MT.Sagara" },
  { src: "/images/poto22.jpg", caption: "MT.Sagara" },
  { src: "/images/poto23.jpeg", caption: "XTM Pride" },
  { src: "/images/poto24.jpeg", caption: "Musyawarah HMIF" },
  { src: "/images/poto25.jpeg", caption: "Tongkrongan" },
  { src: "/images/poto26.jpeg", caption: "Pengurus 2025/2026" },
  { src: "/images/poto27.jpeg", caption: "RTK PMII" },
  { src: "/images/poto28.jpeg", caption: "RTK PMII" },
  { src: "/images/poto29.jpeg", caption: "Makrab" },
  { src: "/images/poto30.jpeg", caption: "Disnat" },
  { src: "/images/poto31.jpeg", caption: "Silaturahmi Unsika" },
];

function App() {
  const [activeSection, setActiveSection] = useState("beranda");
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Simple scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme toggle effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen font-sans selection:bg-primary/30 selection:text-[var(--color-text-main)] relative overflow-hidden transition-colors duration-500 text-[var(--color-text-muted)]">
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-50 top-0 glass-nav">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <a
              href="#beranda"
              className="text-2xl font-display font-bold tracking-tight text-[var(--color-text-main)] flex items-center gap-1 transition-colors"
            >
              AhmadFakih<span className="text-primary">.</span>
            </a>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a
                href="#beranda"
                className={`hover:text-primary transition-colors ${activeSection === "beranda" ? "text-primary" : "text-[var(--color-text-muted)]"}`}
              >
                Beranda
              </a>
              <a
                href="#tentang"
                className={`hover:text-primary transition-colors ${activeSection === "tentang" ? "text-primary" : "text-[var(--color-text-muted)]"}`}
              >
                Tentang
              </a>
              <a
                href="#proyek"
                className={`hover:text-primary transition-colors ${activeSection === "proyek" ? "text-primary" : "text-[var(--color-text-muted)]"}`}
              >
                Proyek
              </a>
              <a
                href="#galeri"
                className={`hover:text-primary transition-colors ${activeSection === "galeri" ? "text-primary" : "text-[var(--color-text-muted)]"}`}
              >
                Galeri
              </a>
              <a
                href="#kontak"
                className={`hover:text-primary transition-colors ${activeSection === "kontak" ? "text-primary" : "text-[var(--color-text-muted)]"}`}
              >
                Kontak
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-[var(--color-text-muted)] hover:text-primary transition-colors p-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)]"
                title={
                  isDarkMode ? "Beralih ke Mode Siang" : "Beralih ke Mode Malam"
                }
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-40">
        {/* --- SECTION: HERO --- */}
        <Hero />

        {/* --- SECTION: TENTANG SAYA --- */}
        <section id="tentang" className="scroll-mt-32">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
              Profil Biodata
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-text-main)] transition-colors">
              Tentang Saya
            </h2>
          </div>

          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 border border-[var(--color-border)] shadow-2xl relative overflow-hidden group">
            {/* Dekorasi Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                {/* Nama Lengkap */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-[var(--color-border)] group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-1">
                      Nama Lengkap
                    </h3>
                    <p className="text-[var(--color-text-muted)]">
                      Ahmad Fakih
                    </p>
                  </div>
                </div>

                {/* Tempat, Tanggal Lahir */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-[var(--color-border)] group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-1">
                      Tempat, Tanggal Lahir
                    </h3>
                    <p className="text-[var(--color-text-muted)]">
                      Tasikmalaya, 10Agustus 2002
                    </p>
                  </div>
                </div>

                {/* Pendidikan */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-[var(--color-border)] group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-1">
                      Status Pendidikan
                    </h3>
                    <p className="text-[var(--color-text-muted)]">
                      Mahasiswa S1 Teknik Informatika (Sekolah Tinggi teknologi
                      Cipasung)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-[var(--color-border)] group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-1">
                      Email
                    </h3>
                    <p className="text-[var(--color-text-muted)]">
                      ahmadfakih15@gmail.com
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-[var(--color-border)] group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-[var(--color-text-muted)]">
                      +62 85865009174
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Alamat */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-[var(--color-border)] group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-1">
                      Alamat Domisili
                    </h3>
                    <p className="text-[var(--color-text-muted)]">
                      Tasikmalaya, Jawa Barat, Indonesia
                    </p>
                  </div>
                </div>

                {/* Keahlian */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-[var(--color-border)] group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-1">
                      Keahlian Utama
                    </h3>
                    <p className="text-[var(--color-text-muted)]">
                      Industrial Automation &amp; Web Dev
                    </p>
                  </div>
                </div>

                {/* Organisasi */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-[var(--color-border)] group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-1">
                      Organisasi
                    </h3>
                    <p className="text-[var(--color-text-muted)]">
                      Presiden Mahasiswa (BEM), Pengurus PMII
                    </p>
                  </div>
                </div>

                {/* Hobi */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-[var(--color-border)] group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-1">
                      Hobi &amp; Minat
                    </h3>
                    <p className="text-[var(--color-text-muted)]">
                      Mendaki Gunung, Koding, Membaca Buku
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-[var(--color-border)] group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-1">
                      Instagram
                    </h3>
                    <p className="text-[var(--color-text-muted)]">
                      ahmdfakih__
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: KEMAMPUAN (TECH STACK) --- */}
        <section id="kemampuan" className="scroll-mt-32">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[var(--color-text-main)] transition-colors inline-block border-b-2 border-primary/50 pb-2">
              Creative &amp; Tech Stack
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="glass-card p-6 flex flex-col items-center justify-center text-center gap-4 hover:-translate-y-2 hover:bg-[var(--color-surface-hover)] border hover:border-primary/50 transition-all duration-300 group"
              >
                <div
                  className={`${tech.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-300`}
                >
                  <tech.Icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[var(--color-text-main)] font-semibold text-sm transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-[0.65rem] tracking-wider uppercase mt-1 transition-colors">
                    {tech.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION: TENTANG (PENDIDIKAN & PENGALAMAN) --- */}
        <section id="tentang" className="scroll-mt-32">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
              Tentang Saya
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-text-main)] transition-colors">
              Perjalanan &amp; Pengalaman
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-display font-bold text-[var(--color-text-main)] mb-8 flex items-center gap-3 transition-colors">
                <span className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center text-sm border-2 border-primary/40 -rotate-3 shadow-sm">
                  01
                </span>
                Pendidikan
              </h3>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[9px] before:h-full before:w-px before:bg-primary/30 transition-colors">
                <div className="relative pl-8 group">
                  <span className="absolute left-[1.5px] top-1.5 w-4 h-4 bg-[var(--color-background)] border-2 border-primary rotate-45 group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(234,88,12,0.2)]"></span>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20 mb-2 inline-block">
                    2023 - Sekarang
                  </span>
                  <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-1 transition-colors">
                    Sekolah Tinggi Teknologi Cipasung
                  </h4>
                  <p className="text-sm text-[var(--color-text-muted)] mb-2 transition-colors">
                    S1 Teknik Informatika
                  </p>
                  <p className="text-sm text-[var(--color-text-sub)] leading-relaxed transition-colors">
                    Fokus pada pengembangan perangkat lunak, arsitektur web
                    modern, dan sistem basis data terdistribusi.
                  </p>
                </div>
                <div className="relative pl-8 group">
                  <span className="absolute left-[1.5px] top-1.5 w-4 h-4 bg-[var(--color-background)] border-2 border-[var(--color-border)] rotate-45 group-hover:border-primary transition-colors"></span>
                  <span className="text-xs font-medium text-[var(--color-text-sub)] bg-[var(--color-surface)] px-2 py-1 rounded-md border border-[var(--color-border)] mb-2 inline-block transition-colors">
                    2019 - 2022
                  </span>
                  <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-1 transition-colors">
                    SMK NEGERI 2 TASIKMALAYA
                  </h4>
                  <p className="text-sm text-[var(--color-text-muted)] mb-2 transition-colors">
                    Teknik Instalasi Tenaga Listrik
                  </p>
                  <p className="text-sm text-[var(--color-text-sub)] leading-relaxed transition-colors">
                    Mempelajari Dasar Kelistrikan, Instalasi Tenaga Listrik dan
                    Otomasi Industri.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-display font-bold text-[var(--color-text-main)] mb-8 flex items-center gap-3 transition-colors">
                <span className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center text-sm border-2 border-primary/40 rotate-3 shadow-sm">
                  02
                </span>
                Pengalaman
              </h3>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[9px] before:h-full before:w-px before:bg-primary/30 transition-colors">
                <div className="relative pl-8 group">
                  <span className="absolute left-[1.5px] top-1.5 w-4 h-4 bg-[var(--color-background)] border-2 border-primary rotate-45 group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(234,88,12,0.2)]"></span>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20 mb-2 inline-block">
                    2026-2027
                  </span>
                  <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-1 transition-colors">
                    Presiden Mahasiswa
                  </h4>
                  <p className="text-sm text-[var(--color-text-muted)] mb-2 transition-colors">
                    BEM Sekolah tinggi Teknologi cipasung
                  </p>
                  <p className="text-sm text-[var(--color-text-sub)] leading-relaxed transition-colors">
                    Memimpin pergerakan mahasiswa, mengadvokasi isu strategis,
                    dan memanajemen kabinet organisasi kampus.
                  </p>
                </div>
                <div className="relative pl-8 group">
                  <span className="absolute left-[1.5px] top-1.5 w-4 h-4 bg-[var(--color-background)] border-2 border-[var(--color-border)] rotate-45 group-hover:border-primary transition-colors"></span>
                  <span className="text-xs font-medium text-[var(--color-text-sub)] bg-[var(--color-surface)] px-2 py-1 rounded-md border border-[var(--color-border)] mb-2 inline-block transition-colors">
                    2026-2027
                  </span>
                  <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-1 transition-colors">
                    Wakil Sekertaris Bidang Advokasi Pergerakan Mahasiswa Islam
                    Indonesia
                  </h4>
                  <p className="text-sm text-[var(--color-text-muted)] mb-2 transition-colors">
                    Sekolah Tinggi Teknologi Cipasung
                  </p>
                  <p className="text-sm text-[var(--color-text-sub)] leading-relaxed transition-colors">
                    Bertanggung jawab dalam mengkaji isu-isu keislaman dan
                    kebangsaan serta menyuarakan aspirasi mahasiswa dalam
                    advokasi kebijakan kampus dan isu sosial.
                  </p>
                </div>
                <div className="relative pl-8 group">
                  <span className="absolute left-[1.5px] top-1.5 w-4 h-4 bg-[var(--color-background)] border-2 border-[var(--color-border)] rotate-45 group-hover:border-primary transition-colors"></span>
                  <span className="text-xs font-medium text-[var(--color-text-sub)] bg-[var(--color-surface)] px-2 py-1 rounded-md border border-[var(--color-border)] mb-2 inline-block transition-colors">
                    2025-2026
                  </span>
                  <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-1 transition-colors">
                    Wakil Ketua Umum Himpunan Mahasiswa Informatika
                  </h4>
                  <p className="text-sm text-[var(--color-text-muted)] mb-2 transition-colors">
                    Sekolah Tinggi Teknologi Cipasung
                  </p>
                  <p className="text-sm text-[var(--color-text-sub)] leading-relaxed transition-colors">
                    Pengembangan strategi organisasi, koordinasi antar divisi,
                    serta memastikan program kerja berjalan sesuai visi.
                  </p>
                </div>
                <div className="relative pl-8 group">
                  <span className="absolute left-[1.5px] top-1.5 w-4 h-4 bg-[var(--color-background)] border-2 border-[var(--color-border)] rotate-45 group-hover:border-primary transition-colors"></span>
                  <span className="text-xs font-medium text-[var(--color-text-sub)] bg-[var(--color-surface)] px-2 py-1 rounded-md border border-[var(--color-border)] mb-2 inline-block transition-colors">
                    2024-2025
                  </span>
                  <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-1 transition-colors">
                    Anggota Hubungan Antar Lembaga Himpunan Mahasiswa
                    Informatika
                  </h4>
                  <p className="text-sm text-[var(--color-text-muted)] mb-2 transition-colors">
                    Sekolah Tinggi Teknologi Cipasung
                  </p>
                  <p className="text-sm text-[var(--color-text-sub)] leading-relaxed transition-colors">
                    Memelihara komunikasi dengan lembaga internal dan eksternal,
                    menjembatani aspirasi mahasiswa, serta membangun relasi
                    strategis untuk mendukung program kerja organisasi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: PROYEK --- */}
        <section id="proyek" className="scroll-mt-32">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-text-main)] transition-colors">
              Karya &amp; Proyek Terbaik
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="glass-card overflow-hidden group">
              <div className="h-48 relative overflow-hidden bg-gray-800">
                <img
                  src="/images/projek1.png"
                  alt="Project 1"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-overlay)] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-md text-xs font-medium text-white border border-white/20">
                    Company Profile
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-2 group-hover:text-primary transition-colors">
                  PT.Agnotech
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-4 line-clamp-2 transition-colors">
                  PT. Agnotech Indonesia adalah perusahaan yang bergerak di
                  bidang otamasi industri & manufacturing dan berfokus di bidang
                  Wiring Panel,Mantenence,Automasi,Iot,PLC,HMI,SCADA,Sensor.
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-primary hover:bg-[var(--color-surface-hover)] transition-all"
                  >
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-primary hover:bg-[var(--color-surface-hover)] transition-all"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="glass-card overflow-hidden group">
              <div className="h-48 relative overflow-hidden bg-gray-800">
                <img
                  src="/images/projek2.jpeg"
                  alt="Project 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-overlay)] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-md text-xs font-medium text-white border border-white/20">
                    Web Development
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-2 group-hover:text-primary transition-colors">
                  Aksinyata Pakubuwono
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-4 line-clamp-2 transition-colors">
                  Sistem informasi Panti Asuhan berbasis Website,serta memiliki
                  fitur-fitur seperti Donasi,Laporandonasi,Pendaftaran Anak
                  asuh,Laporan donatur,Laporan kegiatan.
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-primary hover:bg-[var(--color-surface-hover)] transition-all"
                  >
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-primary hover:bg-[var(--color-surface-hover)] transition-all"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="glass-card overflow-hidden group md:col-span-2 lg:col-span-1">
              <div className="h-48 relative overflow-hidden bg-gray-800">
                <img
                  src="/images/projek3.jpeg"
                  alt="Project 3"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-overlay)] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-md text-xs font-medium text-white border border-white/20">
                    IoT System
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-2 group-hover:text-primary transition-colors">
                  Power System Digital Monitoring
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-4 line-clamp-2 transition-colors">
                  Sistem monitoring berbasis WEB menggunakan Raspberry,serta
                  memiliki fitur-fitur seperti monitoring tegangan,arus,daya,
                  waktu menyala,serta laporan historical.
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-primary hover:bg-[var(--color-surface-hover)] transition-all"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="glass-card overflow-hidden group md:col-span-2 lg:col-span-1">
              <div className="h-48 relative overflow-hidden bg-gray-800">
                <img
                  src="/images/projek4.jpeg"
                  alt="Project 3"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-overlay)] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-md text-xs font-medium text-white border border-white/20">
                    Web Programming Terdistribusi
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-2 group-hover:text-primary transition-colors">
                  Sistem Pengadaan & Distribusi Barang Listrik 3 Kota
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-4 line-clamp-2 transition-colors">
                  Sistem informasi berbasis WEB yang digunakan untuk pengadaan
                  dan distribusi barang-barang listrik di 3 Kota.
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-primary hover:bg-[var(--color-surface-hover)] transition-all"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="glass-card overflow-hidden group md:col-span-2 lg:col-span-1">
              <div className="h-48 relative overflow-hidden bg-gray-800">
                <img
                  src="/images/projek5.jpeg"
                  alt="Project 5"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-overlay)] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-md text-xs font-medium text-white border border-white/20">
                    Website Media Informasi
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-2 group-hover:text-primary transition-colors">
                  Website Media Informasi BEM STT CIPASUNG
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-4 line-clamp-2 transition-colors">
                  Website Media Informasi BEM STT CIPASUNG yang digunakan untuk
                  informasi kegiatan mahasiswa,serta informasi donasi.
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-primary hover:bg-[var(--color-surface-hover)] transition-all"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="glass-card overflow-hidden group md:col-span-2 lg:col-span-1">
              <div className="h-48 relative overflow-hidden bg-gray-800">
                <img
                  src="/images/projek6.jpeg"
                  alt="Project 6"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-overlay)] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-md text-xs font-medium text-white border border-white/20">
                    Aplikasi Absensi Pace ID
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-2 group-hover:text-primary transition-colors">
                  Aplikasi Absensi Digital Berbasis Wajah dan Lokasi
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-4 line-clamp-2 transition-colors">
                  Aplikasi Absensi Digital Berbasis Wajah dan Lokasi dengan
                  menggunakan Teknologi Kecerdasan Buatan AI dan Perhitungan
                  gaji pengajuan cuti serta grafik kehadiran selama bekerja.
                  Aplikasi ini dirancang untuk mempermudah proses absensi dan
                  penggajian karyawan.
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-primary hover:bg-[var(--color-surface-hover)] transition-all"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: GALERI KEGIATAN --- */}
        <section id="galeri" className="scroll-mt-32">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
              Dokumentasi
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-text-main)] transition-colors">
              Galeri Kegiatan
            </h2>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {galleryPhotos.map((photo, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-4 relative group rounded-xl overflow-hidden border-4 border-[var(--color-surface-hover)] bg-[var(--color-surface)] transform transition-all duration-500 hover:rotate-2 hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:z-10"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-5">
                  <div className="glass-card px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-white font-medium shadow-xl border-white/20">
                    {photo.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION: KONTAK --- */}
        <section id="kontak" className="scroll-mt-32">
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
                    Mari Berdiskusi
                  </p>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--color-text-main)] mb-6 transition-colors">
                    Punya Ide Proyek?
                  </h2>
                  <p className="text-[var(--color-text-sub)] leading-relaxed transition-colors">
                    Saya selalu terbuka untuk mendiskusikan pekerjaan desain
                    produk atau peluang kemitraan. Mari bangun sesuatu yang luar
                    biasa bersama.
                  </p>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-primary shrink-0 transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-text-muted)] mb-1 transition-colors">
                        Email
                      </p>
                      <a
                        href="mailto:email@anda.com"
                        className="text-lg font-semibold text-[var(--color-text-main)] hover:text-primary transition-colors"
                      >
                        ahmadfakih4368@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-primary shrink-0 transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-text-muted)] mb-1 transition-colors">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/62..."
                        className="text-lg font-semibold text-[var(--color-text-main)] hover:text-primary transition-colors"
                      >
                        +62 85865009174
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-primary shrink-0 transition-colors">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-text-muted)] mb-1 transition-colors">
                        Lokasi
                      </p>
                      <p className="text-lg font-semibold text-[var(--color-text-main)] transition-colors">
                        Tasikmalaya, Jawa Barat
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--color-background)] rounded-2xl p-6 md:p-8 border border-[var(--color-border)] transition-colors">
                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-6 transition-colors">
                  Kirim Pesan Langsung
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider transition-colors">
                        Nama Anda
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-3.5 text-[var(--color-text-main)] focus:outline-none focus:border-primary/50 focus:bg-[var(--color-surface-hover)] transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider transition-colors">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-3.5 text-[var(--color-text-main)] focus:outline-none focus:border-primary/50 focus:bg-[var(--color-surface-hover)] transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider transition-colors">
                      Pesan
                    </label>
                    <textarea
                      rows="4"
                      className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-3.5 text-[var(--color-text-main)] focus:outline-none focus:border-primary/50 focus:bg-[var(--color-surface-hover)] transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-teal-400 text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-12 relative z-10 transition-colors mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-[var(--color-text-main)] tracking-tight">
                AHMAD <span className="text-primary">FAKIH</span>
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-sm">
                Merancang arsitektur otomasi industri yang presisi, sembari
                merawat nalar untuk terus mengawal isu infrastruktur dan
                lingkungan.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-[var(--color-text-main)]">
                Tautan Cepat
              </h4>
              <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                <li>
                  <a
                    href="#beranda"
                    className="hover:text-primary transition-colors"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#tentang"
                    className="hover:text-primary transition-colors"
                  >
                    Tentang Saya
                  </a>
                </li>
                <li>
                  <a
                    href="#proyek"
                    className="hover:text-primary transition-colors"
                  >
                    Proyek
                  </a>
                </li>
                <li>
                  <a
                    href="#kontak"
                    className="hover:text-primary transition-colors"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-[var(--color-text-main)]">
                Sosial Media
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Ahmadfakih15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmad-fakih-a33ab427a?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/ahmdfakih__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.tiktok.com/@ujangkl15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
                >
                  <Tiktok size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[var(--color-border)] text-center text-sm text-[var(--color-text-muted)] flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-[var(--color-text-sub)] font-medium transition-colors">
                AhmadFakih
              </span>
              . All rights reserved.
            </p>
            <p>
              Built with <span className="text-primary font-medium">React</span>{" "}
              &amp;{" "}
              <span className="text-primary font-medium">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
