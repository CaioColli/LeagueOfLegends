"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import InitialOverflow from "@/components/overflow";
import { getDataApi, lastVersion } from "@/utils/api";
import Header from "@/components/header";
import SectionHeader from "@/components/sectionHeader";
import ChampionCard from "@/components/championCard";
import Link from "next/link";

export default function Home() {
  const [swowInitial, setShowInitial] = useState(true);
  const [version, setVersion] = useState(null);
  const [champs, setChamps] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setShowInitial(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const loadVersion = async () => {
      const version = await lastVersion();
      setVersion(version);
    }

    loadVersion();
  }, [])

  useEffect(() => {
    if (!version) return;

    const loadChamps = async () => {
      const api = await getDataApi(version);
      const { data } = await api.get("/champion.json");
      setChamps(Object.values(data.data));
    };

    loadChamps();
  }, [version]);

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

            <ul>
              {champs && champs.map((champ) => {
                return (
                  <Link
                    href={`/champion/${champ.id}`}
                    key={champ.id}
                    className={styles.link}
                  >
                    <li>
                      <ChampionCard
                        data={champ}
                      />
                    </li>
                  </Link>
                )
              })}
            </ul>
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
