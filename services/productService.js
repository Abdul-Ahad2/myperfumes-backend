import productModel from "../models/productModel.js";

const getMusksService = async () => {
  try {
    const musks = await productModel.find({ type: "Musk" });
    return { status: 200, data: musks };
  } catch (error) {
    return error;
  }
};

const getLocalsService = async () => {
  try {
    const musks = await productModel.find({ type: "Local" });
    return { status: 200, data: musks };
  } catch (error) {
    return error;
  }
};

const getScentsService = async () => {
  try {
    const musks = await productModel.find({ type: "Scent" });
    return { status: 200, data: musks };
  } catch (error) {
    return error;
  }
};

const getCoachesService = async () => {
  try {
    const musks = await productModel.find({ type: "Coach" });
    return { status: 200, data: musks };
  } catch (error) {
    return error;
  }
};

export {
  getCoachesService,
  getLocalsService,
  getMusksService,
  getScentsService,
};
