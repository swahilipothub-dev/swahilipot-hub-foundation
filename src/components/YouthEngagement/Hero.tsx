
const HeroSection = () => {
    return (
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Youth and
                        <span className="text-gradient-blue">
                            {" "}
                            Community Engagement
                        </span>{" "}
                        Program
                    </h1>
                    <p className="text-xl text-gray-700">
                        Youth empowerment and social transformation by fostering an
                        environment where young people can express their ideas, engage
                        in decision-making processes, and actively contribute to their
                        communities.
                    </p>
                </div>
            </div>
        </section>
    )
};
export default HeroSection;