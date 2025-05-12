import { PageTemplate } from "@/app/(docs)/docs/components/page-template";
import PreviewCodeCard from "@/app/(docs)/docs/components/preview-code-card";
import React from "react";
import Dashboardblock from "./dashboard";



const page = () => {
  return (
    <div className="max-w-7xl mx-auto container-wrapper px-8 py-2">
      <PageTemplate title="Pharmalogistics Dashboard" className="mt-5">
        <PreviewCodeCard
        className="p-4"
        path="app/(blocks)/blocks/dashboard.tsx">
          <Dashboardblock/>
        </PreviewCodeCard>

      
        
      </PageTemplate>
    </div>
  );
};

export default page;
