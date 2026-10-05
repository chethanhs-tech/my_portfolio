interface JourneyItemProps {
  year: string;
  title: string;
  description: string;
}

export function JourneyItem({ year, title, description }: JourneyItemProps) {
  return (
    <div className="relative pl-8 md:pl-0">
      <div className="md:grid md:grid-cols-[120px_1fr] md:gap-8 items-baseline">
        <div className="text-sm font-mono text-muted mb-1 md:mb-0 hidden md:block">
          {year}
        </div>
        <div className="md:hidden absolute left-0 top-1.5 w-2 h-2 rounded-full bg-accent border-[3px] border-background box-content"></div>
        <div className="md:hidden text-xs font-mono text-muted mb-2">{year}</div>
        
        <div className="relative">
          <div className="hidden md:block absolute -left-[45px] top-1.5 w-2 h-2 rounded-full bg-accent border-[3px] border-background box-content z-10"></div>
          <h4 className="text-base font-bold text-foreground">{title}</h4>
          <p className="text-sm text-muted mt-1 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
