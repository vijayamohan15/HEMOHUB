
const DashboardHandler = (app, db) => {
  app.get("/home", (req, res) => {
    const sqlSelect = "SELECT * from blood_stocks;";

    db.query(sqlSelect, (err, result) => {
      res.send(result);
    });
  });
};

export default DashboardHandler;