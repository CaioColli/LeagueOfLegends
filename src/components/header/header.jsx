import Link from "next/link";
import styles from "./header.module.scss";
import { IoSearch } from "react-icons/io5";

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Link href="">
                    <figure>
                        <img
                            src="/images/lol-logo.webp"
                            alt="Lol Logo"
                            className={styles.logo}
                        />
                    </figure>
                </Link>

                <nav>
                    <ul>
                        <li>
                            <Link href="" className={styles.link}>CAMPEÕES</Link>
                        </li>
                        <li>
                            <Link href="" className={styles.link}>ITENS</Link>
                        </li>
                    </ul>
                </nav>
            </div>


            <div className={styles.input_container}>
                <label htmlFor="search">
                    <IoSearch className={styles.icon} />
                </label>

                <input
                    type="text"
                    id="search"
                    placeholder="Pesquisar..."
                />
            </div>
        </header>
    )
}

export default Header;