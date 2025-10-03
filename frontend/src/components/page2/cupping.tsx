import Header from "../home/header";
import Footer from "../home/footer";
import { HeroSection } from "./HeroSection";
import { IntroductionSection } from "./IntroductionSection";
import { CoursesSection } from "./CoursesSection";
import LocationsSection from "./LocationsSection";
import { WhoCanJoinSection } from "./WhoCanJoinSection";
import { CertificationSection } from "./CertificationSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { EnrollmentFormSection } from "./EnrollmentFormSection";
import { EnrollCTASection } from "./EnrollCTASection";
import { pageData } from "./cupping-data";

export function CuppingCoursePage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <HeroSection
          title={pageData.hero.title}
          subtitle={pageData.hero.subtitle}
          features={pageData.hero.features}
          images={pageData.hero.images}
        />

        {/* Main Content Sections */}
        <div className="container mx-auto px-4 py-16 md:py-24 space-y-20">
          {/* Introduction Section */}
          <IntroductionSection
            title={pageData.introduction.title}
            subtitle={pageData.introduction.subtitle}
            text={pageData.introduction.text}
          />

          {/* Courses Section */}
          <CoursesSection courses={pageData.courses} />

          {/* Course Locations Section */}
          <LocationsSection locations={pageData.locations} />

          {/* Who Can Join Section */}
          <WhoCanJoinSection whoCanJoin={pageData.whoCanJoin} />

          {/* Certification Section */}
          <CertificationSection certification={pageData.certification} />

          {/* Testimonials Section */}
          <TestimonialsSection testimonials={pageData.testimonials} />

          {/* Enrollment Form Section */}
          <EnrollmentFormSection />

          {/* Enroll Today CTA */}
          <EnrollCTASection
            text={pageData.enroll.text}
            contact={pageData.enroll.contact}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
