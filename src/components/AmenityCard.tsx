import AmenityIcon from "@/components/AmenityIcon";
import type {Amenity} from "@/data/amenities";

export default function AmenityCard({amenity}: {amenity: Amenity}) {
  return (
    <div className="rounded-2xl border border-foreground/10 bg-surface/20 p-5 hover:border-accent hover:bg-surface/25 transition-all">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-background/35 border border-foreground/10">
          <AmenityIcon iconKey={amenity.iconKey} className="h-6 w-6 text-accent" />
        </span>
        <h3 className="font-heading text-lg text-foreground">{amenity.title}</h3>
      </div>
      <p className="mt-3 text-sm text-foreground/85 leading-relaxed">
        {amenity.description}
      </p>
    </div>
  );
}

