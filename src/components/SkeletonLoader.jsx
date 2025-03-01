import React from 'react';
import '../styles/SkeletonLoader.css';

export const CardSkeleton = () => (
  <div className="skeleton-card">
    <div className="skeleton-icon"></div>
    <div className="skeleton-title"></div>
    <div className="skeleton-text"></div>
    <div className="skeleton-text"></div>
  </div>
);

export const StatSkeleton = () => (
  <div className="skeleton-stat">
    <div className="skeleton-icon"></div>
    <div className="skeleton-number"></div>
    <div className="skeleton-label"></div>
  </div>
);

export const HeroSkeleton = () => (
  <div className="skeleton-hero">
    <div className="skeleton-badge"></div>
    <div className="skeleton-title-large"></div>
    <div className="skeleton-subtitle"></div>
    <div className="skeleton-description"></div>
    <div className="skeleton-buttons">
      <div className="skeleton-button"></div>
      <div className="skeleton-button"></div>
    </div>
  </div>
); 