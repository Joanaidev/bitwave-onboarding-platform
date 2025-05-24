import React, { useState } from 'react';
import { 
  ChevronRight, ChevronLeft, CheckCircle, Users, Shield, Settings, Code, 
  MessageSquare, Calendar, FileText, Bug, TrendingUp,
  ExternalLink, Play, Book, Database, PieChart, Zap
} from 'lucide-react';

const BitwaveOnboardingPlatform = () => {
  const [currentView, setCurrentView] = useState('dashboard'); // dashboard, assessment, implementation, checklist
  const [checklistProgress, setChecklistProgress] = useState({});

  // Bitwave colors
  const bitwaveGreen = '#00D4AA';
  const bitwaveBlack = '#1A1A1A';

  const checklistSections = [
    {
      title: 'Setup & Configuration',
      items: [
        { id: 'setup_tabs', task: 'Complete Configuration & Setup and Wallets & Accounts tabs', link: 'https://docs.bitwave.io/docs/onboarding' },
        { id: 'kickoff_call', task: 'Review configuration on kickoff call', link: null },
        { id: 'login', task: 'Login to Bitwave', link: 'https://docs.bitwave.io/docs/login-to-bitwave' },
        { id: 'connect_gl', task: 'Connect General Ledger Software', link: 'https://docs.bitwave.io/docs/connect-general-ledger-software' },
        { id: 'accounting_defaults', task: 'Set Accounting Defaults for Gas Fees, AP, & AR', link: 'https://docs.bitwave.io/docs/set-accounting-defaults' },
        { id: 'add_wallets', task: 'Add Wallets', link: 'https://docs.bitwave.io/docs/add-wallets-exchanges-custodial' },
        { id: 'add_exchanges', task: 'Add Exchange and/or Custodial Accounts', link: null },
        { id: 'import_data', task: 'Import Data into Manual Wallets', link: 'https://docs.bitwave.io/docs/import-data-into-manual-wallets' },
        { id: 'beginning_balances', task: 'Set Beginning Balances', link: 'https://docs.bitwave.io/docs/set-beginning-balances' },
        { id: 'check_balances', task: 'Check Wallet/Account Balances', link: 'https://docs.bitwave.io/docs/check-wallet-account-balances' },
        { id: 'inventory_views', task: 'Set Up Inventory Views', link: 'https://docs.bitwave.io/docs/set-up-inventory-views' }
      ]
    },
    {
      title: 'Categorization',
      items: [
        { id: 'view_transactions', task: 'Viewing Transactions', link: 'https://docs.bitwave.io/docs/viewing-transactions' },
        { id: 'transaction_operations', task: 'Transaction Screen Operations', link: 'https://docs.bitwave.io/docs/transaction-screen-operations' },
        { id: 'individual_categorization', task: 'Individual Transaction Categorization', link: 'https://docs.bitwave.io/docs/individual-transaction-categorization' },
        { id: 'check_pricing', task: 'Check Pricing Data', link: 'https://docs.bitwave.io/docs/check-pricing-data' },
        { id: 'categorization_rules', task: 'Set Up Categorization Rules', link: 'https://docs.bitwave.io/docs/set-up-categorization-rules' },
        { id: 'contact_defaults', task: 'Set Up Contact-based Categorization Defaults', link: 'https://docs.bitwave.io/docs/set-up-contact-based-categorization-defaults' },
        { id: 'bulk_categorization', task: 'Bulk Categorization', link: 'https://docs.bitwave.io/docs/bulk-categorization-1' },
        { id: 'system_jobs', task: 'System Jobs', link: 'https://docs.bitwave.io/docs/system-jobs-1' }
      ]
    },
    {
      title: 'Journal Entries & Gain/Loss',
      items: [
        { id: 'push_transactions', task: 'Push Transactions (JEs) to General Ledger', link: 'https://docs.bitwave.io/docs/push-transactions-jes-to-general-ledger' },
        { id: 'manual_journal_entries', task: 'Manually Record Journal Entry Totals', link: 'https://docs.bitwave.io/docs/manually-record-journal-entry-totals' },
        { id: 'impairment_adjustments', task: 'Record Impairment and Mark-to-Market Adjustments', link: 'https://docs.bitwave.io/docs/record-impairment-and-mark-to-market-adjustments' },
        { id: 'realized_gain_loss', task: 'Record Realized Gain/Loss', link: 'https://docs.bitwave.io/docs/record-realized-gainloss' }
      ]
    },
    {
      title: 'Reports and Period-End Close',
      items: [
        { id: 'cost_basis_summary', task: 'Cost Basis Summary (from Inventory Views)', link: 'https://docs.bitwave.io/docs/cost-basis-summary-from-inventory-views#cost-basis-summary' },
        { id: 'cost_basis_rollforward', task: 'Cost Basis Rollforward (including Gain/Loss totals)', link: 'https://docs.bitwave.io/docs/cost-basis-summary-from-inventory-views#cost-basis-rollforward' },
        { id: 'actions_report', task: 'Actions Report (from Inventory Views)', link: 'https://docs.bitwave.io/docs/cost-basis-summary-from-inventory-views#actions' },
        { id: 'balance_report', task: 'Balance Report', link: 'https://docs.bitwave.io/docs/balance-report-1' },
        { id: 'journal_entry_reports', task: 'Journal Entry Reports', link: 'https://docs.bitwave.io/docs/journal-entry-reports' },
        { id: 'period_end_checklist', task: 'Period-End Checklist', link: 'https://docs.bitwave.io/docs/period-end-checklist' },
        { id: 'period_end_reconciliation', task: 'Period-End Reconciliation', link: 'https://docs.bitwave.io/docs/period-end-reconciliation' }
      ]
    }
  ];

  const handleChecklistToggle = (itemId) => {
    setChecklistProgress(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const reportBug = () => {
    alert('Bug report sent to support@bitwave.io');
  };

  const messageCSM = (message) => {
    alert('Message sent to your Customer Success Manager');
  };

  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen" style={{ background: `linear-gradient(135deg, ${bitwaveBlack} 0%, #2D3748 50%, ${bitwaveBlack} 100%)` }}>
        <div className="max-w-6xl mx-auto p-6">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: bitwaveGreen }}>
                <span className="text-black font-bold text-xl">B</span>
              </div>
              <h1 className="text-4xl font-bold text-white">Bitwave Implementation Hub</h1>
            </div>
            <p className="text-gray-300">Your complete digital asset onboarding and implementation platform</p>
          </div>

          {/* Main Navigation Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div 
              onClick={() => setCurrentView('assessment')}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 cursor-pointer hover:border-green-400 transition-all duration-200 hover:transform hover:scale-105"
            >
              <Users className="w-12 h-12 mb-4" style={{ color: bitwaveGreen }} />
              <h3 className="text-xl font-bold text-white mb-2">Initial Assessment</h3>
              <p className="text-gray-300 mb-4">Complete your business profile and technical requirements</p>
              <div className="flex items-center gap-2 text-green-400">
                <span className="text-sm">Start Assessment</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            <div 
              onClick={() => setCurrentView('implementation')}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 cursor-pointer hover:border-green-400 transition-all duration-200 hover:transform hover:scale-105"
            >
              <Settings className="w-12 h-12 mb-4" style={{ color: bitwaveGreen }} />
              <h3 className="text-xl font-bold text-white mb-2">Implementation Journey</h3>
              <p className="text-gray-300 mb-4">Track your implementation progress through each phase</p>
              <div className="flex items-center gap-2 text-green-400">
                <span className="text-sm">View Progress</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            <div 
              onClick={() => setCurrentView('checklist')}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 cursor-pointer hover:border-green-400 transition-all duration-200 hover:transform hover:scale-105"
            >
              <CheckCircle className="w-12 h-12 mb-4" style={{ color: bitwaveGreen }} />
              <h3 className="text-xl font-bold text-white mb-2">Onboarding Checklist</h3>
              <p className="text-gray-300 mb-4">Complete your step-by-step onboarding tasks</p>
              <div className="flex items-center gap-2 text-green-400">
                <span className="text-sm">Open Checklist</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <button 
                onClick={() => messageCSM('Hello, I need assistance with my implementation')}
                className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors text-white"
              >
                <MessageSquare className="w-5 h-5" style={{ color: bitwaveGreen }} />
                <span>Message CSM</span>
              </button>
              
              <button 
                onClick={reportBug}
                className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors text-white"
              >
                <Bug className="w-5 h-5" style={{ color: bitwaveGreen }} />
                <span>Report Issue</span>
              </button>
              
              <button className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors text-white">
                <Calendar className="w-5 h-5" style={{ color: bitwaveGreen }} />
                <span>Schedule Meeting</span>
              </button>
              
              <button className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors text-white">
                <TrendingUp className="w-5 h-5" style={{ color: bitwaveGreen }} />
                <span>View Reports</span>
              </button>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Learning Resources</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="https://docs.bitwave.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors text-white"
              >
                <Book className="w-6 h-6" style={{ color: bitwaveGreen }} />
                <div>
                  <p className="font-semibold">Documentation</p>
                  <p className="text-sm text-gray-400">Complete user guides and API docs</p>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
              
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <Play className="w-6 h-6" style={{ color: bitwaveGreen }} />
                <div>
                  <p className="font-semibold text-white">Bitwave Certification</p>
                  <p className="text-sm text-gray-400">Earn CPE credits while learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'checklist') {
    const totalTasks = checklistSections.reduce((acc, section) => acc + section.items.length, 0);
    const completedTasks = Object.values(checklistProgress).filter(Boolean).length;
    const progressPercentage = (completedTasks / totalTasks) * 100;

    return (
      <div className="min-h-screen" style={{ background: `linear-gradient(135deg, ${bitwaveBlack} 0%, #2D3748 50%, ${bitwaveBlack} 100%)` }}>
        <div className="max-w-4xl mx-auto p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Dashboard
            </button>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-2">Onboarding Checklist</h1>
              <p className="text-gray-300">Complete these tasks to get fully set up</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-white">{completedTasks}/{totalTasks}</p>
              <p className="text-sm text-gray-400">Tasks Complete</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-medium">Overall Progress</span>
              <span className="text-white font-medium">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                className="h-3 rounded-full transition-all duration-300" 
                style={{ 
                  width: `${progressPercentage}%`,
                  backgroundColor: bitwaveGreen 
                }}
              ></div>
            </div>
          </div>

          {/* Checklist Sections */}
          <div className="space-y-6">
            {checklistSections.map((section, sectionIndex) => {
              const sectionCompleted = section.items.filter(item => checklistProgress[item.id]).length;
              const sectionTotal = section.items.length;
              
              return (
                <div key={sectionIndex} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                    <span className="text-gray-300 text-sm">{sectionCompleted}/{sectionTotal} completed</span>
                  </div>
                  
                  <div className="space-y-3">
                    {section.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
                        <button
                          onClick={() => handleChecklistToggle(item.id)}
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                            checklistProgress[item.id] 
                              ? 'border-green-400 bg-green-400' 
                              : 'border-gray-500 hover:border-green-400'
                          }`}
                        >
                          {checklistProgress[item.id] && <CheckCircle className="w-4 h-4 text-white" />}
                        </button>
                        
                        <div className="flex-1">
                          <p className={`font-medium ${checklistProgress[item.id] ? 'text-gray-400 line-through' : 'text-white'}`}>
                            {item.task}
                          </p>
                        </div>
                        
                        {item.link && (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors"
                          >
                            Guide
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certification Banner */}
          <div className="mt-8 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-6 border border-green-500/30">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">🎓 Take the Bitwave Certification Course</h3>
              <p className="text-gray-300 mb-4">Earn CPE credits while mastering Bitwave</p>
              <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200">
                Start Certification
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'assessment') {
    return (
      <div className="min-h-screen" style={{ background: `linear-gradient(135deg, ${bitwaveBlack} 0%, #2D3748 50%, ${bitwaveBlack} 100%)` }}>
        <div className="max-w-4xl mx-auto p-6 text-white">
          <div className="text-center">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Dashboard
            </button>
            <Users className="w-16 h-16 mb-4 mx-auto" style={{ color: bitwaveGreen }} />
            <h1 className="text-3xl font-bold mb-4">Initial Assessment</h1>
            <p className="text-gray-300 mb-6">This section is under development</p>
            <p className="text-gray-400 mb-6">Complete business profile and technical requirements assessment</p>
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="px-6 py-3 text-white rounded-lg font-semibold transition-all duration-200"
              style={{ backgroundColor: bitwaveGreen }}
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'implementation') {
    return (
      <div className="min-h-screen" style={{ background: `linear-gradient(135deg, ${bitwaveBlack} 0%, #2D3748 50%, ${bitwaveBlack} 100%)` }}>
        <div className="max-w-4xl mx-auto p-6 text-white">
          <div className="text-center">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Dashboard
            </button>
            <Settings className="w-16 h-16 mb-4 mx-auto" style={{ color: bitwaveGreen }} />
            <h1 className="text-3xl font-bold mb-4">Implementation Journey</h1>
            <p className="text-gray-300 mb-6">This section is under development</p>
            <p className="text-gray-400 mb-6">Track your implementation progress through each phase</p>
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="px-6 py-3 text-white rounded-lg font-semibold transition-all duration-200"
              style={{ backgroundColor: bitwaveGreen }}
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default BitwaveOnboardingPlatform;