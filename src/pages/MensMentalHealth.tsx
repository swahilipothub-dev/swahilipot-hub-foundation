import { FC } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from '@/components/MensMentalHealth/Hero';
import PreEventActivities from '@/components/MensMentalHealth/PreEventActivities';
import MainEventActivities from '@/components/MensMentalHealth/MainEventActivities';
import Schedule from '@/components/MensMentalHealth/Schedule';
import './MensMentalHealth.css';

const MensMentalHealth: FC = () => {
  const games = [
    {
      title: "Board Games",
      image: "/images/events/mens-mental-health/boardgame.jpg",
      items: ["Carom Board Game", "Ludo Board Game", "Draft Board Game"]
    },
    {
      title: "Virtual Games",
      image: "/images/events/mens-mental-health/playstation.jpg",
      items: ["PlayStation 4 & 5 Games", "Call of Duty Mobile"]
    },
    {
      title: "Physical Activities",
      image: "/images/events/mens-mental-health/yoga.jpg",
      items: ["Bouncing Casuals", "Yoga Sessions", "Meditation"]
    }
  ];

  const programs = [
    {
      title: '"Acha Niongee" Session',
      description: "An open forum for men to share their experiences, challenges, and journey in mental health.",
      image: "/images/events/mens-mental-health/Achaniongee.jpg"
    },
    {
      title: "Panel Discussions",
      description: "Expert-led discussions on various aspects of men's mental health, coping strategies, and support systems.",
      image: "/images/events/mens-mental-health/panel.jpg"
    }
  ];

  const sessions = [
    {
      time: "Morning Session (10:00 AM - 1:00 PM)",
      items: ["Registration and Welcome", "Yoga and Meditation Sessions", "Opening Ceremony"]
    },
    {
      time: "Afternoon Session (2:00 PM - 5:00 PM)",
      items: ["Panel Discussions", '"Acha Niongee" Sessions', "Games and Activities"]
    },
    {
      time: "Evening Session (5:00 PM - 8:00 PM)",
      items: ["Entertainment", "Networking", "Closing Ceremony"]
    }
  ];

  const preEventActivity = {
    title: "Fun and Games - Football Match",
    description: "Join us for an exciting football match at Fort Jesus ground",
    details: [
      { icon: "clock", text: "Time: 5:00 PM onwards" },
      { icon: "location", text: "Location: Fort Jesus Ground" },
      { icon: "activity", text: "Activity: Friendly Football Match" }
    ],
    image: "/images/events/mens-mental-health/football.JPG"
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Hero
          title="Men's Mental Health"
          date="June 28, 2025"
          location="Swahilipot Hub, Mombasa"
          ctaLink="https://bit.ly/mens-day-2025"
          backgroundImage="/images/events/mens-mental-health/mental-hero.jpg"
        />
        <PreEventActivities activity={preEventActivity} />
        <MainEventActivities games={games} programs={programs} />
        <Schedule sessions={sessions} />
      </div>
      <Footer />
    </>
  );
};

export default MensMentalHealth;
