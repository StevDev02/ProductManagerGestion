import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/pages/App.tsx'
import '@/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from './components/pages/ErrorPage.tsx';
import { ThemeProvider } from "@material-tailwind/react";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
// import '@fontsource/poppins';
import '@fontsource/geist-sans';
import { AddToProducts } from './components/pages/subpages/AddToProducts.jsx';
import { TutorialAddProducts } from './components/sub-sub-pages/Tutorial.jsx';
import { AddProduct } from './components/sub-sub-pages/AddProduct.jsx';
import { StepOne } from './components/pages/subpages/steps-add-products/StepOne.jsx';
import { FinallySteps } from './components/pages/subpages/steps-add-products/FinallySteps.tsx';
import { StepThree } from './components/pages/subpages/steps-add-products/StepThree.jsx';
import { GetStaterded } from './components/pages/subpages/GetStaterded.tsx';
import { StepTwo } from './components/pages/subpages/steps-add-products/StepTwo.jsx';
import { StepFour } from './components/pages/subpages/steps-add-products/StepFour.jsx';
import { StepFive } from './components/pages/subpages/steps-add-products/StepFive.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/ec/product-manager",
        element: <AddToProducts />,
        children: [
          {
            path: "/ec/product-manager/add-product",
            element: <AddProduct />,
          }, {
            path: "/ec/product-manager/tutorial",
            element: <TutorialAddProducts />,
          }, 
        ],
      }, {
        path: "/ec/product-manager/get-started",
        element: <GetStaterded />,
        children: [
          {
            path: "/ec/product-manager/get-started/step-1",
            element: <StepOne />,
          }, {
            path: "/ec/product-manager/get-started/step-2",
            element: <StepTwo />,
          }, 
          {
            path: "/ec/product-manager/get-started/step-3",
            element: <StepThree />,
          },
          {
            path: "/ec/product-manager/get-started/step-4",
            element: <StepFour />,
          },
          {
            path: "/ec/product-manager/get-started/step-5",
            element: <StepFive />,
          },
          {
            path: "/ec/product-manager/get-started/step-finally",
            element: <FinallySteps />,
          },
        ],
      }, 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider>
        <MantineProvider>
          <RouterProvider router={router} />
        </MantineProvider>
      </ThemeProvider>
  </React.StrictMode>,
)
