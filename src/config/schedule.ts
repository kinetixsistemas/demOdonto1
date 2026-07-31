export interface ScheduleDay {
	day: string;
	shortDay: string;
	dayOfWeek: string;
	open: string;
	close: string;
	isOpen: boolean;
}

export const schedule: ScheduleDay[] = [
	{ day: "Lunes", shortDay: "Lun", dayOfWeek: "Monday", open: "08:00", close: "19:00", isOpen: true },
	{ day: "Martes", shortDay: "Mar", dayOfWeek: "Tuesday", open: "08:00", close: "19:00", isOpen: true },
	{ day: "Miércoles", shortDay: "Mié", dayOfWeek: "Wednesday", open: "08:00", close: "19:00", isOpen: true },
	{ day: "Jueves", shortDay: "Jue", dayOfWeek: "Thursday", open: "08:00", close: "19:00", isOpen: true },
	{ day: "Viernes", shortDay: "Vie", dayOfWeek: "Friday", open: "08:00", close: "19:00", isOpen: true },
	{ day: "Sábado", shortDay: "Sáb", dayOfWeek: "Saturday", open: "09:00", close: "14:00", isOpen: true },
	{ day: "Domingo", shortDay: "Dom", dayOfWeek: "Sunday", open: "00:00", close: "00:00", isOpen: false },
];

export const timezone = "America/Bogota";

export const availability = {
	responseTime: "Respondemos en menos de 24 horas",
	bookingNote: "Horarios sujetos a disponibilidad",
	emergencyNote: "Emergencias dentales con atención prioritaria",
};
