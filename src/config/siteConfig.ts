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
		geo: { latitude: 6.247197574835251, longitude: -75.56577587020735 },
		mapsEmbed:
			"https://www.google.com/maps?q=6.247197574835251,-75.56577587020735&hl=es&z=16&output=embed",
		mapsDirections:
			"https://www.google.com/maps/dir/?api=1&destination=6.247197574835251,-75.56577587020735",
	},

	socials: {
		instagram: "https://instagram.com/auradental",
		facebook: "https://facebook.com/auradental",
		tiktok: "https://tiktok.com/@auradental",
		whatsapp: "https://wa.me/573015550123",
	},

	nav: [
		{ href: "#treatments", label: "Tratamientos" },
		{ href: "#benefits", label: "Beneficios" },
		{ href: "#results", label: "Resultados" },
		{ href: "#location", label: "Ubicación" },
	],
	hero: {
		badge: "🚀 Demo para Clínicas Odontológicas",
		title: "Así podría verse la página web de tu clínica.",
		titleAccent: "Diseñada para convertir visitantes en pacientes.",
		subtitle:
			"Creamos landing pages modernas para odontólogos que transmiten confianza, aumentan las consultas y fortalecen su presencia digital.",
		primaryCta: "Quiero una página como esta",
		secondaryCta: "Ver demostración",
	},
	values: [
		{
			icon: "devices",
			title: "DISEÑO RESPONSIVE",
			description:
				"Tu página se adapta perfectamente a móviles, tablets y computadoras para ofrecer una experiencia profesional en cualquier dispositivo.",
		},
		{
			icon: "bolt",
			title: "CARGA RÁPIDA",
			description:
				"Un sitio optimizado carga en segundos, mejora la experiencia del usuario y reduce el abandono antes del primer contacto.",
		},
		{
			icon: "chat",
			title: "WHATSAPP INTEGRADO",
			description:
				"Facilita que los pacientes soliciten información o agenden una cita con un solo clic desde cualquier sección de la página.",
		},
		{
			icon: "star",
			title: "RESEÑAS QUE GENERAN CONFIANZA",
			description:
				"Muestra la experiencia de tus pacientes para transmitir credibilidad y aumentar la confianza desde la primera visita.",
		},
		{
			icon: "event_available",
			title: "RESERVA DE CITAS",
			description:
				"Llamadas a la acción y formularios diseñados para convertir visitantes en nuevas consultas para tu clínica.",
		},
		{
			icon: "verified_user",
			title: "IMAGEN PROFESIONAL",
			description:
				"Una presencia digital moderna y bien estructurada diferencia tu clínica de la competencia y fortalece tu marca.",
		},
	],

	footer: {
		description:
			"Odontología general y estética con tecnología de punta. Tu sonrisa en las mejores manos.",
		links: [
			{ label: "Política de privacidad", href: "#" },
			{ label: "Términos de servicio", href: "#" },
			{ label: "Contacto", href: "#contact" },
		],
		rights: "© 2026 Aura Dental. Todos los derechos reservados.",
		developer: {
			name: "Kinetix Sistemas",
			url: "https://kinetixsistemas.com",
		},
	},

	chatCta: "Consulta con nuestro asistente de IA",
} as const;
