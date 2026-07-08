export type MenuCategory =
  | "Nasi"
  | "Sate"
  | "Gorengan"
  | "Minuman"
  | "Paket Hemat";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  imageTone: "amber" | "cream" | "wood" | "orange" | "leaf";
}
