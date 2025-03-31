import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="background">
        <img src="./home/fundo1.jpg" alt="Imagem de fundo" />
      </div>
      <div className="img">
        <img src="./home/macarrao.png" alt="img2"></img>
      </div>
    </>
  );
}
