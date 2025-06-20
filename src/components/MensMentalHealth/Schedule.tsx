import { FC } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface SessionItem {
  time: string;
  items: string[];
}

interface ScheduleProps {
  sessions: SessionItem[];
}

const Schedule: FC<ScheduleProps> = ({ sessions }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Card className="mb-8">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Event Schedule</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sessions.map((session, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-md schedule-card"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{session.time}</h3>
                <ul className="space-y-3">
                  {session.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Schedule;
