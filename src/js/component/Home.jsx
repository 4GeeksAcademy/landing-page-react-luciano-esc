import React from "react";

import { Card } from "./Card.jsx";
import { First } from "./First.jsx";

import { Navbar } from "./Navbar.jsx";
let year = new Date().getFullYear();
//create your First component
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<First />
					</div>
				</div>
				<div className="row mt-5 pb-5">
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://m.media-amazon.com/images/S/pv-target-images/daef38beeba0260d9d2ec63127b1083088b438c45aac9d9ac2af09b5c55ff3bd.jpg"
							cardTitle="Anatomy Of A Fall"
							cardDescription="Sandra, Samuel y su hijo de 11 años viven alejados de todo en la montaña. Un día encuentran a Samuel muerto al pie de su casa. Se abre una investigación por muerte sospechosa y no tardan en inculpar a Sandra, a pesar de la ambigüedad del caso."
							buttonUrl="https://es.wikipedia.org/wiki/Anatom%C3%ADa_de_una_ca%C3%ADda"
							buttonLabel="See more!"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://cdn.colombia.com/sdi/2022/10/12/dune-secuela-cambio-fecha-de-estreno-denis-villeneuve-warner-bros-1074355.webp"
							cardTitle="Dune"
							cardDescription="Arrakis, también denominado Dune, se ha convertido en el planeta más importante del universo. A su alrededor comienza una gigantesca lucha por el poder que culmina en una guerra interestelar."
							buttonUrl="https://es.wikipedia.org/wiki/Dune_(pel%C3%ADcula_de_2021)"
							buttonLabel="See more!"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://lumiere-a.akamaihd.net/v1/images/payoff_poorthings_2_af1a38aa.jpeg?region=0,540,1928,1083&width=1200"
							cardTitle="Poor Things"
							cardDescription="El Dr. Godwin resucita a la joven Bella Baxter para que aprenda a su lado. Sin embargo, ella huye en compañía de un abogado en una aventura relámpago a través de los continentes. Libre de los prejuicios de su época, se mantiene firme en su propósito de defender la igualdad y la liberación."
							buttonUrl="https://es.wikipedia.org/wiki/Pobres_criaturas"
							buttonLabel="See more!"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://i.ytimg.com/vi/8z3JaevxEMA/sddefault.jpg#404_is_fine"
							cardTitle="May December"
							cardDescription="Veinte años después de haber protagonizado un romance que conquistó los medios de comunicación, un matrimonio se ve superado por la situación cuando una actriz de Hollywood los entrevista como parte de la preparación de una película."
							buttonUrl="https://es.wikipedia.org/wiki/Secretos_de_un_esc%C3%A1ndalo"
							buttonLabel="See more!"
						/>
					</div>
				</div>
			</div>
			<footer className="footer py-3 bg-dark">
				<div className="container">
					<p className="text-white text-center">
						Copyright <i class="fas fa-copyright"></i> Your Website {year}
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;
