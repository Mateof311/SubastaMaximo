import React, { useState, useEffect } from "react";
import { database } from "./FirebaseConfig";
import { ref, push, onValue } from "firebase/database";

function Subasta() {
    const [nombre, setNombre] = useState("");
    const [oferta, setOferta] = useState("");
    const [mejorOferta, setMejorOferta] = useState(null);

    useEffect(() => {
        const ofertasRef = ref(database, "ofertas");
        onValue(ofertasRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const ofertasArray = Object.values(data);
                const mejor = ofertasArray.reduce((max, oferta) =>
                    oferta.oferta > max.oferta ? oferta : max, { oferta: 0 });
                setMejorOferta(mejor);
            }
        });
    }, []);

    const manejarOferta = () => {
        if (nombre && oferta) {
            push(ref(database, "ofertas"), { nombre, oferta: parseInt(oferta) });
            setNombre("");
            setOferta("");
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
            <h1 className="text-xl font-bold text-center">Subasta Privada</h1>
            <input
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="border p-2 w-full mt-2"
            />
            <input
                type="number"
                placeholder="Tu oferta en $"
                value={oferta}
                onChange={(e) => setOferta(e.target.value)}
                className="border p-2 w-full mt-2"
            />
            <button
                onClick={manejarOferta}
                className="bg-blue-500 text-white p-2 w-full mt-2 rounded"
            >
                Enviar Oferta
            </button>
            {mejorOferta && (
                <div className="mt-4 p-2 bg-green-100 text-green-800 rounded">
                    <strong>Mejor Oferta :</strong> {mejorOferta.nombre} - ${mejorOferta.oferta}
                </div>
            )}
        </div>
    );
}

export default Subasta;