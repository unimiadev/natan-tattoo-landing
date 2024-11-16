import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import portfolio1 from "./assets/media/images/portfolio-1.jpg";
import portfolio2 from "./assets/media/images/portfolio-2.jpg";
import portfolio3 from "./assets/media/images/portfolio-3.jpg";
import portfolio4 from "./assets/media/images/portfolio-4.jpg";
import about from "./assets/media/images/about.jpg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function App() {
  const portfolioImages = [
    {
      id: 1,
      src: portfolio1,
      alt: "Portfolio 1",
    },
    {
      id: 2,
      src: portfolio2,
      alt: "Portfolio 2",
    },
    {
      id: 3,
      src: portfolio3,
      alt: "Portfolio 3",
    },
    {
      id: 4,
      src: portfolio4,
      alt: "Portfolio 4",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLocation, setActiveLocation] = useState("soledade");

  const locations = {
    soledade: {
      title: "Soledade",
      address: {
        street: "Rua Bento Gonçalves, 1000",
        neighborhood: "Bairro Centro",
        city: "Soledade - RS",
        cep: "CEP: 99300-000",
      },
      coordinates: {
        lat: -28.82924593487399,
        lng: -52.50938919384304,
      },
    },
    passoFundo: {
      title: "Passo Fundo",
      address: {
        street: "Rua Morom, 1485B",
        neighborhood: "Bairro Centro",
        city: "Passo Fundo - RS",
        cep: "CEP: 99010-032",
      },
      coordinates: {
        lat: -28.261617644163778,
        lng: -52.40590545958229,
      },
    },
  };

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const testimonials = [
    {
      id: 1,
      name: "João Gabriel Trindade",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocLBJS64-pBfcGCkI0_GQyKLe1teskmjexBgVsMA-Ww5VfCttA=w60-h60-p-rp-mo-br100",
      stars: 5,
      text: "Excelente qualidade no serviço, várias tatuagens já feitas e somente elogios",
    },
    {
      id: 2,
      name: "César Santos Limas",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocLWmfIM6q9LAhwgfAQyBti2qKaidvXBChy037mxlqYPHuR70A=w60-h60-p-rp-mo-br100",
      stars: 5,
      text: "Vim do Piauí só pra fazer com ele,recomendo demais vcs não tlgd o mano faz a tatto e ainda e psicólogo ao msm tempo só cola com ele.",
    },
    {
      id: 3,
      name: "Leticia Oliveira Santana",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocKRNN5sPGGyZPi_3W6wjy289aDeqeumCOXRWTyUIjBzHCuBhQ=w60-h60-p-rp-mo-br100",
      stars: 5,
      text: "De São Paulo pra soledade, o cara é sensacional no que faz, recomendo muito 🔥 …",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navigation Menu */}
      <nav className={`nav-menu ${isScrolled ? "scrolled" : ""}`}>
        <div className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
        <ul className={`menu-items ${isMenuOpen ? "active" : ""}`}>
          <li onClick={() => scrollToSection("inicio")}>Página Inicial</li>
          <li onClick={() => scrollToSection("sobre")}>Sobre</li>
          <li onClick={() => scrollToSection("portfolio")}>Portfólio</li>
          <li onClick={() => scrollToSection("orcamento")}>Orçamento</li>
          <li onClick={() => scrollToSection("localizacao")}>Localização</li>
          <li onClick={() => scrollToSection("depoimentos")}>Depoimentos</li>
          <li onClick={() => scrollToSection("contato")}>Contato</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="section-hero">
        <div className="hero-background" />
        <div className="hero-content">
          <div className="left-side">
            <div className="left-content">
              <div className="logo" />
              <p className="hero-quote">
                ❝ Transforme sua pele
                <br />
                em uma obra de arte ❞
              </p>
            </div>
          </div>
          <div className="right-side">
            <div className="right-content">
              <div className="profile-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="sobre" className="section-content dark">
        <div className="content-container">
          <div className="content-half about-image-container">
            <img src={about} alt="About" className="section-2-image" />
          </div>
          <div className="content-half">
            <h2>Sobre o profissional</h2>
            <p>
              Natan dos Santos Apolinário, nascido em 7 de março de 2000 em
              Soledade/RS, sempre demonstrou uma paixão natural pelo desenho
              desde criança. Sua jornada na arte da tatuagem começou entre o
              final de 2019 e início de 2020, coincidindo com o início da
              pandemia.
              <br />
            </p>
            <p>
              <br />
              Impossibilitado de frequentar workshops presenciais devido às
              restrições, Natan não deixou isso impedir seu sonho. Com
              equipamento básico e muita determinação, começou sua jornada de
              aprendizado fazendo suas primeiras tatuagens em si mesmo.
              <br />
            </p>
            <p>
              <br />
              Hoje, após participar de diversos workshops e competições de
              tatuagem, é reconhecido como um dos melhores tatuadores de
              Soledade. Mesmo com todo reconhecimento, Natan mantém sua busca
              constante por aperfeiçoamento, sempre visando alcançar novos
              horizontes em sua arte.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-content light">
        <div className="content-container portfolio">
          <div className="content-half portfolio-text">
            <h2>Portfólio</h2>
            <p>
              Especializado em trabalhos em preto e cinza e fineline, mas também
              versátil em outros estilos. Cada tatuagem é uma obra de arte
              única, criada com dedicação e atenção aos detalhes.
              <br />
            </p>
            <p>
              <br />
              Estas imagens são apenas uma prévia do trabalho do tatuador. Para
              ver mais tatuagens e acompanhar suas criações mais recentes,
              acesse o perfil do tatuador no Instagram através do botão abaixo.
            </p>
            <div className="cta-button">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
              <a
                href="https://instagram.com/_natantattoo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Portfólio Completo no Instagram
              </a>
            </div>
          </div>
          <div className="content-half portfolio-gallery">
            {portfolioImages.map((image) => (
              <div key={image.id} className="portfolio-image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="portfolio-image"
                  onClick={() => openImage(image.src)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Section */}
      <section id="orcamento" className="section-content dark">
        <div className="budget-container">
          <div className="budget-text">
            <h2>Orçamento</h2>
            <p>
              O valor de uma tatuagem é calculado considerando diversos fatores
              que garantem um trabalho de qualidade e segurança para você. Entre
              eles:
            </p>
            <ul className="budget-list-text">
              <li>Tamanho e complexidade do desenho</li>
              <li>Tempo necessário para execução</li>
              <li>Materiais de alta qualidade</li>
              <li>Procedimentos de biossegurança</li>
              <li>Experiência profissional</li>
            </ul>
          </div>
          <div className="budget-info">
            <h3>Como Funciona?</h3>
            <p>
              Cada projeto é único e personalizado, por isso o valor é calculado
              individualmente. Para um orçamento preciso, é importante:
            </p>
            <ul className="budget-list">
              <li>Enviar uma referência do desenho desejado</li>
              <li>Informar o tamanho aproximado</li>
              <li>Indicar o local do corpo</li>
              <li>Mencionar se é sua primeira tatuagem</li>
            </ul>
            <p>
              Entre em contato pelo WhatsApp para um orçamento personalizado e
              tire todas as suas dúvidas sobre o processo.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedImage && (
        <div className="gallery-modal active" onClick={closeImage}>
          <button className="close-button" onClick={closeImage}>
            ×
          </button>
          <div className="modal-image-container">
            <img
              src={selectedImage}
              alt="Portfolio"
              className="modal-image"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Section 4 */}
      <section id="localizacao" className="section-content dark">
        <div className="content-container">
          <div className="content-half map-container">
            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            >
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={19}
                center={locations[activeLocation].coordinates}
              >
                <Marker position={locations[activeLocation].coordinates} />
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="content-half">
            <h2>Localização</h2>
            <div className="location-tabs">
              <button
                className={`tab-button ${
                  activeLocation === "soledade" ? "active" : ""
                }`}
                onClick={() => setActiveLocation("soledade")}
              >
                Soledade
              </button>
              <button
                className={`tab-button ${
                  activeLocation === "passoFundo" ? "active" : ""
                }`}
                onClick={() => setActiveLocation("passoFundo")}
              >
                Passo Fundo
              </button>
            </div>
            <p>
              {locations[activeLocation].address.street}
              <br />
              {locations[activeLocation].address.neighborhood}
              <br />
              {locations[activeLocation].address.city}
              <br />
              {locations[activeLocation].address.cep}
            </p>
            <p className="business-hours">
              Horário de Funcionamento:
              <br />
              Segunda à Sábado: 8h às 19h
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="section-content light">
        <div className="content-container testimonials">
          <h2 className="testimonials-title">O que dizem nossos clientes</h2>
          <div className="testimonials-container">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-image-container">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                </div>
                <div className="testimonial-stars">
                  {[...Array(testimonial.stars)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="star-icon"
                    />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-name">{testimonial.name}</p>
              </div>
            ))}
          </div>
          <a
            href="https://www.google.com/maps/place/Natan+Tattoo/@-28.829246,-52.509389,19z/data=!4m8!3m7!1s0x951d45016fcc3001:0x1bd81d65c08fb61!8m2!3d-28.8292527!4d-52.5093903!9m1!1b1!16s%2Fg%2F11v61g0_j2?hl=en-US&entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button reviews-button"
          >
            Ver Mais Avaliações no Google
          </a>
        </div>
      </section>

      {/* Final Section */}
      <section id="contato" className="section-final light">
        <div className="final-content">
          <h2>Entre em Contato</h2>
          <p>
            Se você está interessado em conversar, entre em contato pelo
            WhatsApp!
          </p>
          <div className="cta-button-final">
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            <a
              href="https://wa.me/555492243858"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          &copy; 2024{" "}
          <a
            href="https://instagram.com/abreuelima.matheus"
            target="_blank"
            rel="noopener noreferrer"
          >
            unimiadev
          </a>
          . Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
