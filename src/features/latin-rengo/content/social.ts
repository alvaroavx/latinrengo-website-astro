import type { ImageMetadata } from 'astro';

import falakHanaImage from '../assets/artists/falak-hana.jpg';
import gabrielaPinaImage from '../assets/artists/gabriela-pina.jpg';
import ladiesMayImage from '../assets/artists/ladies-may-gema-dance-academy.jpg';
import latinRengoImage from '../assets/artists/latin-rengo-mi-timbaton.jpg';
import magiaLatinaImage from '../assets/artists/magia-latina.jpg';
import rominaMarceloImage from '../assets/artists/romina-marcelo.jpg';
import lauraAlvaroImage from '../assets/artists/laura-alvaro.jpg';

export type EditorialStatus = 'confirmed' | 'provisional' | 'withheld';

type PublishableStatus = Exclude<EditorialStatus, 'withheld'>;

interface Statused {
	status: EditorialStatus;
}

export interface SocialEvent extends Statused {
	name: string;
	shortName: string;
	edition: string;
	dateLabel: string;
	venueName: string;
	timezone: 'America/Santiago';
	startDateTime: string;
	endDateTime: string;
	quickSummary: string;
	contact: {
		label: string;
		phone: string;
		telHref: string;
		whatsappHref: string;
	};
	location: {
		venueName: string;
		address?: string;
		mapUrl?: string;
		mapEmbedUrl?: string;
		status: EditorialStatus;
	};
}

export interface ScheduleItem extends Statused {
	id: string;
	timeLabel: string;
	startDateTime: string;
	endDateTime?: string;
	title: string;
	description?: string;
}

export interface Artist {
	id: string;
	name: string;
	discipline?: string;
	scheduleLabel?: string;
	image?: ImageMetadata;
	alt?: string;
	credit?: string;
	status: PublishableStatus;
}

export interface ArtistPresentation {
	artistId: string;
	order: number;
	status: PublishableStatus;
}

export interface PresentationScheduleItem extends Statused {
	id: string;
	kind: 'host' | 'artist' | 'transition' | 'closing';
	timeLabel: string;
	startDateTime: string;
	endDateTime: string;
	title: string;
	artistId?: string;
	discipline?: string;
	role?: string;
}

export interface TicketTier extends Statused {
	id: string;
	label: string;
	price: number;
	note?: string;
	availability?: 'available' | 'sold-out' | 'ended';
}

export interface MenuPrice {
	label: string;
	price: number;
}

export interface MenuLegendItem {
	label: string;
	value: string;
}

export interface MenuTransferDetails extends Statused {
	title: string;
	description: string;
	copyLabel: string;
	fields: MenuLegendItem[];
}

export interface MenuItem extends Statused {
	id: string;
	name: string;
	description: string;
	prices: MenuPrice[];
	tags?: string[];
}

export interface MenuCategory extends Statused {
	id: string;
	title: string;
	provider?: string;
	providerLink?: {
		label: string;
		href: string;
	};
	intro?: string;
	legend?: MenuLegendItem[];
	notice?: {
		label: string;
		items: string[];
	};
	items: MenuItem[];
}

export interface FaqItem extends Statused {
	question: string;
	answer: string;
}

import { SITE_URL } from '../../../consts';
export const siteOrigin = SITE_URL;
export const socialPath = '/latin-rengo-social';
export const menuPath = '/latin-rengo-social/menu';
export const archivePath = '/latin-rengo-social/archivo/social-original';
export const legacyQrPath = '/latin-rengo-v3';

