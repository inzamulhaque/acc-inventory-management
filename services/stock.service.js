const mongoose = require("mongoose");
const Stock = require("../models/Stock");
const ObjectId = mongoose.Types.ObjectId;

exports.getStocksService = async (filters, queries) => {
  const stocks = await Stock.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);

  const total = await Stock.countDocuments(filters);
  const page = Math.ceil(total / queries.limit);
  return { total, page, stocks };
};

exports.createStockService = async (data) => {
  const stock = await Stock.create(data);
  return Stock;
};

exports.updateStockByIdService = async (StockId, data) => {
  const result = await Stock.updateOne(
    { _id: StockId },
    { $inc: data },
    {
      runValidators: true,
    }
  );

  // const Stock = await Stock.findById(StockId);
  // const result = await Stock.set(data).save();
  return result;
};

exports.bulkUpdateStockService = async (data) => {
  // console.log(data.ids,data.data)
  // const result = await Stock.updateMany({ _id: data.ids }, data.data, {
  //     runValidators: true
  // });

  const Stocks = [];

  data.ids.forEach((Stock) => {
    Stocks.push(Stock.updateOne({ _id: Stock.id }, Stock.data));
  });

  const result = await Promise.all(Stocks);

  return result;
};

exports.deleteStockByIdService = async (id) => {
  const result = await Stock.deleteOne({ _id: id });
  return result;
};

exports.bulkDeleteStockService = async (ids) => {
  const result = await Stock.deleteMany({ _id: ids });

  return result;
};
