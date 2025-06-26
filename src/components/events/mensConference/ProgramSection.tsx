import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProgramSectionProps {
  image: string;
  alt: string;
  title: string;
  items: string[];
  note: string;
  reverse?: boolean;
}

const ProgramSection = ({ image, alt, title, items, note, reverse }: ProgramSectionProps) => (
  <div className={`container-custom grid md:grid-cols-2 gap-12 items-center${reverse ? ' mt-16 flex-row-reverse' : ' mt-16'}`}>
    <div className={`relative${reverse ? ' order-2 md:order-1' : ''}`}>
      <div className="aspect-video bg-swahilipot-100 rounded-lg overflow-hidden shadow-lg">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className={`absolute ${reverse ? '-top-6 -right-6' : '-bottom-6 -left-6'} w-32 h-32 bg-swahilipot-50 rounded-lg -z-10`}></div>
    </div>
    <Card className="border-0 shadow-md bg-white/90">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-swahilipot-600">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 text-gray-700 mb-2 space-y-1">
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <p className="text-sm text-gray-500 mt-2">{note}</p>
      </CardContent>
    </Card>
  </div>
);

export default ProgramSection;
