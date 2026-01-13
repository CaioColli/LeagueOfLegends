import Image from "next/image";
import styles from "./index.module.scss";

import { GiCheckedShield as Shield } from "react-icons/gi";
import { GiBroadsword as Sword } from "react-icons/gi";
import { GiMagicSwirl as Magic } from "react-icons/gi";
import { GiBrain as Brain } from "react-icons/gi";
import { DiCodeigniter as Fire } from "react-icons/di";
import { getChampThumbnail } from "@/utils/api";

const ChampionCard = ({ data }) => {
    const imageUrl = getChampThumbnail(`${data.id}_0.jpg`);

    return (
        <figure className={styles.card}>
            <Image
                className={styles.image}
                src={imageUrl}
                alt={"Logo League Of Legends"}
                fill
                sizes="300px"
                priority
            />
            <footer>
                <h2>{data.name}</h2>
                <span>{data.title}</span>
            </footer>
        </figure>
    )
}

export default ChampionCard;