export interface WasteItem {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  type: string;
  quantity: string;
  location: string;
  companyName?: string;
  companyNameAr?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  createdAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  bio: string;
  bioAr: string;
  image: string;
  linkedin: string;
}

export interface TopCompany {
  id: string;
  name: string;
  nameAr: string;
  logo: string;
  wasteCount: number;
  description: string;
  descriptionAr: string;
}