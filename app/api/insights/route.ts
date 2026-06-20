import { NextResponse } from "next/server";

type ServiceItem = {
  service: string;
  total: number;
};

type RegionItem = {
  region: string;
  total: number;
};

const baseServices: ServiceItem[] = [
  { service: "Security Services", total: 1328 },
  { service: "Housekeeping & Soft Services", total: 1124 },
  { service: "Technical Maintenance", total: 874 },
  { service: "Industrial Manpower Supply", total: 721 },
  { service: "Integrated Facility Management", total: 608 },
  { service: "Fire & Safety Manpower", total: 542 },
];

const baseRegions: RegionItem[] = [
  { region: "Pan India", total: 2860 },
  { region: "Chennai", total: 1486 },
  { region: "Tamil Nadu", total: 1298 },
  { region: "Bangalore", total: 1142 },
  { region: "Andhra Pradesh", total: 972 },
];

function getGrowthOffset(seed: number, maxStep: number) {
  const minute = new Date().getMinutes();
  return (minute + seed) % maxStep;
}

export async function GET() {
  const services = baseServices.map((item, index) => {
    const offset = getGrowthOffset(index * 2 + 1, 22);
    return {
      ...item,
      total: item.total + offset,
    };
  });

  const regions = baseRegions.map((item, index) => {
    const offset = getGrowthOffset(index * 3 + 2, 38);
    return {
      ...item,
      total: item.total + offset,
    };
  });

  const totalInterest = services.reduce((sum, item) => sum + item.total, 0);
  const totalShareBase = services.reduce((sum, item) => sum + item.total, 0);

  const serviceRanking = services
    .sort((a, b) => b.total - a.total)
    .map((item, index) => ({
      rank: index + 1,
      service: item.service,
      total: item.total,
      share: ((item.total / totalShareBase) * 100).toFixed(1),
    }));

  const growthMomentum = 24.7 + ((new Date().getMinutes() % 6) * 0.2);

  return NextResponse.json({
    metrics: {
      totalInterest,
      activeRegions: 5,
      growthMomentum: Number(growthMomentum.toFixed(1)),
      serviceCategories: 6,
    },
    serviceRanking,
    regions,
    totalLeadsSaved: totalInterest,
  });
}
