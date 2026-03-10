// app/types/services.ts
export type ServiceItem = {
  id: string;
  title: string;
  short: string;
  bullets: string[];
  href: string;
  icon: 'waves' | 'droplets' | 'map' | 'ruler' | 'shield' | 'building' | 'wind' | 'activity' | 'droplet' | 'layers';
};