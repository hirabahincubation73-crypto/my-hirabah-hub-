import { useMemo, useState } from 'react'
import { Activity, AppWindow, ArrowUpRight, Blocks, Bot, CheckCircle2, Circle, Code2, GitBranch, LayoutDashboard, LockKeyhole, Plug, Search, Settings2, ShieldCheck, Workflow, Zap } from 'lucide-react'

const nav = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Projects', icon: AppWindow },
  { label: 'Connectors', icon: Plug },
  { label: 'MCP & Plugins', icon: Blocks },
  { label: 'Automation', icon: Workflow },
  { label: 'Deployments', icon: GitBranch },
  { label: 'Security', icon: ShieldCheck },
]
const integrations = [
  { name: 'GitHub', category: 'Development', description: 'Repositories, source control and CI workflows', status: 'Available', icon: 'GH' },
  { name: 'Vercel', category: 'Infrastructure', description: 'Hosting, preview builds and production releases', status: 'Available', icon: 'V' },
  { name: 'Canva', category: 'Creative', description: 'Brand assets, promotional designs and media', status: 'Available', icon: 'C' },
  { name: 'Adobe', category: 'Creative', description: 'Creative Cloud and document workflows', status: 'Available', icon: 'A' },
  { name: 'Buffer', category: 'Marketing', description: 'Social publishing and campaign scheduling', status: 'Needs setup', icon: 'B' },
  { name: 'Google Workspace', category: 'Productivity', description: 'Calendar, email and shared business documents', status: 'Available', icon: 'G' },
  { name: 'Supabase', category: 'Data', description: 'PostgreSQL database, authentication and storage', status: 'Not configured', icon: 'S' },
  { name: 'Custom MCP servers', category: 'AI & Automation', description: 'Secure tools and services exposed through MCP', status: 'Not configured', icon: 'M' },
]
const projects = [
  { name: 'Hirabah Growth Hub', type: 'Business platform', status: 'Production ready', url: 'https://hirabah-growth-hub.vercel.app' },
  { name: 'Engineering Platform', type: 'Developer operations', status: 'Initial scaffold', url: 'https://github.com/hirabahincubation73-crypto/my-hirabah-hub-' },
]
function App() {
  const [active, setActive] = useState('Overview')
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => integrations.filter(x => (x.name + x.category + x.description).toLowerCase().includes(query.toLowerCase())), [query])
  return <div className="shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark">H</div><div><b>HIRABAH</b><small>ENGINEERING STUDIO</small></div></div>
      <div className="workspace-label">WORKSPACE</div><div className="workspace"><div className="workspace-icon">HI</div><div><b>Hirabah Incubation</b><small>Business workspace</small></div><span>⌄</span></div>
      <nav>{nav.map(item => <button key={item.label} className={active===item.label?'nav-item active':'nav-item'} onClick={()=>setActive(item.label)}><item.icon size={17}/>{item.label}{item.label==='Connectors'&&<i>8</i>}</button>)}</nav>
      <div className="sidebar-bottom"><div className="secure"><LockKeyhole size={16}/><span><b>Security first</b><small>Secrets stay out of source code.</small></span></div><button className="nav-item" onClick={()=>setActive('Settings')}><Settings2 size={17}/>Settings</button><div className="profile"><div className="avatar">H</div><span><b>Hirabah Team</b><small>Administrator workspace</small></span><span>•••</span></div></div>
    </aside>
    <main className="main">
      <header><div className="crumb">Hirabah <span>/</span> {active}</div><div className="header-right"><span className="live-dot"></span><small>Workspace online</small><button className="icon-btn"><Activity size={17}/></button><div className="avatar small">H</div></div></header>
      <div className="content">
        <div className="welcome"><div><div className="eyebrow">SOFTWARE • INTEGRATIONS • DELIVERY</div><h1>{active === 'Overview' ? 'Engineering command centre' : active}</h1><p>Build, connect, automate and ship the technology behind Hirabah.</p></div><a className="primary" href="https://github.com/hirabahincubation73-crypto/my-hirabah-hub-" target="_blank" rel="noreferrer"><Code2 size={16}/> Open source repository <ArrowUpRight size={15}/></a></div>
        <section className="stats">
          <div className="stat"><span>ACTIVE PROJECTS</span><strong>02</strong><small><AppWindow size={14}/> Growth Hub + Engineering</small></div>
          <div className="stat"><span>INTEGRATION CATALOG</span><strong>08</strong><small><Plug size={14}/> Connectors inventoried</small></div>
          <div className="stat"><span>DEPLOYMENT PLATFORM</span><strong>Vercel</strong><small><CheckCircle2 size={14}/> Existing production deployment ready</small></div>
          <div className="stat"><span>SECURITY POSTURE</span><strong>Baseline</strong><small><ShieldCheck size={14}/> Credential setup still required</small></div>
        </section>
        <div className="section-head"><div><h2>{active==='Overview'?'Platform modules':active==='Connectors'?'Integration directory':active==='Projects'?'Project registry':active}</h2><p>{active==='Overview'?'Your core engineering capabilities at a glance.':'Manage this area of the Hirabah engineering workspace.'}</p></div>{active==='Connectors'&&<div className="search"><Search size={16}/><input placeholder="Search integrations..." value={query} onChange={e=>setQuery(e.target.value)}/></div>}</div>
        {(active==='Overview'||active==='Projects')&&<div className="project-grid">{projects.map((p,i)=><article className="project-card" key={p.name}><div className="project-top"><div className="project-icon">{i===0?<AppWindow/>:<Code2/>}</div><span className="status-pill">{p.status}</span></div><h3>{p.name}</h3><p>{p.type}</p><a href={p.url} target="_blank" rel="noreferrer">Open project <ArrowUpRight size={14}/></a></article>)}</div>}
        {(active==='Overview'||active==='Connectors'||active==='MCP & Plugins')&&<div className="integration-grid">{(active==='Overview'?integrations.slice(0,4):filtered).map(x=><article className="integration-card" key={x.name}><div className="integration-top"><div className="integration-icon">{x.icon}</div><span className={x.status==='Available'?'tag available':'tag'}>{x.status}</span></div><div className="category">{x.category}</div><h3>{x.name}</h3><p>{x.description}</p><div className="card-foot"><span><Circle size={7} fill="currentColor"/>{x.status==='Available'?'Account access available; app-level setup may be needed':'Connection not verified'}</span><button onClick={()=>setActive('Connectors')}>Details <ArrowUpRight size={13}/></button></div></article>)}</div>}
        {active==='Automation'&&<div className="empty-panel"><Zap size={28}/><h3>Automation workflows</h3><p>Next: connect approved business triggers, scheduled jobs and notification channels. No background jobs are active yet.</p></div>}
        {active==='Deployments'&&<div className="empty-panel"><GitBranch size={28}/><h3>Release management</h3><p>GitHub source control is accessible. Link this repository to Vercel to enable automatic preview and production deployments.</p><a href="https://vercel.com/dashboard" target="_blank" rel="noreferrer">Open Vercel dashboard <ArrowUpRight size={14}/></a></div>}
        {active==='Security'&&<div className="empty-panel"><ShieldCheck size={28}/><h3>Security baseline</h3><p>Use environment variables for API credentials, least-privilege OAuth scopes, authenticated admin access and audit logs before enabling production integrations.</p></div>}
        {active==='Settings'&&<div className="empty-panel"><Settings2 size={28}/><h3>Workspace settings</h3><p>Team roles, environment configuration and integration permissions will be managed here in a future release.</p></div>}
        <div className="notice"><Bot size={18}/><div><b>Integration status is intentionally conservative.</b><p>A tool is not marked connected until its authorization and a real health check have been completed. This first release is the control-centre foundation, not a claim that every service is already authenticated.</p></div></div>
        <footer>HIRABAH ENGINEERING STUDIO <span>•</span> BUILD WITH PURPOSE</footer>
      </div>
    </main>
  </div>
}
export default App