import styles from "./App.module.css";
import eu from "./assets/eu.png";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

export function App() {
  return (
    <div>
      <Header />
      <section className={styles.sectionInicial}>
        <div className={styles.text}>
          <h1>Olá, seja Bem Vindo!</h1>
          <h1>Eu sou Luiza Bruna.</h1>
          <p>
            Graduada no curso de Técnico em Informática e cursando Engenharia de
            Computação pelo IFPB. Faço parte do Laboratório de Análise e
            Desenvolvimento de Sistemas (LADS) trabalhando como desenvolvedor
            web. Sou amante de tecnologia e de aprender coisas novas.
          </p>
          <div className={styles.buttom}>
            <button>Contact for me</button>
          </div>
        </div>
        <div className={styles.img}>
          <img src={eu} alt="Luiza Bruna" />
        </div>
      </section>
      <div className={styles.sectionprojects}>
        <div className={styles.title}>
          <h1>Projetos pessoais e acadêmicos</h1>
        </div>
        <section>
          <Card
            title={"Projeto 1"}
            description={
              "Descrição: Lorem ipsum dolor sit, amet consectetur adipielit. Voluptatum id rem non itaque recusandae beatae rerum dolorem odio tenetur tempore provident ut, eveniet dolore aut fugiat cupiditate! Praesentium, deserunt."
            }
          />
          <Card
            title={"Projeto 2"}
            description={
              "Descrição: Lorem ipsum dolor sit, amet consectetur adipielit. Voluptatum id rem non itaque recusandae beatae rerum dolorem odio tenetur tempore provident ut, eveniet dolore aut fugiat cupiditate! Praesentium, deserunt."
            }
          />
          <Card
            title={"Projeto 3"}
            description={
              "Descrição: Lorem ipsum dolor sit, amet consectetur adipielit. Voluptatum id rem non itaque recusandae beatae rerum dolorem odio tenetur tempore provident ut, eveniet dolore aut fugiat cupiditate! Praesentium, deserunt."
            }
          />
          <Card
            title={"Projeto 4"}
            description={
              "Descrição: Lorem ipsum dolor sit, amet consectetur adipielit. Voluptatum id rem non itaque recusandae beatae rerum dolorem odio tenetur tempore provident ut, eveniet dolore aut fugiat cupiditate! Praesentium, deserunt."
            }
          />
          <Card
            title={"Projeto 5"}
            description={
              "Descrição: Lorem ipsum dolor sit, amet consectetur adipielit. Voluptatum id rem non itaque recusandae beatae rerum dolorem odio tenetur tempore provident ut, eveniet dolore aut fugiat cupiditate! Praesentium, deserunt."
            }
          />
          <Card
            title={"Projeto 6"}
            description={
              "Descrição: Lorem ipsum dolor sit, amet consectetur adipielit. Voluptatum id rem non itaque recusandae beatae rerum dolorem odio tenetur tempore provident ut, eveniet dolore aut fugiat cupiditate! Praesentium, deserunt."
            }
          />
        </section>
      </div>
    </div>
  );
}
