import express from "express";

const router = express.Router();

const mobil = [
    {
        id: "1",
        merk: "Toyota",
        model: "Avanza",
        warna: "Putih",
        tahun: 2021,
    },
    {
        id: "2",
        merk: "Toyota",
        model: "LC",
        warna: "Hitam",
        tahun: 2021,
    },
];

// Mendapatkan semua data mobil
router.get("/", (req, res) => {
    res.send(mobil);
});

// Menambah data mobil baru
router.post('/', (req, res) => {
    const { merk, model, warna, tahun } = req.body;
    
    // Validasi input
    if (!merk || !model || !warna || !tahun) {
        return res.status(400).json({ message: "Semua atribut wajib diisi" });
    }

    const newMobil = {
        id: (mobil.length + 1).toString(),
        merk,
        model,
        warna,
        tahun: parseInt(tahun),
    };
    
    mobil.push(newMobil);
    res.status(201).json(newMobil);
});

// Menghapus data mobil berdasarkan ID
router.delete('/:id', (req, res) => {
    const mobilIndex = mobil.findIndex(t => t.id === req.params.id);
    if (mobilIndex === -1) return res.status(404).json({ message: 'Mobil tidak ditemukan' });

    const deletedMobil = mobil.splice(mobilIndex, 1)[0];
    res.status(200).json({ message: `Mobil dengan ID '${deletedMobil.id}' telah dihapus` });
});

// Memperbarui data mobil berdasarkan ID
router.put('/:id', (req, res) => {
    const mobilData = mobil.find(t => t.id === req.params.id);
    if (!mobilData) return res.status(404).json({ message: 'Mobil tidak ditemukan' });
    
    const { merk, model, warna, tahun } = req.body;

    // Memperbarui atribut hanya jika nilai baru diberikan
    if (merk) mobilData.merk = merk;
    if (model) mobilData.model = model;
    if (warna) mobilData.warna = warna;
    if (tahun) mobilData.tahun = parseInt(tahun);

    res.status(200).json({
        message: `Mobil dengan ID ${mobilData.id} telah diperbarui`,
        updatedMobil: mobilData
    });
});

export default router;