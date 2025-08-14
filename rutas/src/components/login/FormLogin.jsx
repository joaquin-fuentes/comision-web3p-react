import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navegacion = useNavigate();

  function onSubmit(data) {
    console.log(data);
    if (data.email === "hola@hola.com") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El usuario no existe en la base de datos",
      });
      return;
    }
    const usuarioLogueado = {
      email: data.email,
      loginAt: new Date().toISOString(),
    };
    sessionStorage.setItem("usuario", JSON.stringify(usuarioLogueado));
    Swal.fire({
      title: "Usuario Logueado",
      icon: "success",
      draggable: true,
    });
    reset();
    navegacion("/");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su email"
          isInvalid={errors.email}
          {...register("email", {
            required: "El email es requerido",
            // Esta expresion regular evalua que sea un email valido
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Debe ingresar un email válido",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su password"
          isInvalid={errors.password}
          {...register("password", {
            required: "El password es requerido",
            minLength: {
              value: 4,
              message: "El minimo es 4 caracteres",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>
    </Form>
  );
}

export default FormLogin;
