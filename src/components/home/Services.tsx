
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Master modern web development with HTML, CSS, JavaScript, React, and more. Build responsive, dynamic websites from scratch.",
    icon: "🌐",
    features: ["Frontend Development", "Backend Systems", "Database Integration", "Responsive Design"],
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Learn to build native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
    icon: "📱",
    features: ["iOS Development", "Android Development", "Cross-Platform Apps", "UX/UI Design"],
  },
  {
    id: 3,
    title: "Data Science & Analytics",
    description: "Dive into the world of data with Python, R, SQL, and visualization tools. Extract meaningful insights from complex datasets.",
    icon: "📊",
    features: ["Statistical Analysis", "Data Visualization", "Machine Learning", "Big Data Processing"],
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description: "Explore artificial intelligence, neural networks, and machine learning algorithms to solve complex problems.",
    icon: "🤖",
    features: ["Neural Networks", "Computer Vision", "Natural Language Processing", "Reinforcement Learning"],
  },
  {
    id: 5,
    title: "DevOps & Cloud Computing",
    description: "Master the tools and practices for modern software delivery pipelines and cloud infrastructure management.",
    icon: "☁️",
    features: ["CI/CD Pipelines", "Docker & Kubernetes", "AWS/Azure/GCP", "Infrastructure as Code"],
  },
  {
    id: 6,
    title: "Cybersecurity",
    description: "Learn to protect systems and networks from digital attacks with comprehensive security training.",
    icon: "🔒",
    features: ["Ethical Hacking", "Network Security", "Security Auditing", "Threat Detection"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-primary mb-4">Our <span className="text-gradient">Services</span></h2>
          <div className="w-20 h-1 bg-logic-200 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of coding and practical classes designed to help you succeed in the tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="hover-scale">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-logic-400">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-logic-200 rounded-full mr-2"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-logic-200 hover:bg-logic-300">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
