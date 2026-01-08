"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import InitialOverflow from "@/components/initialOverflow";
import { getDataDragonApi } from "@/utils/useApi";

export default function Home() {
  const [swowInitial, setShowInitial] = useState(true);
  const [champs, setChamps] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setShowInitial(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const loadChamps = async () => {
      const dataDragon = await getDataDragonApi();
      const { data } = await dataDragon.get("/champion.json");
      setChamps(data);
    };

    loadChamps();
  }, []);

  return (
    <div className={styles.page}>
      {swowInitial ? (
        <InitialOverflow />
      ) : (
        <main className={styles.main}>
          <h1>Aqui os campeões</h1>
        </main>
      )}
    </div>
  );
}
