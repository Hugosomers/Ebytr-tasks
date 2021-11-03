const router = require('express').Router();
const controller = require('../controller/taskController');

router.get(
  '/task',
  controller.getAllTasks,
);

router.post(
  '/task',
);

router.put(
  '/task',
);

router.delete(
  '/task',
);

module.exports = router;
