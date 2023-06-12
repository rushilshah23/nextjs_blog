import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
          delectus laudantium accusamus soluta fugiat eligendi obcaecati rem
          asperiores minus magni.
        </p>
        <Button text="See our works"/>
      </div>
      <div className={styles.item}>
        <Image src="/hero.png" alt="nature" width={500} height={500} className={styles.img} />
      </div>
    </div>
  );
}
