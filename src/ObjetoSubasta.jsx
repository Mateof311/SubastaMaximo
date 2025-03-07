import React, { useState, useEffect } from "react";
import { database } from "./FirebaseConfig";
import { ref, push, onValue } from "firebase/database";
import "./Subasta.css";

const formatPrice = (price) => {
    return price.toLocaleString("es-ES");
};

function ObjetoSubasta({ objeto }) {
    const [nombre, setNombre] = useState("");
    const [oferta, setOferta] = useState("");
    const [mejorOferta, setMejorOferta] = useState(null);

    useEffect(() => {
        const ofertasRef = ref(database, `ofertas/${objeto.nombre}`);
        onValue(ofertasRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const ofertasArray = Object.values(data);
                const mejor = ofertasArray.reduce((max, oferta) =>
                    oferta.oferta > max.oferta ? oferta : max, { oferta: 0 });
                setMejorOferta(mejor);
            }
        });
    }, [objeto.nombre]);

    const manejarOferta = (nombreObjeto) => {
        if (nombre && oferta) {
            push(ref(database, `ofertas/${nombreObjeto}`), { 
                nombre, 
                oferta: parseInt(oferta) 
            });
            setNombre("");
            setOferta("");
        }
    };

    return (
        <div className="objeto-subasta">
            <h2 className="text-lg font-bold">{objeto.nombre}</h2>
            <img src={objeto.imagen} alt={objeto.nombre} className="objeto-img" />
            <p >Precio base: ${formatPrice(objeto.precioBase)}</p>

            <input
                type="text"
                placeholder="Tu nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="input-box"
            />
            <input
                type="number"
                placeholder="Oferta en $"
                value={oferta}
                onChange={(e) => setOferta(e.target.value)}
                className="input-box"
            />
            <button
                onClick={() => manejarOferta(objeto.nombre)}
                className="button"
            >
                Enviar Oferta
            </button>

            {mejorOferta && (
                <div className="mejor-oferta">
                    <strong>Mejor Oferta :</strong> {mejorOferta.nombre} - ${formatPrice(mejorOferta.oferta)}
                </div>
            )}
        </div>
    );
}

export default ObjetoSubasta;
