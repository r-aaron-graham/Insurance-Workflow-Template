// script.js

// =============================================================================
// DATA MODEL: Steps in the logical sequence (A–I)
// =============================================================================

const steps = [
  {
    id: "customer-lifecycle",
    label: "A. Customer Lifecycle & Segmentation",
    summary:
      "Customer joins the insurer, gets a risk score and LTV estimate, is assigned to a segment, and linked to an agent and agency.",
    description:
      "The customer enters the insurer's system. Based on premium level and predicted lifetime value (LTV), they are assigned to a customer segment. Each customer record is linked to a specific agent within an agency, creating the core relationship for future policies, claims, and communications.",
    aiUsage:
      "AI automatically scores customer risk and predicts lifetime value using historical data, behavioral patterns, and demographic information. Machine learning models segment customers in real-time for personalized service.",
    timeMetrics: {
      before: "45-60 minutes",
      after: "2-3 minutes",
      improvement: "95%"
    },
    glossary: [
      {
        term: "Customer Segment",
        def: "Grouping of customers by value, premium level, or behavior (for example Premium, Standard, or Budget)."
      },
      {
        term: "Risk Score",
        def: "Numerical rating predicting how likely a customer is to generate claims or default."
      },
      {
        term: "Lifetime Value Estimate (LTV)",
        def: "Predictive estimate of the total revenue expected from the customer over the full relationship."
      },
      {
        term: "Agency / Agent",
        def: "Agencies manage multiple agents; agents sell, service, and manage insurance policies for customers."
      },
      {
        term: "KYC (Know Your Customer)",
        def: "Identity verification process required for regulatory compliance and fraud prevention."
      }
    ],
    next: ["policy-product"]
  },
  {
    id: "policy-product",
    label: "B. Policy & Product Management",
    summary:
      "Agent helps the customer choose a product and bind a policy whose coverage and price can change over time.",
    description:
      "The agent assists the customer in selecting an insurance product (such as Auto, Home, Life, or Health) with defined coverage and pricing rules. The customer then purchases a policy bound to that product. Over time, the policy may undergo changes, such as coverage updates or premium adjustments, captured as policy change records.",
    aiUsage:
      "AI-powered recommendation engines suggest optimal coverage based on customer profile, risk assessment, and budget. Automated underwriting systems evaluate applications in real-time, reducing quote-to-bind time from hours to minutes.",
    timeMetrics: {
      before: "45 minutes",
      after: "4.2 minutes",
      improvement: "91%"
    },
    glossary: [
      {
        term: "Product",
        def: "The insurance offering, such as Auto, Home, Life, or Health, with defined coverage and pricing models."
      },
      {
        term: "Policy",
        def: "A binding contract between the customer and insurer specifying premium, effective dates, and coverage details."
      },
      {
        term: "Policy Change",
        def: "A modification to an existing policy—for example a coverage increase, deductible change, or premium adjustment."
      },
      {
        term: "Premium Delta",
        def: "The change in policy cost that results from a policy modification."
      },
      {
        term: "Underwriting",
        def: "The process of evaluating risk and determining appropriate premium pricing for coverage."
      },
      {
        term: "Quote-to-Bind",
        def: "The time from initial quote generation to policy activation and premium collection."
      }
    ],
    next: ["claims", "ai-interaction", "communication"]
  },
  {
    id: "claims",
    label: "C. Claims Process",
    summary:
      "When an incident occurs, the customer files a claim; the policy defines coverage, an adjuster investigates, and the agent monitors.",
    description:
      "When a covered incident happens, the customer files a claim. The policy linked to that claim defines eligibility and coverage limits. A claims adjuster is assigned to investigate and recommend approval or rejection. Throughout the process the agent monitors progress, documents internal claim notes, and communicates updates back to the customer.",
    aiUsage:
      "AI analyzes claim photos for damage assessment, extracts data from forms using OCR, and automatically categorizes claims by severity. Predictive models estimate claim costs and recommend settlement amounts, reducing processing time by 80%.",
    timeMetrics: {
      before: "5-7 days",
      after: "18 hours",
      improvement: "85%"
    },
    glossary: [
      {
        term: "Claim",
        def: "A request by the insured for coverage payment due to a loss, such as an accident or property damage."
      },
      {
        term: "Adjuster (ADJ)",
        def: "Insurance professional assigned to investigate the claim and approve or reject it."
      },
      {
        term: "Claim Note",
        def: "Internal notes logged by agents, adjusters, or automated systems during claim processing."
      },
      {
        term: "Policy",
        def: "The contract that defines the coverage, limits, and conditions that apply to the claim."
      },
      {
        term: "FNOL (First Notice of Loss)",
        def: "The initial report of an incident that may result in a claim."
      },
      {
        term: "STP (Straight-Through Processing)",
        def: "Automated claim processing without human intervention for simple, low-risk claims."
      }
    ],
    next: ["ai-interaction", "fraud-risk", "payments", "documentation", "communication"]
  },
  {
    id: "ai-interaction",
    label: "D. AI Interaction & Automation",
    summary:
      "Chatbots and voicebots handle routine questions and status checks, escalating low-confidence cases to humans.",
    description:
      "The customer can initiate an AI interaction through a chatbot or voicebot to ask about policy details, claim status, or general support. The AI system uses trained AI models and prompt/response pairs to answer. When questions are complex or the confidence score is low, the interaction is escalated to a human agent to maintain service quality.",
    aiUsage:
      "Natural language processing (NLP) models understand customer intent across multiple languages and dialects. Conversational AI handles 70-80% of routine inquiries automatically, with seamless handoff to human agents when needed. Voice recognition achieves 95%+ accuracy.",
    timeMetrics: {
      before: "12-15 minutes wait + call",
      after: "Instant response",
      improvement: "99%"
    },
    glossary: [
      {
        term: "AI Model",
        def: "A trained machine learning model used for automation, such as chatbot assistance or fraud detection."
      },
      {
        term: "AI Interaction",
        def: "A conversational or automated session between the customer and the AI system, such as a chatbot exchange."
      },
      {
        term: "AI Prompt / Response",
        def: "The input provided to an AI model and the corresponding generated output that is returned."
      },
      {
        term: "Confidence Score",
        def: "A probability-like metric representing how confident the AI model is in a given response."
      },
      {
        term: "Escalation",
        def: "The transfer of an AI or system interaction to a human when the case is complex or confidence is low."
      },
      {
        term: "NLP (Natural Language Processing)",
        def: "AI technology that enables computers to understand and respond to human language."
      }
    ],
    next: ["fraud-risk", "communication", "ai-feedback"]
  },
  {
    id: "fraud-risk",
    label: "E. Fraud Detection & Risk",
    summary:
      "Every claim is scored for fraud risk; alerts are raised when anomalies are detected for deeper review.",
    description:
      "Each claim passes through automated fraud checks that combine rules and analytics models. If suspicious patterns or anomalies are detected, the system triggers fraud alerts. These alerts direct investigators or specialist teams to review the case manually, helping to reduce fraud losses while keeping false positives manageable.",
    aiUsage:
      "Advanced machine learning models detect anomalies, network analysis identifies fraud rings, image forensics verify photo authenticity, and text analysis flags inconsistent statements. AI reduces fraud losses by 40% while maintaining false positive rates below 5%.",
    timeMetrics: {
      before: "Manual review: 2-4 days",
      after: "Real-time scoring: <1 second",
      improvement: "99.9%"
    },
    glossary: [
      {
        term: "Fraud Check",
        def: "Automated scoring or rule-based evaluation used to detect suspicious activity in claims or payments."
      },
      {
        term: "Fraud Alert",
        def: "A triggered event when a fraud check identifies risk, requiring manual investigation or follow-up."
      },
      {
        term: "Risk Score",
        def: "A numerical rating reflecting how risky a claim or customer appears based on available data."
      },
      {
        term: "SIU (Special Investigation Unit)",
        def: "Specialized team that investigates suspected fraud cases flagged by automated systems."
      },
      {
        term: "Anomaly Detection",
        def: "AI technique that identifies patterns or behaviors that deviate from normal baselines."
      },
      {
        term: "Network Analysis",
        def: "Detection of organized fraud rings through relationship mapping and pattern recognition."
      }
    ],
    next: ["payments", "documentation", "communication", "ai-feedback"]
  },
  {
    id: "payments",
    label: "F. Payments & Transactions",
    summary:
      "Premiums and claim payouts are posted as traceable payment events and underlying transactions.",
    description:
      "Payments arise from both sides of the relationship: customers pay policy premiums, and the insurer pays claim settlements or refunds. Each payment can consist of one or more payment transactions, capturing details such as amount, payment type, method, and transaction reference so the financial trail remains auditable.",
    aiUsage:
      "AI optimizes payment routing, predicts payment failures, automates reconciliation, and flags suspicious transactions. Smart payment scheduling improves collection rates by 25% while reducing processing costs.",
    timeMetrics: {
      before: "2-3 days settlement",
      after: "Same-day or instant",
      improvement: "90%"
    },
    glossary: [
      {
        term: "Payment",
        def: "A financial event such as premium collection, claim payout, or refund at the policy or claim level."
      },
      {
        term: "Payment Transaction",
        def: "The underlying transaction record that stores amount, method, and reference details for a payment."
      },
      {
        term: "ACH (Automated Clearing House)",
        def: "Electronic network for financial transactions in the United States."
      },
      {
        term: "Payment Gateway",
        def: "Technology that processes credit card and electronic payments securely."
      },
      {
        term: "Reconciliation",
        def: "Process of matching payment records with bank statements and accounting systems."
      }
    ],
    next: ["documentation", "communication", "ai-feedback"]
  },
  {
    id: "documentation",
    label: "G. Documentation & Compliance",
    summary:
      "Policy documents, ID proofs, and claim evidence are uploaded, typed, and may be auto-verified by AI.",
    description:
      "Customers, agents, and back-office teams upload documents such as proof of identity, policy contracts, claim forms, repair estimates, or medical reports. Each document is classified by a document type for compliance and retrieval. AI can automatically check whether required documents are present, extract key fields, and flag missing or inconsistent information.",
    aiUsage:
      "Computer vision and OCR extract data from documents with 98%+ accuracy. AI validates document authenticity, checks for required signatures, redacts sensitive information automatically, and ensures regulatory compliance. Document processing time reduced from hours to seconds.",
    timeMetrics: {
      before: "Manual review: 2-4 hours per document",
      after: "Automated processing: <30 seconds",
      improvement: "99%"
    },
    glossary: [
      {
        term: "Document",
        def: "An uploaded file such as a policy document, claim form, ID proof, or supporting evidence."
      },
      {
        term: "Document Type",
        def: "The category used to classify a document for compliance, search, or workflow routing."
      },
      {
        term: "AIProcessed",
        def: "A flag indicating whether a document has been automatically analyzed or processed by AI."
      },
      {
        term: "OCR (Optical Character Recognition)",
        def: "Technology that converts images of text into machine-readable text data."
      },
      {
        term: "Document Classification",
        def: "AI process that automatically categorizes documents by type and content."
      },
      {
        term: "Data Extraction",
        def: "Automated extraction of specific fields and values from unstructured documents."
      }
    ],
    next: ["fraud-risk", "communication", "ai-feedback"]
  },
  {
    id: "communication",
    label: "H. Communication & Omni-Channel",
    summary:
      "All inbound and outbound messages are logged, no matter whether they come from email, SMS, chat, or portals.",
    description:
      "Communication between the customer, agents, and systems can take place through email, SMS, chat, phone, or customer portals. Each communication record captures the content, sender, participants, channel, and direction (inbound or outbound). The system also notes whether the message was generated or processed by AI to support oversight and audit needs.",
    aiUsage:
      "AI generates personalized communications in the customer's preferred language and channel. Sentiment analysis monitors customer satisfaction in real-time. Smart routing directs messages to the most appropriate agent based on expertise and availability.",
    timeMetrics: {
      before: "Response time: 4-24 hours",
      after: "Instant to 1 hour",
      improvement: "95%"
    },
    glossary: [
      {
        term: "Communication Channel",
        def: "The medium used for communication, such as email, SMS, chatbot, phone, or web portal."
      },
      {
        term: "Communication Record",
        def: "A single message or exchange logged between the customer, agent, or system."
      },
      {
        term: "AIProcessed",
        def: "A marker indicating that AI automatically analyzed, drafted, or assisted with the communication."
      },
      {
        term: "Omni-Channel",
        def: "Unified customer experience across all communication channels with seamless context switching."
      },
      {
        term: "Sentiment Analysis",
        def: "AI technique that determines emotional tone and customer satisfaction from text or speech."
      },
      {
        term: "Smart Routing",
        def: "Intelligent distribution of customer inquiries based on complexity, agent skills, and availability."
      }
    ],
    next: ["ai-feedback"]
  },
  {
    id: "ai-feedback",
    label: "I. Continuous AI Feedback Loop",
    summary:
      "AI models continuously learn from outcomes, improving risk scoring and real-time policy recommendations.",
    description:
      "Across the lifecycle, AI models learn from interactions, claim outcomes, fraud resolutions, and payment behavior. This continuous feedback loop feeds into updated risk scores, refinements to lifetime value estimates, and better real-time policy or coverage recommendations. The goal is to improve accuracy, reduce loss, and enhance customer experience over time.",
    aiUsage:
      "Machine learning models are continuously retrained on new data, A/B testing validates model improvements, reinforcement learning optimizes decision-making, and drift detection ensures models remain accurate over time. Model performance improves 10-15% annually through continuous learning.",
    timeMetrics: {
      before: "Manual model updates: Quarterly",
      after: "Continuous learning: Daily",
      improvement: "Ongoing optimization"
    },
    glossary: [
      {
        term: "AI Model",
        def: "The underlying machine learning model that is retrained or fine-tuned as new data and outcomes become available."
      },
      {
        term: "Risk Score",
        def: "The evolving numerical rating used to represent customer or claim risk based on the latest information."
      },
      {
        term: "Lifetime Value Estimate (LTV)",
        def: "The predicted revenue over the life of the customer, refined as behavior and outcomes are observed."
      },
      {
        term: "Model Drift",
        def: "When a model's performance degrades over time due to changes in underlying data patterns."
      },
      {
        term: "A/B Testing",
        def: "Experimental approach to compare different model versions and optimize performance."
      },
      {
        term: "Reinforcement Learning",
        def: "AI technique where models learn optimal strategies through trial and feedback."
      }
    ],
    next: ["customer-lifecycle"]
  }
];

