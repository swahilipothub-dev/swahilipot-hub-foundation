
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Gift, Users, School, Paintbrush, Code } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const donationOptions = [
  { value: "25", label: "$25" },
  { value: "50", label: "$50" },
  { value: "100", label: "$100" },
  { value: "250", label: "$250" },
  { value: "custom", label: "Custom Amount" }
];

const donationProjects = [
  {
    id: 1,
    title: "Tech Innovation",
    description: "Support youth to develop technological solutions to local challenges.",
    icon: Code,
    color: "text-blue-600",
    target: 15000,
    raised: 9750
  },
  {
    id: 2,
    title: "Arts & Culture",
    description: "Help preserve and promote East African arts and cultural expression.",
    icon: Paintbrush,
    color: "text-purple-600",
    target: 10000,
    raised: 6200
  },
  {
    id: 3,
    title: "Education Fund",
    description: "Provide scholarships and educational resources to disadvantaged youth.",
    icon: School,
    color: "text-green-600",
    target: 20000,
    raised: 12800
  },
  {
    id: 4,
    title: "Community Outreach",
    description: "Support our efforts to reach more communities across East Africa.",
    icon: Users,
    color: "text-orange-600",
    target: 8000,
    raised: 3500
  }
];

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { toast } = useToast();

  const handleDonationOptionChange = (value: string) => {
    setDonationAmount(value);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
  };

  const handleProjectSelect = (id: number) => {
    setSelectedProject(id);
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = donationAmount === "custom" ? customAmount : donationAmount;
    const project = selectedProject 
      ? donationProjects.find(p => p.id === selectedProject)?.title 
      : "General Fund";
    
    toast({
      title: "Thank you for your donation!",
      description: `Your generous contribution of $${amount} to ${project} will help empower youth across East Africa.`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="py-12 bg-gradient-to-b from-swahilipot-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Heart className="h-12 w-12 text-swahilipot-600 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Mission</h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Your contribution helps us empower more youth through technology, arts, and entrepreneurship across East Africa.
              </p>
            </div>
          </div>
        </div>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Choose a Donation Amount</h2>
                <form onSubmit={handleDonate} className="space-y-6">
                  <RadioGroup 
                    defaultValue="50" 
                    value={donationAmount}
                    onValueChange={handleDonationOptionChange}
                    className="grid grid-cols-3 gap-4"
                  >
                    {donationOptions.map((option) => (
                      option.value !== "custom" ? (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem id={option.value} value={option.value} />
                          <Label htmlFor={option.value} className="text-lg">{option.label}</Label>
                        </div>
                      ) : (
                        <div key={option.value} className="flex items-center space-x-2 col-span-3">
                          <RadioGroupItem id={option.value} value={option.value} />
                          <Label htmlFor={option.value} className="text-lg mr-4">Custom Amount:</Label>
                          <Input
                            type="number"
                            placeholder="Enter amount"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            className="w-32"
                            disabled={donationAmount !== "custom"}
                          />
                        </div>
                      )
                    ))}
                  </RadioGroup>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Select a Project (Optional)</h2>
                    <p className="text-gray-600 mb-4">
                      You can choose to direct your donation to a specific project, or leave it unselected to support our general fund.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      {donationProjects.map((project) => (
                        <Card 
                          key={project.id} 
                          className={`cursor-pointer transition-all ${
                            selectedProject === project.id 
                              ? 'border-swahilipot-500 shadow-md' 
                              : 'hover:border-swahilipot-300'
                          }`}
                          onClick={() => handleProjectSelect(project.id)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className={`p-3 rounded-full ${project.color.replace('text-', 'bg-').replace('600', '100')}`}>
                                <project.icon className={`h-6 w-6 ${project.color}`} />
                              </div>
                              <div>
                                <h3 className="font-semibold text-lg">{project.title}</h3>
                                <p className="text-gray-600 text-sm mt-1">{project.description}</p>
                                <div className="mt-3">
                                  <div className="h-2 bg-gray-200 rounded-full w-full">
                                    <div 
                                      className="h-2 bg-swahilipot-500 rounded-full" 
                                      style={{ width: `${(project.raised / project.target) * 100}%` }}
                                    ></div>
                                  </div>
                                  <div className="flex justify-between text-sm mt-1">
                                    <span>${project.raised.toLocaleString()} raised</span>
                                    <span>Goal: ${project.target.toLocaleString()}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full py-6 text-lg">
                    <Gift className="h-5 w-5 mr-2" />
                    Donate Now
                  </Button>
                </form>
              </div>
              
              <div className="bg-swahilipot-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Why Your Support Matters</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-swahilipot-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-swahilipot-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Empowering Communities</h3>
                      <p className="text-gray-600">
                        Your donation helps us reach more underserved communities across East Africa,
                        creating opportunities for youth who need them most.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-swahilipot-100 p-3 rounded-full">
                      <School className="h-6 w-6 text-swahilipot-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Building Future Leaders</h3>
                      <p className="text-gray-600">
                        When you support Swahilipot Hub, you're investing in the next generation of
                        innovators, artists, and entrepreneurs who will shape Africa's future.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-swahilipot-100 p-3 rounded-full">
                      <Code className="h-6 w-6 text-swahilipot-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Fostering Innovation</h3>
                      <p className="text-gray-600">
                        Your generosity enables us to provide the tools, training, and mentorship 
                        needed for young people to develop solutions to local and global challenges.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white rounded-lg border">
                  <h3 className="font-semibold text-lg mb-3">Other Ways to Support</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="bg-swahilipot-100 p-1 rounded-full mr-3">
                        <div className="h-2 w-2 bg-swahilipot-600 rounded-full"></div>
                      </div>
                      Volunteer your time and expertise
                    </li>
                    <li className="flex items-center">
                      <div className="bg-swahilipot-100 p-1 rounded-full mr-3">
                        <div className="h-2 w-2 bg-swahilipot-600 rounded-full"></div>
                      </div>
                      Partner with us as a corporate sponsor
                    </li>
                    <li className="flex items-center">
                      <div className="bg-swahilipot-100 p-1 rounded-full mr-3">
                        <div className="h-2 w-2 bg-swahilipot-600 rounded-full"></div>
                      </div>
                      Provide in-kind donations of equipment or services
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-600">
                    Contact us at <a href="mailto:partnerships@swahilipothub.org" className="text-swahilipot-600 hover:underline">partnerships@swahilipothub.org</a> to learn more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
