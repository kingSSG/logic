
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-primary mb-4">About <span className="text-gradient">Logic</span></h2>
          <div className="w-20 h-1 bg-logic-200 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make coding education accessible, practical, and directly applicable to real-world tech careers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="heading-secondary">Our Mission & Vision</h3>
            <p className="text-gray-700">
              At Logic, we believe that everyone should have access to high-quality coding education. Our mission is to bridge the gap between theoretical knowledge and practical application, producing graduates who are ready for the demands of the tech industry.
            </p>
            <p className="text-gray-700">
              Founded in 2015 by a team of industry veterans, Logic has grown from a small coding bootcamp into a comprehensive educational platform serving thousands of students worldwide.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-secondary p-4 rounded-lg text-center">
                <h4 className="text-xl font-bold text-logic-300">5000+</h4>
                <p className="text-gray-600">Students Trained</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg text-center">
                <h4 className="text-xl font-bold text-logic-300">95%</h4>
                <p className="text-gray-600">Job Placement</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg text-center">
                <h4 className="text-xl font-bold text-logic-300">50+</h4>
                <p className="text-gray-600">Expert Instructors</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg text-center">
                <h4 className="text-xl font-bold text-logic-300">100+</h4>
                <p className="text-gray-600">Industry Partners</p>
              </div>
            </div>
            <Button className="bg-logic-200 hover:bg-logic-300 mt-4">Learn More</Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Coding education" 
                className="w-full h-48 object-cover rounded-lg shadow-md hover-scale"
              />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Tech workspace" 
                className="w-full h-64 object-cover rounded-lg shadow-md hover-scale"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Programming" 
                className="w-full h-64 object-cover rounded-lg shadow-md hover-scale"
              />
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Innovation" 
                className="w-full h-48 object-cover rounded-lg shadow-md hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
