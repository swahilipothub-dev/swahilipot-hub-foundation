import { useState } from "react";
import { Button } from "@/components/ui/button";
import PastEvents from "@/components/Events/PastEvents";
import UpcomingEvents from "@/components/Events/UpcomingEvents";
import eventsData from "@/data/eventsData"; // adjust path as needed
import { parseISO, isBefore, format, compareAsc, compareDesc } from "date-fns";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const AllEvents = () => {
  const [view, setView] = useState<"all" | "upcoming" | "past">("all");
  const currentDate = new Date();

  // Parse and sort events
  const allEvents = eventsData.map((event) => ({
    ...event,
    parsedDate: parseISO(event.date),
  }));

  // Past events first (descending), then upcoming (ascending)
  const pastEvents = allEvents
    .filter((event) => isBefore(event.parsedDate, currentDate))
    .sort((a, b) => compareDesc(a.parsedDate, b.parsedDate));
  const upcomingEvents = allEvents
    .filter((event) => isBefore(currentDate, event.parsedDate))
    .sort((a, b) => compareAsc(a.parsedDate, b.parsedDate));

  const combinedEvents = [...pastEvents, ...upcomingEvents];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">All Events</h1>
      <p className="text-gray-600 mb-8 text-center">
        Explore all our events, including past and upcoming ones. Stay connected
        and be part of the community!
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
        <Button
          variant={view === "all" ? "default" : "outline"}
          className="w-full md:w-auto"
          size="lg"
          onClick={() => setView("all")}
        >
          All Events
        </Button>
        <Button
          variant={view === "upcoming" ? "default" : "outline"}
          className="w-full md:w-auto"
          size="lg"
          onClick={() => setView("upcoming")}
        >
          Upcoming Events
        </Button>
        <Button
          variant={view === "past" ? "default" : "outline"}
          className="w-full md:w-auto"
          size="lg"
          onClick={() => setView("past")}
        >
          Past Events
        </Button>
      </div>
      {view === "all" && (
        <div className="grid md:grid-cols-3 gap-8">
          {combinedEvents.length > 0 ? (
            combinedEvents.map((event) => (
              <Card
                key={event.id}
                className="shadow-md hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle>{event.name}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-swahilipot-600" />
                      <span>{format(event.parsedDate, "MMMM dd, yyyy")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-swahilipot-600" />
                      <span>Time information not available</span>
                    </div>
                    <div>
                      <span>Location: {event.location}</span>
                    </div>
                    <div>
                      <span>Organized by: {event.organizer}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter />
              </Card>
            ))
          ) : (
            <div className="col-span-3 text-center py-8">
              <p className="text-gray-500">No events to display.</p>
            </div>
          )}
        </div>
      )}
      {view === "upcoming" && <UpcomingEvents />}
      {view === "past" && <PastEvents />}
    </div>
  );
};

export default AllEvents;
