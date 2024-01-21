var express = require("express");
var router = express.Router();
const EmployeeController = require("./Employee.controller");

router.get("/", EmployeeController.getEmployees);
router.get("/:id", EmployeeController.getEmployeeById);
router.delete("/:id", EmployeeController.deleteEmployeeById);
router.put('/:id', EmployeeController.updateEmployee);
router.post("/", EmployeeController.createEmployee);

module.exports = router;
