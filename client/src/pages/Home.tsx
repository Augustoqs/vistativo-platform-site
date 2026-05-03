import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, CheckCircle, AlertCircle, TrendingUp, Zap, FileText, Eye, Users, Lock, BarChart3, Lightbulb, Star, MessageCircle, Download, Calendar, Shield, ArrowRight, MessageCircle as WhatsAppIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: ""
  });
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const formProgress = (formStep / 3) * 100;

  // Scroll Animation Hook
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all scroll-animate elements
    document.querySelectorAll('.scroll-animate, .stagger-item').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/vistativo-logo_d84c969d.png"
              alt="VistAtivo Logo"
              className="h-10 w-10"
            />
            <span className="font-bold text-lg hidden sm:inline">
              Vist<span className="text-accent">Ativo</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("solucao")} className="text-sm hover:text-accent transition">Solução</button>
            <button onClick={() => scrollToSection("funcionalidades")} className="text-sm hover:text-accent transition">Funcionalidades</button>
            <button onClick={() => scrollToSection("modelo-3d")} className="text-sm hover:text-accent transition">Modelo 3D</button>
            <button onClick={() => scrollToSection("beneficios")} className="text-sm hover:text-accent transition">Benefícios</button>
            <button onClick={() => scrollToSection("social-proof")} className="text-sm hover:text-accent transition">Clientes</button>
            <button onClick={() => scrollToSection("faq")} className="text-sm hover:text-accent transition">FAQ</button>
            <button onClick={() => scrollToSection("contato")} className="text-sm hover:text-accent transition">Contato</button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              onClick={() => scrollToSection("recursos")}
              variant="ghost"
              className="text-sm"
            >
              <Download size={16} className="mr-2" />
              Guia Gratuito
            </Button>
            <Button 
              onClick={() => scrollToSection("contato")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Agendar Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="container py-4 space-y-3">
              <button onClick={() => scrollToSection("solucao")} className="block w-full text-left py-2 hover:text-accent">Solução</button>
              <button onClick={() => scrollToSection("funcionalidades")} className="block w-full text-left py-2 hover:text-accent">Funcionalidades</button>
              <button onClick={() => scrollToSection("modelo-3d")} className="block w-full text-left py-2 hover:text-accent">Modelo 3D</button>
              <button onClick={() => scrollToSection("beneficios")} className="block w-full text-left py-2 hover:text-accent">Benefícios</button>
              <button onClick={() => scrollToSection("social-proof")} className="block w-full text-left py-2 hover:text-accent">Clientes</button>
              <button onClick={() => scrollToSection("faq")} className="block w-full text-left py-2 hover:text-accent">FAQ</button>
              <Button 
                onClick={() => scrollToSection("contato")}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4"
              >
                Agendar Demo
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 scroll-animate">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-lg text-xs font-semibold tracking-wide animate-slide-in-left">
                ✓ Confiado por 10+ empresas
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight text-foreground animate-slide-in-left" style={{animationDelay: '0.1s'}}>
                Gestão centralizada de ativos operacionais.
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                Plataforma SaaS para gestão visual de ativos, documentação técnica, manutenção preventiva e indicadores operacionais. Desenvolvida para hospitais, indústrias, facilities e condomínios que precisam de rastreabilidade, conformidade e controle.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button 
                  onClick={() => scrollToSection("contato")}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-base h-12 px-6 w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 animate-slide-in-left"
                  style={{animationDelay: '0.3s'}}
                >
                  Solicitar demonstração <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button 
                  onClick={() => scrollToSection("recursos")}
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 text-base h-12 px-6 w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 animate-slide-in-left"
                  style={{animationDelay: '0.4s'}}
                >
                  <Download size={18} className="mr-2" /> Baixar guia gratuito
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Segurança: LGPD Compliant | SSL | ISO 27001
              </p>
            </div>
            <div className="relative w-full scroll-animate animate-slide-in-right">
              <img 
                src="/images/vistativo-hero-image_bafc1b4b.png"
                alt="Dashboard VistAtivo - Hero"
                className="rounded-lg shadow-2xl border border-accent/20 w-full hover:shadow-2xl transition-shadow duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point Section - Storytelling */}
      <section className="py-16 md:py-20 bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative w-full md:order-2">
              <img 
                src="/images/vistativo-pain-point-hospital-equipment-VsnRB6BhUsVSXkBTP8QSvo.png"
                alt="Técnico em Ambiente Hospitalar/Industrial com Equipamentos Críticos"
                className="rounded-lg shadow-2xl border border-accent/20 w-full"
                loading="lazy"
              />
            </div>
            <div className="space-y-6 md:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins">
                O problema que você enfrenta todos os dias.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Gestores de facilities, engenharia e manutenção lidam com caos: planilhas desorganizadas, documentos espalhados, falta de visibilidade sobre ativos críticos e decisões reativas baseadas em falhas.
              </p>
              <div className="space-y-3">
                {[
                  "Tempo perdido procurando informações de ativos",
                  "Manutenção reativa causa custos corretivos altos",
                  "Falta de rastreabilidade para auditoria",
                  "Documentação técnica desorganizada e vencida",
                  "Impossível visualizar equipamentos no contexto da operação"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucao" className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
              Solução integrada para gestão de ativos.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Centralize informações, automatize processos e melhore a conformidade operacional com uma única plataforma.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Eye,
                title: "Visualização Centralizada",
                desc: "Dashboard unificado com todos os ativos, documentos, cronogramas e histórico."
              },
              {
                icon: TrendingUp,
                title: "Indicadores Operacionais",
                desc: "Acompanhe saúde dos equipamentos, custos preventivos e economia realizada."
              },
              {
                icon: Shield,
                title: "Conformidade Regulatória",
                desc: "Rastreabilidade completa, alertas de vencimento e documentação organizada."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition">
                <item.icon size={28} className="text-accent mb-4" />
                <h3 className="font-bold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="py-16 md:py-20 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
              Funcionalidades essenciais.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para gerenciar ativos, documentação, preventivas e conformidade.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Zap, title: "Dashboard", desc: "Visão executiva com indicadores em tempo real." },
              { icon: FileText, title: "Documentação", desc: "Centralize manuais, laudos e certificados." },
              { icon: Eye, title: "Modelo 3D", desc: "Localize ativos visualmente no edifício." },
              { icon: TrendingUp, title: "Preventivas", desc: "Cronograma de manutenção organizado." },
              { icon: AlertCircle, title: "Alertas", desc: "Notificações de vencimentos e risco." },
              { icon: BarChart3, title: "Relatórios", desc: "Exportação de dados em PDF." },
              { icon: Lock, title: "Controle de Acesso", desc: "Permissões por usuário e unidade." },
              { icon: Users, title: "QR Code", desc: "Acesso mobile à ficha do ativo." },
              { icon: Lightbulb, title: "Indicadores", desc: "Métricas de saúde operacional." }            ].map((item, idx) => (
              <div key={idx} className="bg-background border card-border border-border rounded-lg p-6 stagger-item card-hover feature-card">
                <item.icon size={24} className="card-icon text-accent mb-3" />
                <h3 className="card-title font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}          </div>
        </div>
      </section>

      {/* Modelo 3D */}
      <section id="modelo-3d" className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative w-full">
              <img 
                src="/images/vistativo-3d-modelo-com-logo_8914f726.png"
                alt="Modelo 3D - Visualizador 3D do VistAtivo"
                className="rounded-lg shadow-2xl border border-accent/20 w-full"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins">
                Integração com Modelo 3D
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Vincule seus ativos ao modelo 3D da edificação. Localize equipamentos visualmente, entenda relacionamentos entre sistemas e melhore a eficiência operacional.
              </p>
              <div className="space-y-3">
                {[
                  "Visualize ativos no contexto do edifício.",
                  "Navegue por sistemas e subsistemas.",
                  "Identifique equipamentos críticos rapidamente.",
                  "Integre dados operacionais ao modelo 3D.",
                  "Acesse histórico e documentos do ativo."
                ].map((bullet, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-muted-foreground">{bullet}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-accent font-semibold pt-4">
                Benefício: Reduza tempo de localização de equipamentos, melhore diagnósticos e aumente eficiência operacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manutenção Preventiva */}
      <section className="py-16 md:py-20 bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins">
                Manutenção preventiva organizada
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Organize cronogramas de preventiva, acompanhe execução e mantenha histórico completo de cada equipamento. Reduza custos corretivos com antecipação de falhas.
              </p>
              <div className="space-y-3">
                {[
                  "Cronograma de preventivas por ativo.",
                  "Alertas automáticos de vencimento.",
                  "Histórico do ativo completo.",
                  "Priorização por criticidade.",
                  "Redução de custos corretivos."
                ].map((bullet, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-muted-foreground">{bullet}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-accent font-semibold pt-4">
                Benefício: Antecipe falhas, reduza custos corretivos e aumente a confiabilidade operacional.
              </p>
            </div>
            <div className="relative w-full">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028582337/ayjYDQzpn7HBCcTw2f82zp/vistativo-preventive-maintenance-gsJfAL9Bt5ZQzGtNy9BDRc.webp"
                alt="Manutenção Preventiva"
                className="rounded-lg shadow-2xl border border-accent/20 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios por Área */}
      <section id="beneficios" className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
              Benefícios por área de atuação
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Valor específico para cada perfil de sua operação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Gestão",
                items: ["Visão executiva da operação", "Indicadores financeiros", "Relatórios customizados", "Priorização de risco"]
              },
              {
                title: "Manutenção",
                items: ["Preventivas organizadas", "Histórico acessível", "Checklists padronizados", "Ativos críticos em destaque"]
              },
              {
                title: "Engenharia",
                items: ["Documentação centralizada", "Modelo 3D integrado", "Padronização de tags", "Controle técnico"]
              },
              {
                title: "Auditoria/Compliance",
                items: ["Evidências organizadas", "Documentos com validade", "Rastreabilidade completa", "Histórico de intervenções"]
              },
              {
                title: "Campo/Operação",
                items: ["Acesso via QR Code", "Consulta pelo celular", "Localização visual", "Informações rápidas"]
              },
              {
                title: "Facilities",
                items: ["Gestão de sistemas", "Documentação técnica", "Manutenção preventiva", "Indicadores de saúde"]
              }
            ].map((area, idx) => (
              <div key={idx} className="bg-background border card-border border-accent/20 rounded-lg p-6 card-hover feature-card">
                <h3 className="card-title font-bold text-lg mb-4 text-accent">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Depoimentos */}
      <section id="social-proof" className="py-16 md:py-20 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
              Clientes institucionais
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Empresas líderes em seus segmentos utilizam VistAtivo para gestão operacional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              {
                name: "Carlos Mendes",
                role: "Gerente de Facilities",
                company: "Hospital São Lucas",
                text: "Redução de 42% em custos corretivos. Visibilidade total dos equipamentos críticos.",
                avatar: "CM"
              },
              {
                name: "Ana Silva",
                role: "Diretora de Engenharia",
                company: "Indústria Petroquímica Alfa",
                text: "Economia de 60% no tempo de localização de equipamentos com Modelo 3D integrado.",
                avatar: "AS"
              },
              {
                name: "Roberto Costa",
                role: "Coordenador de Manutenção",
                company: "Condomínio Corporativo Premium",
                text: "Preventivas organizadas, alertas automáticos e conformidade regulatória garantida.",
                avatar: "RC"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-background border card-border border-border rounded-lg p-6 card-hover testimonial-card feature-card">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="testimonial-quote text-sm text-muted-foreground mb-6">\"{ testimonial.text}\"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-xs">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-xs">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-accent font-semibold">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Numbers */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 bg-card/50 rounded-lg p-8">
            {[
              { number: "10+", label: "Empresas" },
              { number: "42%", label: "Redução de custos" },
              { number: "500+", label: "Equipamentos" },
              { number: "95%", label: "Disponibilidade" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent font-poppins mb-2">{stat.number}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story - Before/After */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-8 sm:mb-12 text-center">
              De caos para controle: A história de sucesso
            </h2>
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028582337/ayjYDQzpn7HBCcTw2f82zp/vistativo-chaos-to-control-SyCrUds3FLY9i2kjG38D4f.webp"
              alt="Before and After Success Story - Chaos to Control"
              className="rounded-lg shadow-2xl border border-accent/20 w-full"
              loading="lazy"
            />
            <div className="mt-6 sm:mt-8 bg-background border border-accent/20 rounded-lg p-6 sm:p-8">
              <h3 className="font-bold text-base sm:text-lg mb-4 text-accent">O Resultado</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Um gestor de facilities de um hospital de 300 leitos implementou VistAtivo e em 6 meses:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Economizou R$ 320.000 em custos corretivos evitados",
                  "Reduziu tempo de busca de equipamentos de 2h para 15 min",
                  "Aumentou conformidade de auditoria de 65% para 98%",
                  "Melhorou satisfação da equipe técnica em 85%"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciação Competitiva */}
      <section className="py-16 md:py-20 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
              Por que escolher VistAtivo
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Comparação com abordagens tradicionais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="font-bold text-lg sm:text-xl text-accent">❌ Planilhas e Spreadsheets</h3>
              <ul className="space-y-3">
                {[
                  "Sem sincronização em tempo real",
                  "Fácil perder dados ou versões",
                  "Sem controle de acesso",
                  "Sem alertas automáticos",
                  "Impossível gerar relatórios profissionais"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm sm:text-base text-muted-foreground">
                    <span className="text-red-500 mt-1 flex-shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-lg sm:text-xl text-accent">✓ VistAtivo Platform</h3>
              <ul className="space-y-3">
                {[
                  "Sincronização em tempo real para todos",
                  "Dados centralizados e seguros na nuvem",
                  "Controle de permissões por usuário",
                  "Alertas automáticos de vencimentos e risco",
                  "Relatórios profissionais com 1 clique"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm sm:text-base text-accent">
                    <CheckCircle size={20} className="flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-background border card-border border-accent/20 rounded-lg p-8 text-center card-hover feature-card">
            <h3 className="card-title font-bold text-lg mb-4">O Diferencial Único: Modelo 3D Integrado</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              VistAtivo é a única plataforma que integra gestão de ativos com visualização 3D do seu edifício. Localize equipamentos visualmente, entenda relacionamentos entre sistemas e tome decisões mais rápidas.
            </p>
          </div>
        </div>
      </section>

      {/* Segurança e Dados */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-4">
              Segurança e conformidade garantidas.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              O VistAtivo foi pensado para uma arquitetura moderna, com autenticação segura, separação entre dados e arquivos, permissões por usuário e preparação para armazenamento escalável.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                "Autenticação segura",
                "Controle por usuário",
                "Controle por unidade",
                "Separação entre arquivos e metadados",
                "Armazenamento seguro de documentos",
                "Estrutura preparada para crescimento"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Shield, label: "LGPD Compliant", desc: "Conformidade com Lei Geral de Proteção de Dados" },
                { icon: Lock, label: "Criptografia SSL", desc: "Dados transmitidos com segurança" },
                { icon: CheckCircle, label: "ISO 27001", desc: "Certificação de segurança da informação" }
              ].map((badge, idx) => (
                <div key={idx} className="bg-background border card-border border-accent/20 rounded-lg p-4 text-center card-hover feature-card">
                  <badge.icon size={24} className="card-icon text-accent mx-auto mb-2" />
                  <p className="card-title font-bold text-sm">{badge.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-16 md:py-20 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
              Planos flexíveis e escaláveis.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-8">
              Configurado conforme número de unidades, ativos, usuários e necessidade de integração com Modelo 3D.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {[
              {
                name: "Essencial",
                desc: "Pequenas operações: gestao de ativos, documentos e preventivas."
              },
              {
                name: "Operacional",
                desc: "Médio porte: preventivas, dashboard, indicadores e relatórios."
              },
              {
                name: "Enterprise",
                desc: "Múltiplas unidades, Modelo 3D, permissões avançadas e API."
              }
            ].map((plano, idx) => (
              <div key={idx} className="bg-background border card-border border-border rounded-lg p-8 card-hover feature-card">
                <h3 className="card-title font-bold text-lg mb-3 text-accent">{plano.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plano.desc}</p>
                <Button 
                  onClick={() => scrollToSection("contato")}
                  variant="outline"
                  className="w-full border-border text-foreground hover:bg-card"
                >
                  Solicitar proposta
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-background border border-border rounded-lg p-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Todos os planos incluem suporte técnico, atualizações de segurança e backup automático.
            </p>
            <Button 
              onClick={() => scrollToSection("contato")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Agendar demonstração personalizada
            </Button>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
              Segmentos de atuação.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Solução adaptada para diferentes tipos de operação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "Hospitais", desc: "Equipamentos médicos, preventivas e compliance regulatório." },
              { title: "Indústrias", desc: "Rastreabilidade de máquinas e redução de downtime." },
              { title: "Facilities", desc: "Gestão centralizada de múltiplas unidades." },
              { title: "Condomínios", desc: "Controle de sistemas prediais e manutenção." },
              { title: "Engenharia", desc: "Integração com Modelo 3D e documentação." },
              { title: "Auditoria", desc: "Rastreabilidade completa e conformidade." }
            ].map((caso, idx) => (
              <div key={idx} className="bg-background border card-border border-border rounded-lg p-6 card-hover feature-card">
                <h3 className="card-title font-bold text-base mb-2 text-accent">{caso.title}</h3>
                <p className="text-sm text-muted-foreground">{caso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos - Blog/Downloads */}
      <section id="recursos" className="py-16 md:py-20 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
              Recursos e documentação
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Guias, templates e conteúdo para sua equipe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {[
              {
                icon: Download,
                title: "Guia de Gestão de Ativos",
                desc: "Melhores práticas para organizar, documentar e manter ativos operacionais.",
                cta: "Baixar"
              },
              {
                icon: FileText,
                title: "Template de Ativos",
                desc: "Estrutura pronta para catalogar equipamentos, documentos e cronogramas.",
                cta: "Baixar"
              },
              {
                icon: Calendar,
                title: "Webinar: ROI em Ativos",
                desc: "Cálculo de retorno com manutenção preventiva e redução de custos.",
                cta: "Agendar"
              }
            ].map((recurso, idx) => (
              <div key={idx} className="bg-background border card-border border-border rounded-lg p-6 card-hover feature-card">
                <recurso.icon size={28} className="card-icon text-accent mb-4" />
                <h3 className="card-title font-bold text-base mb-3">{recurso.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{recurso.desc}</p>
                <Button 
                  onClick={() => scrollToSection("contato")}
                  variant="outline"
                  className="w-full border-border text-foreground hover:bg-card"
                >
                  {recurso.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-12 md:mb-16 text-center">
              Perguntas frequentes
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "O que é o VistAtivo Platform?",
                  a: "É uma plataforma SaaS para gestão visual de ativos operacionais, manutenção, documentos técnicos e localização em Modelo 3D."
                },
                {
                  q: "Preciso ter um Modelo 3D para usar?",
                  a: "Não obrigatoriamente. A plataforma pode começar com cadastro de ativos, documentos e preventivas. O Modelo 3D pode ser integrado depois."
                },
                {
                  q: "O sistema funciona em celular?",
                  a: "Sim. A interface é responsiva e permite consulta de ativos, documentos e preventivas em campo via QR Code."
                },
                {
                  q: "O QR Code abre a ficha do ativo?",
                  a: "Sim. Cada ativo pode ter um QR Code para acesso rápido à ficha digital, histórico e documentos."
                },
                {
                  q: "Posso vincular documentos aos ativos?",
                  a: "Sim. É possível organizar manuais, datasheets, laudos, certificados, plantas, fotos e relatórios por ativo."
                },
                {
                  q: "O sistema calcula ROI?",
                  a: "A plataforma permite estimar risco financeiro, custo preventivo, custo corretivo e economia potencial com manutenção."
                },
                {
                  q: "Posso usar em mais de uma unidade?",
                  a: "Sim. A estrutura foi pensada para múltiplas unidades operacionais com controle de acesso por unidade."
                },
                {
                  q: "Quem faz o vínculo com o Modelo 3D?",
                  a: "O vínculo pode ser realizado pela equipe técnica responsável pelo modelo ou pela equipe de implantação do VistAtivo."
                }
              ].map((faq, idx) => (
                <details key={idx} className="bg-background border card-border border-accent/20 rounded-lg p-6 group">
                  <summary className="card-title font-bold cursor-pointer flex items-center justify-between hover:text-accent transition-colors">
                    {faq.q}
                    <span className="text-accent group-open:rotate-180 transition-transform flex-shrink-0 ml-4">▼</span>
                  </summary>
                  <p className="text-muted-foreground mt-4 text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Logo Grande e Impacto */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background via-background to-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Logo Grande */}
            <div className="flex justify-center animate-fade-in">
              <img 
                src="/images/vistativo-logo_d84c969d.png" 
                alt="VistAtivo Logo" 
                className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Título e Subtítulo */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
                Junte-se a 10+ empresas
              </h2>
              <p className="text-xl md:text-2xl text-accent font-semibold">
                que já transformaram sua operação
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                VistAtivo Platform - Gestão visual de ativos operacionais com Modelo 3D integrado
              </p>
            </div>

            {/* Números de Impacto */}
            <div className="grid sm:grid-cols-3 gap-6 py-8">
              {[
                { number: "20%", label: "Redução de custos corretivos" },
                { number: "500+", label: "Equipamentos gerenciados" },
                { number: "95%", label: "Uptime da plataforma" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-background border card-border border-accent/20 rounded-lg p-6 card-hover feature-card">
                  <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</p>
                  <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Principal */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="bg-accent text-background font-bold py-3 px-8 rounded-lg hover:bg-accent/90 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl">
                Agendar demonstração
              </button>
              <button className="border border-accent text-accent font-bold py-3 px-8 rounded-lg hover:bg-accent/10 active:scale-95 transition-all duration-300">
                Baixar guia gratuito
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato Otimizado */}
      <section id="contato" className="py-16 md:py-20 bg-card/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
                Agende sua demonstração
              </h2>
              <p className="text-muted-foreground text-lg">
                Converse com nosso time em 15 minutos e veja VistAtivo em ação.
              </p>
            </div>

            <form className="bg-background border border-accent/20 rounded-lg p-8 space-y-6">
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-xs text-muted-foreground mb-2">
                  <span>Etapa {formStep} de 3</span>
                  <span>{Math.round(formProgress)}%</span>
                </div>
                <Progress value={formProgress} className="h-2" />
              </div>

              {/* Step 1 */}
              {formStep === 1 && (
                <div className="space-y-6 animate-in fade-in">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome completo *</label>
                    <input 
                      type="text" 
                      className="w-full bg-card border border-accent/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition"
                      placeholder="Seu nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail corporativo *</label>
                    <input 
                      type="email" 
                      className="w-full bg-card border border-accent/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition"
                      placeholder="seu@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Empresa *</label>
                    <input 
                      type="text" 
                      className="w-full bg-card border border-accent/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition"
                      placeholder="Sua empresa"
                      value={formData.empresa}
                      onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                    />
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {formStep === 2 && (
                <div className="space-y-6 animate-in fade-in">
                  <div>
                    <label className="block text-sm font-medium mb-2">Cargo *</label>
                    <select className="w-full bg-card border border-accent/20 rounded-lg px-4 py-3 text-foreground focus:border-accent focus:outline-none transition">
                      <option>Selecione seu cargo</option>
                      <option>Gerente de Facilities</option>
                      <option>Diretor de Engenharia</option>
                      <option>Coordenador de Manutenção</option>
                      <option>Gestor de Operações</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Segmento *</label>
                    <select className="w-full bg-card border border-accent/20 rounded-lg px-4 py-3 text-foreground focus:border-accent focus:outline-none transition">
                      <option>Selecione um segmento</option>
                      <option>Hospital</option>
                      <option>Clínica</option>
                      <option>Indústria</option>
                      <option>Facilities</option>
                      <option>Condomínio corporativo</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Quantidade aproximada de ativos *</label>
                    <select className="w-full bg-card border border-accent/20 rounded-lg px-4 py-3 text-foreground focus:border-accent focus:outline-none transition">
                      <option>Selecione uma faixa</option>
                      <option>Até 100</option>
                      <option>100 a 500</option>
                      <option>500 a 2.000</option>
                      <option>Acima de 2.000</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {formStep === 3 && (
                <div className="space-y-6 animate-in fade-in">
                  <div>
                    <label className="block text-sm font-medium mb-2">Possui Modelo 3D? *</label>
                    <select className="w-full bg-card border border-accent/20 rounded-lg px-4 py-3 text-foreground focus:border-accent focus:outline-none transition">
                      <option>Selecione uma opção</option>
                      <option>Sim</option>
                      <option>Não</option>
                      <option>Em desenvolvimento</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Principal necessidade *</label>
                    <select className="w-full bg-card border border-accent/20 rounded-lg px-4 py-3 text-foreground focus:border-accent focus:outline-none transition">
                      <option>Selecione uma necessidade</option>
                      <option>Gestão de ativos</option>
                      <option>Preventivas</option>
                      <option>Documentos</option>
                      <option>Modelo 3D</option>
                      <option>Auditoria</option>
                      <option>Redução de custos</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">WhatsApp (opcional)</label>
                    <input 
                      type="tel" 
                      className="w-full bg-card border border-accent/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-6">
                {formStep > 1 && (
                  <Button 
                    type="button"
                    variant="outline"
                    className="flex-1 border-accent text-accent hover:bg-accent/10"
                    onClick={() => setFormStep(formStep - 1)}
                  >
                    Voltar
                  </Button>
                )}
                {formStep < 3 && (
                  <Button 
                    type="button"
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() => setFormStep(formStep + 1)}
                  >
                    Próximo
                  </Button>
                )}
                {formStep === 3 && (
                  <Button 
                    type="submit"
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    Agendar Demonstração
                  </Button>
                )}
              </div>

              {/* Privacy Notice */}
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                <p className="text-xs text-muted-foreground text-center">
                  <Shield size={14} className="inline mr-2 text-accent" />
                  Seus dados são protegidos conforme nossa política de privacidade. Conformidade LGPD garantida.
                </p>
              </div>
            </form>

            {/* Alternative CTA - WhatsApp */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Prefere conversar por WhatsApp?</p>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle size={18} className="mr-2" />
                Abrir WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="bg-card border border-border rounded-lg p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
              Pronto para melhorar sua gestão operacional?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agende uma demonstração gratuita e veja como VistAtivo pode reduzir custos, aumentar eficiência e garantir conformidade.
            </p>
            <Button 
              onClick={() => scrollToSection("contato")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base h-12 px-8"
            >
              Agendar Demonstração <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-accent/20 py-8 md:py-12">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/images/vistativo-logo_d84c969d.png"
                  alt="VistAtivo Logo"
                  className="h-8 w-8"
                />
                <span className="font-bold">
                  Vist<span className="text-accent">Ativo</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Gestão visual de ativos operacionais.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection("solucao")} className="hover:text-accent transition">Solução</button></li>
                <li><button onClick={() => scrollToSection("funcionalidades")} className="hover:text-accent transition">Funcionalidades</button></li>
                <li><button onClick={() => scrollToSection("modelo-3d")} className="hover:text-accent transition">Modelo 3D</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection("beneficios")} className="hover:text-accent transition">Benefícios</button></li>
                <li><button onClick={() => scrollToSection("recursos")} className="hover:text-accent transition">Recursos</button></li>
                <li><button onClick={() => scrollToSection("faq")} className="hover:text-accent transition">FAQ</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <p className="text-sm text-muted-foreground">
                Pronto para transformar sua operação?
              </p>
              <Button 
                onClick={() => scrollToSection("contato")}
                className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground w-full"
              >
                Solicitar demo
              </Button>
            </div>
          </div>

          <div className="border-t border-accent/20 pt-8">
            <div className="grid sm:grid-cols-2 gap-8 mb-6">
              <p className="text-sm text-muted-foreground text-center sm:text-left">
                © 2026 VistAtivo Platform. Todos os direitos reservados.
              </p>
              <p className="text-sm text-muted-foreground text-center sm:text-right">
                Desenvolvido por <span className="font-semibold text-accent">EDUNEXUM TREINAMENTOS LTDA</span>
                <br />
                CNPJ: 62.338.935/0001-30
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5521967847298?text=Ol%C3%A1%20VistAtivo%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20plataforma%20de%20gest%C3%A3o%20de%20ativos."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-8 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        title="Enviar mensagem via WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.259-1.02 1.02-1.756 2.117-2.259 3.355-.949 2.33-.949 4.869.0 7.199.503 1.238 1.236 2.335 2.259 3.356 1.02 1.02 2.117 1.756 3.356 2.259 2.33.949 4.869.949 7.199 0 1.238-.503 2.335-1.236 3.356-2.259 1.02-1.02 1.756-2.117 2.259-3.356.949-2.33.949-4.869 0-7.199-.503-1.238-1.236-2.335-2.259-3.356-1.02-1.02-2.117-1.756-3.356-2.259-2.33-.949-4.869-.949-7.199 0m0-2.033c2.527 0 5.054.949 7.199 2.259 1.038.653 1.976 1.591 2.629 2.629 1.31 2.145 2.259 4.672 2.259 7.199 0 2.527-.949 5.054-2.259 7.199-.653 1.038-1.591 1.976-2.629 2.629-2.145 1.31-4.672 2.259-7.199 2.259-2.527 0-5.054-.949-7.199-2.259-1.038-.653-1.976-1.591-2.629-2.629C2.949 19.054 2 16.527 2 14c0-2.527.949-5.054 2.259-7.199.653-1.038 1.591-1.976 2.629-2.629 2.145-1.31 4.672-2.259 7.199-2.259"/>
        </svg>
      </a>

      {/* Mobile Floating CTA - Sticky */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-accent/20 p-4">
        <Button 
          onClick={() => scrollToSection("contato")}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12"
        >
          Agendar Demo <ArrowRight size={18} className="ml-2" />
        </Button>
      </div>
      <div className="md:hidden h-20"></div>
    </div>
  );
}
