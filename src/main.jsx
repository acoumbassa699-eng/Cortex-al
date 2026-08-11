import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Bot, Check, Code2, GitBranch, Github, Globe2, Layers3, Play, ShieldCheck, Sparkles, Terminal, Zap } from 'lucide-react';
import './styles.css';

const integrations = [
  { name: 'GitHub', icon: Github },
  { name: 'GitLab', icon: GitBranch },
  { name: 'Vercel', icon: Globe2 },
  { name: 'OpenAI', icon: Sparkles },
  { name: 'Anthropic', icon: Bot },
  { name: 'AWS', icon: Layers3 },
];

function App() {
  return (
    <div className="app">
      <nav className="nav container">
        <a className="brand" href="#top"><span className="brand-mark">C</span><span>Cortex</span></a>
        <div className="nav-links">
          <a href="#product">Product</a><a href="#integrations">Integrations</a><a href="#agents">Agents</a><a href="#developers">Developers</a>
        </div>
        <div className="nav-actions"><a href="#signin">Sign in</a><a className="button button-small" href="#start">Get started <ArrowRight size={15}/></a></div>
      </nav>

      <main id="top">
        <section className="hero container">
          <div className="eyebrow"><span className="pulse"/> The AI workspace for builders</div>
          <h1>Build with AI.<br/><span>Ship without limits.</span></h1>
          <p className="hero-copy">Cortex brings powerful AI agents, your codebase, and your favorite developer tools into one intelligent workspace. Describe what you need. Cortex gets to work.</p>
          <div className="hero-actions"><a className="button" href="#start">Start building free <ArrowRight size={17}/></a><a className="button button-ghost" href="#demo"><Play size={16} fill="currentColor"/> See how it works</a></div>
          <div className="hero-note"><Check size={14}/> No credit card required <span>•</span> Connect your stack in minutes</div>

          <div className="terminal-card" id="demo">
            <div className="terminal-top"><div className="dots"><i/><i/><i/></div><span>cortex / workspace</span><span className="live"><span/> Live</span></div>
            <div className="terminal-body">
              <aside><div className="side-title">WORKSPACE</div><div className="side-item active"><Code2 size={15}/> cortex-web</div><div className="side-item"><Terminal size={15}/> api-service</div><div className="side-item"><Layers3 size={15}/> infrastructure</div></aside>
              <div className="agent-panel"><div className="agent-head"><div className="agent-avatar"><Sparkles size={17}/></div><div><strong>Cortex Agent</strong><small>Working on your task</small></div><span className="working">● working</span></div><div className="task"><div className="task-label">TASK</div><p>“Add GitHub authentication and deploy the preview to Vercel.”</p></div><div className="steps"><div className="step done"><span><Check size={13}/></span><div>Inspect repository<small>Found Next.js application</small></div></div><div className="step done"><span><Check size={13}/></span><div>Implement authentication<small>OAuth flow + session handling</small></div></div><div className="step current"><span><Zap size={13}/></span><div>Deploy preview<small>Connecting to Vercel…</small></div></div></div></div>
            </div>
          </div>
        </section>

        <section className="trusted" id="integrations"><div className="container"><p>WORKS WITH THE TOOLS YOU ALREADY USE</p><div className="logos">{integrations.map(({name, icon: Icon}) => <div className="logo" key={name}><Icon size={20}/>{name}</div>)}</div></div></section>

        <section className="section container" id="product"><div className="section-kicker">ONE INTELLIGENT WORKSPACE</div><h2>From idea to production,<br/><em>with an AI teammate.</em></h2><p className="section-copy">Cortex understands your project, coordinates agents, writes code, runs commands, and helps you ship. You stay in control at every step.</p><div className="feature-grid"><Feature icon={Bot} title="AI agents that act" text="Give Cortex a goal and let specialized agents research, code, test, debug, and iterate across your workspace."/><Feature icon={GitBranch} title="Your stack, connected" text="Bring GitHub, GitLab, Vercel, cloud infrastructure, model providers, and the tools your team relies on."/><Feature icon={ShieldCheck} title="Human control by design" text="Review changes, approve actions, inspect diffs, and keep sensitive operations behind explicit permissions."/></div></section>

        <section className="dark-section" id="agents"><div className="container split"><div><div className="section-kicker">THE CORTEX ENGINE</div><h2>Your team gets<br/><em>an AI workforce.</em></h2><p className="section-copy">Run agents side by side, assign specialized tasks, and let them collaborate on complex work. Cortex turns AI from a chat window into an execution layer.</p><a className="text-link" href="#start">Explore agents <ArrowRight size={16}/></a></div><div className="agent-stack"><div className="stack-card"><span className="mini-icon"><Code2 size={16}/></span><div><strong>Developer Agent</strong><small>Build · Refactor · Test</small></div><span className="status">Ready</span></div><div className="stack-card offset"><span className="mini-icon"><Globe2 size={16}/></span><div><strong>Deploy Agent</strong><small>Preview · Ship · Monitor</small></div><span className="status">Ready</span></div><div className="stack-card"><span className="mini-icon"><Sparkles size={16}/></span><div><strong>Research Agent</strong><small>Search · Analyze · Synthesize</small></div><span className="status">Ready</span></div></div></div></section>

        <section className="cta container" id="start"><div className="cta-inner"><Sparkles size={24}/><h2>Give your ideas<br/>an unfair advantage.</h2><p>Start building with Cortex today.</p><a className="button" href="#top">Get started free <ArrowRight size={17}/></a></div></section>
      </main>
      <footer className="footer container"><a className="brand" href="#top"><span className="brand-mark">C</span><span>Cortex</span></a><span>© 2026 Cortex. Built for builders.</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a><a href="#docs">Docs</a></div></footer>
    </div>
  );
}

function Feature({icon: Icon, title, text}) { return <article className="feature"><div className="feature-icon"><Icon size={20}/></div><h3>{title}</h3><p>{text}</p></article>; }

createRoot(document.getElementById('root')).render(<App />);
