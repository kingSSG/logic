
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { X } from "lucide-react";

// Mock data - Same as in Reviews.tsx
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
];

interface ReviewItem {
  id: number;
  name: string;
  course: string;
  rating: number;
  comment: string;
  image: string;
  company: string;
}

const AdminReviewManagement = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(initialReviews);
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    rating: 5,
    comment: "",
    image: "",
    company: "",
  });
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add new review
    const newReview = {
      id: reviews.length > 0 ? Math.max(...reviews.map(r => r.id)) + 1 : 1,
      ...formData,
      rating: Number(formData.rating),
    };
    
    setReviews([...reviews, newReview]);
    
    toast({
      title: "Review Added",
      description: "The new student review has been successfully added.",
    });
    
    // Reset form
    setFormData({
      name: "",
      course: "",
      rating: 5,
      comment: "",
      image: "",
      company: "",
    });
  };

  const deleteReview = (id: number) => {
    setReviews(reviews.filter((review) => review.id !== id));
    
    toast({
      title: "Review Deleted",
      description: "The review has been successfully removed.",
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Review Management</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Add New Review</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Student Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter student name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                    Course Name
                  </label>
                  <Input
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    placeholder="Enter course name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                    Rating (1-5)
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-logic-300 focus:ring focus:ring-logic-200 focus:ring-opacity-50"
                    required
                  >
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                    Review Comment
                  </label>
                  <Textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Enter student's review"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                    Student Image URL
                  </label>
                  <Input
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Enter image URL"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Position
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Frontend Developer at TechCorp"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-logic-200 hover:bg-logic-300">
                  Add Review
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Current Reviews</h3>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border rounded-md p-4 relative"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                  onClick={() => deleteReview(review.id)}
                >
                  <X size={18} />
                </Button>
                <div className="flex items-start space-x-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.course}</p>
                    <div className="flex items-center mt-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill={i < review.rating ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`${
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                      {review.comment.substring(0, 70)}...
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {reviews.length === 0 && (
              <p className="text-gray-500 italic">No reviews added yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReviewManagement;
