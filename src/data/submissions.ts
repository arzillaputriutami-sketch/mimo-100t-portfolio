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
    detailedDesc: 'Liquidation Risk Sentinel identifies wallets approaching liquidation by combining simulated lending positions, health factor movement, collateral volatility, and alert prioritization. The demo shows a liquidation queue ranked by urgency, wallet-level risk cards, and agent-generated intervention notes.',
    tools: ['Claude Code', 'Cursor', 'Windsurf'], models: ['Claude 系列', 'MiMo 系列'],
    theme: 'rose', dashboardType: 'risk',
    metrics: [
      { label: 'At-Risk Wallets', value: '1,247', trend: 'up' },
      { label: 'Critical Alerts', value: '89', trend: 'up' },
      { label: 'Avg Health Factor', value: '1.34', trend: 'down' },
      { label: 'Prevented', value: '156', trend: 'up' }
    ],
    agentOutputs: [
      { title: 'Urgent: 5 wallets at immediate liquidation risk', content: 'Agent detected 5 wallets with health factor below 1.1 on Aave V3. Largest position: 0x7a23...4f21 with $2.3M USDC collateral, $2.1M debt.', severity: 'critical' },
      { title: 'Collateral volatility spike detected', content: 'ETH collateral volatility increased 340% in last 4 hours. 23 wallets using ETH-only collateral now at elevated risk.', severity: 'warning' }
    ]
  },
  {
    id: 'defi-bridge', project: 'defi-sentinel-swarm', scenario: 'bridge-risk',
    title: 'Bridge Risk Monitor',
    shortDesc: 'Bridge monitoring agent that detects abnormal outflows, route concentration, and exploit-like liquidity movement.',
    detailedDesc: 'Bridge Risk Monitor detects abnormal liquidity movement and summarizes risk signals across bridge routes, outflows, and suspicious transaction patterns. It combines real-time bridge TVL tracking with anomaly detection to identify potential exploits.',
    tools: ['Claude Code', 'Cursor', 'Windsurf'], models: ['Claude 系列', 'MiMo 系列'],
    theme: 'amber', dashboardType: 'risk',
    metrics: [
      { label: 'Routes Monitored', value: '34', trend: 'stable' },
      { label: 'Abnormal Outflows', value: '12', trend: 'up' },
      { label: 'TVL at Risk', value: '$847M', trend: 'down' },
      { label: 'Alerts Today', value: '28', trend: 'up' }
    ],
    agentOutputs: [
      { title: 'Abnormal outflow on Arbitrum → Ethereum bridge', content: 'Detected $12.4M outflow within 2 hours through a single route. Pattern matches previous exploit signatures.', severity: 'critical' },
      { title: 'Route concentration risk', content: '67% of today\'s bridge volume flowing through 2 routes. If either fails, significant liquidity impact expected.', severity: 'warning' }
    ]
  },
  {
    id: 'defi-whale', project: 'defi-sentinel-swarm', scenario: 'whale-anomaly',
    title: 'Whale Anomaly Detector',
    shortDesc: 'Whale intelligence dashboard that identifies unusual wallet movements and generates analyst-ready explanations.',
    detailedDesc: 'Whale Anomaly Detector identifies unusual wallet movements and generates analyst-ready explanations of possible market impact. It tracks whale wallets across multiple chains and uses AI to explain the likely intent behind large transfers.',
    tools: ['Claude Code', 'Cursor', 'Windsurf'], models: ['Claude 系列', 'MiMo 系列'],
    theme: 'violet', dashboardType: 'intelligence',
    metrics: [
      { label: 'Whales Tracked', value: '2,340', trend: 'stable' },
      { label: 'Unusual Moves', value: '47', trend: 'up' },
      { label: 'Market Impact', value: '$234M', trend: 'up' },
      { label: 'Dump Signals', value: '8', trend: 'up' }
    ],
    agentOutputs: [
      { title: 'Whale 0x3f82...9a11 moving 15,000 ETH to exchange', content: 'This whale has historically sold within 6 hours of exchange deposits. Agent estimates 72% probability of sell-off within 24 hours.', severity: 'warning' },
      { title: 'New whale accumulation detected', content: '3 previously dormant wallets accumulated 2,100 BTC over 48 hours via OTC desks. Similar pattern preceded Q1 rally.', severity: 'info' }
    ]
  },
  {
    id: 'chainops-rpc', project: 'chainops-autopilot', scenario: 'rpc-health',
    title: 'RPC Health Autopilot',
    shortDesc: 'AI incident triage for blockchain infrastructure — monitoring RPC latency, failure rates, and auto-remediation.',
    detailedDesc: 'RPC Health Autopilot tracks RPC endpoint health across multiple providers, detects degradation patterns, and suggests remediation strategies before user impact. Features automatic failover and latency optimization.',
    tools: ['Claude Code', 'Cursor', 'Windsurf'], models: ['Claude 系列', 'MiMo 系列'],
    theme: 'emerald', dashboardType: 'ops',
    metrics: [
      { label: 'Endpoints', value: '128', trend: 'stable' },
      { label: 'Avg Latency', value: '45ms', trend: 'down' },
      { label: 'Uptime (24h)', value: '99.7%', trend: 'stable' },
      { label: 'Auto-Fixed', value: '23', trend: 'up' }
    ],
    agentOutputs: [
      { title: 'Alchemy Polygon endpoint degraded', content: 'Latency spiked from 30ms to 890ms. Agent automatically failed over to QuickNode backup. Estimated recovery: 15 minutes.', severity: 'warning' },
      { title: 'Remediation completed', content: 'Infura Ethereum mainnet had 2.3% error rate spike. Agent switched to Ankr primary, restored 0.1% error rate.', severity: 'info' }
    ]
  },
  {
    id: 'chainops-gas', project: 'chainops-autopilot', scenario: 'gas-spike-response',
    title: 'Gas Spike Response Agent',
    shortDesc: 'Gas spike detection and transaction routing strategy for cost-optimized blockchain operations.',
    detailedDesc: 'Gas Spike Response Agent detects abnormal gas price movements and recommends optimal transaction routing strategies. It monitors gas prices across L1 and L2 chains, predicts spikes based on on-chain activity patterns, and suggests cost-saving alternatives.',
    tools: ['Claude Code', 'Cursor', 'Windsurf'], models: ['Claude 系列', 'MiMo 系列'],
    theme: 'sky', dashboardType: 'ops',
    metrics: [
      { label: 'Gas (Gwei)', value: '142', trend: 'up' },
      { label: 'Spike Predicted', value: 'Yes (2h)', trend: 'up' },
      { label: 'Saved Today', value: '2.4 ETH', trend: 'up' },
      { label: 'Txns Re-routed', value: '847', trend: 'up' }
    ],
    agentOutputs: [
      { title: 'Gas spike predicted in 2 hours', content: 'NFT mint event detected on-chain. Historical pattern shows 3-5x gas spike 30 min before event. Agent recommends batching pending transactions now.', severity: 'warning' },
      { title: 'L2 alternative suggested', content: '15 pending transactions eligible for Arbitrum execution. Moving to L2 saves estimated 0.8 ETH total.', severity: 'info' }
    ]
  },
  {
    id: 'chainops-node', project: 'chainops-autopilot', scenario: 'node-incident',
    title: 'Node Incident Commander',
    shortDesc: 'Validator and node outage triage with root cause analysis and automated recovery workflows.',
    detailedDesc: 'Node Incident Commander provides intelligent incident response for blockchain node operators. It monitors node health, detects outages and performance degradation, performs root cause analysis, and coordinates recovery workflows.',
    tools: ['Claude Code', 'Cursor', 'Windsurf'], models: ['Claude 系列', 'MiMo 系列'],
    theme: 'cyan', dashboardType: 'incident',
    metrics: [
      { label: 'Nodes', value: '56', trend: 'stable' },
      { label: 'Active Incidents', value: '3', trend: 'down' },
      { label: 'MTTR (min)', value: '8.2', trend: 'down' },
      { label: 'Uptime (30d)', value: '99.95%', trend: 'stable' }
    ],
    agentOutputs: [
      { title: 'Incident #247: Ethereum validator down', content: 'Validator 0x8a3f...2d11 missed 4 consecutive attestations. Root cause: disk I/O saturation (98% utilization). Agent initiated log rotation.', severity: 'critical' },
      { title: 'Post-incident analysis', content: 'Validator recovered after disk cleanup. Total downtime: 6 minutes. Missed rewards: ~0.003 ETH. Agent added disk monitoring alert at 85% threshold.', severity: 'info' }
    ]
  },
  {
    id: 'research-thesis', project: 'researchforge-agents', scenario: 'token-thesis',
    title: 'Token Thesis Builder',
    shortDesc: 'Automated token research report generation combining on-chain metrics, team analysis, and market positioning.',
    detailedDesc: 'Token Thesis Builder generates comprehensive token research reports combining on-chain metrics analysis, team background checks, competitive positioning, and market sentiment to produce analyst-grade investment theses.',
    tools: ['Claude Code', 'Cursor', 'Windsurf'], models: ['Claude 系列', 'MiMo 系列'],
    theme: 'indigo', dashboardType: 'research',
    metrics: [
      { label: 'Tokens Researched', value: '1,847', trend: 'up' },
      { label: 'Theses Generated', value: '234', trend: 'up' },
      { label: 'Avg Time', value: '4.2 min', trend: 'down' },
      { label: 'Accuracy', value: '87%', trend: 'up' }
    ],
    agentOutputs: [
      { title: 'Thesis: ARB (Arbitrum)', content: 'Strong fundamentals: 47% TVL growth QoQ, 2.3M daily active addresses. Risk: upcoming token unlock ($1.2B). Rating: Bullish with medium-term caution.', severity: 'info' },
      { title: 'Research methodology validated', content: 'Cross-referenced 12 data sources including Dune, DeFiLlama, Token Terminal. Thesis confidence score: 87%.', severity: 'info' }
    ]
  },
  {
    id: 'research-compare', project: 'researchforge-agents', scenario: 'protocol-compare',
    title: 'Protocol Comparison Lab',
    shortDesc: 'Multi-protocol comparison framework with AI-generated competitive analysis and market positioning insights.',
    detailedDesc: 'Protocol Comparison Lab enables side-by-side comparison of blockchain protocols using standardized metrics. It analyzes TVL, revenue, user growth, developer activity, and governance participation to generate competitive analysis reports.',
    tools: ['Claude Code', 'Cursor', 'Windsurf'], models: ['Claude 系列', 'MiMo 系列'],
    theme: 'teal', dashboardType: 'research',
    metrics: [
      { label: 'Protocols', value: '89', trend: 'stable' },
      { label: 'Metrics Tracked', value: '47', trend: 'up' },
      { label: 'Reports', value: '156', trend: 'up' },
      { label: 'Data Sources', value: '12', trend: 'stable' }
    ],
    agentOutputs: [
      { title: 'Comparison: Aave vs Compound vs Morpho', content: 'Aave leads in TVL ($12.4B) and revenue ($890K/day). Compound has strongest institutional adoption. Morpho highest growth (340% QoQ).', severity: 'info' },
      { title: 'Competitive moat analysis', content: 'Aave V3 cross-chain deployment creates network effect. Compound compliance focus gives institutional advantage. Morpho optimizer layer technically superior.', severity: 'info' }
    ]
  },
  {
    id: 'research-narrative', project: 'researchforge-agents', scenario: 'narrative-radar',
    title: 'Narrative Radar',
    shortDesc: 'Market narrative tracking system monitoring momentum shifts across DePIN, restaking, modular, and emerging themes.',
    detailedDesc: 'Narrative Radar tracks emerging and fading market narratives in crypto. It monitors social sentiment, capital flows, developer activity, and on-chain metrics to identify narrative momentum before mainstream awareness.',
    tools: ['Claude Code', 'Cursor', 'Windsurf'], models: ['Claude 系列', 'MiMo 系列'],
    theme: 'fuchsia', dashboardType: 'intelligence',
    metrics: [
      { label: 'Narratives', value: '23', trend: 'up' },
      { label: 'Rising', value: '7', trend: 'up' },
      { label: 'Fading', value: '4', trend: 'down' },
      { label: 'Early Signals', value: '12', trend: 'up' }
    ],
    agentOutputs: [
      { title: 'Rising: AI Agent Infrastructure', content: 'Momentum: 87/100. VC funding up 230% QoQ. GitHub commits in AI agent repos up 450%. Peak predicted in 6-8 weeks.', severity: 'info' },
      { title: 'Fading: Restaking derivatives', content: 'Momentum: 34/100 (down from 89). TVL declining 12% weekly. Yield compression evident. Recommend reducing exposure.', severity: 'warning' }
    ]
  },
  {
    id: 'code-contract', project: 'codebase-doctor-swarm', scenario: 'contract-review',
    title: 'Smart Contract Review Doctor',
    shortDesc: 'Multi-agent vulnerability triage for smart contracts with severity classification and fix recommendations.',
    detailedDesc: 'Smart Contract Review Doctor uses specialized AI agents to perform comprehensive security reviews. It identifies vulnerabilities, classifies severity, and provides actionable fix recommendations for Web3 development teams.',
    tools: ['Claude Code', 'Cursor', 'Windsurf'], models: ['Claude 系列', 'MiMo 系列'],
    theme: 'rose', dashboardType: 'incident',
    metrics: [
      { label: 'Contracts', value: '2,847', trend: 'up' },
      { label: 'Vulns Found', value: '423', trend: 'up' },
      { label: 'Critical', value: '67', trend: 'down' },
      { label: 'Fix Rate', value: '94%', trend: 'up' }
    ],
    agentOutputs: [
      { title: 'Critical: Reentrancy in withdraw()', content: 'Contract 0x4f2a...8b12 has unchecked external call before state update. Classic reentrancy pattern. Fix: Use ReentrancyGuard. Impact: $2.1M.', severity: 'critical' },
      { title: 'Medium: Unchecked return value', content: 'transfer() return value not checked in distributeRewards(). Fix: Use SafeERC20.safeTransfer().', severity: 'warning' }
    ]
  },
  {
    id: 'code-dapp', project: 'codebase-doctor-swarm', scenario: 'dapp-quality',
    title: 'DApp Quality Agent',
    shortDesc: 'Frontend DApp quality analysis covering wallet UX, transaction error handling, and state management.',
    detailedDesc: 'DApp Quality Agent analyzes DApp frontends for Web3 UX issues. It reviews wallet connection flows, transaction error handling, loading states, and responsive design to improve user experience.',
    tools: ['Claude Code', 'Cursor', 'Windsurf'], models: ['Claude 系列', 'MiMo 系列'],
    theme: 'lime', dashboardType: 'growth',
    metrics: [
      { label: 'DApps Analyzed', value: '189', trend: 'up' },
      { label: 'UX Issues', value: '1,247', trend: 'up' },
      { label: 'Critical Flows', value: '34', trend: 'stable' },
      { label: 'Improvement', value: '+47%', trend: 'up' }
    ],
    agentOutputs: [
      { title: 'Critical: No error handling for failed txns', content: 'Swap page shows generic "Transaction failed" without explanation. Recommend: parse revert reason, show specific action needed, add retry.', severity: 'critical' },
      { title: 'UX: Wallet disconnect state missing', content: 'App crashes when wallet disconnects mid-session. Recommend: add global wallet state listener with auto-redirect.', severity: 'warning' }
    ]
  },
  {
    id: 'code-refactor', project: 'codebase-doctor-swarm', scenario: 'refactor-planner',
    title: 'Repo Refactor Planner',
    shortDesc: 'Technical debt analysis with architecture visualization and AI-generated refactoring roadmaps.',
    detailedDesc: 'Repo Refactor Planner analyzes codebases for technical debt, architectural issues, and optimization opportunities. It generates visual dependency maps, identifies code hotspots, and produces prioritized refactoring roadmaps.',
    tools: ['Claude Code', 'Cursor', 'Windsurf'], models: ['Claude 系列', 'MiMo 系列'],
    theme: 'orange', dashboardType: 'research',
    metrics: [
      { label: 'Repos', value: '67', trend: 'up' },
      { label: 'Debt Items', value: '342', trend: 'down' },
      { label: 'Plans', value: '89', trend: 'up' },
      { label: 'Debt Reduced', value: '34%', trend: 'up' }
    ],
    agentOutputs: [
      { title: 'High priority: Duplicate utilities', content: '23 duplicate functions across 4 packages. Consolidating reduces bundle size by 15%. Effort: 2 days.', severity: 'warning' },
      { title: 'Architecture: Circular dependencies', content: 'packages/api ↔ packages/shared circular import. Extract shared types into @types package. Effort: 1 day.', severity: 'warning' }
    ]
  },
]

export function getSubmission(project: string, scenario: string): Submission | undefined {
  return submissions.find(s => s.project === project && s.scenario === scenario)
}

export function getAllRoutes(): { project: string; scenario: string }[] {
  return submissions.map(s => ({ project: s.project, scenario: s.scenario }))
}
