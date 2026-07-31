import { siteConfig } from "./siteConfig";
import { schedule } from "./schedule";

export function pageTitle(page?: string): string {
	return page ? `${page} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.tagline}`;
}

export function canonicalUrl(pathname: string): string {
	return new URL(pathname, siteConfig.url).href;
}

export function buildLocalBusinessSchema() {
	const { name, legalName, description, url, logo, ogImage, contact, address, socials } =
		siteConfig;

	const openingHours = schedule
		.filter((day) => day.isOpen)
		.map((day) => ({
			"@type": "OpeningHoursSpecification",
			dayOfWeek: day.dayOfWeek,
			opens: day.open,
			closes: day.close,
		}));

	return {
		"@context": "https://schema.org",
		"@type": "MedicalBusiness",
		"@id": `${url}/#organization`,
		name,
		legalName,
		description,
		url,
		logo: `${url}${logo}`,
		image: ogImage,
		telephone: contact.phone,
		email: contact.email,
		priceRange: "$$",
		address: {
			"@type": "PostalAddress",
			streetAddress: address.line1,
			addressLocality: address.city,
			addressCountry: address.country,
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: address.geo.latitude,
			longitude: address.geo.longitude,
		},
		openingHoursSpecification: openingHours,
		sameAs: Object.values(socials),
	};
}
