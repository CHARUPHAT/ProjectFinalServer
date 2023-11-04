const UserController = require("./controllers/UserController");
const OvenController = require("./controllers/OvenController");
// const TypeChairController = require("./controllers/TypeChairController");

module.exports = (app) => {
  app.get("/users", UserController.index);

  //create
  app.post("/user", UserController.create);

  //edit
  app.put("/user/:userId", UserController.put);

  //delete
  app.delete("/user/:userId", UserController.remove);

  //show by id
  app.get("/user/:userId", UserController.show);

  // app.get('/musics',MusicController.index)

  // app.post('/music', MusicController.create)

  // app.put('/music/:musicId' , MusicController.put)

  // app.delete('/music/:musicId', MusicController.remove)

  // app.get('/music/:musicId', MusicController.show)

  // app.get('/temples',TempleController.index)

  // app.post('/temple', TempleController.create)

  // app.put('/temple/:templeId' , TempleController.put)

  // app.delete('/temple/:templeId', TempleController.remove)

  // app.get('/temple/:templeId', TempleController.show)

  ///////////////Oven
  app.get("/ovens", OvenController.index);

  app.post("/oven", OvenController.create);

  app.put("/oven/:ovenId", OvenController.put);

  app.delete("/oven/:ovenId", OvenController.remove);

  app.get("/oven/:ovenId", OvenController.show);

  ////////////Type chair //////

  // app.get("/types", TypeChairController.index);

  // app.post("/type", TypeChairController.create);

  // app.put("/type/:typeId", TypeChairController.put);

  // app.delete("/type/:typeId", TypeChairController.remove);

  // app.get("/type/:typeId", TypeChairController.show);
};
