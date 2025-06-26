import { FC } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface PreEventActivity {
  title: string;
  description: string;
  details: {
    icon: string;
    text: string;
  }[];
  image: string;
}

interface PreEventActivitiesProps {
  activity: PreEventActivity;
}

const PreEventActivities: FC<PreEventActivitiesProps> = ({ activity }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Card className="mb-12 hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Pre-Event Activities - Friday, June 27</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-700">{activity.title}</h3>
              <p className="text-lg text-gray-600">{activity.description}</p>
              <ul className="space-y-3 text-gray-600">
                {activity.details.map((detail, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {detail.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src={activity.image}
                alt={activity.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PreEventActivities;
