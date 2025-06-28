import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import routes from "../routes/routes.tsx"
import "./index.css";
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </StrictMode>,
)
