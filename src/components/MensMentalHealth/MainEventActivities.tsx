import { FC } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ActivityCard from './ActivityCard';

interface GameItem {
  title: string;
  image: string;
  items: string[];
}

interface ProgramItem {
  title: string;
  description: string;
  image: string;
}

interface MainEventActivitiesProps {
  games: GameItem[];
  programs: ProgramItem[];
}

const MainEventActivities: FC<MainEventActivitiesProps> = ({ games, programs }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Card className="mb-12">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Main Event Activities - Saturday, June 28</h2>
          
          {/* Fun & Games Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-700">Fun & Games</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {games.map((game, index) => (
                <ActivityCard
                  key={index}
                  title={game.title}
                  image={game.image}
                  items={game.items}
                />
              ))}
            </div>
          </div>

          {/* Panel Discussions & Entertainment */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-700">Featured Programs</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <ActivityCard
                  key={index}
                  title={program.title}
                  image={program.image}
                  description={program.description}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MainEventActivities;
