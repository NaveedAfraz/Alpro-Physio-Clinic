// Shared types and data for the Cupping Therapy Course page
export interface CuppingCourseData {
  hero: {
    title: string;
    subtitle: string;
    features: string[];
    imageUrl: string;
  };
  introduction: {
    title: string;
    text: string;
  };
  courses: {
    title: string;
    description: string;
    price: string;
  }[];
  locations: string[];
  whoCanJoin: string[];
  certification: string;
  enroll: {
    contact: string;
    text: string;
  };
  testimonials: {
    name: string;
    role: string;
    location: string;
    content: string;
    rating: number;
  }[];
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  course: string;
  message: string;
}
