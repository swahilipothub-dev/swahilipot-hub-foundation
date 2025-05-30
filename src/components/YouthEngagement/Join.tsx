import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Join = () => {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        Join Our <span className="text-gradient-blue">Program</span>
                    </h2>
                    <p className="text-gray-700">
                        Ready to be part of the Youth and Community Engagement Program? There are multiple ways to get involved and make an impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="border-2 border-swahilipot-100 hover:border-swahilipot-300 transition-all duration-300">
                        <CardHeader>
                            <CardTitle>Join an Initiative</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">Participate in our SCEP, YDX, or any of our specific initiatives designed to develop your skills and expand your network.</p>
                            <Link to="/programs">
                                <Button className="w-full">Browse Initiatives</Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-swahilipot-100 hover:border-swahilipot-300 transition-all duration-300">
                        <CardHeader>
                            <CardTitle>Become a Youth Advocate</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">Represent your community, school or university by becoming an advocate for Swahilipot Hub's youth initiatives.</p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe8xVQEK2VP89CYE4166i6Vr6iriaA1x1D5ecVBCVY5MuqP3g/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                                <Button className="w-full">Apply Now</Button>
                            </a>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-swahilipot-100 hover:border-swahilipot-300 transition-all duration-300">
                        <CardHeader>
                            <CardTitle>Partner With Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">Organizations and individuals can collaborate with us through partnerships, sponsorships, or donations.</p>
                            <Link to="/contact">
                                <Button className="w-full">Contact Us</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
};
export default Join;