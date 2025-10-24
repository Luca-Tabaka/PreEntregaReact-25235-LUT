function usuarioCard() {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#ff6600"}}>
        Perfil del Administrador
      </h2>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 flex-row align-items-center" style={{backgroundColor: "black",color: "#f5f5f5",border: "2px solid #ff6600",borderRadius: "15px",}}>
            <img
              src={usuarioLogueado.foto} alt={usuarioLogueado.nombre} className="rounded-circle"
              style={{width: "120px",height: "120px",objectFit: "cover",marginRight: "20px",border: "3px solid #ff6600"}}/>
            <div>
              <h5 className="card-title mb-1"> {usuarioLogueado.nombre} {usuarioLogueado.apellido} </h5>
              <p className=" mb-0">{"Administrador"}</p>
              <p className="mb-0">Mail: {usuarioLogueado.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default usuarioCard;