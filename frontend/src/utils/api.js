const API_BASE_URL = "http://localhost:3001/api"

export const api = {
  // AUTH
  login: async (n_usuario, contraseña) => {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ n_usuario, contraseña }),
    })
    return res.json()
  },

  register: async (n_usuario, contraseña, tipo, gmail) => {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ n_usuario, contraseña, tipo, gmail }),
    })
    return res.json()
  },

  getUserById: async (id) => {
    const res = await fetch(`${API_BASE_URL}/auth/user/${id}`)
    return res.json()
  },

  updateUser: async (id, userData) => {
    const res = await fetch(`${API_BASE_URL}/usuarios/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
    return res.json()
  },

  changePassword: async (id, contraseña_actual, contraseña_nueva) => {
    const res = await fetch(`${API_BASE_URL}/auth/change-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, contraseña_actual, contraseña_nueva }),
    })
    return res.json()
  },

  // USUARIOS (Admin)
  getAllUsers: async () => {
    const res = await fetch(`${API_BASE_URL}/usuarios`)
    return res.json()
  },

  createUser: async (userData) => {
    const res = await fetch(`${API_BASE_URL}/usuarios/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
    return res.json()
  },

  deleteUser: async (id) => {
    const res = await fetch(`${API_BASE_URL}/usuarios/delete/${id}`, {
      method: "DELETE",
    })
    return res.json()
  },

  // EFECTOS/PROGRAMAS
  getAllPrograms: async () => {
    const res = await fetch(`${API_BASE_URL}/programas`)
    return res.json()
  },

  getProgram: async (id) => {
    const res = await fetch(`${API_BASE_URL}/programas/${id}`)
    return res.json()
  },

  createProgram: async (programData) => {
    const res = await fetch(`${API_BASE_URL}/programas/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(programData),
    })
    return res.json()
  },

  updateProgram: async (id, programData) => {
    const res = await fetch(`${API_BASE_URL}/programas/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(programData),
    })
    return res.json()
  },

  deleteProgram: async (id) => {
    const res = await fetch(`${API_BASE_URL}/programas/delete/${id}`, {
      method: "DELETE",
    })
    return res.json()
  },

  // SONIDOS
  getAllSounds: async () => {
    const res = await fetch(`${API_BASE_URL}/sonidos`)
    return res.json()
  },

  createSound: async (soundData) => {
    const res = await fetch(`${API_BASE_URL}/sonidos/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(soundData),
    })
    return res.json()
  },

  updateSound: async (id, soundData) => {
    const res = await fetch(`${API_BASE_URL}/sonidos/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(soundData),
    })
    return res.json()
  },

  deleteSound: async (id) => {
    const res = await fetch(`${API_BASE_URL}/sonidos/delete/${id}`, {
      method: "DELETE",
    })
    return res.json()
  },

  // SONIDOS INSTITUCIONALES
  getInstitutionalSounds: async () => {
    const res = await fetch(`${API_BASE_URL}/sonidos-institucionales`)
    return res.json()
  },

  createInstitutionalSound: async (soundData) => {
    const res = await fetch(`${API_BASE_URL}/sonidos-institucionales/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(soundData),
    })
    return res.json()
  },

  updateInstitutionalSound: async (id, soundData) => {
    const res = await fetch(`${API_BASE_URL}/sonidos-institucionales/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(soundData),
    })
    return res.json()
  },

  deleteInstitutionalSound: async (id) => {
    const res = await fetch(`${API_BASE_URL}/sonidos-institucionales/delete/${id}`, {
      method: "DELETE",
    })
    return res.json()
  },
}
