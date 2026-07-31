export const siteConfig = {
	name: "Aura Dental",
	legalName: "Aura Dental S.A.S.",
	shortName: "Aura",
	tagline: "Odontología Avanzada",
	description:
		"Clínica odontológica en Bogotá con tratamientos de odontología general, ortodoncia, implantología y estética dental. Resultados naturales, seguridad y confianza en un solo lugar.",
	url: "https://auramedical.example.com",
	logo: "/favicon.svg",
	ogImage:
		"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
	themeColor: "#0b1c30",

	colors: {
		brand: "#0e7a5f",
		brandDark: "#0a5c47",
		brandSoft: "#e4f0ea",
		accent: "#b8956a",
		accentSoft: "#f4ecdf",
		ink: "#0b1c30",
		inkSoft: "#4d5a6c",
		ink950: "#07101d",
		cream: "#f8f8f5",
	},

	contact: {
		phone: "+57 (601) 555-0123",
		phoneHref: "tel:+576015550123",
		whatsapp: "573015550123",
		email: "hola@auradental.com",
	},

	address: {
		line1: "Av. Principal 123, Edificio Médica, Piso 4",
		city: "Bogotá",
		country: "Colombia",
		geo: { latitude: 4.711, longitude: -74.0721 },
	},

	socials: {
		instagram: "https://instagram.com/auradental",
		facebook: "https://facebook.com/auradental",
		tiktok: "https://tiktok.com/@auradental",
	},

	nav: [
		{ href: "#treatments", label: "Tratamientos" },
		{ href: "#benefits", label: "Beneficios" },
		{ href: "#results", label: "Resultados" },
		{ href: "#location", label: "Ubicación" },
	],

	hero: {
		badge: "Odontología de Vanguardia",
		title: "Tu mejor sonrisa comienza aquí.",
		titleAccent: "Cuidado dental avanzado y personalizado.",
		subtitle:
			"Tecnología de punta, especialistas certificados y planes de tratamiento a tu medida. Agenda tu cita hoy.",
		primaryCta: "Agendar mi cita ahora",
		secondaryCta: "Ver tratamientos",
	},

	values: [
		{
			icon: "biotech",
			title: "TECNOLOGÍA DE VANGUARDIA",
			description:
				"Equipos de última generación para tratamientos precisos, seguros y mínimamente invasivos.",
		},
		{
			icon: "spa",
			title: "ATENCIÓN PERSONALIZADA",
			description:
				"Planes de tratamiento diseñados específicamente para tu salud dental y tus objetivos.",
		},
		{
			icon: "health_and_safety",
			title: "ESPECIALISTAS CERTIFICADOS",
			description:
				"Equipo odontológico altamente cualificado con años de experiencia en todas las especialidades.",
		},
	],

	footer: {
		description:
			"Odontología general y estética con tecnología de punta. Tu sonrisa en las mejores manos.",
		links: [
			{ label: "Política de privacidad", href: "#" },
			{ label: "Términos de servicio", href: "#" },
			{ label: "Trabaja con nosotros", href: "#" },
			{ label: "Contacto", href: "#contact" },
		],
		rights: "© 2026 Aura Dental. Todos los derechos reservados.",
	},

	chatCta: "Consulta con nuestro asistente de IA",
} as const;
