"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
//const router = express.Router();

// conecta ao banco
mongoose.set('useCreateIndex', true);
mongoose
	.connect(
		"mongodb+srv://hhesedh:live0491@cluster0-mudhj.mongodb.net/test?retryWrites=true",
		{ useNewUrlParser: true }
	)
	.catch(err => {
		console.log(`${err}`);
	});

// Carrega os Models
const Product = require("./models/product");
const Customer = require("./models/customer");
const Order = require("./models/order");

// Carrega Rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;
