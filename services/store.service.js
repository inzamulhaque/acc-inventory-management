const Store = require("../models/Store");

exports.getStoresService = async () => {
  const stores = await Store.find({});
  return stores;
};

exports.createStoreService = async (data) => {
  const store = new Store(data);
  const result = await store.save();
  return result;
};

exports.getStoreByIdService = async (storeId) => {
  const store = await Store.find({ _id: storeId });
  return store;
};
