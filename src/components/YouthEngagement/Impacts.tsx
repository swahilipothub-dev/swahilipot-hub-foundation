import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Lightbulb, Link } from "lucide-react";

const Impacts = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        Impact and <span className="text-gradient-blue">Future Directions</span>
                    </h2>
                    <p className="text-gray-700">
                        The Swahilipot Hub Youth and Community Engagement Department continues to play a pivotal role in youth development by:
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader className="pb-2">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-swahilipot-100">
                                <Handshake className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                            </div>
                            <CardTitle>Youth Participation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">Enhancing youth participation in decision-making at different levels.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-swahilipot-100">
                                <Lightbulb className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                            </div>
                            <CardTitle>Opportunities</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">Creating opportunities for skill development, entrepreneurship, and leadership.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-swahilipot-100">
                                <Link className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                            </div>
                            <CardTitle>Youth Networks</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">Strengthening youth networks for better advocacy and impact-driven initiatives.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
};
export default Impacts;