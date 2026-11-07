import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SiteShell } from './components/SiteShell';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademyHomePage } from './pages/AcademyHomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { CourseInfoPage } from './pages/CourseInfoPage';
import { TrainerPage } from './pages/TrainerPage';
import { ShopPage } from './pages/ShopPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { TreatmentDetailPage } from './pages/TreatmentDetailPage';
import { TeamPage } from './pages/TeamPage';
import { AftercarePage } from './pages/AftercarePage';
import { PricingPage } from './pages/PricingPage';
import { GalleryPage } from './pages/GalleryPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <SiteShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Academy Routes */}
        <Route path="/academy" element={<AcademyHomePage />} />
        <Route path="/academy/courses" element={<CoursesPage />} />
        <Route path="/academy/courses/:slug" element={<CourseDetailPage />} />
        <Route path="/academy/course-information" element={<CourseInfoPage />} />
        <Route path="/academy/student-gallery" element={<GalleryPage defaultTab="academy" />} />
        <Route path="/academy/trainer" element={<TrainerPage />} />
        <Route path="/academy/shop" element={<ShopPage />} />
        <Route path="/academy/policies" element={<PoliciesPage />} />

        {/* Treatment Routes */}
        <Route path="/treatments" element={<TreatmentsPage />} />
        <Route path="/treatments/team" element={<TeamPage />} />
        <Route path="/treatments/aftercare" element={<AftercarePage />} />
        <Route path="/treatments/price-list" element={<PricingPage />} />
        <Route path="/treatments/:slug" element={<TreatmentDetailPage />} />

        {/* General Routes */}
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteShell>
  );
}
