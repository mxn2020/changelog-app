import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import PublicChangelogPage from "../pages/PublicChangelogPage"; import PostEditorPage from "../pages/PostEditorPage"; import SubscribersPage from "../pages/SubscribersPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("Changelog.app")).toBeInTheDocument(); });
    it("PublicChangelogPage renders", () => { wrap(<PublicChangelogPage />); expect(screen.getByText("Product Updates")).toBeInTheDocument(); });
    it("PostEditorPage renders", () => { wrap(<PostEditorPage />); expect(screen.getByText("Draft: Untitled Post")).toBeInTheDocument(); });
    it("SubscribersPage renders", () => { wrap(<SubscribersPage />); expect(screen.getByText("mehdi@openclaw.dev")).toBeInTheDocument(); });
});
