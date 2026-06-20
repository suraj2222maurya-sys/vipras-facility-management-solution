"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./InsightsGraphSection.module.css";

type ServiceRow = {
  rank: number;
  service: string;
  total: number;
  share: string;
};

type RegionRow = {
  region: string;
  total: number;
};

type InsightsData = {
  metrics: {
    totalInterest: number;
    activeRegions: number;
    growthMomentum: number;
    serviceCategories: number;
  };
  serviceRanking: ServiceRow[];
  regions: RegionRow[];
  totalLeadsSaved: number;
};

const fallbackData: InsightsData = {
  metrics: {
    totalInterest: 4463,
    activeRegions: 5,
    growthMomentum: 24.7,
    serviceCategories: 6,
  },
  serviceRanking: [
    { rank: 1, service: "Security Services", total: 1128, share: "25.3" },
    { rank: 2, service: "Housekeeping & Soft Services", total: 892, share: "20.0" },
    { rank: 3, service: "Technical Maintenance", total: 784, share: "17.6" },
    { rank: 4, service: "Industrial Manpower Supply", total: 651, share: "14.6" },
    { rank: 5, service: "Integrated Facility Management", total: 536, share: "12.0" },
    { rank: 6, service: "Fire & Safety Manpower", total: 472, share: "10.5" },
  ],
  regions: [
    { region: "Chennai", total: 1286 },
    { region: "Tamil Nadu", total: 536 },
    { region: "Bangalore", total: 342 },
    { region: "Andhra Pradesh", total: 218 },
    { region: "Pan India", total: 161 },
  ],
  totalLeadsSaved: 0,
};

const trendData = [
  { month: "Jan", levelClass: "trendLevel44" },
  { month: "Feb", levelClass: "trendLevel56" },
  { month: "Mar", levelClass: "trendLevel66" },
  { month: "Apr", levelClass: "trendLevel76" },
  { month: "May", levelClass: "trendLevel88" },
  { month: "Jun", levelClass: "trendLevel100" },
];

function cleanServiceName(service: string) {
  return service
    .replace("Housekeeping & Soft Services", "Housekeeping")
    .replace("Security Services", "Security")
    .replace("Technical Maintenance", "Maintenance")
    .replace("Industrial Manpower Supply", "Industrial Manpower")
    .replace("Integrated Facility Management", "Integrated FM")
    .replace("Fire & Safety Manpower", "Fire & Safety");
}

function getLevelClass(value: number, maxValue: number, prefix: "barLevel" | "regionLevel") {
  const percent = Math.max(24, Math.round((value / Math.max(maxValue, 1)) * 100));

  if (percent >= 95) return styles[`${prefix}100`];
  if (percent >= 90) return styles[`${prefix}90`];
  if (percent >= 80) return styles[`${prefix}80`];
  if (percent >= 70) return styles[`${prefix}70`];
  if (percent >= 60) return styles[`${prefix}60`];
  if (percent >= 50) return styles[`${prefix}50`];
  if (percent >= 40) return styles[`${prefix}40`];
  if (percent >= 30) return styles[`${prefix}30`];
  return styles[`${prefix}24`];
}

function getShareLevelClass(share: string) {
  const percent = Number(share);

  if (percent >= 30) return styles.shareLevel30;
  if (percent >= 25) return styles.shareLevel25;
  if (percent >= 20) return styles.shareLevel20;
  if (percent >= 15) return styles.shareLevel15;
  if (percent >= 10) return styles.shareLevel10;
  return styles.shareLevel5;
}

function useCountUp(target: number, animationKey: number, decimals = 0, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (animationKey === 0) {
      setValue(target);
      return;
    }

    setValue(0);

    let frameId = 0;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      setValue(current);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [target, animationKey, duration]);

  return Number(value.toFixed(decimals));
}

