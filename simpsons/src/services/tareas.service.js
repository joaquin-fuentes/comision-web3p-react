// src/services/tareaservice.js
import clienAxios from "../api/clienAxios";

// Obtener todas las tareas
export const obtenerTareas = async () => {
  try {
    const response = await clienAxios.get("/tareas");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

// Obtener una tarea por ID
export const obtenerTarea = async (id) => {
  try {
    const response = await clienAxios.get(`/tareas/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching task:", error);
    throw error;
  }
};

// Crear una nueva tarea
export const crearTarea = async (taskData) => {
  try {
    const response = await clienAxios.post("/tareas", taskData);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

// Actualizar una tarea
export const actualizarTarea = async (id, updatedData) => {
  try {
    const response = await clienAxios.put(`/tareas/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

// Eliminar una tarea
export const eliminarTarea = async (id) => {
  try {
    const response = await clienAxios.delete(`/tareas/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
