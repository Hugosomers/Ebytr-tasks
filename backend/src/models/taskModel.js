const { ObjectId } = require('mongodb');

const connection = require('./connection');

const getTaskById = async (id) => {
  const data = await connection()
    .then((db) => db.collection('tasks').findOne(new ObjectId(id)));
  return data;
};

const getAllTasks = async () => {
  const data = await connection()
    .then((db) => db.collection('tasks').find().toArray());
  return data;
};

const insertTask = async (author, title, description, status) => {
  const data = await connection()
    .then((db) => db.collection('tasks').insertOne({
      author, title, description, status,
    }));

  return data;
};

const editTask = async (id, author, title, description, status) => {
  const data = await connection()
    .then((db) => db.collection('tasks').updateOne({ _id: new ObjectId(id) }, {
      $set: {
        author, title, description, status,
      },
    }));
  return data;
};

const deleteTask = async (id) => {
  const data = await connection()
    .then((db) => db.collection('tasks').deleteOne({ _id: new ObjectId(id) }));
  return data;
};

module.exports = {
  getTaskById,
  getAllTasks,
  insertTask,
  editTask,
  deleteTask,
};
