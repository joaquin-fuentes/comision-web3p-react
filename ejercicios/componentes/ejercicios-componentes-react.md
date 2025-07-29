# 🧪 Ejercicios Prácticos - Componentes en React

## 🧩 1. Crear componentes y componerlos

**📝 Consigna 1:**  
Crear dos componentes: `Header` y `Footer`. Luego usarlos dentro de un componente `App` para componer la estructura básica de una página.

**💡 Extra:** Agregar un componente `Main` con un texto.

---

## 📦 2. Usar props

**📝 Consigna 2:**  
Crear un componente `Saludo` que reciba una prop `nombre` y muestre el mensaje:  
📣 `"Hola, [nombre]! Bienvenido a la clase"`

```jsx
<Saludo nombre="Joaquín" />
<Saludo nombre="Franco" />
```

**💡 Extra:** Reutilizar el componente con distintos nombres.

---

## 🎨 3. Estilos con className y style

**📝 Consigna 3:**  
Crear un componente `TarjetaProducto` que muestre el nombre, precio y una descripción. Estilizarlo con `className` y con estilo inline:

```jsx
<div style={{ backgroundColor: "#f5f5f5", padding: "1rem" }}>
```

**💡 Extra:** Crear una clase en CSS y aplicarla al contenedor.

---

## 🧠 4. Mostrar datos de JS

**📝 Consigna 4:**  
Crear un componente `ContadorLikes` que muestre:

```jsx
<p>Tienes {likes} likes</p>
```

Donde `likes` es una constante con un número.

**💡 Extra:** Cambiar el valor de `likes` y observar el resultado.

---

## 🔁 5. Renderizado condicional

**📝 Consigna 5:**  
Crear un componente `Acceso` que reciba una prop `logueado` y muestre:

- `"Bienvenido"` si es `true`
- `"Por favor inicia sesión"` si es `false`

```jsx
<Acceso logueado={false} />
```

**💡 Extra:** Usar operador ternario y `&&` en ejemplos separados.

---

## 📋 6. Renderizar listas

**📝 Consigna 6:**  
Crear un componente `ListaTareas` que reciba un array de strings y renderice cada tarea como un ítem de lista.

```jsx
const tareas = ["Estudiar React", "Hacer ejercicios", "Descansar"];
```

**💡 Extra:** Mostrar la cantidad de tareas (`tareas.length`).

---

## 🎯 7. Manejo de eventos

**📝 Consigna 7:**  
Crear un componente `BotonAlerta` que muestre un botón y al hacer click, lance un `alert` con el mensaje `"Click recibido"`.

**💡 Extra:** Cambiar el mensaje según la prop `mensaje`.

---

## 🔄 8. Mini Proyecto Integrador

**🎓 Desafío final clase:**  
Crear una **Tarjeta de Usuario** con:

- `nombre`, `edad`, `email` (props)
- Condicional: si `edad >= 18`, mostrar `"Mayor de edad"`, si no `"Menor de edad"`
- Lista de hobbies (array en prop)
- Un botón con evento `onClick` que muestre un `alert` con el nombre del usuario

**💡 Bonus:** Usar estilos con `className` y mostrar en consola qué componente se está renderizando (`console.log('Renderizando TarjetaUsuario')`)
