import Main from "@/pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
