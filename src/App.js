import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



// Importe as imagens do carrossel
import heroImage1 from '../src/img/banner.jpg';
import heroImage2 from '../src/img/banner2.jpg';
import heroImage3 from '../src/img/banner3.jpg';


function App() {
    // Configurações do carrossel
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true
    };
  
    return (
      <div className="font-sans">
        {/* Cabeçalho */}
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Escola do futuro</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#about" className="hover:text-blue-200">Sobre</a></li>
                <li><a href="#services" className="hover:text-blue-200">Serviços</a></li>
                <li><a href="#contact" className="hover:text-blue-200">Contato</a></li>
              </ul>
            </nav>
          </div>
        </header>
  
        {/* Carrossel de Imagens */}
        <section className="h-screen text-white">
          <Slider {...settings}>
            <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroImage1})` }}>
              <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
                <h2 className="text-4xl md:text-6xl font-bold">Bem-vindo à Escola do Futuro</h2>
                <p className="mt-4 text-lg md:text-xl">Preparando estudantes para o futuro com qualidade e inovação</p>
                <a href="#about" className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700">
                  Saiba mais
                </a>
              </div>
            </div>
            <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroImage2})` }}>
              <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
                <h2 className="text-4xl md:text-6xl font-bold">Educação de Qualidade</h2>
                <p className="mt-4 text-lg md:text-xl">Focada no desenvolvimento integral dos alunos</p>
                <a href="#about" className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700">
                  Saiba mais
                </a>
              </div>
            </div>
            <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroImage3})` }}>
              <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
                <h2 className="text-4xl md:text-6xl font-bold">Atividades Extracurriculares</h2>
                <p className="mt-4 text-lg md:text-xl">Aprimorando habilidades e talentos dos alunos</p>
                <a href="#about" className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700">
                  Saiba mais
                </a>
              </div>
            </div>
          </Slider>
        </section>
  
        {/* Seção de Serviços */}
        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Nossos Serviços</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg p-6 rounded">
                <h4 className="text-2xl font-bold mb-4">Ensino Fundamental</h4>
                <p className="text-gray-600">Oferecemos uma base sólida com foco no desenvolvimento integral do aluno.</p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded">
                <h4 className="text-2xl font-bold mb-4">Ensino Médio</h4>
                <p className="text-gray-600">Preparação completa para o mercado de trabalho e vestibulares.</p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded">
                <h4 className="text-2xl font-bold mb-4">Atividades Extracurriculares</h4>
                <p className="text-gray-600">Uma gama de atividades para estimular o talento e a criatividade dos alunos.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Seção de Contato */}
        <section id="contact" className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Fale Conosco</h3>
            <p className="mb-4">Tem alguma dúvida? Entre em contato conosco pelo email ou telefone.</p>
            <a href="mailto:contato@escoladofuturo.com" className="bg-white text-blue-600 py-3 px-6 rounded hover:bg-gray-200">
              contato@escoladofuturo.com
            </a>
          </div>
        </section>
  
        {/* Rodapé */}
        <footer className="bg-gray-800 text-gray-400 py-4 text-center">
          <p>&copy; 2024 Escola XYZ. Todos os direitos reservados.</p>
        </footer>
      </div>
    );
  }
  
  export default App;