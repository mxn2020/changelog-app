import { Save, Eye, Send, ArrowLeft, Image, Type, Hash } from "lucide-react";
import { Link } from "react-router-dom";
export default function PostEditorPage() {
    return (<div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <header style={{ padding: "var(--space-4)", borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-card)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                <Link to="/admin" className="btn btn-ghost btn-sm" style={{ padding: 8 }}><ArrowLeft size={18} /></Link>
                <span style={{ fontWeight: 600, color: "var(--color-text-secondary)" }}>Draft: Untitled Post</span>
            </div>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <button className="btn"><Save size={16} /> Save Draft</button>
                <button className="btn"><Eye size={16} /> Preview</button>
                <button className="btn btn-primary"><Send size={16} /> Publish</button>
            </div>
        </header>

        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
            {/* Editor Main */}
            <div style={{ flex: 1, overflowY: "auto", padding: "var(--space-8)", display: "flex", justifyContent: "center" }}>
                <div style={{ maxWidth: 700, width: "100%" }}>
                    <input type="text" placeholder="Post Title..." className="serif" style={{ width: "100%", border: "none", background: "transparent", fontSize: "2rem", fontWeight: 700, color: "var(--color-text-primary)", outline: "none", marginBottom: "var(--space-6)" }} />

                    <div style={{ display: "flex", gap: "var(--space-3)", marginBottom: "var(--space-6)", alignItems: "center", borderBottom: "1px solid var(--color-border)", paddingBottom: "var(--space-4)" }}>
                        <select className="input" style={{ width: 120, background: "var(--color-bg-secondary)", border: "none", fontWeight: 600 }}>
                            <option>✨ New</option>
                            <option>🚀 Improved</option>
                            <option>🐛 Fixed</option>
                        </select>
                        <div style={{ color: "var(--color-text-tertiary)", fontSize: "14px" }}>Oct 24, 2026</div>
                    </div>

                    <textarea placeholder="Write your changelog update... Markdown is supported." className="serif" style={{ width: "100%", minHeight: 400, border: "none", background: "transparent", fontSize: "1.1rem", lineHeight: 1.8, color: "var(--color-text-secondary)", outline: "none", resize: "none" }}></textarea>
                </div>
            </div>

            {/* Sidebar Tooling */}
            <div style={{ width: 280, borderLeft: "1px solid var(--color-border)", background: "var(--color-bg-secondary)", padding: "var(--space-6)" }}>
                <h3 style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", color: "var(--color-text-tertiary)", marginBottom: "var(--space-4)" }}>Insert</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", marginBottom: "var(--space-6)" }}>
                    <button className="btn" style={{ justifyContent: "flex-start", background: "var(--color-bg-card)" }}><Image size={16} style={{ color: "var(--color-accent-primary)" }} /> Upload Image</button>
                    <button className="btn" style={{ justifyContent: "flex-start", background: "var(--color-bg-card)" }}><Type size={16} style={{ color: "var(--color-accent-primary)" }} /> Code Block</button>
                    <button className="btn" style={{ justifyContent: "flex-start", background: "var(--color-bg-card)" }}><Hash size={16} style={{ color: "var(--color-accent-primary)" }} /> Version Tag</button>
                </div>

                <h3 style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", color: "var(--color-text-tertiary)", marginBottom: "var(--space-4)" }}>Email Notification</h3>
                <div className="card" style={{ padding: "var(--space-4)" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "14px", fontWeight: 500, cursor: "pointer" }}>
                        <input type="checkbox" defaultChecked /> Send email digest to 1,245 subscribers
                    </label>
                </div>
            </div>
        </div>
    </div>);
}
