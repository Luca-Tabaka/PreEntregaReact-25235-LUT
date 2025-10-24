import FormContacto from "../components/FormContacto";
import { FaWhatsapp,FaFacebook, FaInstagram } from "react-icons/fa";

export default function Contacto() {
  return (
    <div style={{ display: "flex",justifyContent: "space-between",alignItems: "flex-start",padding: "50px 100px",gap: "50px",color: "#f5f5f5",margin: "20px",}}>
      <div style={{ flex: 1 }}>
        <h3 style={{ color: "#ff8000", fontSize: "36px", marginBottom: "20px" }}> Somos <span style={{ color: "#ff0000ff" }}>Twisted Beauty</span> </h3>
        <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
          Una tienda dedicada a resaltar tu belleza con un toque único y atrevido.
          Nos apasiona ofrecer productos de alta calidad, innovación y estilo para que te sientas auténticamente vos.
          Ahora presentando nuestra nueva pagina web en donde podras encontrar los ultimos productos.    
        </p>
        <p> Si tenés dudas o querés más información, ¡escribinos o visitanos!</p>

        <div style={{ marginTop: "30px", fontSize: "18px" }}>
          <p> 🛍️ Local: Av. Corrientes 758, Buenos Aires</p>
          <p><FaWhatsapp color="#25D366" style={{ marginRight: '8px' }} /> Whatsapp: +54 9 11 5555-5555</p>
          <p> 📧 Correo: twistedbeauty@gmail.com</p>
          <p> ⌚ Horarios de atencion: Lunes a Viernes 12 a 7 p.m.</p>
        </div>

        <h1 style={{ color: "#ff8000", fontSize: "36px", marginBottom: "20px" }}> Nuestras redes! </h1>
        
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <a
                href="https://instagram.com/" // lo dejo a instagram ya que si no manda a perfil real
                rel="noopener noreferrer" //seguridad
                style={{ color: "#ff0000ff" }}
                target="_blank"
            >
                <FaInstagram size={50} />
            </a>
            <a
                href="https://facebook.com/"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "#1877F2" }}
            >
                <FaFacebook size={50} />
            </a>
            </div>
      </div>
      <div style={{ flex: 1 }}>
        <FormContacto />
      </div>
    </div>
  );
}
