import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Medico() {
  return (
    <div className="principal">
      <Header/>
      <section className="medico">
        <div className="titulo-medico">
          <h1>Médicos</h1>
        </div>
      </section>
      <section className="medico-area-exclusiva-principal">
        <div className="medico-area-exclusiva">
          <div className="intro-conteudo">
            <h2>Área exclusiva para médicos do Programa Care VNS</h2><br/>
            <p>Este ambiente foi criado para simplificar e agilizar a atuação dos médicos participantes do Programa Care VNS, com recursos que apoiam o acompanhamento dos pacientes em todas as fases da terapia.</p>
            <br />
              <p>Aqui, você poderá:</p>
              <div className="medico-area-exclusiva">
                <ul className="medicos-topicos">
                  <li>Realizar o cadastro de novos pacientes;</li>
                  <li>Fazer o upload do documento “PDF VNS Therapy”;</li>
                  <li>Registrar solicitações de demanda;</li>
                  <li>Acompanhar o status das solicitações;</li>
                  <li>Consultar seu extrato mensal de produção;</li>
                  <li>Acessar dados clínicos atualizados da base Brasil.</li>
                </ul>
              </div>
              <div>
                <a href="https://aditushealth.com.br" target="_blank" className="btn-area-restrita">ACESSAR ÁREA RESTRITA</a>
              </div>
              <div className="conteudo-nao-cadastrado">
                <p>Ainda não é cadastrado no sistema?</p>
                <p><a href="#">Clique aqui e cadastre-se para acessar sua área exclusiva.</a></p>
              </div>
          </div>
        </div>
      </section>
    <Footer/>
    </div>   
  );
}