export const latinRengoSocialEvent: SocialEvent = {
	status: 'confirmed',
	name: 'LatinRengo Social - Primer aniversario',
	shortName: 'LatinRengo Social',
	edition: 'Primer aniversario',
	dateLabel: 'Sábado 18 de julio de 2026',
	venueName: 'Centro de Eventos Mariette',
	timezone: 'America/Santiago',
	startDateTime: '2026-07-18T20:30:00-04:00',
	endDateTime: '2026-07-19T03:00:00-04:00',
	quickSummary: '20:30 Apertura · 21:00 Clase · 23:00 Shows · 03:00 Cierre',
	contact: {
		label: '+56 9 7989 8502',
		phone: '+56979898502',
		telHref: 'tel:+56979898502',
		whatsappHref:
			'https://wa.me/56979898502?text=Hola%20LatinRengo%2C%20quiero%20consultar%20por%20LatinRengo%20Social.',
	},
	location: {
		venueName: 'Centro de Eventos Mariette',
		// TODO: publicar address solo cuando exista calle, numero y comuna confirmados.
		mapUrl: 'https://maps.app.goo.gl/FWgMPkF2G9vWgjTa8',
		mapEmbedUrl:
			'https://www.google.com/maps?q=Centro%20de%20Eventos%20Mariette&z=16&output=embed',
		status: 'confirmed',
	},
};

export const publicSchedule: ScheduleItem[] = [
	{
		id: 'doors',
		status: 'confirmed',
		timeLabel: '20:30',
		startDateTime: '2026-07-18T20:30:00-04:00',
		title: 'Apertura de puertas',
	},
	{
		id: 'class',
		status: 'confirmed',
		timeLabel: '21:00 a 22:00',
		startDateTime: '2026-07-18T21:00:00-04:00',
		endDateTime: '2026-07-18T22:00:00-04:00',
		title: 'Clase de salsa cubana',
	},
	{
		id: 'first-social',
		status: 'confirmed',
		timeLabel: '22:00 a 22:50',
		startDateTime: '2026-07-18T22:00:00-04:00',
		endDateTime: '2026-07-18T22:50:00-04:00',
		title: 'Social de salsa y bachata',
	},
	{
		id: 'shows',
		status: 'confirmed',
		timeLabel: '23:00 a 23:50',
		startDateTime: '2026-07-18T23:00:00-04:00',
		endDateTime: '2026-07-18T23:50:00-04:00',
		title: 'Presentaciones',
		description: 'Horario programado, sujeto a ajustes operativos.',
	},
	{
		id: 'main-social',
		status: 'confirmed',
		timeLabel: '23:50 a 03:00',
		startDateTime: '2026-07-18T23:50:00-04:00',
		endDateTime: '2026-07-19T03:00:00-04:00',
		title: 'Social de salsa, bachata y otros ritmos',
	},
	{
		id: 'close',
		status: 'confirmed',
		timeLabel: '03:00 domingo 19',
		startDateTime: '2026-07-19T03:00:00-04:00',
		title: 'Cierre al público',
	},
];

export const artistCatalog: Artist[] = [
	{
		id: 'falak-hana',
		name: 'Falak Hana',
		discipline: 'Danza árabe',
		scheduleLabel: '23:04-23:12',
		image: falakHanaImage,
		alt: 'Afiche de Falak Hana para LatinRengo Social.',
		status: 'confirmed',
	},
	{
		id: 'laura-alvaro',
		name: 'Laura y Álvaro',
		discipline: 'Bachata Cabaret Pareja',
		scheduleLabel: '23:14-23:16',
		image: lauraAlvaroImage,
		alt: 'Afiche de Laura y Álvaro para LatinRengo Social.',
		status: 'confirmed',
	},
	{
		id: 'ladies-may',
		name: 'Ladies May',
		discipline: 'Bachata ladies',
		scheduleLabel: '23:18-23:20',
		image: ladiesMayImage,
		alt: 'Afiche de Ladies May para LatinRengo Social.',
		status: 'confirmed',
	},
	{
		id: 'gabriela-pina',
		name: 'Gabriela Piña',
		discipline: 'Bachata solista',
		scheduleLabel: '23:22-23:24',
		image: gabrielaPinaImage,
		alt: 'Afiche de Gabriela Piña para LatinRengo Social.',
		status: 'confirmed',
	},
	{
		id: 'essencia-latina',
		name: 'Essencia Latina',
		discipline: 'Rueda de Casino',
		scheduleLabel: '23:26-23:29',
		status: 'withheld',
	},
	{
		id: 'magia-latina',
		name: 'Magia Latina',
		discipline: 'Bachata ladies',
		scheduleLabel: '23:31-23:34',
		image: magiaLatinaImage,
		alt: 'Afiche de Magia Latina para LatinRengo Social.',
		status: 'confirmed',
	},
	{
		id: 'romina-marcelo',
		name: 'Romina y Marcelo',
		discipline: 'Bachata cabaret pareja',
		scheduleLabel: '23:36-23:39',
		image: rominaMarceloImage,
		alt: 'Afiche de Romina y Marcelo para LatinRengo Social.',
		status: 'confirmed',
	},
	{
		id: 'latin-rengo-mi-timbaton',
		name: 'LatinRengo - Mi Timbatón',
		discipline: 'Rueda de Casino',
		scheduleLabel: '23:41-23:43',
		image: latinRengoImage,
		alt: 'Afiche de LatinRengo - Mi Timbatón para LatinRengo Social.',
		status: 'confirmed',
	},
];

