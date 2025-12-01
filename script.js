// script.js

// --- Data model: steps in the logical sequence (A–I) ---

const steps = [
  {
    id: "customer-lifecycle",
    label: "A. Customer Lifecycle & Segmentation",
    summary:
      "Customer joins the insurer, gets a risk score and LTV estimate, is assigned to a segment, and linked to an agent and agency.",
    description:
      "The customer enters the insurer's system. Based on premium level and predicted lifetime value (LTV), they are assigned to a customer segment. Each customer record is linked to a specific agent within an agency, creating the core relationship for future policies, claims, and communications.",
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
    glossary: [
      {
        term: "Payment",
        def: "A financial event such as premium collection, claim payout, or refund at the policy or claim level."
      },
      {
        term: "Payment Transaction",
        def: "The underlying transaction record that stores amount, method, and reference details for a payment."
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
      }
    ],
    next: ["customer-lifecycle"]
  }
];

// Convenience: map from id to step, and id to DOM nodes

const stepById = {};
steps.forEach((s) => {
  stepById[s.id] = s;
});

document.addEventListener("DOMContentLoaded", () => {
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
      defEl.textContent = item.def;

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
    detailDescription.textContent = step.description;
    renderGlossary(detailGlossary, step.glossary);
    renderNext(detailNext, step);

    highlightNext(step);
  }

  function openModalForStep(stepId) {
    const step = stepById[stepId];
    if (!step) return;

    modalTitle.textContent = step.label;
    modalDescription.textContent = step.description;
    renderGlossary(modalGlossary, step.glossary);
    renderNext(modalNext, step);

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
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
  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  // Initialize with first step active
  if (steps.length > 0) {
    setActiveStep(steps[0].id);
  }
});
