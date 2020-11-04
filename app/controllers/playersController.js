const db = require("../../db");

module.exports.getAllPlayers = (req, res, next) => {

  db.any('SELECT * FROM players')
  .then(function (data) {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved ALL players'
      });
  })
  .catch(function (err) {
    return next(err);
  });

}

module.exports.createPlayer = (req, res, next) => {

    console.log(req.query);

    db.none('insert into players(name, surname, dob) values (${name}, ${surname}, ${dob})', req.query)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one player'
        });
    })
    .catch(function (err) {
      return next(err);
    });

}

module.exports.getSinglePlayer = (req, res, next) => {

    var playerID = parseInt(req.params.id);

    db.one('select * from players where id = $1', playerID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE Player'
        });
    })
    .catch(function (err) {
      return next(err);
    });

}

module.exports.updatePlayer = (req, res, next) => {

    console.log(req.query);

    db.none('update players set name=$1, surname=$2, dob=$3 where id=$4',
    [req.query.name, req.query.surname, req.query.dob, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated player'
        });
    })
    .catch(function (err) {
      return next(err);
    });

}

module.exports.deletePlayer = (req, res, next) => {

    var playerId = parseInt(req.params.id);

    db.result('delete from players where id = $1', playerId)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} player`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });

}

// module.exports.getAllPlayers = async (req, res, next) => {
//     try {
//         const results = await db.query("SELECT * FROM players");
//         return res.json(results.rows);
//     } catch (err) {
//         return next(err);
//     }
// }

// module.exports.createPlayer = async (req, res, next) => {
//     try {
//         const result = await db.query(
//         "INSERT INTO players (name,type) VALUES ($1,$2) RETURNING *",
//             [req.body.name, req.body.type]
//         );
//         return res.json(result.rows[0]);
//     } catch (err) {
//         return next(err);
//     }
// }

// module.exports.getSinglePlayer = async (req, res, next) => {
//     try {
//         const results = await db.query("SELECT * FROM players");
//         return res.json(results.rows);
//     } catch (err) {
//         return next(err);
//     }
// }

// module.exports.updatePlayer = async (req, res, next) => {
//     try {
//         const result = await db.query(
//         "UPDATE players SET name=$1, type=$2 WHERE id=$3 RETURNING *",
//             [req.body.name, req.body.type, req.params.id]
//         );
//         return res.json(result.rows[0]);
//     } catch (err) {
//         return next(err);
//     }
// }

// module.exports.deletePlayer = async (req, res, next) => {
//     try {
//         const result = await db.query("DELETE FROM players WHERE id=$1", [
//             req.params.id
//         ]);
//         return res.json({ message: "Deleted" });
//     } catch (err) {
//         return next(err);
//     }
// }