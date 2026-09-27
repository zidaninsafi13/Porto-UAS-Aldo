import React, { lazy, Suspense, useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProfileSection } from "./components/ProfileSection";
import { PracticeSection } from "./components/PracticeSection";
import { VideoSection } from "./components/VideoSection";
import { NonTeachingSection } from "./components/NonTeachingSection";
import { AssessmentSection } from "./components/AssessmentSection";
import { ReflectionSection } from "./components/ReflectionSection";
import { PracticeReflectionSection } from "./components/PracticeReflectionSection";
import { Footer } from "./components/Footer";
import { IntroLoader } from "./components/IntroLoader";

const PracticePreviewDialog = lazy(() =>
  import("./components/PracticePreviewDialog").then((module) => ({ default: module.PracticePreviewDialog })),
);
const AssessmentPreviewDialog = lazy(() =>
  import("./components/AssessmentPreviewDialog").then((module) => ({ default: module.AssessmentPreviewDialog })),
);
const PhotoLightbox = lazy(() =>
  import("./components/PhotoLightbox").then((module) => ({ default: module.PhotoLightbox })),
);
const DocumentationGalleryDialog = lazy(() =>
  import("./components/DocumentationGalleryDialog").then((module) => ({ default: module.DocumentationGalleryDialog })),
);
const PracticeReflectionPreviewDialog = lazy(() =>
  import("./components/PracticeReflectionPreviewDialog").then((module) => ({ default: module.PracticeReflectionPreviewDialog })),
);

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Practice Preview Dialog State (Dual-Scroll Split Reader)
  const [practiceDialog, setPracticeDialog] = useState<{
    isOpen: boolean;
    practiceId: string;
  }>({
    isOpen: false,
    practiceId: "praktik-01",
  });

  // Assessment Preview Dialog State (PDF Viewer + Rubric Matrix breakdown)
  const [assessmentDialog, setAssessmentDialog] = useState<{
    isOpen: boolean;
    docId: "penilaian-1" | "penilaian-2";
  }>({
    isOpen: false,
    docId: "penilaian-1",
  });

  const [reflectionDialog, setReflectionDialog] = useState({
    isOpen: false,
    reflectionId: "refleksi-01",
  });

  // Photo Lightbox State
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    caption: string;
  }>({
    isOpen: false,
    imageUrl: "",
    title: "",
    caption: "",
  });

  const [documentationDialog, setDocumentationDialog] = useState({
    isOpen: false,
    activityId: "act-01",
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? window.scrollY / totalScroll : 0;
      setScrollProgress(Math.min(Math.max(currentProgress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenPractice = (practiceId: string) => {
    setPracticeDialog({ isOpen: true, practiceId });
  };

  const handleClosePractice = () => {
    setPracticeDialog((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenAssessment = (docId: "penilaian-1" | "penilaian-2" = "penilaian-1") => {
    setAssessmentDialog({ isOpen: true, docId });
  };

  const handleCloseAssessment = () => {
    setAssessmentDialog((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenReflection = (reflectionId: string) => {
    setReflectionDialog({ isOpen: true, reflectionId });
  };

  const handleCloseReflection = () => {
    setReflectionDialog((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenPhoto = (imageUrl: string, title: string, caption: string) => {
    setLightbox({
      isOpen: true,
      imageUrl,
      title,
      caption,
    });
  };

  const handleClosePhoto = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenDocumentation = (activityId = "act-01") => {
    setDocumentationDialog({ isOpen: true, activityId });
  };

  const handleCloseDocumentation = () => {
    setDocumentationDialog((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <MotionConfig reducedMotion="user">
    <div className="editorial-theme min-h-screen bg-[#F7F3EC] text-[#1C252C] selection:bg-[#B55E3B]/20 selection:text-[#1C252C] relative overflow-x-hidden font-sans">
      <IntroLoader />
      {/* Sticky Editorial Navigation with Reading Progress */}
      <Navbar scrollProgress={scrollProgress} />

      {/* Main Flow */}
      <main className="relative z-10">
        <HeroSection onOpenPhoto={handleOpenPhoto} />
        <ProfileSection onOpenPhoto={handleOpenPhoto} />
        <PracticeSection onOpenPractice={handleOpenPractice} />
        <VideoSection />
        {/* Compact 05. Nonmengajar & 06. Penilaian Side by Side Row matching Reference */}
        <section className="relative py-14 sm:py-20 px-6 sm:px-8 lg:px-12 bg-[#F7F3EC] text-[#1C252C] border-b border-[#D8D1C6] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
            <img
              src="assets/aladona/assessment-paper-texture.webp"
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>
            {/* Top mask to eliminate stray baked line above the header text */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F7F3EC] via-[#F7F3EC]/95 to-transparent pointer-events-none" />


          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
              <NonTeachingSection onOpenGallery={handleOpenDocumentation} />
              <AssessmentSection onOpenRubric={handleOpenAssessment} />
            </div>
          </div>
        </section>
        <PracticeReflectionSection onOpenReflection={handleOpenReflection} />
        <ReflectionSection />
      </main>

      {/* Colophon & Footer */}
      <Footer />

      {/* Interactive In-App Dialogs */}
      <Suspense fallback={null}>
      <PracticePreviewDialog
        isOpen={practiceDialog.isOpen}
        onClose={handleClosePractice}
        practiceId={practiceDialog.practiceId}
      />

      <AssessmentPreviewDialog
        isOpen={assessmentDialog.isOpen}
        onClose={handleCloseAssessment}
        initialDocId={assessmentDialog.docId}
      />

      <PhotoLightbox
        isOpen={lightbox.isOpen}
        onClose={handleClosePhoto}
        imageUrl={lightbox.imageUrl}
        title={lightbox.title}
        caption={lightbox.caption}
      />

      <DocumentationGalleryDialog
        isOpen={documentationDialog.isOpen}
        onClose={handleCloseDocumentation}
        initialActivityId={documentationDialog.activityId}
      />

      <PracticeReflectionPreviewDialog
        isOpen={reflectionDialog.isOpen}
        onClose={handleCloseReflection}
        reflectionId={reflectionDialog.reflectionId}
      />
      </Suspense>
    </div>
    </MotionConfig>
  );
}

export default App;
