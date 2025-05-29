import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import eventsData from "@/data/events.json";
import { format, parseISO, isBefore } from "date-fns";

const UpcomingEvents = () => {
    const currentDate = new Date();
    const UpcomingEvents = eventsData
      .filter(event => isBefore(currentDate, parseISO(event.date)))
      .map(event => ({
        id: event.id,
        title: event.name,
        date: format(parseISO(event.date), "MMMM dd, yyyy"),
        time: "Time information not available",
        location: event.location,
        description: event.description,
        capacity: `Organized by: ${event.organizer}`,
      }));

    return (
       <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-gray-700">
                Browse through our previous events and see what the Swahilipot community has accomplished.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {UpcomingEvents.length > 0 ? UpcomingEvents.map(event => (
                <Card key={event.id} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-swahilipot-600" />
                        <span className="text-sm text-gray-600">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-swahilipot-600" />
                        <span className="text-sm text-gray-600">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-swahilipot-600" />
                        <span className="text-sm text-gray-600">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-swahilipot-600" />
                        <span className="text-sm text-gray-600">{event.capacity}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-swahilipot-600 hover:bg-swahilipot-700">View Details</Button>
                  </CardFooter>
                </Card>
              )) : (
                <div className="col-span-3 text-center py-8">
                  <p className="text-gray-500">No Upcoming events to display.</p>
                </div>
              )}
            </div>
            
            {UpcomingEvents.length > 0 && (
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg">View All Upcoming Events</Button>
              </div>
            )}
          </div>
        </section>
    );
};

// Filter all upcoming events and export the component
export default UpcomingEvents;