export const presentationOrder: ArtistPresentation[] = [
	{ artistId: 'falak-hana', order: 1, status: 'confirmed' },
	{ artistId: 'laura-alvaro', order: 2, status: 'confirmed' },
	{ artistId: 'ladies-may', order: 3, status: 'confirmed' },
	{ artistId: 'gabriela-pina', order: 4, status: 'confirmed' },
	{ artistId: 'essencia-latina', order: 5, status: 'withheld' },
	{ artistId: 'magia-latina', order: 6, status: 'confirmed' },
	{ artistId: 'romina-marcelo', order: 7, status: 'confirmed' },
	{ artistId: 'latin-rengo-mi-timbaton', order: 8, status: 'confirmed' },
];

export const presentationSchedule: PresentationScheduleItem[] = [
	{
		id: 'welcome',
		kind: 'host',
		status: 'confirmed',
		timeLabel: '23:00-23:04',
		startDateTime: '2026-07-18T23:00:00-04:00',
		endDateTime: '2026-07-18T23:04:00-04:00',
		title: 'Bienvenida y apertura',
		role: 'Animación',
	},
	{
		id: 'falak-hana',
		kind: 'artist',
		status: 'confirmed',
		timeLabel: '23:04-23:12',
		startDateTime: '2026-07-18T23:04:00-04:00',
		endDateTime: '2026-07-18T23:12:00-04:00',
		title: 'Falak Hana',
		artistId: 'falak-hana',
		discipline: 'Danza árabe',
	},
	{
		id: 'transition-1',
		kind: 'transition',
		status: 'confirmed',
		timeLabel: '23:12-23:14',
		startDateTime: '2026-07-18T23:12:00-04:00',
		endDateTime: '2026-07-18T23:14:00-04:00',
		title: 'Transición',
	},
	{
		id: 'laura-alvaro',
		kind: 'artist',
		status: 'confirmed',
		timeLabel: '23:14-23:16',
		startDateTime: '2026-07-18T23:14:00-04:00',
		endDateTime: '2026-07-18T23:16:00-04:00',
		title: 'Laura y Álvaro',
		artistId: 'laura-alvaro',
		discipline: 'Bachata Cabaret Pareja',
	},
	{
		id: 'transition-2',
		kind: 'transition',
		status: 'confirmed',
		timeLabel: '23:16-23:18',
		startDateTime: '2026-07-18T23:16:00-04:00',
		endDateTime: '2026-07-18T23:18:00-04:00',
		title: 'Transición',
	},
	{
		id: 'ladies-may',
		kind: 'artist',
		status: 'confirmed',
		timeLabel: '23:18-23:20',
		startDateTime: '2026-07-18T23:18:00-04:00',
		endDateTime: '2026-07-18T23:20:00-04:00',
		title: 'Ladies May',
		artistId: 'ladies-may',
		discipline: 'Bachata ladies',
	},
	{
		id: 'transition-3',
		kind: 'transition',
		status: 'confirmed',
		timeLabel: '23:20-23:22',
		startDateTime: '2026-07-18T23:20:00-04:00',
		endDateTime: '2026-07-18T23:22:00-04:00',
		title: 'Transición',
	},
	{
		id: 'gabriela-pina',
		kind: 'artist',
		status: 'confirmed',
		timeLabel: '23:22-23:24',
		startDateTime: '2026-07-18T23:22:00-04:00',
		endDateTime: '2026-07-18T23:24:00-04:00',
		title: 'Gabriela Piña',
		artistId: 'gabriela-pina',
		discipline: 'Bachata solista',
	},
	{
		id: 'transition-4',
		kind: 'transition',
		status: 'confirmed',
		timeLabel: '23:24-23:26',
		startDateTime: '2026-07-18T23:24:00-04:00',
		endDateTime: '2026-07-18T23:26:00-04:00',
		title: 'Transición',
	},
	{
		id: 'essencia-latina',
		kind: 'artist',
		status: 'withheld',
		timeLabel: '23:26-23:29',
		startDateTime: '2026-07-18T23:26:00-04:00',
		endDateTime: '2026-07-18T23:29:00-04:00',
		title: 'Essencia Latina',
		artistId: 'essencia-latina',
		discipline: 'Rueda de Casino',
	},
	{
		id: 'transition-5',
		kind: 'transition',
		status: 'confirmed',
		timeLabel: '23:29-23:31',
		startDateTime: '2026-07-18T23:29:00-04:00',
		endDateTime: '2026-07-18T23:31:00-04:00',
		title: 'Transición',
	},
	{
		id: 'magia-latina',
		kind: 'artist',
		status: 'confirmed',
		timeLabel: '23:31-23:34',
		startDateTime: '2026-07-18T23:31:00-04:00',
		endDateTime: '2026-07-18T23:34:00-04:00',
		title: 'Magia Latina',
		artistId: 'magia-latina',
		discipline: 'Bachata ladies',
	},
	{
		id: 'transition-6',
		kind: 'transition',
		status: 'confirmed',
		timeLabel: '23:34-23:36',
		startDateTime: '2026-07-18T23:34:00-04:00',
		endDateTime: '2026-07-18T23:36:00-04:00',
		title: 'Transición',
	},
	{
		id: 'romina-marcelo',
		kind: 'artist',
		status: 'confirmed',
		timeLabel: '23:36-23:39',
		startDateTime: '2026-07-18T23:36:00-04:00',
		endDateTime: '2026-07-18T23:39:00-04:00',
		title: 'Romina y Marcelo',
		artistId: 'romina-marcelo',
		discipline: 'Bachata cabaret pareja',
	},
	{
		id: 'transition-7',
		kind: 'transition',
		status: 'confirmed',
		timeLabel: '23:39-23:41',
		startDateTime: '2026-07-18T23:39:00-04:00',
		endDateTime: '2026-07-18T23:41:00-04:00',
		title: 'Transición',
	},
	{
		id: 'latin-rengo-mi-timbaton',
		kind: 'artist',
		status: 'confirmed',
		timeLabel: '23:41-23:43',
		startDateTime: '2026-07-18T23:41:00-04:00',
		endDateTime: '2026-07-18T23:43:00-04:00',
		title: 'LatinRengo - Mi Timbatón',
		artistId: 'latin-rengo-mi-timbaton',
		discipline: 'Rueda de Casino',
	},
	{
		id: 'thanks-photo',
		kind: 'closing',
		status: 'confirmed',
		timeLabel: '23:43-23:50',
		startDateTime: '2026-07-18T23:43:00-04:00',
		endDateTime: '2026-07-18T23:50:00-04:00',
		title: 'Agradecimientos, aniversario y fotografía',
		role: 'Cierre del bloque',
	},
];

