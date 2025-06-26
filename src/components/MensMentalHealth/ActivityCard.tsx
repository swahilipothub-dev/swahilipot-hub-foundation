import { FC } from 'react';
import { motion } from "framer-motion";

interface ActivityCardProps {
  title: string;
  image: string;
  items?: string[];
  description?: string;
}

const ActivityCard: FC<ActivityCardProps> = ({ title, image, items, description }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg activity-card"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover image-hover"
        />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-4 text-gray-800">{title}</h4>
        {items ? (
          <ul className="space-y-2">
            {items.map((item, i) => (
              <li key={i} className="flex items-center text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                {item}
              </li>
            ))}
          </ul>
        ) : description ? (
          <p className="text-gray-600">{description}</p>
        ) : null}
      </div>
    </motion.div>
  );
};

export default ActivityCard;