// =============================================================================
// CONVENIENCE: Map from id to step, and id to DOM nodes
// =============================================================================

const stepById = {};
steps.forEach((s) => {
  stepById[s.id] = s;
});

// =============================================================================
// MAIN INITIALIZATION
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  initializeWorkflowDiagram();
  initializeMobileMenu();
  initializePersonaSelector();
  initializeUseCaseTabs();
  initializeComparisonMode();
  initializeROICalculator();
  initializeSmoothScrolling();
  initializeVideoPlayers();
});

// =============================================================================
// WORKFLOW DIAGRAM FUNCTIONALITY
// =============================================================================

function initializeWorkflowDiagram() {
  const stepElements = Array.from(document.querySelectorAll(".flow-step"));
  const arrowElements = Array.from(document.querySelectorAll(".flow-arrow"));

  const detailTitle = document.getElementById("detail-title");
  const detailDescription = document.getElementById("detail-description");
  const detailGlossary = document.getElementById("detail-glossary");
  const detailNext = document.getElementById("detail-next");

  const modal = document.getElementById("step-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalGlossary = document.getElementById("modal-glossary");
  const modalNext = document.getElementById("modal-next");
  const modalClose = document.querySelector(".modal-close");
  const modalBackdrop = document.querySelector(".modal-backdrop");

  function clearActiveStates() {
    stepElements.forEach((el) => {
      el.classList.remove("active", "next");
    });
    arrowElements.forEach((el) => {
      el.classList.remove("highlight");
    });
  }

  function renderGlossary(listElement, glossaryItems) {
    listElement.innerHTML = "";
    if (!glossaryItems || glossaryItems.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No specific glossary terms for this step.";
      listElement.appendChild(li);
      return;
    }
    glossaryItems.forEach((item) => {
      const li = document.createElement("li");
      const termEl = document.createElement("span");
      termEl.className = "glossary-term";
      termEl.textContent = item.term;

      const defEl = document.createElement("span");
      defEl.className = "glossary-def";
      defEl.textContent = ` — ${item.def}`;

      li.appendChild(termEl);
      li.appendChild(defEl);
      listElement.appendChild(li);
    });
  }

  function renderNext(listElement, step) {
    listElement.innerHTML = "";
    if (!step.next || step.next.length === 0) {
      const li = document.createElement("li");
      li.textContent = "This step does not have explicitly modelled downstream steps.";
      listElement.appendChild(li);
      return;
    }
    step.next.forEach((nextId) => {
      const nextStep = stepById[nextId];
      if (!nextStep) return;
      const li = document.createElement("li");

      const arrowBadge = document.createElement("span");
      arrowBadge.className = "next-arrow";
      arrowBadge.innerHTML = "➜";
      arrowBadge.setAttribute("aria-hidden", "true");

      const label = document.createElement("span");
      label.textContent = nextStep.label;

      li.appendChild(arrowBadge);
      li.appendChild(label);
      listElement.appendChild(li);
    });
  }

  function highlightNext(step) {
    // mark downstream steps
    (step.next || []).forEach((nextId) => {
      const el = document.querySelector(`.flow-step[data-step-id="${nextId}"]`);
      if (el) {
        el.classList.add("next");
      }
    });

    // highlight the arrow that visually follows this step (for linear direction)
    const arrow = document.querySelector(`.flow-arrow[data-from="${step.id}"]`);
    if (arrow) {
      arrow.classList.add("highlight");
    }
  }

  function setActiveStep(stepId) {
    const step = stepById[stepId];
    if (!step) return;

    clearActiveStates();

    const el = document.querySelector(`.flow-step[data-step-id="${stepId}"]`);
    if (el) {
      el.classList.add("active");
    }

    detailTitle.textContent = step.label;
    
    // Get current mode (before/after AI)
    const mode = document.querySelector('.comparison-btn.active')?.dataset.mode || 'after';
    
    if (mode === 'before' && step.timeMetrics) {
      detailDescription.textContent = `${step.description}\n\nProcessing Time (Before AI): ${step.timeMetrics.before}`;
    } else if (mode === 'after' && step.timeMetrics) {
      detailDescription.textContent = `${step.description}\n\n${step.aiUsage}\n\nProcessing Time (With AI): ${step.timeMetrics.after} (${step.timeMetrics.improvement} faster)`;
    } else {
      detailDescription.textContent = step.description;
    }
    
    renderGlossary(detailGlossary, step.glossary);
    renderNext(detailNext, step);

    highlightNext(step);
  }

  function openModalForStep(stepId) {
    const step = stepById[stepId];
    if (!step) return;

    modalTitle.textContent = step.label;
    
    // Include AI usage and metrics in modal
    let description = step.description;
    if (step.aiUsage) {
      description += `\n\nAI Usage:\n${step.aiUsage}`;
    }
    if (step.timeMetrics) {
      description += `\n\nProcessing Time:\n• Before AI: ${step.timeMetrics.before}\n• With AI: ${step.timeMetrics.after}\n• Improvement: ${step.timeMetrics.improvement}`;
    }
    modalDescription.textContent = description;
    
    renderGlossary(modalGlossary, step.glossary);
    renderNext(modalNext, step);

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    
    // Trap focus in modal
    modalClose.focus();
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  // Attach hover and click events
  stepElements.forEach((el) => {
    const stepId = el.getAttribute("data-step-id");
    if (!stepId) return;

    el.addEventListener("mouseenter", () => {
      setActiveStep(stepId);
    });

    const infoButton = el.querySelector(".step-info-button");
    if (infoButton) {
      infoButton.addEventListener("click", (event) => {
        event.stopPropagation();
        openModalForStep(stepId);
      });
    }

    // Optional: click on the whole row also opens the modal
    el.addEventListener("click", () => {
      openModalForStep(stepId);
    });
  });

  // Modal close handlers
  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeModal);
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  // Initialize with first step active
  if (steps.length > 0) {
    setActiveStep(steps[0].id);
  }
}

// =============================================================================
// MOBILE MENU
// =============================================================================

function initializeMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (!menuToggle || !mainNav) return;
  
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('mobile-open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });
  
  // Close menu when clicking a link
  const navLinks = mainNav.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('mobile-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}

// =============================================================================
// PERSONA SELECTOR
// =============================================================================

function initializePersonaSelector() {
  const personaButtons = document.querySelectorAll('.persona-btn');
  
  if (personaButtons.length === 0) return;
  
  personaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      personaButtons.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      const persona = btn.dataset.persona;
      
      // Here you could filter/highlight workflow steps based on persona
      // For now, we'll just show a visual indication
      console.log(`Viewing as: ${persona}`);
      
      // Optional: You could filter steps or change descriptions based on persona
      // filterWorkflowByPersona(persona);
    });
  });
}

