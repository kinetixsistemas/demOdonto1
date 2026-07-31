export interface Service {
	slug: string;
	category: string;
	title: string;
	description: string;
	duration: string;
	image: string;
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
		image:
			"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
		alt: "Odontólogo realizando una limpieza dental profesional",
	},
	{
		slug: "ortodoncia",
		category: "Ortodoncia",
		title: "Ortodoncia y Alineadores",
		description:
			"Corrige la posición de tus dientes con brackets o alineadores invisibles. Diseñamos el tratamiento perfecto para tu sonrisa.",
		duration: "Variable",
		image:
			"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
		alt: "Modelo dental de alineadores de ortodoncia",
	},
	{
		slug: "implantes-dentales",
		category: "Implantología",
		title: "Implantes Dentales",
		description:
			"Reemplaza piezas perdidas con implantes de titanio de última generación que se sienten y lucen como dientes naturales.",
		duration: "Consulta previa",
		image:
			"https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
		alt: "Implantes dentales de titanio en modelo dental",
	},
	{
		slug: "estetica-dental",
		category: "Estética Dental",
		title: "Blanqueamiento y Carillas",
		description:
			"Luce una sonrisa más blanca y uniforme con blanqueamiento dental profesional y carillas de porcelana de alta estética.",
		duration: "60 min",
		image:
			"https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
		alt: "Sonrisa saludable tras tratamiento de estética dental",
	},
];

export const gallery: { src: string; title: string }[] = [
	{
		src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
		title: "Odontología General",
	},
	{
		src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
		title: "Ortodoncia",
	},
	{
		src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
		title: "Implantes Dentales",
	},
	{
		src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
		title: "Estética Dental",
	},
	{
		src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
		title: "Tecnología",
	},
];
