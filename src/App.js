import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AuthLayout from "./components/AuthLayout";
import ConfirmPage from "./pages/ConfirmPage";
import Classes from "./pages/Classes";
import Layout from "./components/Layout";
import ClassDetail from "./pages/ClassDetail";
import SubjectDetail from "./pages/SubjectDetail";
import ProfilePage from "./pages/ProfilePage";
import UserInfo from "./pages/UserInfo";
import EmailPage from "./pages/EmailPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import CreatorPage from "./pages/CreatorPage";
import ChildrenPage from "./pages/ChildrenPage";
import ChildrenDetailPage from "./pages/ChildrenDetailPage";
import WorkshopDetailPage from "./pages/WorkshopDetailPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/auth/login"} />} />

        <Route path="/auth" element={<AuthLayout />} >
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/auth/confirm" element={<ConfirmPage />} />
        </Route>


        <Route path="/" element={<Layout />} >
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/:id" element={<ClassDetail />} />
          <Route path="/subject/:id" element={<SubjectDetail />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/user-info" element={<UserInfo />} />
          <Route path="/user-email" element={<EmailPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route path="/creator" element={<CreatorPage />} />
          <Route path="/mychildren" element={<ChildrenPage />} />
          <Route path="/mychildren/:id" element={<ChildrenDetailPage />} />
          <Route path="/workshop/:id" element={<WorkshopDetailPage />} />
        </Route>


      </Routes>
    </BrowserRouter>

  );
}

export default App;
