import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PublicChangelogPage from "./pages/PublicChangelogPage";
import PostEditorPage from "./pages/PostEditorPage";
import SubscribersPage from "./pages/SubscribersPage";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (<div style={{ display: "flex" }}>
    <Sidebar />
    <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>{children}</main>
  </div>);
}

export default function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<PublicChangelogPage />} />
      <Route path="/admin" element={<AdminLayout><PostEditorPage /></AdminLayout>} />
      <Route path="/admin/subscribers" element={<AdminLayout><SubscribersPage /></AdminLayout>} />
      <Route path="/settings" element={<AdminLayout><SubscribersPage /></AdminLayout>} />
    </Routes>
  </BrowserRouter>);
}
