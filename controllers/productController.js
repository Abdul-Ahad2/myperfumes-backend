import {
  getCoachesService,
  getLocalsService,
  getMusksService,
  getScentsService,
} from "../services/productService.js";

const getMusksController = async (req, res) => {
  try {
    const { status, data } = await getMusksService();
    res.status(status).json({ data: data });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Database Error. Please try again later." });
  }
};

const getLocalsController = async (req, res) => {
  try {
    const { status, data } = await getLocalsService();
    res.status(status).json({ data: data });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Database Error. Please try again later." });
  }
};

const getScentsController = async (req, res) => {
  try {
    const { status, data } = await getScentsService();
    res.status(status).json({ data: data });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Database Error. Please try again later." });
  }
};

const getCoachesController = async (req, res) => {
  try {
    const { status, data } = await getCoachesService();
    res.status(status).json({ data: data });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Database Error. Please try again later." });
  }
};

export {
  getCoachesController,
  getLocalsController,
  getMusksController,
  getScentsController,
};