// =============================================================================
// USE CASE TABS
// =============================================================================

function initializeUseCaseTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  if (tabButtons.length === 0) return;
  
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;
      
      // Update buttons
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      
      // Update content
      tabContents.forEach(content => {
        content.classList.remove('active');
      });
      const targetContent = document.getElementById(`tab-${targetTab}`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// =============================================================================
// COMPARISON MODE (Before/After AI)
// =============================================================================

function initializeComparisonMode() {
  const comparisonButtons = document.querySelectorAll('.comparison-btn');
  
  if (comparisonButtons.length === 0) return;
  
  comparisonButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      comparisonButtons.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      const mode = btn.dataset.mode;
      
      // Update the current active step display
      const activeStep = document.querySelector('.flow-step.active');
      if (activeStep) {
        const stepId = activeStep.getAttribute('data-step-id');
        const step = stepById[stepId];
        const detailDescription = document.getElementById('detail-description');
        
        if (detailDescription && step) {
          if (mode === 'before' && step.timeMetrics) {
            detailDescription.textContent = `${step.description}\n\nProcessing Time (Before AI): ${step.timeMetrics.before}`;
          } else if (mode === 'after' && step.timeMetrics) {
            detailDescription.textContent = `${step.description}\n\n${step.aiUsage}\n\nProcessing Time (With AI): ${step.timeMetrics.after} (${step.timeMetrics.improvement} faster)`;
          }
        }
      }
    });
  });
}

