import Formulario from "@/componentes/formulario";
import styles from "./page.module.css";
import Header from "@/componentes/header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Formulario/>
    </main>
  );
}
