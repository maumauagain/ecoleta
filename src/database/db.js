// importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose();

// criar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db");

// utilizar o obj para as operações
//db.serialize(() => {
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `);

    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (
    //         ?,?,?,?,?,?,?
    //     );
    // `;

    // const values = [
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ];

    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err);
    //     }

    //     console.log("Cadastrado com sucesso");
    //     console.log(this);
    // }

    // db.run(query, values, afterInsertData)

    // function showData(err, rows) {
    //     if(err){
    //         return console.log(err);
    //     }

    //     console.log("Registros:");
    //     console.log(rows);
    // }

    //db.all(`SELECT * FROM places`, showData);

    // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
    //     if(err){
    //         return console.log(err);
    //     }

    //     console.log("Registro deletado com sucesso!");
    // })

    // db.all(`SELECT * FROM places`, showData);

//});

module.exports = db;