
const EmployeeRegisterHandler = (app, db) => {
  app.post("/reg/emp", (req, res) => {

    const empName = req.body.empName;
    const empMail = req.body.empMail;
    const empPhone = req.body.empPhone;
    const empAddress = req.body.empAddress;
    const empUserName = req.body.empUserName;
    const empPassword = req.body.empPassword;

    const sqlInsert1 =
      "INSERT INTO emp_details (empName,empMail,empPhone,empAddress) VALUES (?,?,?,?)";

    const sqlInsert2 =
      "INSERT INTO emp_login (emp_id,userName,password) VALUES (?,?,?)";

    const sqlDelete = "DELETE  FROM emp_details WHERE emp_id= ?";

    db.query(
      sqlInsert1,
      [empName, empMail, empPhone, empAddress],
      (err, result) => {
        if (err) {
          console.log(err + "THAT'S AN ERROR!!!");
        } else {
          var emp_id = result.insertId;
          //
          db.query(
            sqlInsert2,
            [emp_id, empUserName, empPassword],
            (err, result1) => {
              if (err) {
                //
                console.log(err);
                db.query(sqlDelete, [emp_id], (err, result2) => {
                  if (err) console.log(err);
                  else {
                    console.log("user already exists!");
                    res.send({ message: "USER ALREADY EXISTS!" })
                  }
                });
              } else {
                console.log("Employee Registered Successfully");
                res.send({ message: "EMPLOYEE REGISTRATION SUCCESSFULL!" })
                navigator("../../../client/src/components/employee/employeeLogin.js.js");
              }
            }
          );
        }
      }
    );
  });
};


export default EmployeeRegisterHandler;