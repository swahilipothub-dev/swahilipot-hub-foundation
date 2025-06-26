import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const upcomingEvents = [
	{
		id: 1,
		title: "Tech Entrepreneurship Summit",
		description:
			"A gathering of tech entrepreneurs, investors, and industry leaders to discuss innovation and growth opportunities in East Africa.",
		date: "May 15, 2025",
		time: "9:00 AM - 5:00 PM",
		location: "Swahilipot Hub, Mombasa",
		capacity: "250 attendees",
	},
	{
		id: 2,
		title: "Digital Arts Exhibition",
		description:
			"Showcasing digital artwork, animations, and creative projects from young artists across the coastal region.",
		date: "June 8, 2025",
		time: "10:00 AM - 7:00 PM",
		location: "Swahilipot Gallery, Mombasa",
		capacity: "200 attendees",
	},
	{
		id: 3,
		title: "Youth Leadership Workshop",
		description:
			"Interactive workshop focused on developing leadership skills, public speaking, and community organizing for youth leaders.",
		date: "July 22, 2025",
		time: "2:00 PM - 6:00 PM",
		location: "Swahilipot Hub, Mombasa",
		capacity: "50 attendees",
	},
	{
		id: 4,
		title: "Men's Conference",
		description:
			"A full-day event focused on men's wellness, empowerment, and community. Theme: 'Men Matter Too'. Open to all (18+).",
		date: "June 28, 2025",
		time: "10:00 AM – 8:00 PM",
		location: "Swahilipot Hub Foundation",
		capacity: "Open to All (18+)",
		link: "/events/mens-conference",
	},
];

const Events = () => {
	return (
		<>
			<Navbar />
			<main>
				<section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gray-50">
					<div className="container-custom">
						<div className="text-center max-w-3xl mx-auto">
							<h1 className="text-4xl md:text-5xl font-bold mb-6">
								<span className="text-gradient-blue">Events</span>
							</h1>
							<p className="text-xl text-gray-700">
								Connect, learn, and grow through our diverse range of events
								designed to inspire and empower the community.
							</p>
						</div>
					</div>
				</section>

				<section className="py-16 md:py-24">
					<div className="container-custom">
						<div className="text-center max-w-2xl mx-auto mb-12">
							<h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
							<p className="text-gray-700">
								Join us for these exciting upcoming events and be part of the
								Swahilipot community experience.
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							{upcomingEvents.map((event) => (
								<Card
									key={event.id}
									className="shadow-md hover:shadow-lg transition-shadow"
								>
									<CardHeader>
										<CardTitle>{event.title}</CardTitle>
										<CardDescription>{event.description}</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="space-y-3">
											<div className="flex items-center gap-2">
												<Calendar className="h-4 w-4 text-swahilipot-600" />
												<span className="text-sm text-gray-600">
													{event.date}
												</span>
											</div>
											<div className="flex items-center gap-2">
												<Clock className="h-4 w-4 text-swahilipot-600" />
												<span className="text-sm text-gray-600">
													{event.time}
												</span>
											</div>
											<div className="flex items-center gap-2">
												<MapPin className="h-4 w-4 text-swahilipot-600" />
												<span className="text-sm text-gray-600">
													{event.location}
												</span>
											</div>
											<div className="flex items-center gap-2">
												<Users className="h-4 w-4 text-swahilipot-600" />
												<span className="text-sm text-gray-600">
													{event.capacity}
												</span>
											</div>
										</div>
									</CardContent>
									<CardFooter>
										{event.link ? (
											<a href={event.link} className="w-full">
												<Button className="w-full bg-swahilipot-600 hover:bg-swahilipot-700">
													View Details
												</Button>
											</a>
										) : (
											<Button
												className="w-full bg-swahilipot-600 hover:bg-swahilipot-700"
												disabled
											>
												View Details
											</Button>
										)}
									</CardFooter>
								</Card>
							))}
						</div>

						<div className="mt-12 text-center">
							<Button variant="outline" size="lg">
								View All Events
							</Button>
						</div>
					</div>
				</section>

				<section className="py-16 md:py-24 bg-gray-50">
					<div className="container-custom">
						<div className="grid md:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-3xl font-bold mb-6">
									Host Your Event with Us
								</h2>
								<p className="text-gray-700 mb-6">
									Swahilipot Hub offers modern, well-equipped spaces for
									conferences, workshops, meetups, and cultural events. Our
									versatile venues can accommodate both small gatherings and
									large conferences.
								</p>
								<div className="space-y-4 mb-6">
									<div className="flex items-start gap-3">
										<div className="h-6 w-6 rounded-full bg-swahilipot-600 text-white flex items-center justify-center flex-shrink-0">
											<span className="text-sm font-medium">1</span>
										</div>
										<div>
											<h3 className="font-semibold">Flexible Spaces</h3>
											<p className="text-gray-600">
												Conference rooms, workshop areas, and open-plan event
												spaces
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<div className="h-6 w-6 rounded-full bg-swahilipot-600 text-white flex items-center justify-center flex-shrink-0">
											<span className="text-sm font-medium">2</span>
										</div>
										<div>
											<h3 className="font-semibold">Technical Support</h3>
											<p className="text-gray-600">
												High-speed internet, AV equipment, and technical
												assistance
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<div className="h-6 w-6 rounded-full bg-swahilipot-600 text-white flex items-center justify-center flex-shrink-0">
											<span className="text-sm font-medium">3</span>
										</div>
										<div>
											<h3 className="font-semibold">Catering Options</h3>
											<p className="text-gray-600">
												Partnerships with local food vendors for diverse
												catering options
											</p>
										</div>
									</div>
								</div>
								<Button
									size="lg"
									className="bg-swahilipot-600 hover:bg-swahilipot-700"
								>
									Inquire About Venue Booking
								</Button>
							</div>
							<div className="relative">
								<div className="aspect-video bg-white rounded-lg overflow-hidden shadow-md">
									<img
										src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80"
										alt="Event space at Swahilipot Hub"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="absolute -bottom-6 -right-6 w-48 h-48 bg-swahilipot-50 rounded-lg -z-10"></div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Events;
