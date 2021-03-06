import React from "react";
import {useRoutes} from "hookrouter";
import "./style.css";
import Routers from "./router";

const Header = props => {
  return (
    <header id={props.id}>
      {props.tytul} - {props.wiadomosc}
    </header>
  );
};

const Naw = () => {
  return (
    <nav>
      <a href="/aktualnosci">Aktualnosci</a>
      <a href="/kontakt">Kontakt</a>
    </nav>
  );
};

const Main = () => {
  const routeResult = useRoutes(Routers);
  return <main>{routeResult}</main>;
};

const Aside = () => {
  return <aside>aside</aside>;
};

const Footer = props => {
  return (
    <footer>
      (c) {props.dzien}-{props.miesiac}-
      {props.wyswietlRok ? props.rok : "brak roku"} - {props.autor}
    </footer>
  );
};

export default () => {
  return (
    <div>
      <Header id="head" tytul="tytul" wiadomosc="wiadomosc 1" />
      <Naw />
      <Main />
      <Aside />
      <Footer
        wyswietlRok={true}
        rok="2021"
        miesiac={2}
        dzien={27}
        autor="Michał"
      />
    </div>
  );
};
