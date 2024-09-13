import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    question: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    setErrors({});
    setSuccessMessage("");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (formData.name.length < 5) {
      newErrors.name =
        "Hubo un error, por favor revisa los campos y vuelve a intentarlo";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email =
        "Hubo un error, por favor revisa los campos y vuelve a intentarlo";
    }

    if (formData.question.length < 15) {
      newErrors.question =
        "Hubo un error, por favor revisa los campos y vuelve a intentarlo";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("Datos enviados");
      setSuccessMessage("Datos enviados correctamente");
      setFormData({
        name: "",
        email: "",
        question: "",
      });
    } else {
      setErrors(newErrors);
      setSuccessMessage("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-name">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-email">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-question">
          <label htmlFor="question">Deja tu consulta:</label>
          <textarea
            id="question"
            name="question"
            value={formData.question}
            onChange={handleInputChange}
          />
          {errors.question && (
            <p className="error-message">{errors.question}</p>
          )}
        </div>

        <button type="submit" className="btn-submit">Enviar</button>
      </form>

      {/* Mostrar mensaje de éxito si existe */}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Form;
