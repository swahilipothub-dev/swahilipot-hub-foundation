import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import eventsData from "@/data/events.json";
import { format, parseISO, isBefore } from "date-fns";
import { Link } from "react-router-dom";

const PastEvents = () => {
    const currentDate = new Date();
    
    // Filter past events
    const pastEvents = eventsData.EventsData
        .filter(event => {
          const parsedDate = parseISO(event.date);
          return isBefore(parsedDate, currentDate);
        })
        .sort((a, b) => {
          const dateA = parseISO(a.date);
          const dateB = parseISO(b.date);
          return dateB.getTime() - dateA.getTime(); // Sort by date descending (most recent first)
        })
        .map(event => ({
          ...event,
          formattedDate: format(parseISO(event.date), "MMMM dd, yyyy")
        }));

    return (
       <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-left max-w-2xl mb-12">
              <h2 className="text-3xl font-bold mb-4">Past Events</h2>
              <p className="text-gray-700">
                Browse through our previous events and see what the Swahilipot community has accomplished.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pastEvents.length > 0 ? pastEvents.map(event => (
                <Card key={event.id} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.description || "No description available."}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-swahilipot-600" />
                        <span className="text-sm text-gray-600">{event.formattedDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-swahilipot-600" />
                        <span className="text-sm text-gray-600">{event.time || "Time not specified"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-swahilipot-600" />
                        <span className="text-sm text-gray-600">{event.location || "Location not specified"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-swahilipot-600" />
                        <span className="text-sm text-gray-600">{event.capacity || "Unlimited"}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button size="sm" variant="outline">View Details</Button>
                  </CardFooter>
                </Card>
              )) : (
                <div className="col-span-3 text-center py-8">
                  <p className="text-gray-500">No past events to display.</p>
                </div>
              )}
            </div>
            
            {pastEvents.length > 0 && (
              <div className="mt-12 text-center">
                <Link to="/events">
                  <Button variant="outline" size="lg">View All Past Events</Button>
                </Link>
              </div>
            )}
          </div>
        </section>
    );
};

export default PastEvents;