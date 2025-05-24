// src/App.js
import React, { useState } from 'react'
import {
  ChevronRight, ChevronLeft, CheckCircle, Users, Settings, MessageSquare,
  Bug, Calendar, TrendingUp, Book, ExternalLink, Play
} from 'lucide-react'
import './App.css'

const bitwaveGreen = '#00D4AA'
const bitwaveBlack = '#1A1A1A'

export default function BitwaveOnboardingPlatform() {
  const [currentView, setCurrentView] = useState('dashboard')
  const [checklistProgress, setChecklistProgress] = useState({})

  const checklistSections = [
    {
      title: 'Setup & Configuration',
      items: [
        { id: 'login', task: 'Login to Bitwave', link: 'https://docs.bitwave.io/docs/login-to-bitwave' },
        { id: 'connect_gl', task: 'Connect General Ledger Software', link: 'https://docs.bitwave.io/docs/connect-general-ledger-software' },
        { id: 'add_wallets', task: 'Add Wallets', link: 'https://docs.bitwave.io/docs/add-wallets-exchanges-custodial' },
      ]
    },
    {
      title: 'Categorization',
      items: [
        { id: 'view_transactions', task: 'Viewing Transactions', link: 'https://docs.bitwave.io/docs/viewing-transactions' },
        { id: 'categorization_rules', task: 'Set Up Categorization Rules', link: 'https://docs.bitwave.io/docs/set-up-categorization-rules' },
      ]
    },
    {
      title: 'Reports & Close',
      items: [
        { id: 'balance_report', task: 'Balance Report', link: 'https://docs.bitwave.io/docs/balance-report-1' },
        { id: 'period_end_checklist', task: 'Period‑End Checklist', link: 'https://docs.bitwave.io/docs/period-end-checklist' },
      ]
    }
  ]

  const toggle = id => {
    setChecklistProgress(p => ({ ...p, [id]: !p[id] }))
  }

  // DASHBOARD
  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen" style={{ background: bitwaveBlack, color: 'white', padding: 20 }}>
        <h1 style={{ color: bitwaveGreen, textAlign: 'center' }}>Welcome to Bitwave Onboarding</h1>
        <p style={{ textAlign: 'center', marginBottom: 30 }}>
          Your complete digital‑asset customer onboarding hub
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
          <Card icon={<Users />} label="Initial Assessment" onClick={() => setCurrentView('assessment')} />
          <Card icon={<Settings />} label="Implementation Journey" onClick={() => setCurrentView('implementation')} />
          <Card icon={<CheckCircle />} label="Onboarding Checklist" onClick={() => setCurrentView('checklist')} />
        </div>

        <h2 style={{ marginTop: 40 }}>Quick Actions</h2>
        <div className="quick-actions">
          <Action icon={<MessageSquare />} label="Message CSM" onClick={() => alert('Message sent')} />
          <Action icon={<Bug />} label="Report Issue" onClick={() => alert('Bug report sent')} />
          <Action icon={<Calendar />} label="Schedule Meeting" />
          <Action icon={<TrendingUp />} label="View Reports" />
        </div>

        <h2 style={{ marginTop: 40 }}>Learning Resources</h2>
        <div className="quick-actions">
          <Action icon={<Book />} label="Documentation" link="https://docs.bitwave.io" />
          <Action icon={<Play />} label="Certification" />
        </div>
      </div>
    )
  }

  // CHECKLIST VIEW
  if (currentView === 'checklist') {
    const total = checklistSections.reduce((sum, s) => sum + s.items.length, 0)
    const done = Object.values(checklistProgress).filter(Boolean).length
    return (
      <div className="min-h-screen" style={{ background: bitwaveBlack, color: 'white', padding: 20 }}>
        <button className="back" onClick={() => setCurrentView('dashboard')}>
          <ChevronLeft /> Back
        </button>
        <h1 style={{ textAlign: 'center' }}>Onboarding Checklist</h1>
        <p style={{ textAlign: 'center' }}>{done}/{total} tasks complete</p>

        <div className="progress-bar">
          <div style={{ width: `${(done/total)*100}%`, background: bitwaveGreen }} />
        </div>

        {checklistSections.map(section => (
          <div key={section.title} className="section">
            <h2>{section.title}</h2>
            {section.items.map(item => (
              <div key={item.id} className="item">
                <input
                  type="checkbox"
                  checked={!!checklistProgress[item.id]}
                  onChange={() => toggle(item.id)}
                />
                <span className={checklistProgress[item.id] ? 'done' : ''}>{item.task}</span>
                {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer">Guide</a>}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }

  // PLACEHOLDER for other views
  return (
    <div className="min-h-screen" style={{ background: bitwaveBlack, color: 'white', padding: 20 }}>
      <button className="back" onClick={() => setCurrentView('dashboard')}>
        <ChevronLeft /> Back
      </button>
      <h1 style={{ textAlign: 'center' }}>Coming Soon!</h1>
    </div>
  )
}

// Reusable Card
function Card({ icon, label, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {icon}
      <div>{label}</div>
    </div>
  )
}

// Reusable Quick Action
function Action({ icon, label, onClick, link }) {
  const content = (
    <>
      {icon}
      <span>{label}</span>
    </>
  )
  return link ? (
    <a href={link} className="action">{content}</a>
  ) : (
    <button className="action" onClick={onClick}>{content}</button>
  )
}
