const UpdateStockHandler = (app, db) => {
  app.get("/login/emp/ub", (req, res) => {
    const sqlSelect = "SELECT * FROM blood_stocks;";

    db.query(sqlSelect, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.put("/login/emp/ub/update", (req, res) => {
    const unitUpdate = req.body.unitUpdate;
    const b_id = req.body.b_id;
    const sqlUpdate = "UPDATE blood_stocks SET unit=? WHERE b_id= ?;";
    db.query(sqlUpdate, [unitUpdate, b_id], (err, result) => {
      if (err) {
        console.log("**ERROR IN UPDATING UNIT VALUE**" + err);
      }
    });
  });

};

export default UpdateStockHandler;