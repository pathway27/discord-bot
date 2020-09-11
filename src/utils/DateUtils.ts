class DateUtils {
	static getDaysBetweenDates(date1: Date, date2: Date): number {
		const diff = date1.getTime() - date2.getTime();

		return Math.floor(diff / (1000 * 3600 * 24));
	}

	static formatDaysAgo(days: number): string {
		if (days < 0) throw new Error("Number has to be positive");
		if (days === 0) return "today";
		if (days === 1) return "yesterday";
		return `${days} days ago`;
	}

	static format(date: Date) {
		const time = `${date.getHours()}:${date.getMinutes()}`;

		const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		const month = months[date.getMonth()];

		return `${time} on ${date.getDate()} ${month} ${date.getFullYear()}`;
	}
}

export default DateUtils;