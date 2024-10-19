import express, {Router} from "express";


const router = express.Router();

const mobil =[
    {
        merk: "Toyota",
        model: "Avanza",
        warna: "Putih",
        tahun: 2021,
    },
    {
        merk: "Toyota",
        model: "LC",
        warna: "Hitam",
        tahun: 2021,
    },
];
router.get("/", (req, res) =>{
    res.send(mobil);
});
export default router;