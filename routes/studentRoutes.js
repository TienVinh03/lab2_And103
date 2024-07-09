// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Lấy tất cả sinh viên dưới dạng JSON
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Lấy tất cả sinh viên và hiển thị trên file EJS
router.get('/students/view', async (req, res) => {
  try {
    const students = await Student.find();
    res.render('students', { students: students });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
