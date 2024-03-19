function Inputs() {
  return (
    <div className="inputs">
      <div className="input-group">
        <label htmlFor="">Email o teléfono</label>
        <div className="input-field">
          <input type="text" />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="">Contraseña</label>
        <div className="input-field-two">
          <input type="password" />
          <button>Mostrar</button>
        </div>
      </div>
    </div>
  );
}
export default Inputs;
