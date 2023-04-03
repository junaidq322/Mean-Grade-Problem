const express = require('express');
const router = express.Router();

const UnitConversionModel = require('../models/unitConversionModel');

router.get('/getAllProblems',async (req, res) => {
  try {
    const problems = await UnitConversionModel.find({});
    res.json(problems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post('/addUnitConversionProblem', (req, res) => {
    const inputUnit = req.body.inputUnit;
    const targetUnit = req.body.targetUnit;
    const inputNumericalValue = req.body.inputNumericalValue;
    const authoritativeAnswer = req.body.authoritativeAnswer;
  
    const newProblem = new UnitConversionModel({
      inputUnit: inputUnit,
      targetUnit: targetUnit,
      inputNumericalValue: inputNumericalValue,
      authoritativeAnswer: authoritativeAnswer
    });
    console.log(newProblem.inputUnit);
    console.log(newProblem,req.body);
    newProblem.save()
      .then(result => {
        res.status(201).json({
          message: 'Unit conversion problem added',
          problem: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
  
  router.post('/gradeUnitConversionProblem', (req, res) => {
    const inputUnit = req.body.inputUnit;
    const targetUnit = req.body.targetUnit;
    const inputNumericalValue = req.body.inputNumericalValue;
    const studentResponse = req.body.studentResponse;
  
    UnitConversionModel.findOne({ inputUnit: inputUnit, targetUnit: targetUnit })
      .then(problem => {
        if (!problem) {
          res.status(400).json({
            message: 'Unit conversion problem not found'
          });
        } else {
          const authoritativeAnswer = problem.authoritativeAnswer;
          const roundedStudentResponse = parseFloat(studentResponse).toFixed(1);
          const roundedAuthoritativeAnswer = parseFloat(authoritativeAnswer).toFixed(1);
          let output = 'incorrect';
          if (roundedStudentResponse === roundedAuthoritativeAnswer) {
            output = 'correct';
          }
          // Build the output object
          const result = {
            inputNumericalValue: inputNumericalValue,
            inputUnit: inputUnit,
            targetUnit: targetUnit,
            studentResponse: studentResponse,
            output: output
          };
          res.status(200).json(result);
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

module.exports = router;