import { Heart } from "lucide-react";

export default function PageIntro({ number, eyebrow, title, accent, description, icon: Icon = Heart }) {
  return <div className="page-intro">
    <div className="eyebrow"><span className="eyebrow-icon"><Icon size={13} /></span>{number}<i />{eyebrow}</div>
    <h1>{title} <em>{accent}</em></h1>
    {description && <p>{description}</p>}
  </div>;
}
