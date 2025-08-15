import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function AssessorTecnico() {
  return (
    <div className="principal">
      <Header/>
      <section className="assessor-tecnico">
        <div className="titulo-assessor">
          <h1>Assessor <strong>técnico</strong></h1>
        </div>

      </section>
      <section className="medico-area-exclusiva-principal">
        <div className="medico-area-exclusiva">
          <div className="intro-conteudo">
            <h2>Área exclusiva para Assessores Técnicos do Programa Care VNS</h2><br/>
            <p>Esta plataforma foi desenvolvida especialmente para você, Assessor Técnico, que atua diretamente no suporte aos pacientes e médicos participantes do Programa Care VNS.</p>
            <br />
              <p>Com este espaço digital, você terá:</p>
              <div className="medico-area-exclusiva">
                <ul className="medicos-topicos">
                  <li>Acompanhamento centralizado das demandas sob sua responsabilidade;</li>
                  <li>Possibilidade de upload e gestão de documentos;</li>
                  <li>Acesso ao seu extrato mensal de atividades;</li>
                  <li>Mais praticidade para registrar, atualizar e visualizar a evolução das solicitações.</li>
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

