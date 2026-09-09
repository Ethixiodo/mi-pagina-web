import React, { useState } from 'react';
import { 
  Server, 
  Code2, 
  AppWindow, 
  Terminal, 
  Mail, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Menu, 
  X, 
  ExternalLink, 
  Github, 
  Linkedin, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Briefcase, 
  Database, 
  Router, 
  MapPin, 
  Award, 
  Send,
  Download,
  Copy,
  Check
} from 'lucide-react';
import { toast } from 'sonner';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'infra' | 'dev'>('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('marcelo.soto.ojeda@example.com');
    setCopiedEmail(true);
    toast.success('Correo copiado al portapapeles');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    toast.success('¡Mensaje enviado (simulación exitosa)!');
  };

  const projects = [
    {
      id: 1,
      category: 'dev',
      type: 'Full Stack / TI',
      title: 'Plataforma HelpDesk & Gestión de Incidencias',
      description: 'Sistema web para control y seguimiento de tickets de soporte técnico, asignación por prioridades (SLA), inventario de equipos y reportes operativos.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      demoLink: '#placeholder-demo-1',
      githubLink: '#placeholder-github-1',
    },
    {
      id: 2,
      category: 'infra',
      type: 'Infraestructura & SysAdmin',
      title: 'Infraestructura Virtualizada & Monitoreo Proactivo',
      description: 'Despliegue de clúster de virtualización con Proxmox VE, segmentación por VLANs, servidor de archivos seguro Samba/NFS y telemetría de recursos con Grafana.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80',
      tags: ['Proxmox VE', 'Debian Linux', 'Docker', 'Grafana'],
      demoLink: '#placeholder-demo-2',
      githubLink: '#placeholder-github-2',
    },
    {
      id: 3,
      category: 'dev',
      type: 'Desarrollo Web',
      title: 'Portal Corporativo con Módulo de Cotizaciones',
      description: 'Sitio web responsivo con catálogo de servicios interactivo, formulario dinámico de cotizaciones con validación y notificaciones automatizadas vía correo.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
      tags: ['TypeScript', 'React', 'Tailwind CSS', 'REST API'],
      demoLink: '#placeholder-demo-3',
      githubLink: '#placeholder-github-3',
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-200 antialiased font-sans selection:bg-sky-500 selection:text-white relative overflow-x-hidden">
      
      {/* Background blueprint grid & radial glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-0" 
        style={{
          backgroundSize: '36px 36px',
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)'
        }} 
      />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none z-0 bg-[radial-gradient(circle_500px_at_50%_10%,rgba(14,165,233,0.15),transparent_70%)]" />

      {/* ==================== BARRA DE NAVEGACIÓN (HEADER) ==================== */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090d16]/85 border-b border-slate-800/80 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <a href="#hero" className="group flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-sky-600 to-sky-400 p-[1px] shadow-lg shadow-sky-500/20">
              <div className="w-full h-full bg-[#090d16] rounded-[7px] flex items-center justify-center font-mono font-bold text-sky-400 text-sm group-hover:bg-transparent group-hover:text-white transition-all">
                MS
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-sky-400 transition-colors">Marcelo Soto</span>
              <span className="text-[11px] text-slate-400 font-mono">Ing. en Informática</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300">
            <a href="#about" className="px-3 py-1.5 rounded-md hover:text-sky-400 hover:bg-slate-800/60 transition-all">Sobre Mí</a>
            <a href="#services" className="px-3 py-1.5 rounded-md hover:text-sky-400 hover:bg-slate-800/60 transition-all">Especialidades</a>
            <a href="#projects" className="px-3 py-1.5 rounded-md hover:text-sky-400 hover:bg-slate-800/60 transition-all">Proyectos</a>
            <a href="#skills" className="px-3 py-1.5 rounded-md hover:text-sky-400 hover:bg-slate-800/60 transition-all">Stack Técnico</a>
            <a href="#contact" className="px-3 py-1.5 rounded-md hover:text-sky-400 hover:bg-slate-800/60 transition-all">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a 
              href="/standalone.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 border border-slate-700/60 hover:text-white hover:border-slate-500 transition-all"
              title="Descarga o visualiza el archivo HTML único para hosting directo"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Ver HTML Único</span>
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/30 hover:bg-sky-500 hover:text-white transition-all duration-200"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contáctame</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            type="button" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir Menú" 
            className="md:hidden p-2 rounded-lg bg-slate-800/70 border border-slate-700/60 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#111827]/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800 hover:text-sky-400 transition-colors"
            >
              Sobre Mí
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800 hover:text-sky-400 transition-colors"
            >
              Especialidades
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800 hover:text-sky-400 transition-colors"
            >
              Proyectos
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800 hover:text-sky-400 transition-colors"
            >
              Stack Técnico
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800 hover:text-sky-400 transition-colors"
            >
              Contacto
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a 
                href="/standalone.html" 
                target="_blank"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-mono border border-slate-700 text-slate-300 hover:bg-slate-800"
              >
                <Download className="w-3.5 h-3.5 text-sky-400" />
                <span>Archivo HTML Único (Descarga)</span>
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-sky-500 text-white hover:bg-sky-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Iniciar Conversación</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ==================== CONTENIDO PRINCIPAL ==================== */}
      <main className="relative z-10 flex-grow">

        {/* ==================== HERO SECTION ==================== */}
        <section id="hero" className="relative pt-16 pb-20 md:pt-28 md:pb-32 overflow-hidden border-b border-slate-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Bio & Value Proposition */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-mono">Disponible para proyectos y oportunidades TI</span>
                </div>

                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                    Marcelo Iván <br />
                    <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                      Soto Ojeda
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl font-medium text-slate-400 font-mono">
                    Ingeniero en Informática <span className="text-sky-400 font-semibold">• INACAP (2023)</span>
                  </p>
                </div>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Combino la solidez técnica de la <strong className="text-white font-semibold">infraestructura y el soporte TI</strong> con la agilidad del <strong className="text-white font-semibold">desarrollo de software y aplicaciones web</strong>. Construyo plataformas estables, seguras y de alto rendimiento orientadas a optimizar operaciones y resolver necesidades reales de negocio.
                </p>

                {/* CTA Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a 
                    href="#projects" 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:from-sky-400 hover:to-blue-500 transition-all duration-200 group"
                  >
                    <span>Ver Proyectos</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a 
                    href="#contact" 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/80 text-slate-200 border border-slate-700 hover:bg-slate-700/80 hover:text-white transition-all duration-200"
                  >
                    <Mail className="w-4 h-4 text-sky-400" />
                    <span>Contactar</span>
                  </a>

                  {/* PLACEHOLDER: Reemplazar con el enlace a tu CV en PDF */}
                  <button 
                    onClick={() => toast.info('Placeholder de CV: Reemplaza este botón con el enlace a tu archivo PDF real.')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-xs text-slate-400 border border-dashed border-slate-700 hover:text-slate-200 hover:border-slate-500 transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Descargar CV</span>
                  </button>
                </div>

                {/* Key Metrics / Highlights */}
                <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800/80 text-left max-w-lg mx-auto lg:mx-0">
                  <div>
                    <p className="text-xl sm:text-2xl font-bold font-mono text-sky-400">2023</p>
                    <p className="text-xs text-slate-400">Egresado INACAP</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold font-mono text-white">Full Stack</p>
                    <p className="text-xs text-slate-400">Web & Aplicaciones</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">Soporte TI</p>
                    <p className="text-xs text-slate-400">Redes y Servidores</p>
                  </div>
                </div>

              </div>

              {/* Right Column: Profile Card & Terminal */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-md bg-[#161f30]/90 rounded-2xl border border-slate-800 p-6 shadow-2xl relative group">
                  <div className="absolute -top-3 -right-3 w-28 h-28 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all"></div>

                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">marcelo@profile ~ inacap</span>
                  </div>

                  {/* Profile Avatar Placeholder */}
                  <div className="mt-5 mb-5 flex flex-col items-center text-center">
                    <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 p-[2px] shadow-lg">
                      <div className="w-full h-full rounded-full bg-[#090d16] overflow-hidden flex items-center justify-center">
                        <img 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
                          alt="Marcelo Iván Soto Ojeda" 
                          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#090d16]" title="Activo"></span>
                    </div>
                    <div className="mt-3">
                      <h3 className="font-bold text-white text-base">Marcelo Soto Ojeda</h3>
                      <p className="text-xs text-sky-400 font-mono">Ingeniero en Informática</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Soporte TI • DevOps Junior • Full Stack</p>
                    </div>
                  </div>

                  {/* Terminal Status Output */}
                  <div className="bg-[#090d16]/90 rounded-xl p-3.5 border border-slate-800 text-xs font-mono text-slate-300 space-y-1.5">
                    <div className="flex items-center text-slate-400 text-[11px]">
                      <span className="text-emerald-400 mr-2">➜</span>
                      <span>status --detailed</span>
                    </div>
                    <div className="text-[11px] leading-relaxed text-slate-300">
                      <span className="text-sky-400">formacion:</span> "INACAP (2023)"<br/>
                      <span className="text-sky-400">ubicacion:</span> "Chile"<br/>
                      <span className="text-sky-400">enfoque:</span> ["Infraestructura", "Web", "Cloud"]<br/>
                      <span className="text-sky-400">seguridad:</span> "Best practices & hardening"<br/>
                      <span className="text-emerald-400">disponibilidad:</span> true
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Soporte & SysAdmin
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-sky-400" />
                      Desarrollo Moderno
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== SOBRE MÍ (ABOUT ME) ==================== */}
        <section id="about" className="py-20 border-b border-slate-800/50 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                <Terminal className="w-3 h-3" />
                <span>Trayectoria Profesional</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Sobre Mí & Formación
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Ingeniero en Informática con capacidad comprobada para operar en la intersección del hardware, las redes y el desarrollo de software.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
                <div className="bg-[#161f30]/60 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-sky-400" />
                    Egresado INACAP (2023)
                  </h3>
                  <p>
                    Soy <strong className="text-white">Marcelo Iván Soto Ojeda</strong>, Ingeniero en Informática titulado de <strong className="text-sky-300">INACAP en 2023</strong>. Mi formación universitaria me otorgó una perspectiva integral del ciclo de vida tecnológico: desde la concepción lógica del código y las arquitecturas de bases de datos, hasta el despliegue en entornos productivos y el soporte técnico de infraestructura crítica.
                  </p>
                  <p>
                    Lo que define mi perfil profesional es la <strong className="text-white">versatilidad técnica</strong>. No me limito únicamente al desarrollo de interfaces o lógica de backend; poseo sólidas competencias para diagnosticar incidentes de red, configurar servidores, virtualizar cargas de trabajo y garantizar que los servicios corporativos se mantengan con alta disponibilidad.
                  </p>
                  <p>
                    Me caracterizo por un enfoque analítico, proactivo y meticuloso, orientado a la resolución metódica de problemas, la optimización continua de procesos y la aplicación de buenas prácticas de ciberseguridad y documentación.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Mentalidad de Infraestructura</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Diseño software pensando en la escalabilidad, recursos de servidor y facilidad de mantenimiento.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Resolución Efectiva</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Diagnóstico rápido de fallas en hardware, software, conectividad y sistemas operativos.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Details Card */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-gradient-to-b from-[#161f30] to-[#111827] border border-slate-800 shadow-lg relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">Certificación Académica</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30">2019 - 2023</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">Ingeniería en Informática</h4>
                  <p className="text-sm text-slate-300 mt-1 font-medium">Universidad Tecnológica de Chile • INACAP</p>
                  
                  <ul className="mt-4 space-y-2 text-xs text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Plan de estudios con énfasis en ingeniería de software y redes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Administración de sistemas operativos (Linux / Windows Server)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Arquitectura de datos relacionales y soluciones empresariales</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#161f30]/80 border border-slate-800 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Pilares de Trabajo</h4>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">Resolución de Incidentes</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">Atención a Usuarios / Mesa de Ayuda</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">Clean Code & Refactor</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">Virtualización (VMware/Proxmox)</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">Git & Trabajo Colaborativo</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ==================== ESPECIALIDADES / ÁREAS DE DOMINIO ==================== */}
        <section id="services" className="py-20 border-b border-slate-800/50 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                <Layers className="w-3 h-3" />
                <span>Servicios & Capacidades</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Áreas de Dominio Técnico
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Soluciones integrales que combinan la administración de infraestructura de TI con el desarrollo de productos digitales modernos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Especialidad 1: Soporte & Infraestructura */}
              <div className="bg-[#161f30]/80 hover:bg-[#161f30] transition-all duration-300 rounded-2xl p-7 border border-slate-800 hover:border-sky-500/40 shadow-lg flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-sky-500 group-hover:text-white transition-all">
                    <Router className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    Soporte & Infraestructura
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Administración integral de servidores, atención de soporte técnico nivel 1 y 2, configuración de redes LAN/WAN, virtualización y respaldo de datos críticos para la continuidad operativa.
                  </p>
                  
                  <div className="pt-2">
                    <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">Competencias Clave:</p>
                    <ul className="text-xs text-slate-300 space-y-1.5 font-mono">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        <span>Windows Server & Linux (Ubuntu/Debian)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        <span>Virtualización con Proxmox, Hyper-V y VMware</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        <span>Configuración de DHCP, DNS, VLANs y routing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        <span>Políticas de respaldo y continuidad de negocio</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-sky-400 font-mono">
                  <span>Alta Disponibilidad</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              {/* Especialidad 2: Desarrollo Web */}
              <div className="bg-[#161f30]/80 hover:bg-[#161f30] transition-all duration-300 rounded-2xl p-7 border border-slate-800 hover:border-sky-500/40 shadow-lg flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    Desarrollo Web Full Stack
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Diseño e implementación de sitios web corporativos y plataformas dinámicas a medida. Optimización de velocidad, interfaces fluidas, diseño adaptativo y consumo eficiente de APIs REST.
                  </p>
                  
                  <div className="pt-2">
                    <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">Competencias Clave:</p>
                    <ul className="text-xs text-slate-300 space-y-1.5 font-mono">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        <span>Frontend: HTML5, CSS3, Tailwind CSS, TypeScript</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        <span>Frameworks: React, Next.js / Vue.js</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        <span>Backend: Node.js, Express, Python (FastAPI/Flask)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        <span>Optimización SEO técnico y accesibilidad</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-sky-400 font-mono">
                  <span>Mobile-First & Clean Code</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              {/* Especialidad 3: Desarrollo de Aplicaciones */}
              <div className="bg-[#161f30]/80 hover:bg-[#161f30] transition-all duration-300 rounded-2xl p-7 border border-slate-800 hover:border-sky-500/40 shadow-lg flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <AppWindow className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    Desarrollo de Aplicaciones
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Creación e integración de aplicaciones empresariales, sistemas de gestión internos (CRUD), automatización de tareas y conexión robusta con bases de datos relacionales y no relacionales.
                  </p>
                  
                  <div className="pt-2">
                    <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">Competencias Clave:</p>
                    <ul className="text-xs text-slate-300 space-y-1.5 font-mono">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        <span>Bases de Datos: PostgreSQL, MySQL, SQL Server</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        <span>APIs RESTful seguras con autenticación JWT / OAuth</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        <span>Automatización de flujos y scripts (Bash / Python)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        <span>Containerización y despliegue básico con Docker</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-sky-400 font-mono">
                  <span>Escalabilidad & Datos</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ==================== PROYECTOS / PORTAFOLIO ==================== */}
        <section id="projects" className="py-20 border-b border-slate-800/50 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                  <Briefcase className="w-3 h-3" />
                  <span>Casos Prácticos & Portafolio</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Proyectos Destacados
                </h2>
                <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                  Selección de iniciativas representativas que reflejan capacidades en infraestructura, desarrollo full stack y automatización de procesos.
                </p>
              </div>

              {/* Categorías Interactivas */}
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <button 
                  onClick={() => setFilter('all')}
                  className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${filter === 'all' ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'}`}
                >
                  Todos
                </button>
                <button 
                  onClick={() => setFilter('infra')}
                  className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${filter === 'infra' ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'}`}
                >
                  Infraestructura TI
                </button>
                <button 
                  onClick={() => setFilter('dev')}
                  className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${filter === 'dev' ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'}`}
                >
                  Desarrollo Web & Apps
                </button>
              </div>
            </div>

            {/* Grid de Proyectos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-[#161f30] rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300 group shadow-lg"
                >
                  <div>
                    <div className="relative h-48 bg-slate-900 overflow-hidden border-b border-slate-800">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#090d16]/85 backdrop-blur-md border border-slate-700 text-[11px] font-mono text-sky-300">
                        {project.type}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/80 mt-4 text-xs font-mono">
                    <button 
                      onClick={() => toast.info(`Demostración de '${project.title}': Placeholder listo para insertar URL real.`)}
                      className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Ver Detalles</span>
                    </button>
                    <button 
                      onClick={() => toast.info(`Repositorio de '${project.title}': Placeholder listo para insertar link de GitHub.`)}
                      className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Código</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================== STACK TÉCNICO / HABILIDADES ==================== */}
        <section id="skills" className="py-20 border-b border-slate-800/50 relative bg-[#111827]/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                <Terminal className="w-3 h-3" />
                <span>Arsenal Tecnológico</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Herramientas & Entornos
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Tecnologías y plataformas con las que desarrollo soluciones de software y mantengo infraestructuras en producción.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 rounded-2xl bg-[#161f30] border border-slate-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <Server className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base">Infraestructura & OS</h3>
                </div>
                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span>Linux (Ubuntu / Debian)</span>
                    <span className="text-sky-400">Avanzado</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span>Windows Server / Active Dir.</span>
                    <span className="text-sky-400">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span>Virtualización (VMware/Proxmox)</span>
                    <span className="text-sky-400">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Docker Containers</span>
                    <span className="text-slate-400">Práctico</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#161f30] border border-slate-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Router className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base">Redes & Hardware</h3>
                </div>
                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span>VLANs, DNS, DHCP, NAT</span>
                    <span className="text-emerald-400">Avanzado</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span>Mesa de Ayuda (Soporte L1/L2)</span>
                    <span className="text-emerald-400">Avanzado</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span>Cableado Estructurado & Patch</span>
                    <span className="text-emerald-400">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Respaldos & Recuperación TI</span>
                    <span className="text-emerald-400">Avanzado</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#161f30] border border-slate-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base">Desarrollo Web</h3>
                </div>
                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span>JavaScript / TypeScript</span>
                    <span className="text-indigo-400">Avanzado</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span>React & Tailwind CSS</span>
                    <span className="text-indigo-400">Avanzado</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span>Node.js / Express</span>
                    <span className="text-indigo-400">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Python / APIs REST</span>
                    <span className="text-slate-400">Intermedio</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#161f30] border border-slate-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base">Datos & Metodologías</h3>
                </div>
                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span>PostgreSQL / MySQL</span>
                    <span className="text-amber-400">Avanzado</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span>Git / GitHub Workflows</span>
                    <span className="text-amber-400">Avanzado</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span>Metodologías Ágiles (Scrum)</span>
                    <span className="text-amber-400">Práctico</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Documentación Técnica</span>
                    <span className="text-amber-400">Avanzado</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ==================== CONTACTO & ENLACES ==================== */}
        <section id="contact" className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                <Send className="w-3 h-3" />
                <span>Conectemos</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Ponte en Contacto
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                ¿Tienes una vacante en tu equipo de TI, un proyecto de infraestructura o necesitas desarrollar una aplicación web? Conversemos.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Información Directa */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="bg-[#161f30] p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
                  <div>
                    <h3 className="text-lg font-bold text-white">Canales Directos</h3>
                    <p className="text-xs text-slate-400 mt-1">Responderé a la brevedad posible dentro de la jornada laboral.</p>
                  </div>

                  <div className="space-y-4">
                    
                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Correo Electrónico</p>
                          <button 
                            onClick={handleCopyEmail}
                            className="text-slate-400 hover:text-white p-1 rounded transition-colors"
                            title="Copiar correo"
                          >
                            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                        {/* PLACEHOLDER: Correo real */}
                        <a href="mailto:marcelo.soto.ojeda@example.com" className="text-sm font-medium text-white hover:text-sky-400 transition-colors break-all">
                          marcelo.soto.ojeda@example.com
                        </a>
                        <span className="block text-[10px] text-amber-400 font-mono mt-0.5">*(Placeholder: inserte su correo real)*</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Ubicación</p>
                        <p className="text-sm font-medium text-white">Chile</p>
                        <span className="text-xs text-slate-400">Disponible para modalidad Remota, Híbrida o Presencial</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Acreditación</p>
                        <p className="text-sm font-medium text-white">INACAP (Egresado 2023)</p>
                        <span className="text-xs text-slate-400">Ingeniería en Informática</span>
                      </div>
                    </div>

                  </div>

                  {/* Redes Sociales */}
                  <div className="pt-4 border-t border-slate-800 space-y-3">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Perfiles Profesionales</p>
                    <div className="flex flex-col gap-2.5">
                      
                      {/* PLACEHOLDER: LinkedIn */}
                      <a 
                        href="https://linkedin.com/in/placeholder-marcelo-soto" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-sky-500/50 hover:bg-slate-700/60 transition-all text-xs font-medium text-slate-200 group"
                      >
                        <span className="flex items-center gap-2.5">
                          <Linkedin className="w-4 h-4 text-sky-400" />
                          <span>LinkedIn / Perfil Profesional</span>
                        </span>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
                      </a>

                      {/* PLACEHOLDER: GitHub */}
                      <a 
                        href="https://github.com/placeholder-marcelo-soto" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-sky-500/50 hover:bg-slate-700/60 transition-all text-xs font-medium text-slate-200 group"
                      >
                        <span className="flex items-center gap-2.5">
                          <Github className="w-4 h-4 text-slate-200" />
                          <span>GitHub / Repositorios de Código</span>
                        </span>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
                      </a>

                    </div>
                  </div>

                </div>

              </div>

              {/* Formulario */}
              <div className="lg:col-span-7">
                <div className="bg-[#161f30] p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl relative">
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white">Enviar Mensaje Directo</h3>
                    <p className="text-xs text-slate-400 mt-1">Completa el formulario para enviar una propuesta, consulta o solicitud técnica.</p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-slate-300">Tu Nombre / Empresa *</label>
                        <input 
                          type="text" 
                          id="contact-name" 
                          required 
                          placeholder="Ej. Camila Morales" 
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-slate-300">Tu Correo Electrónico *</label>
                        <input 
                          type="email" 
                          id="contact-email" 
                          required 
                          placeholder="correo@empresa.com" 
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-slate-300">Asunto o Tipo de Requerimiento *</label>
                      <select 
                        id="contact-subject" 
                        required 
                        defaultValue=""
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                      >
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="oportunidad-laboral">Oportunidad Laboral / Contratación</option>
                        <option value="soporte-infraestructura">Soporte TI / Infraestructura de Servidores</option>
                        <option value="desarrollo-web">Desarrollo de Sitio o Aplicación Web</option>
                        <option value="consultoria-ti">Consultoría Informática / Redes</option>
                        <option value="otro">Otro Motivo</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-slate-300">Mensaje Detallado *</label>
                      <textarea 
                        id="contact-message" 
                        rows={5} 
                        required 
                        placeholder="Describe los detalles de tu consulta, alcance del proyecto o propuesta laboral..." 
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all resize-y"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm bg-sky-500 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-lg shadow-sky-500/25 transition-all duration-200"
                      >
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensaje</span>
                      </button>
                    </div>

                    {formSubmitted && (
                      <div className="mt-4 p-4 rounded-xl text-xs font-mono bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <strong className="font-bold">¡Mensaje simulado enviado con éxito!</strong>
                        </div>
                        <p className="mt-1 text-slate-300">Gracias por escribir. Para conectar un endpoint real (ej. Formspree o EmailJS), enlaza el backend o servicio de correos.</p>
                      </div>
                    )}

                  </form>

                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-slate-800/80 bg-[#090d16] relative z-10 py-10 text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono font-bold text-xs border border-sky-500/30">
              MS
            </div>
            <div>
              <p className="font-semibold text-slate-200 text-sm">Marcelo Iván Soto Ojeda</p>
              <p className="text-[11px] text-slate-400">Ingeniero en Informática • INACAP 2023</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 font-mono text-xs">
            <a href="#hero" className="hover:text-sky-400 transition-colors">Inicio</a>
            <a href="#about" className="hover:text-sky-400 transition-colors">Sobre Mí</a>
            <a href="#services" className="hover:text-sky-400 transition-colors">Especialidades</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Proyectos</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Contacto</a>
          </div>

          <div className="text-center md:text-right font-mono text-[11px] text-slate-400">
            <p>© 2024 - 2026 Marcelo Soto Ojeda. Todos los derechos reservados.</p>
            <p className="text-slate-400 mt-0.5">Diseño optimizado • Mobile First • Dark Mode</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
