/* eslint-disable @next/next/no-img-element */
export default function Footer(){
  return(
    <footer>
      <div className="footer-b1" id="contatos">     

        <p className="contato-canais"><i className="icon-phone"></i>0800.008.2828</p>
             
        <p className="contato-canais"><i className="icon-whatsapp"></i>(11) 96907-6471</p>

        <p className="contato-canais"><i className="icon-email"></i>carevns@suporteaopaciente.com.br</p>
        <br/>
        <p>Horário de atendimento:<br/>segunda a sexta-feira, das 8h as 17h</p>
        <br/>

        <div className="whatsapp-container">
          <img src="/assets/whatsapp-logo.png" alt="WhatsApp" />
          <span className="whatsapp-text">Abrir chat</span>
        </div>
        <br/>
        <p>Política de Privacidade | Políticas de cookies</p>
        <br/>
        <p>Gestão</p>
        <div className="logo-rodape">
          <img src="/assets/aditus-logo-branco.png" width="30%" alt="Aditus Health"/>
        </div>
      </div>
      <div className="footer-b2">
        <br/>
        <img src="/assets/care-vns-logo.png" alt="logo 1" width="150px"/>
        <br/>
        <img src="/assets/liva-nova-logo.png" alt="logo 2"/>
      </div>
    </footer>
  );
}