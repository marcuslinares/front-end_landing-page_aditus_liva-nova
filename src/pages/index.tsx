/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="principal">
      <Header/>
      <section className="intro">
        <div className="titulo">
          <h1> Bem-vindo a Gestão <br/>
          do <strong>Programa Care VNS</strong></h1>
          <h2 className="subtitulo">
            Este é um espaço exclusivo para médicos e assessores<br/>técnicos que fazem parte do Programa Care VNS.
          </h2>
        </div>

      </section>
      <section className="funcionalidade">
        <div className="funcionalidade-1">
        <div className="intro-conteudo">
          <p>Desenvolvido pela <strong>LivaNova</strong> com gestão da <strong>Aditus Health</strong>, o <strong>Programa Care VNS</strong> é um suporte completo e gratuito para pacientes com epilepsia farmacoresistente, desde a indicação da <strong>Terapia VNS</strong> até o procedimento cirúrgico e os ajustes contínuos do dispositivo.</p><br/>
          <p>Este espaço foi criada para facilitar o dia a dia dos profissionais envolvidos no Programa, oferecendo mais praticidade, agilidade e organização na condução das atividades.</p>
        </div>
        </div>
        <div className="funcionalidade-2">
          <div className="func2img">
            <img src="/assets/home-imagem-2.png" width="55%" alt="Médicos e Assessores Técnicos"/>
          </div>
          <div className="func-conteudo">
            <p className="sec2titulo">
              Aqui, médicos e assessores técnicos têm acesso<br/>
              a funcionalidades que otimizam seu trabalho, como:</p>
              <ul className="func-lista">
                <li>Cadastro e acompanhamento de pacientes;</li>
                <li>Upload e gestão de documentos;</li>
                <li>Solicitações de demanda;</li>
                <li>Acompanhamento de solicitações e extratos mensais;</li>
                <li>Acesso a dados clínicos e históricos de produção;</li>
                <li>Se você é médico ou assessor técnico do Programa Care VNS, este espaço foi feito para você.</li>
              </ul>

          </div>
        </div>
      </section>
    <Footer/>
    </div>
  );
}
