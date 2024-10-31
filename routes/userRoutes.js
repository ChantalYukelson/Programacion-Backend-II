const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Crear usuario
router.post('/', async (req, res) => { /* lógica para crear usuario */ });

// Leer usuario por ID
router.get('/:id', async (req, res) => { /* lógica para obtener usuario */ });

// Actualizar usuario
router.put('/:id', async (req, res) => { /* lógica para actualizar usuario */ });

// Eliminar usuario
router.delete('/:id', async (req, res) => { /* lógica para eliminar usuario */ });

module.exports = router;
