import { useEffect, useState } from "react";

const events = [
  { name: "Pwani Innovation Week", date: new Date("2026-10-26T00:08:00+03:00") },
  { name: "Pwani Gat Talent", date: new Date("2026-10-31T00:15:00+03:00") },
];

const getRemaining = (target: Date, now: number) => {
  const diff = target.getTime() - now;
  if (diff <= 0) return null;
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
};

const AnnouncementBar = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const upcoming = events
    .map((e) => ({ ...e, left: getRemaining(e.date, now) }))
    .filter((e) => e.left);

  if (upcoming.length === 0) return null;

  return (
    <div className="bg-[rgb(232,123,53)] text-slate-900 text-sm" role="region" aria-label="Announcements">
      <div className="container-custom py-2 flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-1">
        {upcoming.map(({ name, left }) => (
          <p key={name} className="flex flex-wrap items-center justify-center gap-2">
            <span className="font-semibold">{name} starts in</span>
            <span className="font-mono tabular-nums font-bold">
              {left!.d}d : {String(left!.h).padStart(2, "0")}h : {String(left!.m).padStart(2, "0")}m : {String(left!.s).padStart(2, "0")}s
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
