import express from "express";
import AlbumModel from "../models/album.model.js";
import PurchaseModel from "../models/purchase.model.js";
const router = express.Router();

router.post("/purchases", async (request, response) => {
  try {
    const newPurchase = await PurchaseModel.create(request.body);

    return response.status(201).json(newPurchase);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ msg: "Algo de errado não está certo!" });
  }
});

router.get("/purchases/:purchaseId", async (request, response) => {
  try {
    const { purchaseId } = request.params;
    const purchase = await PurchaseModel.findById(purchaseId).populate("album");
    if (!purchase) {
      return response.status(404).json("Pedido não foi encontrado!");
    }
    return response.status(200).json(purchase);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ msg: "Algo de errado não está certo!" });
  }
});

export default router;
