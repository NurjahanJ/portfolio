"use client";

import { Star, Users, Calendar, Zap } from "lucide-react";

interface ProjectMetricsProps {
  duration?: string;
  users?: string;
  status?: string;
  githubStars?: number;
  accentColor?: string;
}

export function ProjectMetrics({ 
  duration, 
  users, 
  status, 
  githubStars,
  accentColor = "#FF7533" 
}: ProjectMetricsProps) {
  const metrics = [
    { 
      icon: Calendar, 
      label: "Timeline", 
      value: duration,
      show: !!duration 
    },
    { 
      icon: Users, 
      label: "Research", 
      value: users,
      show: !!users 
    },
    { 
      icon: Zap, 
      label: "Status", 
      value: status,
      show: !!status 
    },
    { 
      icon: Star, 
      label: "GitHub Stars", 
      value: githubStars ? `${githubStars}` : undefined,
      show: !!githubStars 
    }
  ].filter(metric => metric.show);

  if (metrics.length === 0) return null;

  return (
    <div className="bg-slate-900/30 rounded-lg p-6 border border-slate-700/50">
      <h3 className="text-lg font-semibold text-white mb-4">Project Metrics</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="text-center">
              <div 
                className="inline-flex p-2 rounded-full mb-2"
                style={{ backgroundColor: `${accentColor}20` }}
              >
                <Icon 
                  className="h-4 w-4" 
                  style={{ color: accentColor }}
                />
              </div>
              <div className="text-sm font-medium text-white">
                {metric.value}
              </div>
              <div className="text-xs text-slate-400">
                {metric.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