// =============================================================================
// ROI CALCULATOR
// =============================================================================

function initializeROICalculator() {
  const form = document.getElementById('roi-form');
  const result = document.getElementById('roi-result');
  
  if (!form || !result) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const annualPolicies = parseFloat(document.getElementById('annual-policies').value) || 0;
    const avgClaim = parseFloat(document.getElementById('avg-claim').value) || 0;
    const processingTime = parseFloat(document.getElementById('processing-time').value) || 0;
    
    // Calculate savings
    // Assumptions:
    // - Processing cost: $50/hour
    // - AI reduces time by 80%
    // - Fraud detection saves 2% of claim costs
    // - Error reduction saves 1% of operational costs
    
    const hoursSavedPerPolicy = processingTime * 0.80; // 80% reduction
    const totalHoursSaved = annualPolicies * hoursSavedPerPolicy;
    const costPerHour = 50;
    const processingCostSavings = totalHoursSaved * costPerHour;
    
    const fraudSavings = annualPolicies * avgClaim * 0.02; // 2% fraud reduction
    const errorSavings = annualPolicies * 100 * 0.01; // $100 avg operational cost, 1% error reduction
    
    const totalSavings = processingCostSavings + fraudSavings + errorSavings;
    const efficiencyGain = 80; // 80% improvement
    
    // Display results
    document.getElementById('roi-savings').textContent = `$${totalSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
    document.getElementById('roi-time').textContent = `${totalHoursSaved.toLocaleString('en-US', { maximumFractionDigits: 0 })} hours`;
    document.getElementById('roi-efficiency').textContent = `${efficiencyGain}%`;
    
    result.classList.add('visible');
    
    // Smooth scroll to result
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

// =============================================================================
// SMOOTH SCROLLING
// =============================================================================

function initializeSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Skip if it's just "#" or if target doesn't exist
      if (href === '#' || href === '#demo') {
        e.preventDefault();
        return;
      }
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        // Calculate offset for sticky header
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// =============================================================================
// VIDEO PLAYERS (Placeholder)
// =============================================================================

function initializeVideoPlayers() {
  const videoCards = document.querySelectorAll('.video-card');
  
  videoCards.forEach(card => {
    const playBtn = card.querySelector('.video-play-btn');
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        // Placeholder for video player functionality
        // In a real implementation, you would:
        // 1. Load the video player library
        // 2. Replace the thumbnail with an actual video player
        // 3. Start playback
        alert('Video player would launch here. In production, this would load a video player (YouTube, Vimeo, or custom HTML5 video).');
      });
    }
  });
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// =============================================================================
// SCROLL ANIMATIONS (Optional Enhancement)
// =============================================================================

function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements that should animate on scroll
  const animatedElements = document.querySelectorAll('.metric-card, .integration-logo, .testimonial, .video-card');
  animatedElements.forEach(el => observer.observe(el));
}

// Call scroll animations if desired
// initializeScrollAnimations();

// =============================================================================
// ANALYTICS & TRACKING (Placeholder)
// =============================================================================

function trackEvent(category, action, label) {
  // Placeholder for analytics tracking
  // In production, you would integrate with Google Analytics, Mixpanel, etc.
  console.log(`Analytics Event: ${category} - ${action} - ${label}`);
  
  // Example Google Analytics 4 code:
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', action, {
  //     'event_category': category,
  //     'event_label': label
  //   });
  // }
}

// =============================================================================
// ACCESSIBILITY ENHANCEMENTS
// =============================================================================

// Announce dynamic content changes to screen readers
function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// =============================================================================
// ERROR HANDLING
// =============================================================================

window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // In production, you would send this to an error tracking service
});

// =============================================================================
// PERFORMANCE MONITORING (Placeholder)
// =============================================================================

if ('PerformanceObserver' in window) {
  const perfObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Log performance metrics
      console.log(`Performance: ${entry.name} - ${entry.duration}ms`);
    }
  });
  
  // Observe different types of performance entries
  try {
    perfObserver.observe({ entryTypes: ['measure', 'navigation'] });
  } catch (e) {
    // Browser doesn't support all entry types
  }
}

// Export functions for potential use in other scripts
window.InsuranceWorkflow = {
  setActiveStep: (stepId) => {
    const detailTitle = document.getElementById("detail-title");
    if (detailTitle && stepById[stepId]) {
      // Re-implement setActiveStep logic if needed externally
    }
  },
  trackEvent,
  announceToScreenReader
};
