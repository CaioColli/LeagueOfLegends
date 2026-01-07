"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import InitialOverflow from "@/components/initialOverflow";

export default function Home() {
  const [swowInitial, setShowInitial] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowInitial(false);
    }, 2000)

  }, [])

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
