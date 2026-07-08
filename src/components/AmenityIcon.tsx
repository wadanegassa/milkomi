import {
  ChefHat,
  Cloud,
  Coffee,
  Flower2,
  Headphones,
  ParkingCircle,
  Sparkles,
  Users,
  Wifi,
  Zap,
  BusFront,
  WashingMachine,
  UtensilsCrossed,
} from "lucide-react";
import type {ComponentType} from "react";

const iconMap: Record<string, ComponentType<{className?: string}>> = {
  wifi: Wifi,
  parking: ParkingCircle,
  restaurant: ChefHat,
  spa: Flower2,
  generator: Zap,
  laundry: WashingMachine,
  shuttle: BusFront,
  conference: Users,
  desk: Headphones,

  // Room key amenities
  lounge: Users,
  roomService: Coffee,
  breakfast: UtensilsCrossed,
  family: Sparkles,
};

export default function AmenityIcon({
  iconKey,
  className,
}: {
  iconKey: string;
  className?: string;
}) {
  const Icon = iconMap[iconKey] ?? Cloud;
  return <Icon className={className ?? "h-5 w-5"} />;
}

