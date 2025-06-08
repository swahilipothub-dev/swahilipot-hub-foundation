import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const KeyPrograms = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        Key Programs and <span className="text-gradient-blue">Initiatives</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Youth Advisory Group (YAG)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            The Youth Advisory Group (YAG) represents young people in Mombasa, advising Swahilipot Hub and ensuring youth voices are included in decisions. Members serve for up to two years and come from all sub-counties, including representatives from Kwale, Kilifi, and a Person with Disability.
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Youth Hub Network (YHN)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            The Youth Hub Network (YHN) supports early-stage social enterprises by offering grants and mentorship to young entrepreneurs, helping them grow their impact. Applications open every year for new innovators to access funding and support.
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Changemakers Youth Innovation Fund</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Enhance youth advocacy efforts by educating participants on the budget-making process, public participation, and policy formulation. It equips young people with the necessary tools to influence governance structures, demand accountability, and advocate for policies that benefit the youth and the broader community.
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Budget Cycle and Policy Training</CardTitle>
                        </CardHeader>
                        <CardContent>
                            This fund helps young people learn about budgets, public participation, and policy-making, giving them the skills to influence decisions and advocate for youth-friendly policies.
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>The Girl Boss Program</CardTitle>
                        </CardHeader>
                        <CardContent>
                            This program empowers young women aged 18-35 by building their entrepreneurial and leadership skills through training and mentorship.
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
};
export default KeyPrograms;