# Insurance AI Workflow Explorer

This GitHub Pages site visualizes a modern, AI-enabled digital insurance workflow
using a clean, interactive diagram and contextual glossary.

The model is based on:

- Customer Lifecycle & Segmentation  
- Policy & Product Management  
- Claims Process  
- AI Interaction & Automation  
- Fraud Detection & Risk  
- Payments & Transactions  
- Documentation & Compliance  
- Communication & Omni-Channel  
- Continuous AI Feedback Loop  

Each step is tied to glossary terms such as Customer Segment, Risk Score,
Lifetime Value Estimate (LTV), Policy, Claim, AI Model, Fraud Check, Fraud Alert,
Payment Transaction, Document Type, AIProcessed, and more. :contentReference[oaicite:4]{index=4}:contentReference[oaicite:5]{index=5}  

## Files

- `index.html`  
  Main page. Contains the workflow layout, step cards, detail panel, and modal.

- `style.css`  
  Styling for the diagram, arrows, glossary panel, and modal. Uses a dark,
  dashboard-style palette intended for technical presentations.

- `script.js`  
  Brings the workflow to life:
  - Highlights a box on hover and shows what it is doing.
  - Animates arrows to show where the flow can go next.
  - Loads a step-specific glossary and description from a structured data model.
  - Shows a pop-up (modal) with full details for the selected step.

- `read.md`  
  This project documentation file. (If you prefer GitHub’s default convention,
  you can rename this file to `README.md`.)

## How it works

1. **Hover over a box**  
   The step is highlighted, its summary is shown, downstream steps are marked as
   “next,” and the arrow leaving that step becomes more prominent and animated.

2. **Watch the arrows**  
   Arrows between steps flow downward using a simple CSS animation. When a step
   is active, the arrow immediately below it is emphasized.

3. **Contextual glossary**  
   The right-hand panel shows only the glossary terms relevant to the active
   step (for example, Claim, Adjuster, and Claim Note for the Claims Process).

4. **Pop-ups for deeper detail**  
   Clicking the ⓘ button (or the whole row) opens a modal with:
   - A fuller, human-readable description of what happens at that stage.
   - The step-specific glossary terms and definitions.
   - The directions the flow can move next.

## Running on GitHub Pages

1. Create a new GitHub repository.
2. Add `index.html`, `style.css`, `script.js`, and `read.md` to the repo root.
3. Commit and push the changes.
4. In **Settings → Pages**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main` (or your default) and `/ (root)`
5. Save. GitHub will publish your site at:

   `https://<your-username>.github.io/<your-repo-name>/`

## Customizing

- To change the step descriptions or glossary text, edit the `steps` array
  in `script.js`.
- To adjust the look and feel (colors, spacing, card shapes), edit the CSS
  variables and component styles at the top of `style.css`.
- To add additional steps (for example, IoT risk signals or more detailed
  underwriting flows), extend the `steps` array and drop new `.flow-step`
  elements into the `index.html` diagram.
