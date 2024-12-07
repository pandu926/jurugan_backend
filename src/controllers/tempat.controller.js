const tempatService = require("../services/tempat.service");
const upload = require("../utils/upload");
const fs = require("fs");

exports.getAll = async (req, res) => {
  try {
    const tempats = await tempatService.getAll();
    res.json(tempats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getById = async (req, res) => {
  try {
    const tempat = await tempatService.getById(req.params.id);
    if (!tempat) return res.status(404).json({ error: "tempat not found" });
    res.json(tempat);
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
      const imagePath = req.file.path
        .replace(/\\/g, "/")
        .replace("public/", "");

      // Simpan data ke database, termasuk path gambar
      const data = {
        ...req.body,
        background: imagePath, // Asumsikan field `background` menyimpan path gambar
      };

      const tempat = await tempatService.create(data);
      res.status(201).json(tempat);
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
      const existingData = await tempatService.getById(id);

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

        imagePath = `uploads/${req.file.filename}`;
      }
      const updatedData = {
        ...req.body,
        background: imagePath,
      };

      const result = await tempatService.update(id, updatedData);
      res.status(200).json(result);
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.delete = async (req, res) => {
  try {
    const success = await tempatService.delete(req.params.id);
    if (!success) return res.status(404).json({ error: "tempat not found" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
