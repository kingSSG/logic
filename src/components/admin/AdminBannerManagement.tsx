
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { X } from "lucide-react";

// Mock data - Same as in Banner.tsx
const initialBanners = [
  {
    id: 1,
    title: "Learn Coding From Industry Experts",
    description: "Master practical coding skills with our expert-led courses and hands-on projects.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ctaText: "Start Learning",
  },
  {
    id: 2,
    title: "Practical Skills for Real-World Success",
    description: "Our courses provide the hands-on experience employers are looking for.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ctaText: "Explore Courses",
  },
  {
    id: 3,
    title: "Accelerate Your Tech Career",
    description: "Join thousands of successful graduates working at top tech companies worldwide.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ctaText: "View Success Stories",
  },
];

interface BannerItem {
  id: number;
  title: string;
  description: string;
  image: string;
  ctaText: string;
}

const AdminBannerManagement = () => {
  const [banners, setBanners] = useState<BannerItem[]>(initialBanners);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    ctaText: "",
  });
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add new banner
    const newBanner = {
      id: banners.length > 0 ? Math.max(...banners.map(b => b.id)) + 1 : 1,
      ...formData
    };
    
    setBanners([...banners, newBanner]);
    
    toast({
      title: "Banner Added",
      description: "The new banner has been successfully added.",
    });
    
    // Reset form
    setFormData({
      title: "",
      description: "",
      image: "",
      ctaText: "",
    });
  };

  const deleteBanner = (id: number) => {
    setBanners(banners.filter((banner) => banner.id !== id));
    
    toast({
      title: "Banner Deleted",
      description: "The banner has been successfully removed.",
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Banner Management</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Add New Banner</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Banner Title
                  </label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter banner title"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Banner Description
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter banner description"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL
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
                  <label htmlFor="ctaText" className="block text-sm font-medium text-gray-700 mb-1">
                    Button Text
                  </label>
                  <Input
                    id="ctaText"
                    name="ctaText"
                    value={formData.ctaText}
                    onChange={handleChange}
                    placeholder="Enter button text"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-logic-200 hover:bg-logic-300">
                  Add Banner
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Current Banners</h3>
          <div className="space-y-4">
            {banners.map((banner) => (
              <div
                key={banner.id}
                className="border rounded-md p-4 relative"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                  onClick={() => deleteBanner(banner.id)}
                >
                  <X size={18} />
                </Button>
                <div className="flex items-start space-x-4">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-24 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold">{banner.title}</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {banner.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {banners.length === 0 && (
              <p className="text-gray-500 italic">No banners added yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBannerManagement;
