import express, {Router} from "express";


const router = express.Router();

const anakkontr =[
    {
        name: "Alvien",
        nomorkamar: 2,
        kendaraan: "motor",
        asal: "Kalimantan",
    },
    {
        name: "Baihaqi",
        nomorkamar: 1,
        kendaraan: "motor dan mobil",
        asal: "Papua",
    },
    {
        name: "Alif",
        nomorkamar: 4,
        kendaraan: "motor",
        asal: "Jawa",
    },
    {
        name: "Bimo",
        nomorkamar: 3,
        kendaraan: "motor",
        asal: "Sumatra",
    },
]
router.get("/", (req, res) =>{
    res.send(anakkontr);
});
export default router;