export default {
  title: "Introducing Active CPU pricing for Fluid compute",
  excerpt:
    "Fluid compute exists for a new class of workloads. I/O bound backends like AI inference, agents, MCP servers, and anything that needs to scale instantly, but often remains idle between operations.",
  author: {
    name: "Arihant Jain",
    role: "Product",
    avatar: "/arihant.jpeg",
  },
  date: "Jun 25, 2025",
  readTime: "5 min read",
  icon: "💻",
  category: "Company News",
  content: (
    <div className="space-y-6">
      <p className="">
        Fluid compute exists for a new class of workloads. I/O bound backends like AI inference, agents, MCP servers,
        and anything that needs to scale instantly, but often remains idle between operations.
      </p>

      <p>
        These workloads do not follow traditional, quick request-response patterns. They're long-running, unpredictable,
        and use cloud resources differently. They often remain idle between operations, but need to scale instantly when
        demand spikes.
      </p>
    </div>
  ),
}
