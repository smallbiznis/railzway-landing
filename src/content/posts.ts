export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string; // Markdown string
  tags: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "why-deterministic-billing",
    title: "The Case for Deterministic Billing",
    excerpt: "Why we built a billing engine based on financial truth, not convenience.",
    date: "January 18, 2026",
    readTime: "5 min read",
    tags: ["Engineering", "Billing"],
    content: `
# The Hidden Cost of "Approximate" Billing

In most SaaS systems, billing is an afterthought. It's often a cron job that runs once a month, queries a mutable database, and hopes for the best.

"SELECT count(*) FROM users WHERE created_at > last_month"

This works fine for 100 users. It fails catastrophically at 10,000 users. What if a user was deleted? What if the cron job failed halfway? What if the timezone changed?

Build on **Financial Truth**.

## The Railzway Philosophy

Railzway treats billing as a ledger. Every usage event is immutable. Every rating action is traceable.

1.  **Immutability**: Once an event is ingested, it cannot be changed, only corrected by offset events.
2.  **Idempotency**: Re-running the billing pipeline produces the exact same invoice, down to the cent.
3.  **Auditability**: You can trace every cent on an invoice back to the specific raw events that caused it.


This isn't just "better engineering". It's the difference between a billing dispute that takes weeks to resolve and one that takes seconds to explain.

## The Proof is in the Code

Railzway is Open Source. You don't have to take our word for it—you can verify the engine's behavior yourself.

Take our **Usage Event Model** as an example. Every event uses a \`Snowflake ID\` for sortable uniqueness and enforcing an \`IdempotencyKey\` at the database level.

[View Source on GitHub](https://github.com/smallbiznis/railzway/blob/main/internal/usage/domain/models.go)

\`\`\`go
// UsageEvent stores a single unit of metered activity.
type UsageEvent struct {
    ID         snowflake.ID \`gorm:"primaryKey" json:"id"\`
    // ...
    IdempotencyKey string    \`gorm:"type:text" json:"idempotency_key"\`
    SnapshotAt     *time.Time \`gorm:"" json:"-"\` 
}
\`\`\`

By snapshotting the subscription state (\`SnapshotAt\`) at the exact moment of ingestion, we guarantee that future plan changes never retroactively alter past usage records.
    `,
  },
];
