const sosmedService = require("../services/sosmed.service");
const upload = require("../utils/upload");
const fs = require("fs");

exports.getAll = async (req, res) => {
  try {
    const sosmeds = await sosmedService.getAll();
    res.json(sosmeds);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getById = async (req, res) => {
  try {
    const sosmed = await sosmedService.getById(req.params.id);
    if (!sosmed) return res.status(404).json({ error: "sosmed not found" });
    res.json(sosmed);
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

      const sosmed = await sosmedService.create(data);
      res.status(201).json(sosmed);
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
      const existingData = await sosmedService.getById(id);

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

      const result = await sosmedService.update(id, updatedData);
      res.status(200).json(result);
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.delete = async (req, res) => {
  try {
    const success = await sosmedService.delete(req.params.id);
    if (!success) return res.status(404).json({ error: "sosmed not found" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
