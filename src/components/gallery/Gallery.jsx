import "./Gallery.scss";
import logements from "../../data/data"; // Données du Data.json
import Card from "../card/Card";
import { useState, useEffect } from "react";

/**
 * Ce composant permet de créer une galerie de logements.
 * @returns {JSX.Element} - Une galerie de logements.
 * @example
 * <Gallery />
 */
export default function Gallery() {
  const [datas, setDatas] = useState([]); // le state qui gère les données de notre data.json
  const [loading, setLoading] = useState(true); // state qui gère un loader quand on recharge un data

  /**
   * Fake appel backend avec un timer de chargement
   * Permettant ainsi de Lazy load les données en dur du fichier data.JSON
   */
  const fetchingData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(logements); // Retourne les données du datas.json après 0.5 secondes
      }, 500);
    });
  };

  useEffect(() => {
    const loadDatas = async () => {
      try {
        const responses = await fetchingData(); // Attendre que les données soient récupérées
        setDatas(responses); // Mettre à jour le state avec les données réelles
        setLoading(false); // Désactiver le loader
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      }
    };
    loadDatas();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="home_gallery">
      {datas.map((data) => (
        <Card key={data.id} id={data.id} title={data.title} cover={data.cover} />
      ))}
    </div>
  );
}
