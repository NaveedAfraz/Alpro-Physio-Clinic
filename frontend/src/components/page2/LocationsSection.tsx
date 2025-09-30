import { MapPin } from "lucide-react";

interface LocationsSectionProps {
  locations?: string[];
}

export default function LocationsSection({ locations = [
  "Mumbai",
  "Delhi",
  "Bhopal",
  "Bengaluru",
  "Kolkata",
  "Hyderabad",
] }: LocationsSectionProps) {
  // Duplicate the locations array for seamless infinite scroll
  const duplicatedLocations = [...locations, ...locations, ...locations];

  return (
    <section className="relative py-16 overflow-hidden bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
           Locations
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Our Affiliated Cupping Therapy Course will be conducted in
        </p>
      </div>

      {/* Diagonal Strips Container */}
      <div className="relative h-64">
        {/* Background Strip (Lighter Blue) */}
        <div
          className="absolute inset-0 top-2 bg-gradient-to-r from-blue-800/40 via-blue-700/40 to-blue-600/40"
          style={{
            transform: "skewY(3deg)",
            transformOrigin: "top left",
            height: "160px",
          }}
        />

        {/* Main Strip (Bright Blue) */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500"
          style={{
            transform: "skewY(-2deg)",
            transformOrigin: "top left",
            height: "180px",
            top: "40px",
          }}
        >
          {/* Scrolling Locations Container */}
          <div
            className="absolute inset-0 flex items-center"
            style={{
              transform: "skewY(2deg)",
            }}
          >
            <div className="flex animate-scroll-infinite w-max">
              {duplicatedLocations.map((location, index) => (
                <div
                  key={`${location}-${index}`}
                  className="flex items-center justify-center px-8 mx-6"
                  style={{ minWidth: "180px" }}
                >
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                    <span className="text-white text-lg font-semibold whitespace-nowrap">
                      {location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-infinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          .animate-scroll-infinite {
            animation: scroll-infinite 25s linear infinite;
          }

          .animate-scroll-infinite:hover {
            animation-play-state: paused;
          }
        `
      }} />
    </section>
  );
}