// Para el dia del evento, actualizar estos estados aqui y verificar la disponibilidad JSON-LD en createEventJsonLd.
export const ticketTiers: TicketTier[] = [
	{
		id: 'preventa',
		status: 'confirmed',
		label: 'Preventa',
		price: 3000,
		note: 'Agotada.',
		availability: 'sold-out',
	},
	{
		id: 'general',
		status: 'confirmed',
		label: 'General',
		price: 5000,
		note: 'Disponible hasta el viernes 17 de julio.',
		availability: 'available',
	},
	{
		id: 'puerta',
		status: 'confirmed',
		label: 'Puerta',
		price: 8000,
		note: 'Disponible en puerta el sábado 18 de julio, sujeta a disponibilidad.',
		availability: 'available',
	},
];

export const menuTransferDetails: MenuTransferDetails = {
	status: 'confirmed',
	title: 'Datos de transferencia',
	description: 'Puedes copiar estos datos para hacer la transferencia.',
	copyLabel: 'Copiar datos',
	fields: [
		{ label: 'Nombre', value: 'LATIN RENGO' },
		{ label: 'RUT', value: '19592390-6' },
		{ label: 'Banco', value: 'Mercado Pago' },
		{ label: 'Tipo de cuenta', value: 'Cuenta Vista' },
		{ label: 'Numero de cuenta', value: '1000052622' },
		{ label: 'Correo', value: 'latin.rengo@gmail.com' },
	],
};

