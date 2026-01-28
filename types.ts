import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  ctaLink: string;
  ctaText: string;
  highlight?: boolean;
  subLink?: string;
  subLinkText?: string;
}
