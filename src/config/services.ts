import type { ImageMetadata } from "astro";
import limpiezaImg from "../assets/images/limpieza.jpg";
import ortodonciaImg from "../assets/images/ortodoncia-hero.jpg";
import implantesImg from "../assets/images/implantes.jpg";
import esteticaImg from "../assets/images/estetica.jpg";
import tecnologiaImg from "../assets/images/tecnologia.jpg";

export interface Service {
	slug: string;
	category: string;
	title: string;
	description: string;
	duration: string;
	image: ImageMetadata;
	alt: string;
}

export const services: Service[] = [
	{
		slug: "limpieza-dental",
		category: "Odontología General",
		title: "Limpieza y Profilaxis Dental",
		description:
			"Remoción de placa, sarro y manchas para prevenir caries y enfermedades de las encías. El cuidado ideal para mantener tu sonrisa saludable.",
		duration: "45 min",
		image: limpiezaImg,
		alt: "Odontólogo realizando una limpieza dental profesional",
	},
	{
		slug: "ortodoncia",
		category: "Ortodoncia",
		title: "Ortodoncia y Alineadores",
		description:
			"Corrige la posición de tus dientes con brackets o alineadores invisibles. Diseñamos el tratamiento perfecto para tu sonrisa.",
		duration: "Variable",
		image: ortodonciaImg,
		alt: "Modelo dental de alineadores de ortodoncia",
	},
	{
		slug: "implantes-dentales",
		category: "Implantología",
		title: "Implantes Dentales",
		description:
			"Reemplaza piezas perdidas con implantes de titanio de última generación que se sienten y lucen como dientes naturales.",
		duration: "Consulta previa",
		image: implantesImg,
		alt: "Implantes dentales de titanio en modelo dental",
	},
	{
		slug: "estetica-dental",
		category: "Estética Dental",
		title: "Blanqueamiento y Carillas",
		description:
			"Luce una sonrisa más blanca y uniforme con blanqueamiento dental profesional y carillas de porcelana de alta estética.",
		duration: "60 min",
		image: esteticaImg,
		alt: "Sonrisa saludable tras tratamiento de estética dental",
	},
];

export const gallery: { src: ImageMetadata; title: string }[] = [
	{
		src: limpiezaImg,
		title: "Odontología General",
	},
	{
		src: ortodonciaImg,
		title: "Ortodoncia",
	},
	{
		src: implantesImg,
		title: "Implantes Dentales",
	},
	{
		src: esteticaImg,
		title: "Estética Dental",
	},
	{
		src: tecnologiaImg,
		title: "Tecnología",
	},
];
