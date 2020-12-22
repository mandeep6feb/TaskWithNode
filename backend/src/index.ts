import cors from "cors";
import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import Products from './product-schema';

const Alpaca = require("@alpacahq/alpaca-trade-api");
dotenv.config();

if (!process.env.PORT) {
  console.log(`Error to get ports`);
  process.exit(1);
}

const uri: string = "mongodb://127.0.0.1:27017/codeindepth";

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`MongoDB Successfully connected`);
  }
});

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors({
  origin:'http://localhost:4200'
}));
app.use(express.json());

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const authorisedRoute = express.Router();
app.use('/stocks', async (req, res) => {
console.log(req.body);
  try {
      var stocks = new Products(req.body);
      var result = await stocks.save();
      res.send(result);
  } catch (error) {
      res.status(500).send(error);
  }
});
app.use("/api/Apple", (req, res) => {
  alpaca
  .getAggregates("AAPL", "year", "2020-01-10", "2020-01-20")
  .then((response: any) => {
    //console.log(response)
    res.send(response);
  });
});

app.use("/api/Amazon", (req, res) => {
  alpaca
  .getAggregates("AMZN", "year", "2020-01-10", "2020-01-20")
  .then((response: any) => {
    //console.log(response)
    res.send(response);
  });
});

app.use("/api/Google", (req, res) => {
  alpaca
  .getAggregates("GOOGL", "year", "2020-01-10", "2020-01-20")
  .then((response: any) => {
    //console.log(response)
    res.send(response);
  });
});

app.use("/api/Microsoft", (req, res) => {
  alpaca
  .getAggregates("AAPL", "year", "2020-01-10", "2020-01-20")
  .then((response: any) => {
    //console.log(response)
    res.send(response);
  });
});

app.use("/api/Facebook", (req, res) => {
  alpaca
  .getAggregates("FB", "year", "2019-01-10", "2020-01-20")
  .then((response: any) => {
    //console.log(response)
    res.send(response);
  });
});





app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");

  next();
});


const alpaca = new Alpaca({
  keyId: "PK1DV1GK8FGH4KQQ3HEC",
  secretKey: "VMmQ9Y7VIJ9ktjsQ0CKBH6XWt9x8hGgstnoeKz0t",
  paper: true,
  usePolygon: false,
});


