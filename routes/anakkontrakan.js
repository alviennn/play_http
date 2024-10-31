import express from "express";

const router = express.Router();

const anakkontr = [
    {
        id: "1",
        name: "Alvien",
        nomorkamar: 2,
        kendaraan: "motor",
        asal: "Kalimantan",
    },
    {
        id: "2",
        name: "Baihaqi",
        nomorkamar: 1,
        kendaraan: "motor dan mobil",
        asal: "Papua",
    },
    {
        id: "3",
        name: "Alif",
        nomorkamar: 4,
        kendaraan: "motor",
        asal: "Jawa",
    },
    {
        id: "4",
        name: "Bimo",
        nomorkamar: 3,
        kendaraan: "motor",
        asal: "Sumatra",
    },
];

// Mendapatkan semua data anak kontrakan
router.get("/", (req, res) => {
    res.send(anakkontr);
});

// Menambah data anak kontrakan baru
router.post("/", (req, res) => {
    const { name, nomorkamar, kendaraan, asal } = req.body;
    const newAnakKontrakan = {
        id: (anakkontr.length + 1).toString(),
        name,
        nomorkamar: parseInt(nomorkamar),
        kendaraan,
        asal,
    };
    anakkontr.push(newAnakKontrakan);
    res.status(201).json(newAnakKontrakan);
});

// Menghapus data anak kontrakan berdasarkan nama
router.delete('/:id', (req, res) => {
    const anakIndex = anakkontr.findIndex(t => t.id === req.params.id);
    if (anakIndex === -1) return res.status(404).json({ message: 'Anak kontrakan tidak ditemukan' });

    const deletedAnak = anakkontr.splice(anakIndex, 1)[0];
    res.status(200).json({ message: `Anak kontrakan '${deletedAnak.id}' telah dihapus` });
});

// Memperbarui data anak kontrakan berdasarkan nama
router.put('/:id', (req, res) => {
    const anakData = anakkontr.find(t => t.id === req.params.id);
    if (!anakData) return res.status(404).json({ message: 'Anak kontrakan tidak ditemukan' });

    const { nama, nomorkamar, kendaraan, asal } = req.body;
    
    // Memperbarui atribut hanya jika nilai baru diberikan
    if (nama) anakData.name = nama;
    if (nomorkamar) anakData.nomorkamar = parseInt(nomorkamar);
    if (kendaraan) anakData.kendaraan = kendaraan;
    if (asal) anakData.asal = asal;

    res.status(200).json({
        message: `Data anak kontrakan '${anakData.name}' telah diperbarui`,
        updatedAnak: anakData
    });
});

export default router;
