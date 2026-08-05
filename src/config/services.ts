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
      "Presenta este tratamiento con un diseño claro y profesional que transmita confianza y motive al paciente a agendar su primera consulta.",
    duration: "45 min",
    image: limpiezaImg,
    alt: "Odontólogo realizando una limpieza dental profesional",
  },
  {
    slug: "ortodoncia",
    category: "Ortodoncia",
    title: "Ortodoncia y Alineadores",
    description:
      "Explica tratamientos complejos de forma sencilla para que los pacientes comprendan sus beneficios y se animen a dar el siguiente paso.",
    duration: "Variable",
    image: ortodonciaImg,
    alt: "Modelo dental de alineadores de ortodoncia",
  },
  {
    slug: "implantes-dentales",
    category: "Implantología",
    title: "Implantes Dentales",
    description:
      "Una presentación visual de alta calidad aumenta la percepción de profesionalismo y genera mayor confianza antes de la primera cita.",
    duration: "Consulta previa",
    image: implantesImg,
    alt: "Implantes dentales de titanio en modelo dental",
  },
  {
    slug: "estetica-dental",
    category: "Estética Dental",
    title: "Blanqueamiento y Carillas",
    description:
      "Las imágenes, los textos y una buena estructura ayudan a destacar los tratamientos estéticos que más atraen nuevos pacientes.",
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
