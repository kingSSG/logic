
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Mock data for student reviews
const initialReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    course: "Web Development Bootcamp",
    rating: 5,
    comment: "Logic completely changed my career trajectory. I went from knowing nothing about coding to landing a job as a frontend developer within 6 months of completing the program.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    company: "Frontend Developer at TechCorp",
  },
  {
    id: 2,
    name: "Michael Chen",
    course: "Data Science Fundamentals",
    rating: 5,
    comment: "The instructors were incredibly knowledgeable and supportive. The hands-on projects gave me practical experience that I could showcase to potential employers.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    company: "Data Analyst at AnalyticsPro",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    course: "Mobile App Development",
    rating: 4,
    comment: "Logic's curriculum is current with industry standards. I appreciated learning the latest frameworks and best practices that are actually used in the field.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    company: "iOS Developer at AppWorks",
  },
  {
    id: 4,
    name: "David Kim",
    course: "Cybersecurity Professional",
    rating: 5,
    comment: "As someone switching careers, I was worried about keeping up. The step-by-step approach and supportive community made learning complex security concepts manageable.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    company: "Security Specialist at SecureNet",
  },
  {
    id: 5,
    name: "Aisha Patel",
    course: "AI & Machine Learning",
    rating: 4,
    comment: "The projects in this course allowed me to build an impressive portfolio that helped me stand out in job interviews. Well worth the investment!",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    company: "ML Engineer at AI Innovations",
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [visibleReviews, setVisibleReviews] = useState(3);

  const loadMore = () => {
    setVisibleReviews((prev) => Math.min(prev + 3, reviews.length));
  };

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={18}
          className={`${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-primary mb-4">Student <span className="text-gradient">Reviews</span></h2>
          <div className="w-20 h-1 bg-logic-200 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our students have to say about their experience with Logic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, visibleReviews).map((review) => (
            <Card key={review.id} className="overflow-hidden hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-logic-500">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.course}</p>
                    <div className="flex mt-1">{renderStars(review.rating)}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">"{review.comment}"</p>
                <p className="text-sm text-logic-300 font-medium">{review.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {visibleReviews < reviews.length && (
          <div className="mt-10 text-center">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-logic-200 hover:bg-logic-300 text-white rounded-md transition-colors"
            >
              Load More Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
