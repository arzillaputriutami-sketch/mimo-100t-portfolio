export interface Submission {
  id: string
  project: string
  scenario: string
  title: string
  shortDesc: string
  detailedDesc: string
  tools: string[]
  models: string[]
  theme: string
  dashboardType: string
  metrics: { label: string; value: string; trend: 'up' | 'down' | 'stable' }[]
  agentOutputs: { title: string; content: string; severity: 'info' | 'warning' | 'critical' }[]
}

export const submissions: Submission[] = [
  {
    id: 'defi-liquidation', project: 'defi-sentinel-swarm', scenario: 'liquidation-watch',
    title: 'Liquidation Risk Sentinel',
    shortDesc: 'AI-powered DeFi risk console that ranks wallets approaching liquidation and explains urgent intervention opportunities.',
    detailedDesc: 'Liquidation Risk Sentinel identifies wallets approaching liquidation by combining simulated lending positions, health factor movement, collateral volatility, and alert prioritization.',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'rose', dashboardType: 'risk',
    metrics: [{ label: "At-Risk Wallets", value: "1,247", trend: "up" }, { label: "Critical Alerts", value: "89", trend: "up" }, { label: "Avg Health Factor", value: "1.34", trend: "down" }, { label: "Prevented", value: "156", trend: "up" }],
    agentOutputs: [{ title: "Urgent: 5 wallets at immediate liquidation risk", content: "Agent detected 5 wallets with health factor below 1.1 on Aave V3.", severity: "critical" }, { title: "Collateral volatility spike detected", content: "ETH collateral volatility increased 340% in last 4 hours.", severity: "warning" }]
  },
  {
    id: 'defi-bridge', project: 'defi-sentinel-swarm', scenario: 'bridge-risk',
    title: 'Bridge Risk Monitor',
    shortDesc: 'Bridge monitoring agent that detects abnormal outflows, route concentration, and exploit-like liquidity movement.',
    detailedDesc: 'Bridge Risk Monitor detects abnormal liquidity movement and summarizes risk signals across bridge routes.',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'amber', dashboardType: 'risk',
    metrics: [{ label: "Routes Monitored", value: "34", trend: "stable" }, { label: "Abnormal Outflows", value: "12", trend: "up" }, { label: "TVL at Risk", value: "$847M", trend: "down" }, { label: "Alerts Today", value: "28", trend: "up" }],
    agentOutputs: [{ title: "Abnormal outflow on Arbitrum bridge", content: "Detected $12.4M outflow within 2 hours through a single route.", severity: "critical" }, { title: "Route concentration risk", content: "67% of today's bridge volume flowing through 2 routes.", severity: "warning" }]
  },
  {
    id: 'defi-whale', project: 'defi-sentinel-swarm', scenario: 'whale-anomaly',
    title: 'Whale Anomaly Detector',
    shortDesc: 'Whale intelligence dashboard that identifies unusual wallet movements and generates analyst-ready explanations.',
    detailedDesc: 'Whale Anomaly Detector identifies unusual wallet movements and generates analyst-ready explanations.',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'violet', dashboardType: 'intelligence',
    metrics: [{ label: "Whales Tracked", value: "2,340", trend: "stable" }, { label: "Unusual Moves", value: "47", trend: "up" }, { label: "Market Impact", value: "$234M", trend: "up" }, { label: "Dump Signals", value: "8", trend: "up" }],
    agentOutputs: [{ title: "Whale moving 15,000 ETH to exchange", content: "This whale has historically sold within 6 hours of exchange deposits.", severity: "warning" }, { title: "New whale accumulation detected", content: "3 previously dormant wallets accumulated 2,100 BTC over 48 hours.", severity: "info" }]
  },
  {
    id: 'chainops-rpc', project: 'chainops-autopilot', scenario: 'rpc-health',
    title: 'RPC Health Autopilot',
    shortDesc: 'AI incident triage for blockchain infrastructure — monitoring RPC latency, failure rates, and auto-remediation.',
    detailedDesc: 'RPC Health Autopilot tracks RPC endpoint health across multiple providers.',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'emerald', dashboardType: 'ops',
    metrics: [{ label: "Endpoints", value: "128", trend: "stable" }, { label: "Avg Latency", value: "45ms", trend: "down" }, { label: "Uptime (24h)", value: "99.7%", trend: "stable" }, { label: "Auto-Fixed", value: "23", trend: "up" }],
    agentOutputs: [{ title: "Alchemy Polygon endpoint degraded", content: "Latency spiked from 30ms to 890ms. Agent failed over to QuickNode backup.", severity: "warning" }, { title: "Remediation completed", content: "Infura Ethereum mainnet had 2.3% error rate spike. Restored 0.1%.", severity: "info" }]
  },
  {
    id: 'chainops-gas', project: 'chainops-autopilot', scenario: 'gas-spike-response',
    title: 'Gas Spike Response Agent',
    shortDesc: 'Gas spike detection and transaction routing strategy for cost-optimized blockchain operations.',
    detailedDesc: 'Gas Spike Response Agent detects abnormal gas price movements and recommends optimal transaction routing strategies.',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'sky', dashboardType: 'ops',
    metrics: [{ label: "Gas (Gwei)", value: "142", trend: "up" }, { label: "Spike Predicted", value: "Yes (2h)", trend: "up" }, { label: "Saved Today", value: "2.4 ETH", trend: "up" }, { label: "Txns Re-routed", value: "847", trend: "up" }],
    agentOutputs: [{ title: "Gas spike predicted in 2 hours", content: "NFT mint event detected on-chain. Agent recommends batching pending transactions now.", severity: "warning" }, { title: "L2 alternative suggested", content: "15 pending transactions eligible for Arbitrum execution. Saves 0.8 ETH.", severity: "info" }]
  },
  {
    id: 'chainops-node', project: 'chainops-autopilot', scenario: 'node-incident',
    title: 'Node Incident Commander',
    shortDesc: 'Validator and node outage triage with root cause analysis and automated recovery workflows.',
    detailedDesc: 'Node Incident Commander provides intelligent incident response for blockchain node operators.',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'cyan', dashboardType: 'incident',
    metrics: [{ label: "Nodes", value: "56", trend: "stable" }, { label: "Active Incidents", value: "3", trend: "down" }, { label: "MTTR (min)", value: "8.2", trend: "down" }, { label: "Uptime (30d)", value: "99.95%", trend: "stable" }],
    agentOutputs: [{ title: "Incident #247: Ethereum validator down", content: "Validator missed 4 attestations. Root cause: disk I/O saturation (98%).", severity: "critical" }, { title: "Post-incident analysis", content: "Validator recovered after disk cleanup. Total downtime: 6 minutes.", severity: "info" }]
  },
  {
    id: 'research-thesis', project: 'researchforge-agents', scenario: 'token-thesis',
    title: 'Token Thesis Builder',
    shortDesc: 'Automated token research report generation combining on-chain metrics, team analysis, and market positioning.',
    detailedDesc: 'Token Thesis Builder generates comprehensive token research reports.',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'indigo', dashboardType: 'research',
    metrics: [{ label: "Tokens Researched", value: "1,847", trend: "up" }, { label: "Theses Generated", value: "234", trend: "up" }, { label: "Avg Time", value: "4.2 min", trend: "down" }, { label: "Accuracy", value: "87%", trend: "up" }],
    agentOutputs: [{ title: "Thesis: ARB (Arbitrum)", content: "Strong fundamentals: 47% TVL growth QoQ. Risk: upcoming token unlock ($1.2B).", severity: "info" }, { title: "Research methodology validated", content: "Cross-referenced 12 data sources. Confidence score: 87%.", severity: "info" }]
  },
  {
    id: 'research-compare', project: 'researchforge-agents', scenario: 'protocol-compare',
    title: 'Protocol Comparison Lab',
    shortDesc: 'Multi-protocol comparison framework with AI-generated competitive analysis and market positioning insights.',
    detailedDesc: 'Protocol Comparison Lab enables side-by-side comparison of blockchain protocols.',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'teal', dashboardType: 'research',
    metrics: [{ label: "Protocols", value: "89", trend: "stable" }, { label: "Metrics Tracked", value: "47", trend: "up" }, { label: "Reports", value: "156", trend: "up" }, { label: "Data Sources", value: "12", trend: "stable" }],
    agentOutputs: [{ title: "Comparison: Aave vs Compound vs Morpho", content: "Aave leads TVL ($12.4B). Compound strongest institutional. Morpho highest growth.", severity: "info" }, { title: "Competitive moat analysis", content: "Aave cross-chain deployment creates network effect.", severity: "info" }]
  },
  {
    id: 'research-narrative', project: 'researchforge-agents', scenario: 'narrative-radar',
    title: 'Narrative Radar',
    shortDesc: 'Market narrative tracking system monitoring momentum shifts across DePIN, restaking, modular, and emerging themes.',
    detailedDesc: 'Narrative Radar tracks emerging and fading market narratives in crypto.',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'fuchsia', dashboardType: 'intelligence',
    metrics: [{ label: "Narratives", value: "23", trend: "up" }, { label: "Rising", value: "7", trend: "up" }, { label: "Fading", value: "4", trend: "down" }, { label: "Early Signals", value: "12", trend: "up" }],
    agentOutputs: [{ title: "Rising: AI Agent Infrastructure", content: "Momentum: 87/100. VC funding up 230% QoQ.", severity: "info" }, { title: "Fading: Restaking derivatives", content: "Momentum: 34/100. TVL declining 12% weekly.", severity: "warning" }]
  },
  {
    id: 'code-contract', project: 'codebase-doctor-swarm', scenario: 'contract-review',
    title: 'Smart Contract Review Doctor',
    shortDesc: 'Multi-agent vulnerability triage for smart contracts with severity classification and fix recommendations.',
    detailedDesc: 'Smart Contract Review Doctor uses specialized AI agents to perform comprehensive security reviews.',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'rose', dashboardType: 'incident',
    metrics: [{ label: "Contracts", value: "2,847", trend: "up" }, { label: "Vulns Found", value: "423", trend: "up" }, { label: "Critical", value: "67", trend: "down" }, { label: "Fix Rate", value: "94%", trend: "up" }],
    agentOutputs: [{ title: "Critical: Reentrancy in withdraw()", content: "Classic reentrancy pattern. Fix: Use ReentrancyGuard.", severity: "critical" }, { title: "Medium: Unchecked return value", content: "transfer() return value not checked. Fix: Use SafeERC20.", severity: "warning" }]
  },
  {
    id: 'code-dapp', project: 'codebase-doctor-swarm', scenario: 'dapp-quality',
    title: 'DApp Quality Agent',
    shortDesc: 'Frontend DApp quality analysis covering wallet UX, transaction error handling, and state management.',
    detailedDesc: 'DApp Quality Agent analyzes DApp frontends for Web3 UX issues.',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'lime', dashboardType: 'growth',
    metrics: [{ label: "DApps Analyzed", value: "189", trend: "up" }, { label: "UX Issues", value: "1,247", trend: "up" }, { label: "Critical Flows", value: "34", trend: "stable" }, { label: "Improvement", value: "+47%", trend: "up" }],
    agentOutputs: [{ title: "No error handling for failed txns", content: "Swap page shows generic error. Recommend: parse revert reason.", severity: "critical" }, { title: "Wallet disconnect state missing", content: "App crashes when wallet disconnects mid-session.", severity: "warning" }]
  },
  {
    id: 'code-refactor', project: 'codebase-doctor-swarm', scenario: 'refactor-planner',
    title: 'Repo Refactor Planner',
    shortDesc: 'Technical debt analysis with architecture visualization and AI-generated refactoring roadmaps.',
    detailedDesc: 'Repo Refactor Planner analyzes codebases for technical debt and optimization opportunities.',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'orange', dashboardType: 'research',
    metrics: [{ label: "Repos", value: "67", trend: "up" }, { label: "Debt Items", value: "342", trend: "down" }, { label: "Plans", value: "89", trend: "up" }, { label: "Debt Reduced", value: "34%", trend: "up" }],
    agentOutputs: [{ title: "High priority: Duplicate utilities", content: "23 duplicate functions across 4 packages. Consolidating reduces bundle by 15%.", severity: "warning" }, { title: "Circular dependencies", content: "packages/api ↔ packages/shared circular import. Extract shared types.", severity: "warning" }]
  },
  {
    id: 'wi-address', project: 'wallet-intel-copilot', scenario: 'address-risk-score',
    title: 'Address Risk Scorer',
    shortDesc: 'Score wallet addresses for risk based on transaction history, counterparty analysis, and on-chain behavior patterns.',
    detailedDesc: '多维度地址风险评分系统，结合交易历史、关联方分析和链上行为模式。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'violet', dashboardType: 'risk',
    metrics: [{ label: "Addresses Scored", value: "45,230", trend: "up" }, { label: "High Risk", value: "1,204", trend: "down" }, { label: "Avg Score", value: "72/100", trend: "stable" }, { label: "False Positives", value: "3.2%", trend: "down" }],
    agentOutputs: [{ title: "High-risk address detected in treasury", content: "Address 0x7a...4f linked to 3 known exploit contracts. Block immediately.", severity: "critical" }, { title: "Suspicious mixer interaction", content: "47 addresses interacted with Tornado Cash in last 24h.", severity: "warning" }]
  },
  {
    id: 'wi-flow', project: 'wallet-intel-copilot', scenario: 'fund-flow-tracer',
    title: 'Fund Flow Tracer',
    shortDesc: 'Trace fund flows across chains and protocols to identify source, destination, and intermediate hops.',
    detailedDesc: '跨链跨协议资金流追踪，识别资金来源、目的地和中间跳转。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'cyan', dashboardType: 'intelligence',
    metrics: [{ label: "Flows Traced", value: "8,947", trend: "up" }, { label: "Cross-Chain", value: "234", trend: "up" }, { label: "Avg Hops", value: "3.4", trend: "stable" }, { label: "Suspicious", value: "89", trend: "down" }],
    agentOutputs: [{ title: "Multi-hop fund flow identified", content: "Funds moved through 5 protocols across 3 chains before reaching mixer.", severity: "info" }, { title: "Circular flow detected", content: "Funds returning to origin address through proxy contracts.", severity: "warning" }]
  },
  {
    id: 'wi-approval', project: 'wallet-intel-copilot', scenario: 'approval-scanner',
    title: 'Approval Scanner',
    shortDesc: 'Scan and alert on dangerous token approvals, unlimited allowances, and revoke recommendations.',
    detailedDesc: '扫描危险代币授权、无限额度和撤销建议。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'amber', dashboardType: 'risk',
    metrics: [{ label: "Approvals Scanned", value: "123,456", trend: "up" }, { label: "Dangerous", value: "3,891", trend: "down" }, { label: "Revoked", value: "2,100", trend: "up" }, { label: "Avg Risk", value: "Low", trend: "stable" }],
    agentOutputs: [{ title: "Unlimited USDT approval to unknown contract", content: "Address 0x3f...9a has unlimited USDT approval to unverified contract. Revoke ASAP.", severity: "critical" }, { title: "Stale approvals detected", content: "12 approvals older than 1 year with unlimited allowance.", severity: "warning" }]
  },
  {
    id: 'dg-proposal', project: 'dao-governance-radar', scenario: 'proposal-trend',
    title: 'Proposal Trend Analyzer',
    shortDesc: 'Analyze DAO proposal trends, success rates, voter participation, and emerging governance patterns.',
    detailedDesc: '分析DAO提案趋势、成功率、投票参与度和治理模式。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'indigo', dashboardType: 'research',
    metrics: [{ label: "Proposals Analyzed", value: "4,567", trend: "up" }, { label: "Pass Rate", value: "67%", trend: "stable" }, { label: "Participation", value: "34%", trend: "up" }, { label: "Trending Topics", value: "12", trend: "up" }],
    agentOutputs: [{ title: "Proposal #234: Treasury diversification", content: "78% approval rate. 45M votes cast. Likely to pass in 48h.", severity: "info" }, { title: "Low participation trend", content: "Voter participation dropped 23% in last 3 proposals.", severity: "warning" }]
  },
  {
    id: 'dg-voting', project: 'dao-governance-radar', scenario: 'voting-power',
    title: 'Voting Power Monitor',
    shortDesc: 'Monitor voting power distribution, whale influence, and delegation concentration in DAOs.',
    detailedDesc: '监控投票权分布、巨鲸影响力和委托集中度。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'rose', dashboardType: 'intelligence',
    metrics: [{ label: "DAOs Monitored", value: "89", trend: "stable" }, { label: "Whale Influence", value: "45%", trend: "down" }, { label: "Delegation Rate", value: "67%", trend: "up" }, { label: "Active Voters", value: "12,340", trend: "up" }],
    agentOutputs: [{ title: "Single wallet controls 15% of votes", content: "0x8a...2d has delegated voting power from 2,340 addresses.", severity: "warning" }, { title: "Delegation competition increasing", content: "12 new delegate candidates emerged this week.", severity: "info" }]
  },
  {
    id: 'dg-delegate', project: 'dao-governance-radar', scenario: 'delegate-insight',
    title: 'Delegate Insight Agent',
    shortDesc: 'AI-powered delegate analysis covering voting patterns, alignment scores, and proposal engagement.',
    detailedDesc: 'AI驱动的代理人分析，覆盖投票模式、一致性评分和提案参与。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'teal', dashboardType: 'intelligence',
    metrics: [{ label: "Delegates Analyzed", value: "2,340", trend: "up" }, { label: "Alignment Score", value: "82%", trend: "stable" }, { label: "Active Delegates", value: "456", trend: "up" }, { label: "Proposal Engagement", value: "78%", trend: "up" }],
    agentOutputs: [{ title: "Top delegate analysis: DelegateX", content: "98% voting participation. 89% alignment with community sentiment.", severity: "info" }, { title: "Inactive delegate alert", content: "34 delegates missed last 5 votes. Consider re-delegation.", severity: "warning" }]
  },
  {
    id: 'at-position', project: 'agentic-trading-journal', scenario: 'position-summary',
    title: 'Position Summary Generator',
    shortDesc: 'Generate real-time position summaries across DEXs, lending protocols, and yield farms.',
    detailedDesc: '跨DEX、借贷协议和收益农场生成实时持仓摘要。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'emerald', dashboardType: 'growth',
    metrics: [{ label: "Positions Tracked", value: "5,678", trend: "up" }, { label: "Total Value", value: "$23.4M", trend: "up" }, { label: "Protocols", value: "34", trend: "stable" }, { label: "Avg PnL", value: "+12.3%", trend: "up" }],
    agentOutputs: [{ title: "Position summary: 23 active positions", content: "Total value: $23.4M. Best performer: ETH long (+45%). Worst: AAVE short (-12%).", severity: "info" }, { title: "Overexposure alert", content: "67% of portfolio concentrated in ETH derivatives.", severity: "warning" }]
  },
  {
    id: 'at-risk', project: 'agentic-trading-journal', scenario: 'risk-metrics',
    title: 'Risk Metrics Calculator',
    shortDesc: 'Calculate portfolio risk metrics including VaR, Sharpe ratio, max drawdown, and correlation analysis.',
    detailedDesc: '计算投资组合风险指标，包括VaR、夏普比率、最大回撤和相关性分析。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'sky', dashboardType: 'risk',
    metrics: [{ label: "VaR (95%)", value: "$45,230", trend: "down" }, { label: "Sharpe Ratio", value: "1.87", trend: "up" }, { label: "Max Drawdown", value: "-23%", trend: "stable" }, { label: "Correlation", value: "0.67", trend: "down" }],
    agentOutputs: [{ title: "Risk metrics update", content: "Portfolio VaR decreased 15%. Sharpe ratio improved to 1.87.", severity: "info" }, { title: "High correlation detected", content: "Top 3 positions correlation > 0.85. Diversification recommended.", severity: "warning" }]
  },
  {
    id: 'at-review', project: 'agentic-trading-journal', scenario: 'trade-review',
    title: 'Trade Review Agent',
    shortDesc: 'AI-powered trade review analyzing entry/exit timing, position sizing, and emotional decision patterns.',
    detailedDesc: 'AI驱动的交易复盘，分析进出场时机、仓位大小和情绪决策模式。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'orange', dashboardType: 'research',
    metrics: [{ label: "Trades Reviewed", value: "234", trend: "up" }, { label: "Win Rate", value: "67%", trend: "up" }, { label: "Avg Hold Time", value: "3.2 days", trend: "down" }, { label: "Emotional Score", value: "Low", trend: "stable" }],
    agentOutputs: [{ title: "Trade review: ETH long opened 2 days ago", content: "Entry timing: 8/10. Position sizing: 7/10. Exit plan: 9/10.", severity: "info" }, { title: "Emotional trading detected", content: "3 revenge trades identified in last week. Suggest cooling period.", severity: "warning" }]
  },
  {
    id: 'sc-vuln', project: 'smart-contract-war-room', scenario: 'vuln-scanner',
    title: 'Vulnerability Scanner',
    shortDesc: 'Automated vulnerability scanning for smart contracts covering common attack vectors and novel patterns.',
    detailedDesc: '智能合约自动化漏洞扫描，覆盖常见攻击向量和新型模式。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'rose', dashboardType: 'incident',
    metrics: [{ label: "Contracts Scanned", value: "12,345", trend: "up" }, { label: "Vulns Found", value: "890", trend: "down" }, { label: "Critical", value: "45", trend: "down" }, { label: "Scan Time", value: "2.3 min", trend: "down" }],
    agentOutputs: [{ title: "Critical: Flash loan attack vector", content: "Contract 0x4f...8b vulnerable to flash loan manipulation in price oracle.", severity: "critical" }, { title: "Medium: Integer overflow risk", content: "Unchecked arithmetic in reward calculation function.", severity: "warning" }]
  },
  {
    id: 'sc-upgrade', project: 'smart-contract-war-room', scenario: 'upgrade-diff',
    title: 'Upgrade Diff Analyzer',
    shortDesc: 'Analyze contract upgrade diffs to identify storage layout changes, new attack surfaces, and behavioral modifications.',
    detailedDesc: '分析合约升级差异，识别存储布局变化、新攻击面和行为修改。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'amber', dashboardType: 'incident',
    metrics: [{ label: "Upgrades Analyzed", value: "456", trend: "up" }, { label: "Breaking Changes", value: "23", trend: "down" }, { label: "Storage Conflicts", value: "5", trend: "stable" }, { label: "Warnings", value: "67", trend: "down" }],
    agentOutputs: [{ title: "Storage layout change detected", content: "V2 upgrade moves 'owner' slot. Existing storage will be corrupted.", severity: "warning" }, { title: "New function added: emergencyWithdraw", content: "No access control on new function. Verify intended behavior.", severity: "info" }]
  },
  {
    id: 'sc-exploit', project: 'smart-contract-war-room', scenario: 'exploit-response',
    title: 'Exploit Response Agent',
    shortDesc: 'Real-time exploit detection, response coordination, and post-mortem analysis for smart contract incidents.',
    detailedDesc: '实时漏洞检测、响应协调和事后分析。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'red', dashboardType: 'incident',
    metrics: [{ label: "Incidents Handled", value: "34", trend: "up" }, { label: "Avg Response", value: "4.2 min", trend: "down" }, { label: "Funds Saved", value: "$12.4M", trend: "up" }, { label: "Post-Mortems", value: "28", trend: "up" }],
    agentOutputs: [{ title: "ACTIVE EXPLOIT: Reentrancy on PoolX", content: "Estimated $2.3M at risk. Agent initiated emergency pause on affected contracts.", severity: "critical" }, { title: "Post-mortem published", content: "Root cause: unchecked return value. Fix deployed in 45 minutes.", severity: "info" }]
  },
  {
    id: 'og-user', project: 'onchain-growth-lab', scenario: 'user-metrics',
    title: 'User Metrics Tracker',
    shortDesc: 'Track user acquisition, retention, activation, and revenue metrics for Web3 applications.',
    detailedDesc: '追踪Web3应用的用户获取、留存、激活和收入指标。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'lime', dashboardType: 'growth',
    metrics: [{ label: "DAU", value: "23,456", trend: "up" }, { label: "Retention (7d)", value: "45%", trend: "up" }, { label: "Activation Rate", value: "67%", trend: "stable" }, { label: "Revenue/User", value: "$2.34", trend: "up" }],
    agentOutputs: [{ title: "User metrics update", content: "DAU increased 23% this week. Retention improved from 38% to 45%.", severity: "info" }, { title: "Churn spike detected", content: "12% increase in user churn on mobile platform.", severity: "warning" }]
  },
  {
    id: 'og-retention', project: 'onchain-growth-lab', scenario: 'retention-analysis',
    title: 'Retention Analyzer',
    shortDesc: 'Deep retention analysis covering cohort behavior, churn prediction, and re-engagement strategies.',
    detailedDesc: '深度留存分析，覆盖群组行为、流失预测和再参与策略。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'fuchsia', dashboardType: 'growth',
    metrics: [{ label: "Cohorts Analyzed", value: "89", trend: "up" }, { label: "Churn Rate", value: "12%", trend: "down" }, { label: "Re-engaged", value: "2,340", trend: "up" }, { label: "LTV", value: "$45.67", trend: "up" }],
    agentOutputs: [{ title: "Cohort analysis: Week 12 users", content: "45% Day 7 retention. Top re-engagement trigger: push notifications.", severity: "info" }, { title: "High churn in premium users", content: "Premium tier churn increased 34%. Investigate feature gaps.", severity: "warning" }]
  },
  {
    id: 'og-funnel', project: 'onchain-growth-lab', scenario: 'funnel-optimizer',
    title: 'Funnel Optimizer',
    shortDesc: 'Optimize conversion funnels by identifying drop-off points and recommending UX improvements.',
    detailedDesc: '通过识别流失点和推荐UX改进来优化转化漏斗。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'indigo', dashboardType: 'growth',
    metrics: [{ label: "Funnels Tracked", value: "34", trend: "stable" }, { label: "Conversion Rate", value: "23%", trend: "up" }, { label: "Drop-off Points", value: "12", trend: "down" }, { label: "A/B Tests", value: "45", trend: "up" }],
    agentOutputs: [{ title: "Funnel optimization: Onboarding", content: "Step 3 (wallet connect) has 45% drop-off. Recommend: simplify flow.", severity: "info" }, { title: "Conversion decline detected", content: "Checkout funnel conversion dropped 12% after UI update.", severity: "warning" }]
  },
  {
    id: 'as-eligibility', project: 'airdrop-sybil-inspector', scenario: 'eligibility-scorer',
    title: 'Eligibility Scorer',
    shortDesc: 'Score wallet eligibility for airdrops based on activity patterns, holding history, and engagement metrics.',
    detailedDesc: '基于活动模式、持仓历史和参与指标为钱包空投资格评分。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'violet', dashboardType: 'intelligence',
    metrics: [{ label: "Wallets Scored", value: "234,567", trend: "up" }, { label: "Eligible", value: "45,230", trend: "up" }, { label: "Avg Score", value: "78/100", trend: "stable" }, { label: "Sybil Flagged", value: "12,340", trend: "down" }],
    agentOutputs: [{ title: "Eligibility scoring complete", content: "45,230 wallets qualify for airdrop. Top 1% scored above 95.", severity: "info" }, { title: "Low activity wallets", content: "34% of eligible wallets have <5 transactions in last 90 days.", severity: "warning" }]
  },
  {
    id: 'as-sybil', project: 'airdrop-sybil-inspector', scenario: 'sybil-detection',
    title: 'Sybil Detection Agent',
    shortDesc: 'Detect sybil clusters using graph analysis, behavioral fingerprinting, and funding pattern recognition.',
    detailedDesc: '使用图分析、行为指纹和资金模式识别检测女巫集群。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'teal', dashboardType: 'risk',
    metrics: [{ label: "Clusters Detected", value: "890", trend: "down" }, { label: "Avg Cluster Size", value: "12.3", trend: "down" }, { label: "False Positive", value: "2.1%", trend: "down" }, { label: "Blocked", value: "12,340", trend: "up" }],
    agentOutputs: [{ title: "Large sybil cluster detected", content: "234 wallets linked to single funding source. All controlled by same entity.", severity: "critical" }, { title: "Behavioral similarity alert", content: "47 wallets show 98% similar transaction patterns.", severity: "warning" }]
  },
  {
    id: 'as-claim', project: 'airdrop-sybil-inspector', scenario: 'claim-monitor',
    title: 'Claim Monitor',
    shortDesc: 'Monitor airdrop claiming patterns, detect bots, and optimize claim distribution strategies.',
    detailedDesc: '监控空投领取模式、检测机器人并优化分发策略。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'emerald', dashboardType: 'intelligence',
    metrics: [{ label: "Claims Monitored", value: "567,890", trend: "up" }, { label: "Bot Detected", value: "23,456", trend: "down" }, { label: "Claim Rate", value: "67%", trend: "stable" }, { label: "Avg Claim Time", value: "2.3 days", trend: "down" }],
    agentOutputs: [{ title: "Claim monitoring: Phase 2 airdrop", content: "234,567 claims processed. 89% organic claims. Bot activity decreased.", severity: "info" }, { title: "Claim spike detected", content: "15,000 claims in 1 hour from similar IP ranges.", severity: "warning" }]
  },
  {
    id: 'nm-floor', project: 'nft-market-intelligence', scenario: 'floor-tracking',
    title: 'Floor Price Tracker',
    shortDesc: 'Track NFT floor prices across collections with trend analysis, wash trading detection, and arbitrage alerts.',
    detailedDesc: '追踪NFT地板价，包含趋势分析、刷量检测和套利警报。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'sky', dashboardType: 'intelligence',
    metrics: [{ label: "Collections", value: "234", trend: "stable" }, { label: "Floor Alerts", value: "456", trend: "up" }, { label: "Wash Trading", value: "12%", trend: "down" }, { label: "Arbitrage Ops", value: "34", trend: "up" }],
    agentOutputs: [{ title: "Floor price alert: Bored Apes", content: "Floor dropped 23% in 24h. Historical buying opportunity detected.", severity: "info" }, { title: "Wash trading detected", content: "Collection XYZ has 45% wash trading volume.", severity: "warning" }]
  },
  {
    id: 'nm-whale', project: 'nft-market-intelligence', scenario: 'whale-hunter',
    title: 'Whale Hunter',
    shortDesc: 'Identify NFT whale wallets, track their acquisition patterns, and predict market-moving purchases.',
    detailedDesc: '识别NFT巨鲸钱包，追踪其购买模式并预测市场动向。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'violet', dashboardType: 'intelligence',
    metrics: [{ label: "Whales Tracked", value: "1,234", trend: "stable" }, { label: "Predictions", value: "89", trend: "up" }, { label: "Accuracy", value: "78%", trend: "up" }, { label: "Alerts Today", value: "23", trend: "up" }],
    agentOutputs: [{ title: "Whale alert: 0x3f...9a bought 5 CryptoPunks", content: "Historical pattern suggests 67% probability of floor price increase.", severity: "info" }, { title: "Whale selling pressure", content: "Top whale liquidated 12 NFTs worth $2.3M in 24h.", severity: "warning" }]
  },
  {
    id: 'nm-rarity', project: 'nft-market-intelligence', scenario: 'rarity-evaluator',
    title: 'Rarity Evaluator',
    shortDesc: 'Evaluate NFT rarity scores, identify undervalued assets, and generate investment recommendations.',
    detailedDesc: '评估NFT稀有度评分，识别被低估资产并生成投资建议。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'indigo', dashboardType: 'research',
    metrics: [{ label: "NFTs Evaluated", value: "456,789", trend: "up" }, { label: "Undervalued", value: "2,340", trend: "up" }, { label: "Avg ROI", value: "+34%", trend: "up" }, { label: "Accuracy", value: "82%", trend: "stable" }],
    agentOutputs: [{ title: "Rarity evaluation: Azuki #2345", content: "Rarity score: 95/100. Current price: 12 ETH. Estimated value: 18 ETH.", severity: "info" }, { title: "Overvalued collection alert", content: "Collection ABC trading 3x above rarity-adjusted floor.", severity: "warning" }]
  },
  {
    id: 'vo-uptime', project: 'validator-ops-console', scenario: 'uptime-monitor',
    title: 'Uptime Monitor',
    shortDesc: 'Monitor validator uptime across networks with automated alerting, performance tracking, and SLA reporting.',
    detailedDesc: '跨网络监控验证器在线率，包含自动告警、性能跟踪和SLA报告。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'emerald', dashboardType: 'ops',
    metrics: [{ label: "Validators", value: "567", trend: "stable" }, { label: "Uptime (30d)", value: "99.97%", trend: "stable" }, { label: "Missed Slots", value: "23", trend: "down" }, { label: "SLA Breach", value: "0", trend: "stable" }],
    agentOutputs: [{ title: "Uptime report: All validators healthy", content: "Average uptime: 99.97%. Best performer: validator-42 (100%).", severity: "info" }, { title: "Performance degradation", content: "Validator-12 missed 5 attestations in 1 hour. Check network connectivity.", severity: "warning" }]
  },
  {
    id: 'vo-commission', project: 'validator-ops-console', scenario: 'commission-optimizer',
    title: 'Commission Optimizer',
    shortDesc: 'Optimize validator commission rates based on market conditions, competition, and staker demand.',
    detailedDesc: '根据市场条件、竞争和质押者需求优化验证器佣金率。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'amber', dashboardType: 'ops',
    metrics: [{ label: "Validators", value: "567", trend: "stable" }, { label: "Avg Commission", value: "5.2%", trend: "down" }, { label: "Competitive Score", value: "87/100", trend: "up" }, { label: "Revenue Impact", value: "+12%", trend: "up" }],
    agentOutputs: [{ title: "Commission optimization suggestion", content: "Reduce commission from 7% to 5% to attract 34% more delegators.", severity: "info" }, { title: "Market rate change detected", content: "Average commission dropped 0.5% this week. Re-evaluate rates.", severity: "warning" }]
  },
  {
    id: 'vo-slashing', project: 'validator-ops-console', scenario: 'slashing-alert',
    title: 'Slashing Alert',
    shortDesc: 'Real-time slashing risk monitoring with predictive alerts, insurance tracking, and incident response.',
    detailedDesc: '实时罚没风险监控，包含预测告警、保险跟踪和事件响应。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'red', dashboardType: 'risk',
    metrics: [{ label: "Validators Monitored", value: "1,234", trend: "stable" }, { label: "Risk Score", value: "Low", trend: "stable" }, { label: "Insurance Coverage", value: "$12.4M", trend: "up" }, { label: "Alerts (24h)", value: "3", trend: "down" }],
    agentOutputs: [{ title: "Slashing risk: Validator-67", content: "Double vote detected. Immediate action required to prevent slashing.", severity: "critical" }, { title: "Insurance claim processed", content: "Slashing event on network X. Insurance payout: $45,678.", severity: "info" }]
  },
  {
    id: 'cs-triage', project: 'crypto-support-agent', scenario: 'ticket-triage',
    title: 'Ticket Triage',
    shortDesc: 'AI-powered ticket triage for crypto support with priority scoring, sentiment analysis, and auto-routing.',
    detailedDesc: 'AI驱动的加密支持工单分类，包含优先级评分、情感分析和自动路由。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'cyan', dashboardType: 'growth',
    metrics: [{ label: "Tickets/Day", value: "2,340", trend: "up" }, { label: "Avg Resolution", value: "2.3 hours", trend: "down" }, { label: "Auto-Routed", value: "89%", trend: "up" }, { label: "Satisfaction", value: "4.5/5", trend: "stable" }],
    agentOutputs: [{ title: "Ticket triage: High priority batch", content: "12 critical tickets auto-routed to senior team. Avg resolution: 45 min.", severity: "info" }, { title: "Sentiment spike detected", content: "Negative sentiment increased 34% around withdrawal delays.", severity: "warning" }]
  },
  {
    id: 'cs-faq', project: 'crypto-support-agent', scenario: 'faq-responder',
    title: 'FAQ Responder',
    shortDesc: 'AI-generated FAQ responses with context awareness, multi-language support, and knowledge base updates.',
    detailedDesc: 'AI生成FAQ响应，包含上下文感知、多语言支持和知识库更新。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'lime', dashboardType: 'growth',
    metrics: [{ label: "FAQs Handled", value: "12,345", trend: "up" }, { label: "Accuracy", value: "94%", trend: "up" }, { label: "Languages", value: "23", trend: "stable" }, { label: "KB Updates", value: "45", trend: "up" }],
    agentOutputs: [{ title: "FAQ response: 'How to stake ETH?'", content: "Generated accurate response with step-by-step guide and links.", severity: "info" }, { title: "Knowledge gap detected", content: "15 questions about new L2 bridge have no FAQ entry. Adding now.", severity: "warning" }]
  },
  {
    id: 'cs-escalation', project: 'crypto-support-agent', scenario: 'escalation-handler',
    title: 'Escalation Handler',
    shortDesc: 'Manage escalation workflows with severity classification, SLA tracking, and resolution coordination.',
    detailedDesc: '管理升级工作流，包含严重性分类、SLA跟踪和解决协调。',
    tools: ["Claude Code", "Cursor", "Windsurf"], models: ["Claude 系列", "MiMo 系列"],
    theme: 'orange', dashboardType: 'incident',
    metrics: [{ label: "Escalations", value: "234", trend: "down" }, { label: "Avg Resolution", value: "4.5 hours", trend: "down" }, { label: "SLA Met", value: "92%", trend: "up" }, { label: "Repeat Issues", value: "12%", trend: "down" }],
    agentOutputs: [{ title: "Escalation batch: Withdrawal delays", content: "45 tickets escalated regarding ETH withdrawal delays. Root cause: network congestion.", severity: "warning" }, { title: "Resolution summary", content: "23 escalations resolved this week. Top category: account recovery.", severity: "info" }]
  }
]

export function getSubmission(project: string, scenario: string): Submission | undefined {
  return submissions.find(s => s.project === project && s.scenario === scenario)
}

export function getAllRoutes(): { project: string; scenario: string }[] {
  return submissions.map(s => ({ project: s.project, scenario: s.scenario }))
}
