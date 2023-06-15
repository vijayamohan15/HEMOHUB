
const SearchHandler = (app, db) => {
  app.post("/home/search", (req, res) => {

    const blood = req.body.blood;
    const place = req.body.place;

    const sqlSelect =
      "SELECT * FROM user_details WHERE userBloodGroup = ? OR userPlace = ?";


    db.query(sqlSelect, [blood, place], (err, result) => {
      if (err) {
        console.log("**   SEARCH ERROR   **" + err);
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "NO SEARCH RESULTS FOUND!" });
      }
    });
  });
};

export default SearchHandler;