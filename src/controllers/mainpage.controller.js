const mainpageService = require("../services/mainpage.service");
const upload = require("../utils/upload");
const fs = require("fs");

exports.getAll = async (req, res) => {
  try {
    const mainpages = await mainpageService.getAll();
    res.json(mainpages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getById = async (req, res) => {
  try {
    const mainpage = await mainpageService.getById(req.params.id);
    if (!mainpage)
      return res.status(404).json({ error: "data tidak tersedia" });
    res.json(mainpage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.create = async (req, res) => {
  try {
    // Proses upload file gambar
    upload.single("image")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      if (!req.file) {
        return res.status(400).send("tidaK ADA GAMBAR");
      }

      // Dapatkan path file yang diunggah
      const imagePath = req.file.path.replace(/\\/g, "/");

      // Simpan data ke database, termasuk path gambar
      const data = {
        ...req.body,
        background: imagePath, // Asumsikan field `background` menyimpan path gambar
      };

      const mainpage = await mainpageService.create(data);
      res.status(201).json(mainpage);
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.update = async (req, res) => {
  try {
    upload.single("image")(req, res, async (err) => {
      if (err) return res.status(400).json({ error: err.message });

      const id = parseInt(req.params.id);
      const existingData = await mainpageService.getById(id);

      if (!existingData) {
        return res.status(404).json({ error: "Data not found" });
      }

      let imagePath = existingData.background;

      // Jika ada gambar baru, ganti path lama
      if (req.file) {
        // Hapus file lama
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }

        imagePath = `/uploads/${req.file.filename}`;
      }

      const updatedData = {
        ...req.body,
        background: imagePath,
      };

      const result = await mainpageService.update(id, updatedData);
      res.status(200).json(result);
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.delete = async (req, res) => {
  try {
    const success = await mainpageService.delete(req.params.id);
    if (!success) return res.status(404).json({ error: "data tidak tersedia" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
