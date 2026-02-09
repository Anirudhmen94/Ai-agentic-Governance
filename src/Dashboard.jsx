const summaryMetrics = [
  {
    label: "Total agent interactions today",
    value: "24,583",
    delta: "+12.4%",
  },
  {
    label: "Interactions by industry",
    value: "Finance · Healthcare · Retail",
    delta: "Top 3 sectors",
  },
  {
    label: "High-risk actions paused",
    value: "38",
    delta: "Escalations live",
  },
  {
    label: "Human approvals triggered",
    value: "142",
    delta: "90% resolved",
  },
  {
    label: "Data fields masked",
    value: "8,914",
    delta: "PII coverage",
  },
];

const trendData = [
  { day: "Mon", value: 120 },
  { day: "Tue", value: 180 },
  { day: "Wed", value: 150 },
  { day: "Thu", value: 210 },
  { day: "Fri", value: 240 },
  { day: "Sat", value: 200 },
  { day: "Sun", value: 260 },
];

const industryBreakdown = [
  { name: "Financial Services", value: "41%" },
  { name: "Healthcare", value: "27%" },
  { name: "Retail", value: "19%" },
  { name: "Manufacturing", value: "13%" },
];

export default function Dashboard() {
  const maxTrendValue = Math.max(...trendData.map((item) => item.value));

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <div>
          <p className="eyebrow">AI Agent Governance Platform</p>
          <h1>Dashboard</h1>
          <p className="subtitle">
            Enterprise visibility into agent activity, controls, and compliance.
          </p>
        </div>
        <div className="header__actions">
          <button className="button button--ghost">Export report</button>
          <button className="button button--primary">View live policies</button>
        </div>
      </header>

      <section className="metrics-grid">
        {summaryMetrics.map((metric) => (
          <article key={metric.label} className="metric-card">
            <p className="metric-card__label">{metric.label}</p>
            <p className="metric-card__value">{metric.value}</p>
            <p className="metric-card__delta">{metric.delta}</p>
            <p className="metric-card__placeholder">Live value placeholder</p>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="panel">
          <div className="panel__header">
            <div>
              <h2>Agent interaction trends</h2>
              <p className="panel__subtitle">Daily interactions across all regions</p>
            </div>
            <span className="chip">Last 7 days</span>
          </div>
          <div className="chart">
            {trendData.map((item) => (
              <div key={item.day} className="chart__bar">
                <div
                  className="chart__bar-fill"
                  style={{ height: `${(item.value / maxTrendValue) * 100}%` }}
                />
                <span>{item.day}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel__header">
            <div>
              <h2>Interactions by industry</h2>
              <p className="panel__subtitle">Where governed agents are most active</p>
            </div>
            <span className="chip">Mock data</span>
          </div>
          <div className="industry-list">
            {industryBreakdown.map((industry) => (
              <div key={industry.name} className="industry-item">
                <div>
                  <p className="industry-name">{industry.name}</p>
                  <p className="industry-meta">Live distribution placeholder</p>
                </div>
                <span className="industry-value">{industry.value}</span>
              </div>
            ))}
          </div>
          <div className="panel__footer">
            <div>
              <p className="footer-label">Model governance status</p>
              <p className="footer-value">Compliant · 0 critical alerts</p>
            </div>
            <button className="button button--ghost">Review audits</button>
          </div>
        </article>
      </section>
    </div>
  );
}
