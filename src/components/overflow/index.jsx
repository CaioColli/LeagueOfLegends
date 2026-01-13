import Image from "next/image";
import styles from "./index.module.scss";

const InitialOverflow = () => {
    return (
        <div className={styles.overflow}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Image
                        className={styles.image}
                        src="/images/lol-logo.webp"
                        alt="Logo League Of Legends"
                        fill
                        sizes="300px"
                        priority
                    />

                </div>
                
                <div className={styles.spinner}></div>
            </div>
        </div>
    )
}

export default InitialOverflow;