import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    posts: defineTable({ title: v.string(), content: v.string(), type: v.string(), status: v.string(), authorId: v.string(), publishedAt: v.optional(v.string()) }),
    categories: defineTable({ name: v.string(), color: v.string() }),
    subscribers: defineTable({ email: v.string(), status: v.string(), source: v.string(), joinedAt: v.string() }).index("by_email", ["email"]),
    reactions: defineTable({ postId: v.id("posts"), reactionType: v.string(), count: v.number() }).index("by_post", ["postId"])
});
