export default function Formulario() {
  return (
    <form action="#" id="formulario">
      <h1>Crear una cuenta</h1>

      <div className="row">
        <label htmlFor="nombres">Nombre</label>
        <input type="text" id="nombres" placeholder="Juan Andres" />
      </div>

      <div className="row">
        <label htmlFor="apellidos">Apellidos</label>
        <input type="text" id="apellidos" placeholder="Perez Muñoz" />
      </div>

      <div className="row">
        <label htmlFor="direccion">Dirección</label>
        <input type="text" id="direccion" placeholder="Los molles #25" />
      </div>

      <div className="row">
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" placeholder="juanperez@gmail.com" />
      </div>

      <div className="row">
        <label htmlFor="clave1">Contraseña</label>
        <input type="password" id="clave1" placeholder="Clave1234" />
      </div>

      <div className="row">
        <label htmlFor="clave2">Repetir contraseña</label>
        <input type="password" id="clave2" placeholder="Clave1234" />
      </div>

      <button type="reset" className="btn reset">Limpiar</button>
      <button type="submit" className="btn submit">Enviar</button>

      <p id="errores">&nbsp;</p>
    </form>
  );
}
