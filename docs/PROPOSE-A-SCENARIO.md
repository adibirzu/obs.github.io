# Propose a monitoring scenario

The Observability Atlas grows by adding **scenarios** — concrete, reusable answers to "how do I observe _this_ on OCI?". A scenario maps a real workload to the L0 → L4 ladder, names the services to enable, the signals to watch, and how it attaches to a Landing Zone.

Anyone can propose one. This page explains what a good scenario contains and how to submit it.

## What a scenario is

A scenario is **service-oriented**, not tool-oriented. It starts from a business service or workload and works down to telemetry — the same discipline the [design guide](observability-design-guide.md) describes. A strong scenario:

- Targets a clear workload (e.g. "Oracle E-Business Suite on Compute", "a CrewAI multi-agent app on OKE").
- Picks an **entry level** (L0–L4) and a **path** through the ladder — only the services that workload needs.
- Frames each service as a **Landing Zone add-on**: what enables, after the OE Landing Zone is live, with no rebuild.
- States the **signals**, **alarms**, and **dashboards** that make it actionable, and a **runbook** for the top incident.
- Avoids anti-patterns: dashboards without owners, alerts without runbooks, alerting on symptoms without business context.

## Scenario template

Copy this into an issue or PR and fill it in. Keep it concrete; cite real OCI services and MQL/OCL where useful.

```markdown
### Scenario: <short name>

**Workload / business service:** <what runs, where — Compute / OKE / Exadata / hybrid / agentic>
**Closest finder pattern:** <traditional app | database-centric | OKE | Oracle apps | hybrid | agentic>
**Entry level:** <L0 | L1 | L2 | L3 | L4> — <one line on why to start here>

**Services to enable (in order), as Landing Zone add-ons**
| Level | Service | Why, for this workload | Enable after LZ via |
|---|---|---|---|
| L1 | OCI Monitoring | … | alarms + dashboards, no agent |
| L2 | Database Management | … | Basic/Full, private endpoint or Management Agent |
| …  | …               | … | … |

**Key signals**
- <metric / log / trace / database signal> — <why it matters> — <source service>

**Alarms (actionable only)**
- <condition> → severity <Sev 1–4> → topic <name> → runbook <link>

**Dashboards**
- <audience> — <what it shows> — <owner + review cadence>

**Runbook (top incident)**
- <symptom> → <triage steps> → <fix / escalation>

**Collection agent:** <Oracle Cloud Agent | Management Agent | Unified Monitoring Agent> — <why>
**Open-source / OTel angle (optional):** <Grafana/Prometheus/Tempo/Loki, OpenTelemetry GenAI, etc.>
**References:** <DevRel guide / blog / repo links>
```

## How to submit

**Option A — open an issue (easiest).** Use the [Monitoring scenario issue form](../../issues/new?template=monitoring-scenario.yml). It captures the same fields and is a good place to discuss before any code.

**Option B — open a pull request.** Two low-risk places to contribute data:

- **Add references for a service** — append to the matching group in [`assets/resources.js`](../assets/resources.js):
  ```js
  // inside the relevant group's items[] (guides) or projects[] (repos)
  { title: "…", url: "https://…", summary: "One sentence, ≤160 chars." }
  ```
- **Add a finder pattern** — add an entry to `PATTERNS` in [`assets/guide.js`](../assets/guide.js) with `detail`, `start`, `outcomes`, and a `path` of existing service ids (the keys of the `C` catalog).

Then run it locally (`python3 -m http.server 8000`) to confirm it renders, and note in the PR what you verified.

## Review checklist

Before a scenario is merged, it should satisfy:

- [ ] Starts from a workload, not a tool.
- [ ] Names a clear entry level and a minimal service path.
- [ ] Every service framed as an add-on that enables after the Landing Zone is live.
- [ ] Alarms are actionable and each has an owner + runbook.
- [ ] Dashboards have an audience and an owner.
- [ ] No secrets, OCIDs, public IPs, tenancy namespaces, or customer data in any example.
- [ ] Links resolve and are public.
