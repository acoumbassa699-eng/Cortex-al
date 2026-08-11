import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowRight, Bot, Check, Code2, GitBranch, Github, Globe2, Layers3, Lock, Play, ShieldCheck, Sparkles, Terminal, Zap } from 'lucide-react';
import './styles.css';

const integrations = [
  { name: 'GitHub', icon: Github }, { name: 'GitLab', icon: GitBranch }, { name: 'Vercel', icon: Globe2 },
  { name: 'OpenAI', icon: Sparkles }, { name: 'Anthropic', icon: Bot }, { name: 'AWS', icon: Layers3 },
];
const providers = [
  { name: 'Google', icon: Globe2, copy: 'Continue with Google' },
  { name: 'GitHub', icon: Github, copy: 'Continue with GitHub' },
  { name: 'GitLab', icon: GitBranch, copy: 'Continue with GitLab' },
];

function App() {
  const [screen, setScreen] = useState('landing');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState('');
  const goAuth = () => setScreen('auth');
  const finishAuth = (p = 'email') => { setProvider(p); setScreen('organization'); };

  if (screen !== 'landing') {
    return <Onboarding screen={screen} setScreen={setScreen} email={email} setEmail={setEmail} org={org} setOrg={setOrg} connected={connected} setConnected={setConnected} provider={provider} finishAuth={finishAuth} />;
  }

  return <div className="app">
    <nav className="nav container"><a className="brand" href="#top"><span className="brand-mark">C</span><span>Cortex</span></a><div className="nav-links"><a href="#product">Product</a><a href="#integrations">Integrations</a><a href="#agents">Agents</a><a href="#developers">Developers</a></div><div className="nav-actions"><button className="nav-link" onClick={goAuth}>Sign in</button><button className="button button-small" onClick={goAuth}>Get started <ArrowRight size={15}/></button></div></nav>
    <main id="top">
      <section className="hero container"><div className="eyebrow"><span className="pulse"/> The AI workspace for builders</div><h1>Build with AI.<br/><span>Ship without limits.</span></h1><p className="hero-copy">Cortex brings powerful AI agents, your codebase, and your favorite developer tools into one intelligent workspace. Describe what you need. Cortex gets to work.</p><div className="hero-actions"><button className="button" onClick={goAuth}>Start building free <ArrowRight size={17}/></button><a className="button button-ghost" href="#demo"><Play size={16} fill="currentColor"/> See how it works</a></div><div className="hero-note"><Check size={14}/> No credit card required <span>•</span> Connect your stack in minutes</div>
        <div className="terminal-card" id="demo"><div className="terminal-top"><div className="dots"><i/><i/><i/></div><span>cortex / workspace</span><span className="live"><span/> Live</span></div><div className="terminal-body"><aside><div className="side-title">WORKSPACE</div><div className="side-item active"><Code2 size={15}/> cortex-web</div><div className="side-item"><Terminal size={15}/> api-service</div><div className="side-item"><Layers3 size={15}/> infrastructure</div></aside><div className="agent-panel"><div className="agent-head"><div className="agent-avatar"><Sparkles size={17}/></div><div><strong>Cortex Agent</strong><small>Working on your task</small></div><span className="working">● working</span></div><div className="task"><div className="task-label">TASK</div><p>“Add GitHub authentication and deploy the preview to Vercel.”</p></div><div className="steps"><Step done text="Inspect repository" sub="Found Next.js application"/><Step done text="Implement authentication" sub="OAuth flow + session handling"/><Step current text="Deploy preview" sub="Connecting to Vercel…"/></div></div></div></div>
      </section>
      <section className="trusted" id="integrations"><div className="container"><p>WORKS WITH THE TOOLS YOU ALREADY USE</p><div className="logos">{integrations.map(({name, icon: Icon}) => <div className="logo" key={name}><Icon size={20}/>{name}</div>)}</div></div></section>
      <section className="section container" id="product"><div className="section-kicker">ONE INTELLIGENT WORKSPACE</div><h2>From idea to production,<br/><em>with an AI teammate.</em></h2><p className="section-copy">Cortex understands your project, coordinates agents, writes code, runs commands, and helps you ship. You stay in control at every step.</p><div className="feature-grid"><Feature icon={Bot} title="AI agents that act" text="Give Cortex a goal and let specialized agents research, code, test, debug, and iterate across your workspace."/><Feature icon={GitBranch} title="Your stack, connected" text="Bring GitHub, GitLab, Vercel, cloud infrastructure, model providers, and the tools your team relies on."/><Feature icon={ShieldCheck} title="Human control by design" text="Review changes, approve actions, inspect diffs, and keep sensitive operations behind explicit permissions."/></div></section>
      <section className="dark-section" id="agents"><div className="container split"><div><div className="section-kicker">THE CORTEX ENGINE</div><h2>Your team gets<br/><em>an AI workforce.</em></h2><p className="section-copy">Run agents side by side, assign specialized tasks, and let them collaborate on complex work. Cortex turns AI from a chat window into an execution layer.</p><button className="text-link" onClick={goAuth}>Explore agents <ArrowRight size={16}/></button></div><div className="agent-stack"><Stack icon={Code2} title="Developer Agent" sub="Build · Refactor · Test"/><Stack icon={Globe2} title="Deploy Agent" sub="Preview · Ship · Monitor" offset/><Stack icon={Sparkles} title="Research Agent" sub="Search · Analyze · Synthesize"/></div></div></section>
      <section className="cta container" id="start"><div className="cta-inner"><Sparkles size={24}/><h2>Give your ideas<br/>an unfair advantage.</h2><p>Start building with Cortex today.</p><button className="button" onClick={goAuth}>Get started free <ArrowRight size={17}/></button></div></section>
    </main><footer className="footer container"><a className="brand" href="#top"><span className="brand-mark">C</span><span>Cortex</span></a><span>© 2026 Cortex. Built for builders.</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a><a href="#docs">Docs</a></div></footer>
  </div>;
}

