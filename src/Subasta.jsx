import React from "react";
import ObjetoSubasta from "./ObjetoSubasta";
import "./Subasta.css";
import AireAcondicionado from "../src/Img/AireAcondicionado.jpg";
import BatidoraPeabody from "../src/Img/BatidoraPeabody.jpg";
import Heladera from "../src/Img/Heladera.jpg";
import Proyector from "../src/Img/Proyector.jpg";
import SillonNegro from "../src/Img/SillonNegro.jpg";
import TvSamsung from "../src/Img/TvSamsung.jpg";
import ImagenVacia from "../src/Img/ImagenVacia.jpg";

const objetosSubasta = [
    { id: "1", nombre: "Aire Acondicionado", imagen: AireAcondicionado, precioBase: 200 },
    { id: "2", nombre: "Batidora Peabody", imagen: BatidoraPeabody, precioBase: 300 },
    { id: "3", nombre: "Heladera", imagen: Heladera, precioBase: 400 },
    { id: "4", nombre: "Proyector Gadnic", imagen: Proyector, precioBase: 500 },
    { id: "5", nombre: "Sillon 3 cuerpos", imagen: SillonNegro, precioBase: 600 },
    { id: "6", nombre: "Tv Samsung 50''", imagen: TvSamsung, precioBase: 700 },
    { id: "7", nombre: "Colchon 1 plaza", imagen: ImagenVacia, precioBase: 800 },
    { id: "8", nombre: "Sommier 2 plazas", imagen: ImagenVacia, precioBase: 900 },
    { id: "9", nombre: "Moto ", imagen: ImagenVacia, precioBase: 1000 },
    { id: "10", nombre: "Horno Electrico", imagen: ImagenVacia, precioBase: 1100 },
];
function Subasta() {
    return (
        <div className="container">
            <h1 className="text-2xl font-bold text-center">Subasta Privada Maximo </h1>
            <div className="subasta-grid">
                {objetosSubasta.map((objeto) => (
                    <ObjetoSubasta key={objeto.id} objeto={objeto} />
                ))}
            </div>
        </div>
    );
}

export default Subasta;