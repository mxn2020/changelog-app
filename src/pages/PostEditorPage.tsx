import { Save, Eye, Send, ArrowLeft, Image, Type, Hash } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, Select, SelectItem, Card } from "@geenius-ui/react-css";

export default function PostEditorPage() {
    return (<div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <header style={{ padding: "var(--space-4)", borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-card)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                <Link to="/admin"><Button variant="ghost" size="sm" icon={<ArrowLeft size={18} />} /></Link>
                <span style={{ fontWeight: 600, color: "var(--color-text-secondary)" }}>Draft: Untitled Post</span>
            </div>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <Button variant="outline" icon={<Save size={16} />}>Save Draft</Button>
                <Button variant="outline" icon={<Eye size={16} />}>Preview</Button>
                <Button variant="primary" icon={<Send size={16} />}>Publish</Button>
            </div>
        </header>

        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
            {/* Editor Main */}
            <div style={{ flex: 1, overflowY: "auto", padding: "var(--space-8)", display: "flex", justifyContent: "center" }}>
                <div style={{ maxWidth: 700, width: "100%" }}>
                    <input type="text" placeholder="Post Title..." className="serif" style={{ width: "100%", border: "none", background: "transparent", fontSize: "2rem", fontWeight: 700, color: "var(--color-text-primary)", outline: "none", marginBottom: "var(--space-6)" }} />

                    <div style={{ display: "flex", gap: "var(--space-3)", marginBottom: "var(--space-6)", alignItems: "center", borderBottom: "1px solid var(--color-border)", paddingBottom: "var(--space-4)" }}>
                        <Select defaultValue="new" style={{ width: 120 }}>
                            <SelectItem value="new">✨ New</SelectItem>
                            <SelectItem value="improved">🚀 Improved</SelectItem>
                            <SelectItem value="fixed">🐛 Fixed</SelectItem>
                        </Select>
                        <div style={{ color: "var(--color-text-tertiary)", fontSize: "14px" }}>Oct 24, 2026</div>
                    </div>

                    <textarea placeholder="Write your changelog update... Markdown is supported." className="serif" style={{ width: "100%", minHeight: 400, border: "none", background: "transparent", fontSize: "1.1rem", lineHeight: 1.8, color: "var(--color-text-secondary)", outline: "none", resize: "none" }}></textarea>
                </div>
            </div>

            {/* Sidebar Tooling */}
            <div style={{ width: 280, borderLeft: "1px solid var(--color-border)", background: "var(--color-bg-secondary)", padding: "var(--space-6)" }}>
                <h3 style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", color: "var(--color-text-tertiary)", marginBottom: "var(--space-4)" }}>Insert</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", marginBottom: "var(--space-6)" }}>
                    <Button variant="outline" icon={<Image size={16} />} className="editor-insert-btn">Upload Image</Button>
                    <Button variant="outline" icon={<Type size={16} />} className="editor-insert-btn">Code Block</Button>
                    <Button variant="outline" icon={<Hash size={16} />} className="editor-insert-btn">Version Tag</Button>
                </div>

                <h3 style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", color: "var(--color-text-tertiary)", marginBottom: "var(--space-4)" }}>Email Notification</h3>
                <Card padding="md">
                    <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "14px", fontWeight: 500, cursor: "pointer" }}>
                        <input type="checkbox" defaultChecked /> Send email digest to 1,245 subscribers
                    </label>
                </Card>
            </div>
        </div>
    </div>);
}
