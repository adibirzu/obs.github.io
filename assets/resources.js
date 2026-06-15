/* =========================================================================
   Shared "Learn more" resource catalog.
   Sourced from oracle-devrel/technology-engineering/observability-and-management
   plus the OCI Observability blog and team Medium publications.
   Consumed by both the guide (assets/guide.js) and the launchpad
   (assets/launchpad-resources.js).
   ========================================================================= */
window.OBS_RESOURCES = [
  {
    key: "monitoring", label: "OCI Monitoring", comp: "metric", module: "module-monitoring",
    items: [
      { title: "Custom metrics with the Python SDK — service-limit monitoring", url: "https://github.com/oracle-devrel/technology-engineering/tree/main/observability-and-management/oci-monitoring/custom-metrics/custom-metric-python-SDK-services-limit-monitoring", summary: "A custom metric namespace that tracks OCI service limits so alarms fire before a limit is reached." },
      { title: "Custom metrics with OCI Functions — service-limit monitoring", url: "https://github.com/oracle-devrel/technology-engineering/tree/main/observability-and-management/oci-monitoring/custom-metrics/custom-metric-FN-services-limit-monitoring", summary: "An OCI Function publishes service-limit usage as a custom metric for proactive alarms and notifications." },
      { title: "Customised alarm notification in OCI", url: "https://karthicin.medium.com/customised-alarm-notification-in-oci-e5b367ca20bc", summary: "Shape OCI Monitoring alarm notifications into clearer, more actionable alerts." },
      { title: "OCI Metrics Report", url: "https://github.com/adibirzu/oci-metrics-report", summary: "Open-source tool for extracting and reporting on OCI Monitoring metrics across a tenancy." },
    ],
  },
  {
    key: "logging", label: "OCI Logging", comp: "log", module: "module-loganalytics",
    items: [
      { title: "Stream OCI logs to Splunk", url: "https://learnoci.cloud/stream-oci-logs-to-splunk-v9-1-c71c93e470fe", summary: "Forward OCI Logging service logs into Splunk for centralized analysis." },
      { title: "OKE log collection using OCI Logging", url: "https://learnoci.cloud/oke-log-collection-using-oci-logging-3f1e732928b3", summary: "Collect logs from Oracle Kubernetes Engine workloads with the OCI Logging service." },
      { title: "Ingest Data Safe audit events in OCI Logging", url: "https://learnoci.cloud/how-to-ingest-data-safe-audit-events-in-oci-logging-efc1d65eefad", summary: "Route Oracle Data Safe audit events into OCI Logging for unified monitoring." },
      { title: "Use auditd logs in OCI with the Logging service", url: "https://learnoci.cloud/use-auditd-logs-in-oci-with-logging-service-5caa13719315", summary: "Collect Linux auditd security logs from OCI instances into OCI Logging." },
    ],
  },
  {
    key: "logging-analytics", label: "OCI Logging Analytics", comp: "analyze", module: "module-loganalytics",
    items: [
      { title: "Mastering cloud cost control with OCI Log Analytics", url: "https://github.com/oracle-devrel/technology-engineering/tree/main/observability-and-management/logging-analytics/finops", summary: "Import the FinOps FOCUS cost-and-usage report into Logging Analytics for custom spend dashboards." },
      { title: "Inject Oracle Fusion HCM logs into Logging Analytics", url: "https://github.com/oracle-devrel/technology-engineering/tree/main/observability-and-management/logging-analytics/fusion-hcm-to-la", summary: "Use predefined parsers and sources to ingest Fusion HCM application logs via REST API." },
      { title: "OCI Logging Analytics demo", url: "https://www.youtube.com/watch?v=1bJb92put4k", summary: "Index, search, analyse, and visualise log data with Oracle Logging Analytics." },
      { title: "Logging Analytics security dashboards", url: "https://github.com/adibirzu/logan-security-dashboard", summary: "Open-source prebuilt security dashboards for OCI Logging Analytics." },
    ],
  },
  {
    key: "apm", label: "OCI Application Performance Monitoring", comp: "apm", module: "module-apm",
    items: [
      { title: "How to get started with OCI APM", url: "https://github.com/oracle-devrel/technology-engineering/tree/main/observability-and-management/application-performance-monitoring/How%20to%20Use%20APM", summary: "A three-part series on dashboards, alarms, availability monitors, and the Trace Explorer." },
      { title: "Connect OCI APM with Logging Analytics", url: "https://blogs.oracle.com/observability/post/connect-apm-with-log-analytics-and-more", summary: "Link APM traces with Logging Analytics and create dynamic links for faster troubleshooting." },
      { title: "Use OCI APM in Kubernetes for a Java application", url: "https://karthicin.medium.com/how-to-use-oci-apm-in-kubernetes-environment-for-java-application-56de2c770a69", summary: "Instrument and trace a Java application running on Kubernetes with OCI APM." },
      { title: "Store APM synthetic monitor error logs in OCI Logging", url: "https://karthicin.medium.com/storing-apm-synthetic-monitor-error-logs-in-oci-logging-c2296ce6072f", summary: "Capture and store error logs from APM synthetic availability monitors in OCI Logging." },
    ],
  },
  {
    key: "database-management", label: "OCI Database Management", comp: "db", module: "module-dbmgmt",
    items: [
      { title: "OCI Database Management demo", url: "https://www.youtube.com/watch?v=3k9jrkOlBkc", summary: "Performance diagnostics and fleet monitoring for Oracle Databases." },
      { title: "Database Management add-ons for OCI Landing Zone", url: "https://github.com/oracle-devrel/technology-engineering/tree/main/observability-and-management/database-management/LZ-addons", summary: "Step-by-step guides and IaC add-ons to enable Database Management within a Landing Zone." },
      { title: "Enable observability for an OCI-native database deployment", url: "https://medium.com/@erikasciunzi/enable-observability-for-oci-native-database-deploy-235484953e46", summary: "Turn on OCI Observability and Management for natively deployed OCI databases." },
      { title: "OCI Database Management — PDB support and new features", url: "https://learnoci.cloud/oci-database-management-new-features-announced-f9991cba2cc2", summary: "Review newly announced features, including monitoring for pluggable databases (PDBs)." },
    ],
  },
  {
    key: "operations-insights", label: "OCI Ops Insights", comp: "insight", module: "module-opsinsights",
    items: [
      { title: "OCI Ops Insights demo", url: "https://www.youtube.com/watch?v=Y45kPRn_c7s", summary: "Resource-capacity analysis, forecasting, and SQL performance across a database fleet." },
      { title: "Ops Insights add-ons for OCI Landing Zone", url: "https://github.com/oracle-devrel/technology-engineering/tree/main/observability-and-management/operations-insights/LZ-addons", summary: "Step-by-step guides and IaC add-ons to enable Operations Insights within a Landing Zone." },
      { title: "Enable Ops Insights on Autonomous Database Serverless", url: "https://medium.com/@rishabhghosh24/enable-oci-ops-insight-on-oracle-autonomous-database-serverless-61efab78f927", summary: "Enable Operations Insights for Oracle Autonomous Database Serverless instances." },
      { title: "Enable Operations Insights for Oracle DBCS", url: "https://learnoci.cloud/how-to-enable-operations-insight-for-oracle-dbcs-51dac10da833", summary: "Enable Operations Insights for Oracle Database Cloud Service databases." },
    ],
  },
  {
    key: "shared", label: "Hybrid and shared assets", comp: "agent", module: "module-dbmgmt",
    items: [
      { title: "Enable O&M for external databases with Terraform", url: "https://github.com/oracle-devrel/technology-engineering/tree/main/observability-and-management/shared-assets/external-database-enablement", summary: "Terraform asset enabling Database Management, Ops Insights, and Stack Monitoring for many external databases from JSON input." },
    ],
  },
  {
    key: "cost", label: "Cost and usage", comp: null, module: "module-home",
    items: [
      { title: "Tenancy usage and cost reports (Usage2ADW)", url: "https://github.com/oracle-devrel/technology-engineering/tree/main/observability-and-management/tenancy-usage-cost-reports", summary: "Load OCI usage and cost reports into Autonomous Data Warehouse for granular spend analysis and OAC visualisations." },
    ],
  },
];
