import React from "react";
import {
  Stethoscope, Sparkles, Waves, Scan, Shield, Sun, Link as LinkIcon, Crown,
  Smile, PenTool, Gem, Activity, Scissors, Brain, Syringe, Layers, Baby,
  Heart, AlertTriangle, Eye, Droplet, Wrench,
} from "lucide-react";

const map = {
  Stethoscope, Sparkles, Waves, Scan, Shield, Sun, Link: LinkIcon, Crown,
  Smile, PenTool, Gem, Activity, Scissors, Brain, Syringe, Layers, Baby,
  Heart, AlertTriangle, Eye, Droplet, Wrench,
};

export default function ServiceIcon({ name, className = "h-6 w-6" }) {
  const Icon = map[name] || Shield;
  return <Icon className={className} strokeWidth={1.6} />;
}