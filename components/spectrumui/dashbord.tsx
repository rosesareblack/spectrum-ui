// /components/AllComponents.tsx
import React from 'react';
import { AppSidebar } from '../app-sidebar';
import CardCollection from './cards';
import ButtonCollection from './ButtonCollection';
import Inputcollection from './form';


interface AllComponentsProps {
  slug: string | undefined; // Accept slug as a prop
}

const AllComponents: React.FC<AllComponentsProps> = ({ slug }) => {
  return (
    <div>
      

      {/* Render specific component based on slug */}
      {slug ? (
        <div>
         
        
          {slug === 'input-fields' && <Inputcollection />}
          {slug === 'buttons' && <ButtonCollection/>}
          {slug === 'card-designs' && <CardCollection/>}
          {/* Add more conditions as necessary */}
        </div>
      ) : (
        <div>Please select a component from the sidebar.</div>
      )}
      <AppSidebar />
    </div>
  );
};

export default AllComponents;
