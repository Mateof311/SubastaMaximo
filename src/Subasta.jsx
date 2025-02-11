import React from "react";
import ObjetoSubasta from "./ObjetoSubasta";
import "./Subasta.css";
import BatidoraPeabody from "../src/Img/BatidoraPeabody.jpg";
import Heladera from "../src/Img/Heladera.jpg";
import Proyector from "../src/Img/Proyector.jpg";
import SillonNegro from "../src/Img/SillonNegro.jpg";
import TvSamsung from "../src/Img/TvSamsung.jpg";
import ImagenVacia from "../src/Img/ImagenVacia.jpg";

const objetosSubasta = [
    { id: "1", nombre: "TV Samsung 50'' UHD 4K + Soporte TV Brazo Tagwood", imagen: TvSamsung, precioBase: 399990 },
    { id: "2", nombre: "Batidora Peabody Planetaria", imagen: BatidoraPeabody, precioBase: 149990 },
    { id: "3", nombre: "Heladera No Frost Patrick 285Lt", imagen: Heladera, precioBase: 449990 },
    { id: "4", nombre: "Proyector Gadnic Unique 2500 Lum", imagen: Proyector, precioBase: 69990 },
    { id: "5", nombre: "Sillón Cuerina 3 Cuerpos", imagen: SillonNegro, precioBase: 99990 },
    { id: "6", nombre: "Colchon 1 Plaza Inducol", imagen: ImagenVacia, precioBase: 39990 },
    { id: "7", nombre: "Sommier Piero Modena Doble Pillow Top 140 x 190 cm", imagen: ImagenVacia, precioBase: 199990 },
    { id: "8", nombre: "Zanella Styler 150", imagen: ImagenVacia, precioBase: 649990 },
    { id: "9", nombre: "Horno Electrico Liliana Facilcook", imagen: ImagenVacia, precioBase: 59990 },
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