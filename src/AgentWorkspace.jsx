import React from 'react';
import { Bot, ChevronDown, Code2, FileCode2, Folder, GitBranch, GitCommitHorizontal, Play, Send, Settings2, Terminal, Wrench, X } from 'lucide-react';

const files = ['src', 'package.json', 'README.md', 'vite.config.ts'];
const events = [
  ['Inspect repository', 'completed'],
  ['Plan implementation', 'completed'],
  ['Edit files', 'running'],
  ['Run tests', 'queued'],
];

export default function AgentWorkspace({ onExit }) {
  return (
    <div className="workspace-shell">
      <header className="workspace-header">
        <div className="workspace-brand"><img src="/cortex-logo.svg" alt="Cortex"/><strong>Cortex</strong><span>/</span><span>Agent Workspace</span></div>
        <div className="workspace-header-actions"><span className="runtime-pill"><span/> Agent online</span><button title="Settings"><Settings2 size={16}/></button><button title="Exit" onClick={onExit}><X size={16}/></button></div>
      </header>
      <div className="workspace-grid">
        <aside className="workspace-sidebar">
          <div className="workspace-project"><div className="project-icon"><Code2 size={16}/></div><div><strong>cortex-web</strong><small>main</small></div><ChevronDown size={14}/></div>
          <div className="workspace-nav-label">PROJECT</div>
          <button className="workspace-nav active"><Folder size={15}/> Files</button>
          <button className="workspace-nav"><GitBranch size={15}/> Source control</button>
          <button className="workspace-nav"><GitCommitHorizontal size={15}/> Changes</button>
          <div className="workspace-nav-label">TOOLS</div>
          <button className="workspace-nav"><Terminal size={15}/> Terminal</button>
          <button className="workspace-nav"><Wrench size={15}/> Tools</button>
        </aside>
        <main className="workspace-main">
          <div className="workspace-tabs"><span className="tab active"><FileCode2 size={14}/> Agent</span><span className="tab">Code</span><span className="tab">Terminal</span></div>
          <section className="agent-canvas">
            <div className="agent-title"><div className="agent-title-icon"><Bot size={18}/></div><div><strong>Cortex Agent</strong><small>Autonomous coding agent</small></div><span className="agent-status">working</span></div>
            <div className="agent-goal"><small>GOAL</small><p>Implement the next feature, verify the code, and prepare a clean change for review.</p></div>
            <div className="agent-events">{events.map(([label, status]) => <div className="agent-event" key={label}><span className={`event-dot ${status}`}>{status === 'completed' ? '✓' : status === 'running' ? '•' : '·'}</span><div><strong>{label}</strong><small>{status === 'completed' ? 'Completed successfully' : status === 'running' ? 'Cortex is working on this step' : 'Waiting for previous step'}</small></div><span className="event-state">{status}</span></div>)}</div>
          </section>
          <div className="composer"><textarea placeholder="Tell Cortex what you want to build..."/><div className="composer-footer"><span><button><PaperclipIcon/></button><button><Terminal size={15}/></button></span><button className="send"><Send size={15}/> Run agent</button></div></div>
        </main>
        <aside className="workspace-right">
          <div className="panel-head"><strong>Files</strong><span>cortex-web</span></div>
          <div className="file-list">{files.map(file => <div className="file-item" key={file}><FileCode2 size={14}/>{file}</div>)}</div>
          <div className="panel-head runtime-head"><strong>Runtime</strong><span className="runtime-ready">ready</span></div>
          <div className="runtime-card"><div><Terminal size={15}/><strong>Sandbox</strong></div><small>Isolated execution environment</small><button><Play size={13}/> Open terminal</button></div>
        </aside>
      </div>
    </div>
  );
}

function PaperclipIcon(){ return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg> }
