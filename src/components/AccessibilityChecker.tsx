/**
 * ACCESSIBILITY CHECKER v2.0
 * Real-time accessibility auditing and fixes
 * WCAG 2.2 AA/AAA compliance monitoring
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Keyboard, MousePointer, AlertTriangle, CheckCircle, Settings } from 'lucide-react';

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  level: 'A' | 'AA' | 'AAA';
  rule: string;
  description: string;
  element?: HTMLElement;
  fix?: string;
}

interface AccessibilityReport {
  score: number;
  issues: AccessibilityIssue[];
  violations: number;
  warnings: number;
  passes: number;
}

const AccessibilityChecker: React.FC<{ enabled?: boolean }> = ({ enabled = true }) => {
  const [report, setReport] = useState<AccessibilityReport | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'issues' | 'keyboard'>('overview');
  const [keyboardNavEnabled, setKeyboardNavEnabled] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!enabled || process.env.NODE_ENV !== 'development') return;

    const runAccessibilityAudit = () => {
      const issues: AccessibilityIssue[] = [];
      let violations = 0;
      let warnings = 0;
      let passes = 0;

      // Check for missing alt text
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (!img.alt && !img.getAttribute('aria-label')) {
          issues.push({
            id: `img-alt-${index}`,
            type: 'error',
            level: 'A',
            rule: 'WCAG 1.1.1',
            description: 'Image missing alt text',
            element: img,
            fix: 'Add meaningful alt text or aria-label'
          });
          violations++;
        } else {
          passes++;
        }
      });

      // Check for proper heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let lastLevel = 0;
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.slice(1));
        if (index === 0 && level !== 1) {
          issues.push({
            id: `heading-start-${index}`,
            type: 'warning',
            level: 'AA',
            rule: 'WCAG 1.3.1',
            description: 'Page should start with h1',
            element: heading as HTMLElement,
            fix: 'Use h1 for the main page heading'
          });
          warnings++;
        } else if (level > lastLevel + 1) {
          issues.push({
            id: `heading-skip-${index}`,
            type: 'warning',
            level: 'AA',
            rule: 'WCAG 1.3.1',
            description: 'Heading levels should not be skipped',
            element: heading as HTMLElement,
            fix: `Use h${lastLevel + 1} instead of h${level}`
          });
          warnings++;
        } else {
          passes++;
        }
        lastLevel = level;
      });

      // Check for proper link text
      const links = document.querySelectorAll('a');
      links.forEach((link, index) => {
        const text = link.textContent?.trim() || '';
        const aria = link.getAttribute('aria-label') || '';
        if (!text && !aria) {
          issues.push({
            id: `link-text-${index}`,
            type: 'error',
            level: 'A',
            rule: 'WCAG 2.4.4',
            description: 'Link has no accessible text',
            element: link,
            fix: 'Add descriptive text or aria-label'
          });
          violations++;
        } else if (['click here', 'read more', 'more'].includes(text.toLowerCase())) {
          issues.push({
            id: `link-generic-${index}`,
            type: 'warning',
            level: 'AA',
            rule: 'WCAG 2.4.4',
            description: 'Link text is not descriptive',
            element: link,
            fix: 'Use more descriptive link text'
          });
          warnings++;
        } else {
          passes++;
        }
      });

      // Check for proper form labels
      const inputs = document.querySelectorAll('input, select, textarea');
      inputs.forEach((input, index) => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        const ariaLabel = input.getAttribute('aria-label');
        const ariaLabelledBy = input.getAttribute('aria-labelledby');
        
        if (!label && !ariaLabel && !ariaLabelledBy) {
          issues.push({
            id: `form-label-${index}`,
            type: 'error',
            level: 'A',
            rule: 'WCAG 1.3.1',
            description: 'Form control missing label',
            element: input as HTMLElement,
            fix: 'Add a label element or aria-label'
          });
          violations++;
        } else {
          passes++;
        }
      });

      // Check color contrast (simplified check)
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button, index) => {
        const styles = window.getComputedStyle(button);
        const bg = styles.backgroundColor;
        const color = styles.color;
        
        // This is a simplified check - in production, use a proper contrast library
        if (bg === 'rgba(0, 0, 0, 0)' || color === 'rgba(0, 0, 0, 0)') {
          issues.push({
            id: `contrast-${index}`,
            type: 'warning',
            level: 'AA',
            rule: 'WCAG 1.4.3',
            description: 'Check color contrast ratio',
            element: button,
            fix: 'Ensure contrast ratio is at least 4.5:1'
          });
          warnings++;
        } else {
          passes++;
        }
      });

      const score = Math.round((passes / (passes + warnings + violations)) * 100);
      
      setReport({
        score,
        issues,
        violations,
        warnings,
        passes
      });
    };

    // Run initial audit
    runAccessibilityAudit();

    // Set up periodic auditing
    intervalRef.current = setInterval(runAccessibilityAudit, 5000);

    // Show checker after delay
    const timer = setTimeout(() => setIsVisible(true), 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearTimeout(timer);
    };
  }, [enabled]);

  // Keyboard navigation helper
  useEffect(() => {
    if (!keyboardNavEnabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setFocusVisible(true);
        // Add visual focus indicators
        document.body.classList.add('keyboard-navigation');
      } else if (e.key === 'Escape') {
        // Clear focus
        (document.activeElement as HTMLElement)?.blur();
      }
    };

    const handleMouseDown = () => {
      setFocusVisible(false);
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [keyboardNavEnabled]);

  if (!report || !isVisible) return null;

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'info': return <CheckCircle className="h-4 w-4 text-blue-500" />;
      default: return null;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="a11y-panel"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed top-4 right-4 z-50 bg-white/95 backdrop-blur-md rounded-lg border border-gray-200 shadow-xl max-w-md"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-sm">A11y Checker</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(report.score)}`}>
                {report.score}%
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold w-6 h-6 flex items-center justify-center"
              >
                {isMinimized ? '+' : '−'}
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          </div>

          {!isMinimized && (
            <div className="p-4">
              {/* Tabs */}
              <div className="flex gap-1 mb-4 bg-gray-100 rounded-md p-1">
                {['overview', 'issues', 'keyboard'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors capitalize ${
                      activeTab === tab 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Content */}
              {activeTab === 'overview' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-red-50 rounded p-2">
                      <div className="text-red-600 font-bold text-lg">{report.violations}</div>
                      <div className="text-xs text-red-600">Errors</div>
                    </div>
                    <div className="bg-yellow-50 rounded p-2">
                      <div className="text-yellow-600 font-bold text-lg">{report.warnings}</div>
                      <div className="text-xs text-yellow-600">Warnings</div>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <div className="text-green-600 font-bold text-lg">{report.passes}</div>
                      <div className="text-xs text-green-600">Passes</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'issues' && (
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {report.issues.slice(0, 10).map((issue) => (
                    <div key={issue.id} className="flex items-start gap-2 p-2 bg-gray-50 rounded text-xs">
                      {getIssueIcon(issue.type)}
                      <div className="flex-1">
                        <div className="font-medium">{issue.rule}</div>
                        <div className="text-gray-600">{issue.description}</div>
                        {issue.fix && (
                          <div className="text-blue-600 mt-1">💡 {issue.fix}</div>
                        )}
                      </div>
                    </div>
                  ))}
                  {report.issues.length === 0 && (
                    <div className="text-center text-gray-500 py-4">
                      <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-500" />
                      No accessibility issues found!
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'keyboard' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Keyboard Navigation</label>
                    <button
                      onClick={() => setKeyboardNavEnabled(!keyboardNavEnabled)}
                      className={`w-10 h-6 rounded-full transition-colors ${
                        keyboardNavEnabled ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        keyboardNavEnabled ? 'translate-x-5' : 'translate-x-1'
                      } mt-1`} />
                    </button>
                  </div>
                  
                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="flex items-center gap-2">
                      <Keyboard className="h-3 w-3" />
                      <span>Press Tab to navigate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-gray-200 px-1 rounded">Esc</span>
                      <span>Clear focus</span>
                    </div>
                  </div>

                  {focusVisible && (
                    <div className="text-xs text-green-600 bg-green-50 p-2 rounded">
                      ✅ Keyboard navigation active
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </motion.div>
      )}

      {/* Keyboard navigation styles */}
      <style>{`
        .keyboard-navigation *:focus {
          outline: 2px solid hsl(var(--primary)) !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </AnimatePresence>
  );
};

export default AccessibilityChecker;