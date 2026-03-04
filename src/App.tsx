import { Header } from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import TechTracksSection from "./components/TechTracksSection/TechTracksSection";
import TechStack from "./components/TechStack/TechStack";
import styles from "./styles.module.scss";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <HeroSection />

        <div>
          <h1 className={styles.title}>
            Все необходимое для успешной подготовки
          </h1>
          <p className={styles.text}>
            Наша платформа предоставляет полный набор инстументов для
            всесторонней подготовки к техническим собеседованиям и развития
            навыков программирования.
          </p>
        </div>

        <FeaturesSection />

        <div>
          <h1 className={styles.title}>Осваивайте ключевые технологии</h1>
          <p className={styles.text}>
            Мы собрали все востребованные технологии, чтобы вы могли построить
            свою карьеру в IT. Выберите интересующее направление и начните свой
            путь в программировании.
          </p>
        </div>
        <TechTracksSection />
        <TechStack />
      </div>
      <Footer />
    </>
  );
}
