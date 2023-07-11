export function Contact() {
  return (
    <div name='contact'>
    <form className="contact-form">
      <h2 className="form-title">Contacto</h2>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Correo electrónico:</label>
        <input type="email" id="email" name="email" className="form-input" required />
      </div>

      <div className="form-group">
        <label htmlFor="name" className="form-label">Nombre:</label>
        <input type="text" id="name" name="name" className="form-input" required />
      </div>

      <div className="form-group">
        <label htmlFor="proposal" className="form-label">Propuesta:</label>
        <textarea id="proposal" name="proposal" className="form-textarea" required />
      </div>

      <button type="submit" className="form-submit">Enviar</button>
    </form>

    </div>
  );
}

export default Contact