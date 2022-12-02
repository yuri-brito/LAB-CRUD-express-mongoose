import express from "express";
import AlbumModel from "../models/album.model.js";
const router = express.Router();

router.post("/albums", async (request, response) => {
  try {
    const newAlbum = await AlbumModel.create(request.body);

    return response.status(201).json(newAlbum);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ msg: "Algo de errado não está certo!" });
  }
});
router.get("/albums", async (request, response) => {
  try {
    const data = await AlbumModel.find();
    return response.status(200).json(data);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ msg: "Algo de errado não está certo!" });
  }
});

router.get("/albums/:albumId", async (request, response) => {
  try {
    const { albumId } = request.params;
    const album = await AlbumModel.findById(albumId);
    if (!album) {
      return response.status(404).json("Album não foi encontrado!");
    }
    return response.status(200).json(employee);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ msg: "Algo de errado não está certo!" });
  }
});

router.put("/albums/:albumId", async (request, response) => {
  try {
    const { albumId } = request.params;
    const update = await EmployeeModel.findByIdAndUpdate(
      albumId,
      { ...request.body },
      { new: true, runValidators: true }
    );
    return response.status(200).json(update);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ msg: "Algo de errado não está certo!" });
  }
});

router.delete("/delete/:albumId", async (request, response) => {
  try {
    const { albumId } = request.params;
    const deleteAlbum = await AlbumModel.findByIdAndDelete(albumId);
    return response.status(204).json();
  } catch (error) {
    console.log(error);
    return response.status(500).json({ msg: "Algo de errado não está certo!" });
  }
});

export default router;
