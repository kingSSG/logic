
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminBannerManagement from "@/components/admin/AdminBannerManagement";
import AdminReviewManagement from "@/components/admin/AdminReviewManagement";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("banners");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">
              Manage your website content from here.
            </p>
          </div>

          <Tabs 
            defaultValue="banners" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid w-full grid-cols-2 md:max-w-md">
              <TabsTrigger value="banners">Banner Management</TabsTrigger>
              <TabsTrigger value="reviews">Review Management</TabsTrigger>
            </TabsList>
            
            <TabsContent value="banners">
              <AdminBannerManagement />
            </TabsContent>
            
            <TabsContent value="reviews">
              <AdminReviewManagement />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