export const menuCategories: MenuCategory[] = [
	{
		id: 'pizzas',
		status: 'confirmed',
		title: 'Pizzas',
		provider: 'Pizzis Pizzería',
		providerLink: {
			label: '@pizzis.pizzeria',
			href: 'https://www.instagram.com/pizzis.pizzeria',
		},
		intro: 'Para un descanso entre bailes o para reponer energías.',
		legend: [
			{ label: 'Individual', value: '24 cm' },
			{ label: 'Familiar', value: '32 cm' },
		],
		items: [
			{
				id: 'pepperoni',
				status: 'confirmed',
				name: 'Pepperoni',
				description: 'Masa artesanal, Salsa de tomate, Queso Mozzarella y Pepperoni.',
				prices: [
					{ label: 'Individual · 24 cm', price: 7500 },
					{ label: 'Familiar · 32 cm', price: 13000 },
				],
			},
			{
				id: 'del-jardin',
				status: 'confirmed',
				name: 'Del Jardín',
				description:
					'Masa artesanal, Salsa de tomate, Queso Mozzarella, Champiñón, Choclo, Aceituna y Pimentón. Apta para vegetarianos.',
				prices: [
					{ label: 'Individual · 24 cm', price: 7500 },
					{ label: 'Familiar · 32 cm', price: 13000 },
				],
				tags: ['Vegetariana'],
			},
			{
				id: 'mediterranea',
				status: 'confirmed',
				name: 'Mediterránea',
				description:
					'Masa artesanal, Salsa de tomate, Queso Mozzarella, Jamón serrano, Tomate cherry y Pesto.',
				prices: [
					{ label: 'Individual · 24 cm', price: 9000 },
					{ label: 'Familiar · 32 cm', price: 14500 },
				],
			},
			{
				id: 'todas-las-carnes',
				status: 'confirmed',
				name: 'Todas las carnes',
				description:
					'Masa artesanal, Salsa de tomate, Queso Mozzarella y Pepperoni, Jamón, Carne Molida y Longaniza.',
				prices: [
					{ label: 'Individual · 24 cm', price: 7500 },
					{ label: 'Familiar · 32 cm', price: 13000 },
				],
			},
		],
	},
	{
		id: 'aperitivos',
		status: 'confirmed',
		title: 'Aperitivos',
		provider: 'Pizzis Pizzería',
		providerLink: {
			label: '@pizzis.pizzeria',
			href: 'https://www.instagram.com/pizzis.pizzeria',
		},
		items: [
			{
				id: 'papas-fritas',
				status: 'confirmed',
				name: 'Papas fritas',
				description:
					'Con salsa de la casa. Aptas para vegetarianos, y con opción de salsa vegana.',
				prices: [{ label: 'Porción', price: 4500 }],
				tags: ['Vegetariano', 'Opción vegana'],
			},
			{
				id: 'papas-fritas-mechada',
				status: 'confirmed',
				name: 'Papas fritas con Mechada',
				description: 'Con una deliciosa salsa de queso y ciboulette.',
				prices: [{ label: 'Porción', price: 10000 }],
			},
			{
				id: 'papas-fritas-jardin',
				status: 'confirmed',
				name: 'Papas fritas del Jardín',
				description:
					'Incluye Champiñón, Choclo, Pimentón y Salsa Cheddar. Aptas para vegetarianos.',
				prices: [{ label: 'Porción', price: 8000 }],
				tags: ['Vegetariano'],
			},
			{
				id: 'aros-cebolla',
				status: 'confirmed',
				name: 'Aros de Cebolla',
				description: '10 unidades, con salsa a elección.',
				prices: [{ label: '10 unidades', price: 4000 }],
			},
		],
	},
	{
		id: 'bebidas-sin-alcohol',
		status: 'confirmed',
		title: 'Bebidas sin alcohol',
		items: [
			{
				id: 'bebida-lata',
				status: 'confirmed',
				name: 'Bebida en lata',
				description: 'Coca Cola, Fanta y Sprite.',
				prices: [{ label: 'Unidad', price: 2500 }],
			},
			{
				id: 'energetica',
				status: 'confirmed',
				name: 'Energética',
				description: 'Red Bull.',
				prices: [{ label: 'Unidad', price: 4000 }],
			},
			{
				id: 'agua',
				status: 'confirmed',
				name: 'Agua con gas o sin gas',
				description: 'Agua mineral con gas o sin gas.',
				prices: [{ label: 'Unidad', price: 1500 }],
			},
			{
				id: 'te-cafe',
				status: 'confirmed',
				name: 'Té/café',
				description: 'Té o café.',
				prices: [{ label: 'Unidad', price: 1500 }],
			},
		],
	},
	{
		id: 'bebestibles',
		status: 'confirmed',
		title: 'Bebestibles',
		items: [
			{
				id: 'cerveza',
				status: 'confirmed',
				name: 'Cerveza',
				description: 'Opciones publicadas: Corona, Sol o Budweiser.',
				prices: [{ label: 'Unidad', price: 2500 }],
			},
			{
				id: 'pisco-con-bebida',
				status: 'confirmed',
				name: 'Pisco Mistral 35° con bebida',
				description: 'Bebida a elección: Coca-Cola, Coca-Cola Zero, Sprite o Ginger ale.',
				prices: [{ label: 'Unidad', price: 5500 }],
			},
			{
				id: 'ron-barcelo-dorado-con-bebida',
				status: 'confirmed',
				name: 'Ron Barceló Dorado con bebida',
				description: 'Bebida a elección: Coca-Cola, Coca-Cola Zero, Sprite o Ginger ale.',
				prices: [{ label: 'Unidad', price: 5500 }],
			},
			{
				id: 'ron-barcelo-anejo-con-bebida',
				status: 'confirmed',
				name: 'Ron Barceló Añejo con bebida',
				description: 'Bebida a elección: Coca-Cola, Coca-Cola Zero, Sprite o Ginger ale.',
				prices: [{ label: 'Unidad', price: 6000 }],
			},
			{
				id: 'whisky-johnnie-walker-con-bebida',
				status: 'confirmed',
				name: 'Whisky Johnnie Walker con bebida',
				description: 'Bebida a elección: Coca-Cola, Coca-Cola Zero, Sprite o Ginger ale.',
				prices: [{ label: 'Unidad', price: 6500 }],
			},
			{
				id: 'ramazzotti-aperol',
				status: 'confirmed',
				name: 'Ramazzotti o Aperol',
				description: 'Ramazzotti o Aperol.',
				prices: [{ label: 'Unidad', price: 7500 }],
			},
			{
				id: 'mojito-sabores',
				status: 'confirmed',
				name: 'Mojito sabores',
				description: 'Frutilla o mango.',
				prices: [{ label: 'Unidad', price: 6500 }],
			},
		],
	},
];