export default function InsightsGraphSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [data, setData] = useState<InsightsData>(fallbackData);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);

          window.requestAnimationFrame(() => {
            setAnimationKey((current) => current + 1);
            setIsVisible(true);
          });
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.28 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    async function loadInsights() {
      try {
        const response = await fetch("/api/insights", { cache: "no-store" });
        if (!response.ok) return;

        const result = await response.json();
        setData(result);
      } catch {
        setData(fallbackData);
      }
    }

    loadInsights();

    const interval = setInterval(loadInsights, 8000);
    return () => clearInterval(interval);
  }, []);

  const totalInterest = useCountUp(data.metrics.totalInterest, animationKey, 0);
  const activeRegions = useCountUp(data.metrics.activeRegions, animationKey, 0);
  const growthMomentum = useCountUp(data.metrics.growthMomentum, animationKey, 1);
  const serviceCategories = useCountUp(data.metrics.serviceCategories, animationKey, 0);

  const maxServiceValue = useMemo(() => {
    return Math.max(...data.serviceRanking.map((item) => item.total), 1);
  }, [data.serviceRanking]);

  const maxRegionValue = useMemo(() => {
    return Math.max(...data.regions.map((item) => item.total), 1);
  }, [data.regions]);

  const serviceBars = useMemo(() => {
    return data.serviceRanking.map((item) => ({
      ...item,
      label: cleanServiceName(item.service),
      levelClass: getLevelClass(item.total, maxServiceValue, "barLevel"),
      shareLevelClass: getShareLevelClass(item.share),
    }));
  }, [data.serviceRanking, maxServiceValue]);

  const regionBars = useMemo(() => {
    return data.regions.map((item) => ({
      ...item,
      levelClass: getLevelClass(item.total, maxRegionValue, "regionLevel"),
    }));
  }, [data.regions, maxRegionValue]);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.dashboard}>
          <div className={styles.glowOne} />
          <div className={styles.glowTwo} />

          <div className={styles.header}>
            <div className={styles.titlePill}>Growth Dashboard</div>

            <div className={styles.liveBadge}>
              <span className={styles.liveDot} />
              Live
            </div>
          </div>

          <div className={styles.metricGrid}>
            <div className={`${styles.metricCard} ${styles.metricBlue}`}>
              <div className={styles.metricBadge}>01</div>
              <p>Total Interest</p>
              <strong>{Math.round(totalInterest).toLocaleString()}+</strong>
            </div>

            <div className={`${styles.metricCard} ${styles.metricGreen}`}>
              <div className={styles.metricBadge}>02</div>
              <p>Active Regions</p>
              <strong>{Math.round(activeRegions)}+</strong>
            </div>

            <div className={`${styles.metricCard} ${styles.metricPurple}`}>
              <div className={styles.metricBadge}>03</div>
              <p>Growth</p>
              <strong>{growthMomentum.toFixed(1)}%</strong>
            </div>

            <div className={`${styles.metricCard} ${styles.metricOrange}`}>
              <div className={styles.metricBadge}>04</div>
              <p>Services</p>
              <strong>{Math.round(serviceCategories)}</strong>
            </div>
          </div>

          <div className={styles.mainGrid}>
            <div className={`${styles.panel} ${styles.panelWide}`}>
              <div className={styles.panelHeader}>
                <span>Service Demand</span>
                <b>Auto Updated</b>
              </div>

              <div className={styles.barStage}>
                {serviceBars.map((item, index) => (
                  <div key={item.service} className={styles.barItem}>
                    <div className={styles.barValue}>{item.total.toLocaleString()}</div>

                    <div className={styles.barWrap}>
                      <div
                        className={`${styles.bar3d} ${styles[`barTheme${index + 1}`]} ${
                          isVisible ? item.levelClass : styles.barLevel10
                        }`}
                      >
                        <span className={styles.barFront} />
                        <span className={styles.barRight} />
                        <span className={styles.barTop} />
                      </div>
                    </div>

                    <p className={styles.barLabel}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span>Service Share</span>
                <b>100%</b>
              </div>

             <div className={styles.donutShell}>
  <div className={styles.pieGlow} />

  <svg
    className={styles.pie3d}
    viewBox="0 0 260 190"
    role="img"
    aria-label="Service share 3D chart"
  >
    <g className={styles.pieSpin}>
      <path className={`${styles.pieSide} ${styles.pieSideBlue}`} d="M 130.0 20.0 A 92 58 0 0 1 215.3 99.7 L 215.3 125.7 A 92 58 0 0 0 130.0 46.0 Z" />
      <path className={`${styles.pieSide} ${styles.pieSideGreen}`} d="M 215.3 99.7 A 92 58 0 0 1 97.0 132.1 L 97.0 158.1 A 92 58 0 0 0 215.3 125.7 Z" />
      <path className={`${styles.pieSide} ${styles.pieSideGold}`} d="M 97.0 132.1 A 92 58 0 0 1 38.2 82.0 L 38.2 108.0 A 92 58 0 0 0 97.0 158.1 Z" />
      <path className={`${styles.pieSide} ${styles.pieSidePurple}`} d="M 38.2 82.0 A 92 58 0 0 1 62.7 38.4 L 62.7 64.4 A 92 58 0 0 0 38.2 108.0 Z" />
      <path className={`${styles.pieSide} ${styles.pieSideOrange}`} d="M 62.7 38.4 A 92 58 0 0 1 107.7 21.7 L 107.7 47.7 A 92 58 0 0 0 62.7 64.4 Z" />
      <path className={`${styles.pieSide} ${styles.pieSideRed}`} d="M 107.7 21.7 A 92 58 0 0 1 130.0 20.0 L 130.0 46.0 A 92 58 0 0 0 107.7 47.7 Z" />

      <path className={`${styles.pieTop} ${styles.pieBlue}`} d="M 130.0 20.0 A 92 58 0 0 1 215.3 99.7 L 165.2 87.0 A 38 24 0 0 0 130.0 54.0 Z" />
      <path className={`${styles.pieTop} ${styles.pieGreen}`} d="M 215.3 99.7 A 92 58 0 0 1 97.0 132.1 L 116.4 100.4 A 38 24 0 0 0 165.2 87.0 Z" />
      <path className={`${styles.pieTop} ${styles.pieGold}`} d="M 97.0 132.1 A 92 58 0 0 1 38.2 82.0 L 92.1 79.7 A 38 24 0 0 0 116.4 100.4 Z" />
      <path className={`${styles.pieTop} ${styles.piePurple}`} d="M 38.2 82.0 A 92 58 0 0 1 62.7 38.4 L 102.2 61.6 A 38 24 0 0 0 92.1 79.7 Z" />
      <path className={`${styles.pieTop} ${styles.pieOrange}`} d="M 62.7 38.4 A 92 58 0 0 1 107.7 21.7 L 120.8 54.7 A 38 24 0 0 0 102.2 61.6 Z" />
      <path className={`${styles.pieTop} ${styles.pieRed}`} d="M 107.7 21.7 A 92 58 0 0 1 130.0 20.0 L 130.0 54.0 A 38 24 0 0 0 120.8 54.7 Z" />

      <ellipse className={styles.pieHoleShadow} cx="130" cy="78" rx="39" ry="25" />
      <ellipse className={styles.pieHole} cx="130" cy="76" rx="36" ry="23" />

     <text className={styles.pieLabel} x="184" y="55" textAnchor="middle">25.6%</text>
<text className={styles.pieLabel} x="156" y="116" textAnchor="middle">21.7%</text>
<text className={styles.pieLabel} x="78" y="103" textAnchor="middle">17.0%</text>
<text className={styles.pieLabel} x="69" y="64" textAnchor="middle">13.8%</text>
<text className={styles.pieLabelSmall} x="97" y="43" textAnchor="middle">11.7%</text>
<text className={styles.pieLabelTiny} x="122" y="37" textAnchor="middle">9.9%</text>
    </g>
  </svg>
</div>

              <div className={styles.shareList}>
                {serviceBars.slice(0, 4).map((item, index) => (
                  <div key={item.service} className={styles.shareCard}>
                    <div className={styles.shareTop}>
                      <div className={styles.shareNameWrap}>
                        <span className={`${styles.shareDot} ${styles[`shareDot${index + 1}`]}`} />
                        <p>{item.label}</p>
                      </div>
                      <b>{item.share}%</b>
                    </div>

                    <div className={styles.shareTrack}>
                      <span
                        className={`${styles.shareFill} ${styles[`shareFill${index + 1}`]} ${
                          isVisible ? item.shareLevelClass : styles.shareLevel0
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span>Monthly Growth</span>
                <b>Rising</b>
              </div>

              <div className={styles.trendStage}>
                {trendData.map((item, index) => (
                  <div key={item.month} className={styles.trendItem}>
                    <div className={styles.trendTrack}>
                      <span
                        className={`${styles.trendFill} ${
                          isVisible ? styles[item.levelClass] : styles.trendLevel10
                        } ${styles[`trendDelay${index + 1}`]}`}
                      />
                    </div>
                    <p>{item.month}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.bottomGrid}>
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span>Top Regions</span>
                <b>Growing</b>
              </div>

              <div className={styles.regionStage}>
                {regionBars.map((item, index) => (
                  <div key={item.region} className={styles.regionItem}>
                    <strong>{item.total.toLocaleString()}</strong>

                    <div className={styles.regionWrap}>
                      <div
                        className={`${styles.region3d} ${styles[`regionTheme${index + 1}`]} ${
                          isVisible ? item.levelClass : styles.regionLevel12
                        }`}
                      >
                        <span className={styles.regionFront} />
                        <span className={styles.regionRight} />
                        <span className={styles.regionTop} />
                      </div>
                    </div>

                    <p>{item.region}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span>Top Services</span>
                <b>Premium View</b>
              </div>

              <div className={styles.rankList}>
                {serviceBars.slice(0, 5).map((item, index) => (
                  <div key={item.service} className={styles.rankCard}>
                    <div className={styles.rankLeft}>
                      <div className={`${styles.rankNumber} ${styles[`rankTheme${index + 1}`]}`}>
                        {item.rank}
                      </div>

                      <div className={styles.rankText}>
                        <h4>{item.label}</h4>
                        <p>{item.total.toLocaleString()} demand points</p>
                      </div>
                    </div>

                    <div className={styles.rankRight}>
                      <div className={styles.rankChip}>Growing</div>
                      <div className={styles.rankShare}>{item.share}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}