import Image from "next/image";
import Logo from "../../public/viaCep.png"
import styles from "./header.module.css"

export default function Header(){
    return(
        <section>
            <div className={styles.header}>
                <Image src={Logo} alt='logo da api'/>
            </div>
        </section>
    )
}