export const faqItems: FaqItem[] = [
	{
		status: 'confirmed',
		question: '¿A qué hora parte y termina?',
		answer:
			'La apertura de puertas es a las 20:30 del sábado 18 de julio de 2026. El cierre al público está programado para las 03:00 del domingo 19 de julio.',
	},
	{
		status: 'confirmed',
		question: '¿Habrá clase antes del social?',
		answer: 'Sí. La clase de salsa cubana está programada de 21:00 a 22:00.',
	},
	{
		status: 'confirmed',
		question: '¿Dónde será?',
		answer: 'El recinto confirmado es Centro de Eventos Mariette.',
	},
	{
		status: 'confirmed',
		question: '¿Dónde consulto entradas o dudas del evento?',
		answer: 'El contacto público autorizado de LatinRengo es +56 9 7989 8502.',
	},
];

export const publicArtists = presentationOrder
	.filter((item) => item.status !== 'withheld')
	.sort((a, b) => a.order - b.order)
	.map((item) => artistCatalog.find((artist) => artist.id === item.artistId))
	.filter((artist): artist is Artist => Boolean(artist) && artist.status !== 'withheld');

export const publicPresentationSchedule = presentationSchedule
	.filter((item) => item.status !== 'withheld')
	.map((item) => ({
		...item,
		artist: item.artistId ? artistCatalog.find((artist) => artist.id === item.artistId) : undefined,
	}))
	.reduce<Array<PresentationScheduleItem & { artist?: Artist; artistNumber?: number }>>((items, item) => {
		const artistNumber =
			item.kind === 'artist' ? items.filter((existing) => existing.kind === 'artist').length + 1 : undefined;
		items.push({ ...item, artistNumber });
		return items;
	}, []);

