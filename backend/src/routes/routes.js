const router = require('express').Router();
const controller = require('../controller/taskController');
const validations = require('../middlewares/taskValidations');

router.get(
  '/task',
  controller.getAllTasks,
);

router.post(
  '/task',
  validations.verifyEmptyTaskData,
  controller.insertTask,
);

router.put(
  '/task/:id',
  validations.verifyEmptyTaskData,
  controller.editTask,
);

router.delete(
  '/task',
);

module.exports = router;
