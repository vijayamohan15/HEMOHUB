
const RequestClassHandler = (app, db) => {
  app.post("/request", (req, res) => {
    const blood_group = req.body.blood_group;
    const unit = req.body.unit;
    const reason=req.body.reason;
    const status=req.body.status;

    console.log("bloodgroup : " + blood_group);

    const sqlSelect = "SELECT * FROM blood_stocks WHERE blood_group=?";
    const sqlInsert =
      "INSERT INTO  user_request(blood_group,unit,reason,status) VALUES (?,?,?,?)";
    db.query(sqlSelect, [blood_group], (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      } else {
        result = JSON.parse(JSON.stringify(result));
        console.log(result[0].unit);
        if (unit <= result[0].unit) {
          //
          db.query(sqlInsert, [blood_group, unit, reason, status], (err, result) => {
            if (err) {
              console.log("**ERROR ACCEPTING REQUEST!" + err);
            } else {
              res.send({
                message: "REQUEST ACCEPETED COLLECT IT FROM THE BLOOD BANK",
              });
            }
          });
        } else {
          res.send({ message: "INSUFFICIENT STOCKS!" });
        }
      }
    });
    
  });
};

export default RequestClassHandler;