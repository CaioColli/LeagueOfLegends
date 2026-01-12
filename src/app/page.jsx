"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import InitialOverflow from "@/components/overflow/initialOverflow";
import { getApi } from "@/utils/api";
import { CgClose } from "react-icons/cg";
import Header from "@/components/header/header";
import SectionHeader from "@/components/sectionHeader/sectionHeader";

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
      const api = await getApi();
      const { data } = await api.get("/champion.json");
      setChamps(data.data);
    };

    loadChamps();
  }, []);

  return (
    <div className={styles.page}>
      {swowInitial ? (
        <InitialOverflow />
      ) : (
        <>
          <Header />

          <main>
            <SectionHeader
              title="Campeão"
            />
          </main>

          <section>
            <SectionHeader
              title="Item"
            />
          </section>
        </>
      )}
    </div>
  );
}
