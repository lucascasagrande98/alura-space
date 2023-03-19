import React from "react";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import styles from "./Rodape.module.scss";

export default function Rodape() {
	return (
		<footer className={styles.rodape}>
			<div className={styles.rodape__icones}>
				<a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
					<img src={facebook} alt="Ícone do facebook" />
				</a>
				<a href="https://twitter.com/" target="_blank" rel="noreferrer">
					<img src={twitter} alt="Ícone do twitter" />
				</a>
				<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
					<img src={instagram} alt="Ícone do instagram" />
				</a>
			</div>
      <p>Desenvolvido por Alura</p>
		</footer>
	);
}
