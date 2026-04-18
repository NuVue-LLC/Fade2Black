export interface Vehicle {
  id: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  price: number;
  mileage: number;
  photos?: string[];
  images?: string[];
  photo_url?: string;
  image_url?: string;
  status?: string;
}

export const API_URL =
  "https://lot-os.vercel.app/api/inventory/public?dealer_id=9d84ce04-ef8a-448d-893b-3149578a99c4";

export const FB_MARKETPLACE =
  "https://www.facebook.com/marketplace/profile/100094782047411/?ref=permalink&mibextid=6ojiHh";

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}

export function formatMileage(mileage: number): string {
  return `${mileage.toLocaleString("en-US")} miles`;
}

export function getPhoto(vehicle: Vehicle): string | null {
  if (vehicle.photos && vehicle.photos.length > 0) return vehicle.photos[0];
  if (vehicle.images && vehicle.images.length > 0) return vehicle.images[0];
  if (vehicle.photo_url) return vehicle.photo_url;
  if (vehicle.image_url) return vehicle.image_url;
  return null;
}