export const publicTickets = ticketTiers.filter((item) => item.status === 'confirmed');
export const publicMenuCategories = menuCategories
	.filter((category) => category.status === 'confirmed')
	.map((category) => ({
		...category,
		items: category.items.filter((item) => item.status === 'confirmed'),
	}));
export const publicMenuTransferDetails =
	menuTransferDetails.status === 'confirmed' ? menuTransferDetails : null;
export const publicFaqItems = faqItems.filter((item) => item.status === 'confirmed');

export function formatCLP(price: number): string {
	return new Intl.NumberFormat('es-CL', {
		style: 'currency',
		currency: 'CLP',
		maximumFractionDigits: 0,
	}).format(price);
}

export function createEventJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Event',
		name: latinRengoSocialEvent.name,
		startDate: latinRengoSocialEvent.startDateTime,
		endDate: latinRengoSocialEvent.endDateTime,
		eventStatus: 'https://schema.org/EventScheduled',
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		location: {
			'@type': 'Place',
			name: latinRengoSocialEvent.venueName,
			sameAs: latinRengoSocialEvent.location.mapUrl,
		},
		offers: publicTickets.map((ticket) => ({
			'@type': 'Offer',
			name: ticket.label,
			price: ticket.price,
			priceCurrency: 'CLP',
			url: `${siteOrigin}${socialPath}#entradas`,
			description: ticket.note,
			availability:
				ticket.availability === 'sold-out' || ticket.availability === 'ended'
					? 'https://schema.org/SoldOut'
					: 'https://schema.org/InStock',
		})),
	};
}
