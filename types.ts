export interface MapFeature {
  id: string;
  lat: number;
  lng: number;
  type: 'Water Point' | 'School' | 'Health Center' | 'Market';
  location: string;
  state: 'Functional' | 'Needs Repair' | 'Critical';
  lastVerification: string;
  fundingPartner: string;
  waterVolume: number; // in m3
  maxCapacity: number; // in m3
}

export interface StatItem {
  value: string;
  label: string;
}