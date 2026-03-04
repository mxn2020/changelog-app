import { Users, Mail, Download, Search } from "lucide-react";
import { Button, Card, Input, Badge } from "@geenius-ui/react-css";

const subs = [
    { id: "1", email: "mehdi@openclaw.dev", source: "Widget", date: "Oct 20, 2026", status: "Active" },
    { id: "2", email: "alex@example.com", source: "Manual", date: "Oct 18, 2026", status: "Active" },
    { id: "3", email: "sarah@startup.io", source: "API", date: "Oct 15, 2026", status: "Unsubscribed" }
];

export default function SubscribersPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 className="serif" style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Users style={{ color: "var(--color-accent-primary)" }} /> Subscribers</h1>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <Button variant="outline" icon={<Download size={16} />}>Export CSV</Button>
                <Button variant="primary" icon={<Mail size={16} />}>New Campaign</Button>
            </div>
        </div>

        <Card padding="sm" className="search-card">
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <Search size={18} style={{ color: "var(--color-text-tertiary)", marginLeft: "var(--space-2)" }} />
                <Input type="text" placeholder="Search emails..." style={{ border: "none", background: "transparent", width: "100%", boxShadow: "none" }} />
            </div>
        </Card>

        <Card padding="none" className="subscribers-table-card">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-secondary)" }}>
                        <th style={{ textAlign: "left", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 600 }}>Email Address</th>
                        <th style={{ textAlign: "left", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 600 }}>Source</th>
                        <th style={{ textAlign: "left", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 600 }}>Date Joined</th>
                        <th style={{ textAlign: "right", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 600 }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {subs.map(s => (<tr key={s.id} style={{ borderBottom: "1px solid var(--color-border)" }}>
                        <td style={{ padding: "16px", fontWeight: 500 }}>{s.email}</td>
                        <td style={{ padding: "16px", color: "var(--color-text-secondary)", fontSize: "14px" }}>{s.source}</td>
                        <td style={{ padding: "16px", color: "var(--color-text-secondary)", fontSize: "14px" }}>{s.date}</td>
                        <td style={{ padding: "16px", textAlign: "right" }}>
                            <Badge variant={s.status === "Active" ? "success" : "secondary"}>{s.status}</Badge>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </Card>
    </div>);
}
