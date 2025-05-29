import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { EventsData } from "@/data/events.json";
import { parseISO, isBefore, format } from "date-fns";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AllEvents = () => {
  const [view, setView] = useState<"all" | "upcoming" | "past">("all");
  const currentDate = new Date();
  
  // Parse dates and enrich events
  const processedEvents = EventsData.map(event => ({
    ...event,
    parsedDate: parseISO(event.date),
    formattedDate: format(parseISO(event.date), "MMMM dd, yyyy")
  }));
  
  // Filter upcoming events
  const upcomingEvents = processedEvents
    .filter(event => isBefore(currentDate, event.parsedDate))
    .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());
  
  // Filter past events  
  const pastEvents = processedEvents
    .filter(event => isBefore(event.parsedDate, currentDate))
    .sort((a, b) => b.parsedDate.getTime() - a.parsedDate.getTime());

  // Select events based on current view
  const eventsToDisplay = 
    view === "all" ? [...upcomingEvents, ...pastEvents] :
    view === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <div className="container-custom py-16 md:py-24">
      <div className="text-left max-w-2xl mb-12">
        <h2 className="text-3xl font-bold mb-4">Events Calendar</h2>
        <p className="text-gray-700 mb-8">
          Explore all our events, including past and upcoming ones. Stay connected
          and be part of the Swahilipot community!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-start items-center mb-12">
        <Button
          variant={view === "all" ? "default" : "outline"}
          className="w-full md:w-auto"
          onClick={() => setView("all")}
        >
          All Events ({processedEvents.length})
        </Button>
        <Button
          variant={view === "upcoming" ? "default" : "outline"}
          className="w-full md:w-auto"
          onClick={() => setView("upcoming")}
        >
          Upcoming Events ({upcomingEvents.length})
        </Button>
        <Button
          variant={view === "past" ? "default" : "outline"}
          className="w-full md:w-auto"
          onClick={() => setView("past")}
        >
          Past Events ({pastEvents.length})
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {eventsToDisplay.length > 0 ? (
          eventsToDisplay.map((event) => (
            <Card
              key={event.id}
              className="shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.description || "Event details coming soon."}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-swahilipot-600" />
                    <span className="text-sm text-gray-600">
                      {event.formattedDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-swahilipot-600" />
                    <span className="text-sm text-gray-600">{event.time || "Time TBA"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-swahilipot-600" />
                    <span className="text-sm text-gray-600">
                      {event.location || "Location TBA"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-swahilipot-600" />
                    <span className="text-sm text-gray-600">
                      {event.capacity || "Unlimited"}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                {isBefore(currentDate, event.parsedDate) ? (
                  <Button size="sm">Register Now</Button>
                ) : (
                  <Button size="sm" variant="outline">View Details</Button>
                )}
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-3 text-center py-8">
            <p className="text-gray-500">No events to display.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
