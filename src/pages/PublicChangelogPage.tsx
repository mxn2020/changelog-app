import { Heart, Laugh, Rocket, Sparkles, AlertCircle } from "lucide-react";
import { Button, Badge } from "@geenius-ui/react-css";
import ThemeToggle from "../components/ThemeToggle";

const posts = [
    { id: "1", title: "Introducing the Form Builder Canvas", date: "October 24, 2026", author: "Mehdi Nabhani", type: "new", content: "Today we are incredibly excited to introduce the completely revamped Form Builder canvas. \\n\\nWe've rebuilt the interaction layer from the ground up using a brand new physics engine and drag-and-drop mechanism. It's fully accessible and feels infinitely smoother than before. \\n\\nYou can now nest fields up to 3 levels deep!", reactions: { heart: 24, rocket: 12, laugh: 0 } },
    { id: "2", title: "Performance Improvements in Search", date: "October 18, 2026", author: "Sarah Jenkins", type: "improved", content: "Query times for complex searches with multiple tags and full-text matching have been reduced by over 300%. We achieve this by moving to a new indexing architecture under the hood.", reactions: { heart: 8, rocket: 42, laugh: 1 } },
    { id: "3", title: "Fixed: Webhooks failing on retry", date: "October 10, 2026", author: "Mehdi Nabhani", type: "fixed", content: "We resolved an edge-case bug where webhooks would fail permanently if the first try resulted in a 5xx error. The backoff logic is now linear with jitter.", reactions: { heart: 12, rocket: 0, laugh: 5 } }
];

export default function PublicChangelogPage() {
    return (<div style={{ background: "var(--color-bg-primary)", minHeight: "100vh" }}>
        <header style={{ borderBottom: "1px solid var(--color-border)", padding: "var(--space-4) 0", position: "sticky", top: 0, background: "var(--color-bg-primary)", zIndex: 10 }}>
            <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 var(--space-4)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                    <div style={{ background: "var(--color-accent-primary)", borderRadius: "4px", width: 24, height: 24 }}></div>
                    <span className="serif" style={{ fontWeight: 700, fontSize: "1.2rem" }}>Product Updates</span>
                </div>
                <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
                    <Button variant="primary" size="sm">Subscribe to Updates</Button>
                    <ThemeToggle />
                </div>
            </div>
        </header>

        <main style={{ maxWidth: 800, margin: "0 auto", padding: "var(--space-8) var(--space-4)" }}>
            {posts.map(post => (<article key={post.id} style={{ marginBottom: "var(--space-8)", paddingBottom: "var(--space-8)", borderBottom: "1px solid var(--color-border)" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-3)", marginBottom: "var(--space-2)" }}>
                    <Badge variant={post.type === "new" ? "default" : post.type === "improved" ? "secondary" : "destructive"}>
                        {post.type === "new" && <Sparkles size={10} style={{ marginRight: 4 }} />}
                        {post.type === "improved" && <Rocket size={10} style={{ marginRight: 4 }} />}
                        {post.type === "fixed" && <AlertCircle size={10} style={{ marginRight: 4 }} />}
                        {post.type}
                    </Badge>
                    <time style={{ color: "var(--color-text-tertiary)", fontSize: "13px" }}>{post.date}</time>
                </div>

                <h1 className="serif" style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-4)", lineHeight: 1.3 }}>{post.title}</h1>

                <div className="prose" style={{ marginBottom: "var(--space-4)" }}>
                    {post.content.split('\\n').map((para, i) => <p key={i}>{para}</p>)}
                </div>

                <div style={{ display: "flex", gap: "var(--space-2)", marginTop: "var(--space-4)" }}>
                    <Button variant="ghost" size="sm" className="reaction-btn"><Heart size={14} style={{ color: "#EF4444" }} /> <span style={{ fontSize: 12 }}>{post.reactions.heart}</span></Button>
                    <Button variant="ghost" size="sm" className="reaction-btn"><Rocket size={14} style={{ color: "#F59E0B" }} /> <span style={{ fontSize: 12 }}>{post.reactions.rocket}</span></Button>
                    <Button variant="ghost" size="sm" className="reaction-btn"><Laugh size={14} style={{ color: "#3B82F6" }} /> <span style={{ fontSize: 12 }}>{post.reactions.laugh}</span></Button>
                </div>
            </article>))}
        </main>
    </div>);
}
