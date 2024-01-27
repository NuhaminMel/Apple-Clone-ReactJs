//// IMPORTS ///
const express = require ("express")
const mysql = require ("mysql2")
const body_parser = require ("body-parser")
const cors = require("cors");
////

const app = express()
app.use(body_parser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "myDB",
    database: "myDB",
    password: "myDBuser",
    port: 8889,
})

connection.connect((err) => {
    if (err) console.log(err)
    else console.log("successfully connected ") 
})

app.get("/install", (req, res) => {
        let message ="All Tables are Created!!!!"
        let products = `CREATE TABLE if not exists Products(
            product_id int auto_increment,
            product_name varchar(255) not null,
            product_url varchar(255) not null,
            PRIMARY KEY (product_id)
        )`;
        let productDescription = `CREATE TABLE IF NOT EXISTS ProductDescription(
            description_id int auto_increment,
            product_id int(11) not null,
            product_brief_description varchar(255) not null,
            product_description TEXT not null,
            product_img varchar(255) not null,
            product_link varchar(255) not null,
            PRIMARY KEY (description_id),
            FOREIGN KEY (product_id) REFERENCES Products(product_id)
        )`;


        let productPrice = `CREATE TABLE if not exists ProductPrice(
            price_id int auto_increment,
            product_id int(11) not null,    
            starting_price varchar(255) not null,
            price_range varchar(255) not null,
            PRIMARY KEY (price_id),
            FOREIGN KEY (product_id) REFERENCES Products(product_id)
            )`;
        let user = `CREATE TABLE if not exists Users(
            user_id int auto_increment,
            User_name varchar(255) not null,
            User_password varchar(255) not null,
            PRIMARY KEY (user_id)
        )`;
        let orders = `CREATE TABLE if not exists Orders(
            order_id int auto_increment,
            product_id int(11) not null,
            user_id int(20) not null,
            PRIMARY KEY (order_id),
            FOREIGN KEY (product_id) REFERENCES Products(product_id),
            FOREIGN KEY (user_id) REFERENCES Users(user_id)
            )`;


        connection.query(products, (err, results, fields) => {
            if (err) console.log(err);
        });
        connection.query(productDescription, (err, results, fields) => {
            if (err) console.log(err);
        });
        connection.query(productPrice, (err, results, fields) => {
            if (err) console.log(err);
        });
        connection.query(user, (err, results, fields) => {
            if (err) console.log(err);
        });
        connection.query(orders, (err, results, fields) => {
            if (err) console.log(err);
        });


    res.end(message);
})


app.post('/add-product', (req, res) => {


    const { 
        user_name,
        password,
        iphoneTitle,
        iphoneUrl,
        imgPath,
        iphoneLink,
        StartPrice,
        priceRange,
        briefDescription,
        fullDescription
    } = req.body;
    console.log(req.body)

    let insertProduct = 
    `INSERT INTO Products(
        product_name, 
        product_url) VALUES (?, ?)`;
    let insertDescription =
    `INSERT INTO productDescription (
        product_id, 
        product_brief_description, 
        product_description, 
        product_img, 
        product_link) VALUES (?,?,?,?,?)`;

    let insertPrice = 
    `INSERT INTO ProductPrice (
        product_id, 
        starting_price, 
        price_range) VALUES (?,?,?)`;

    let insertUser = `INSERT INTO user(
        User_name, 
        User_password) VALUES (?, ?)`;
    let insertOrder = `INSERT INTO orders(product_id,user_id) VALUES (?, ?)`
//------------------------query---------------------
    
    connection.query(insertProduct, [iphoneTitle, iphoneUrl], (err,results,fields) => {
        if (err) console.log(err)
        const id = results.insertId;
    console.log(results)


        connection.query(insertDescription, [id, briefDescription, fullDescription, imgPath, iphoneLink],(err,results,fields) => {
            if(err) console.log(err)
        });
        connection.query(insertPrice, [id, StartPrice, priceRange],(err,results,fields) => {
            if(err) console.log(err)
        });
        // //--------------------user----------------------
        connection.query(insertUser, [user_name, password],(err,results,fields) => {
            if(err) console.log(err)
    
            const userId = results.insertId
        //     //-----------------orders-----------------------
            connection.query(insertOrder,[id, userId],(err,results,fields) => {
                if(err) console.log(err)
            })
        });

    }) 

    
    res.send('Product added!');
});

// // for react class
app.get("/iphones", (req, res) => {
    connection.query(
        "SELECT * FROM Products INNER JOIN ProductDescription INNER JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
        (err, rows) => {
            // let iphones = { products: [] };
            // iphones.products = rows;
            // var stringIphones = JSON.stringify(iphones);
            if (!err) res.json(rows);
            else console.log(err);
        }
    );
});



































// app.get("/getfile", (req, res) => {
//     let sel = "SELECT * FROM Products JOIN productDescription JOIN ProductPrice ON Products.product_id = productDescription.product_id AND ProductPrice.product_id";
//     connection.query(
// sel,
//         // "SELECT * FROM Products JOIN productDescription JOIN ProductPrice 0N  Products.product_id = productDescription.product_id AND ProductPrice.product_id",
//         (err, results, fields) => {
//             console.log(fields)

//             if (err) console.log(err)
//             let x = []
//             // x.push(results)
//             // console.log(x)
//             // console.log(results[3].product_brief_description)
//             for (let index = 0; index < results.length; index++) {
//                 const element = results[index].product_name;
//                 x.push(element)
//             }
//             res.send(x)
//         }
//     )
// })











app.listen(7575,() => {
    console.log("Listening to port 7575")
})