function Onboarding({screen,setScreen,email,setEmail,org,setOrg,connected,setConnected,provider,finishAuth}) {
  const [password, setPassword] = useState('');
  if (screen === 'auth') return <div className="auth-shell"><div className="auth-card"><a className="brand auth-brand" href="#" onClick={e=>{e.preventDefault();setScreen('landing')}}><span className="brand-mark">C</span><span>Cortex</span></a><h1>Welcome to Cortex</h1><p>Sign in or create your account to start building.</p><div className="provider-grid">{providers.map(({name,icon:Icon,copy})=><button className="provider" key={name} onClick={()=>finishAuth(name)}><Icon size={18}/>{copy}</button>)}</div><div className="divider"><span>or continue with email</span></div><form onSubmit={e=>{e.preventDefault(); if(email && password) finishAuth('email')}}><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" required/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" minLength="8" required/></label><button className="button full" type="submit">Continue <ArrowRight size={16}/></button></form><small className="legal"><Lock size={12}/> Authentication is secured by Cortex. OAuth providers will be connected through your configured backend.</small></div></div>;
  if (screen === 'organization') return <div className="auth-shell"><div className="auth-card"><div className="step-count">STEP 1 OF 2</div><h1>Create your organization</h1><p>Set up the workspace where your team, agents, and integrations will live.</p><form onSubmit={e=>{e.preventDefault(); if(org) setScreen('connect')}}><label>Organization name<input value={org} onChange={e=>setOrg(e.target.value)} placeholder="Acme Inc." required/></label><label>Workspace URL<input value={org.toLowerCase().replace(/[^a-z0-9]+/g,'-')} readOnly/></label><button className="button full" type="submit">Create organization <ArrowRight size={16}/></button></form><div className="provider-note">Signed in with <strong>{provider === 'email' ? email : provider}</strong></div></div></div>;
  return <div className="auth-shell"><div className="auth-card wide"><div className="step-count">STEP 2 OF 2</div><h1>Connect your developer stack</h1><p>Start with GitHub. You can add GitLab, Vercel, OpenAI and more from Settings.</p><div className="connect-card"><div className="connect-icon"><Github size={22}/></div><div><strong>GitHub</strong><small>Repositories, pull requests, issues and code access.</small></div><button className={connected ? 'connected' : 'button'} onClick={()=>setConnected(true)}>{connected ? <><Check size={15}/> Connected</> : <>Connect <ArrowRight size={15}/></>}</button></div><div className="connect-list"><ConnectRow icon={GitBranch} name="GitLab"/><ConnectRow icon={Globe2} name="Vercel"/><ConnectRow icon={Sparkles} name="OpenAI"/><ConnectRow icon={Bot} name="Anthropic"/></div><button className="button full" onClick={()=>setScreen('dashboard')}>{connected ? 'Continue to Cortex' : 'Skip for now'} <ArrowRight size={16}/></button></div></div>;
}

function Step({done,current,text,sub}){return <div className={'step '+(done?'done ':'')+(current?'current':'')}><span>{done?<Check size={13}/>:<Zap size={13}/>}</span><div>{text}<small>{sub}</small></div></div>}
function ConnectRow({icon:Icon,name}){return <div className="connect-row"><span className="mini-icon"><Icon size={16}/></span><div><strong>{name}</strong><small>Available in integrations</small></div><span className="coming">Connect later</span></div>}
function Stack({icon:Icon,title,sub,offset}){return <div className={'stack-card '+(offset?'offset':'')}><span className="mini-icon"><Icon size={16}/></span><div><strong>{title}</strong><small>{sub}</small></div><span className="status">Ready</span></div>}
function Feature({icon:Icon,title,text}){return <article className="feature"><div className="feature-icon"><Icon size={20}/></div><h3>{title}</h3><p>{text}</p></article>}
function Dashboard(){return <div className="auth-shell"><div className="auth-card"><div className="brand"><span className="brand-mark">C</span><span>Cortex</span></div><div className="success"><Check size={30}/></div><h1>Your Cortex workspace is ready.</h1><p>Your organization and GitHub connection are ready. The full workspace is next.</p><button className="button full" onClick={()=>location.reload()}>Open workspace <ArrowRight size={16}/></button></div></div>}

createRoot(document.getElementById('root')).render(<App />);
