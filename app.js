// ASCENSION ARCHITECT: Unassailable app.js - Mastery-Grade Logic
// Each pillar implements robust async interaction, resilient UI, targeted validation, loading states, error handling, and chart support

// --- Gemini API Core Caller via Serverless Proxy ---
const APIURL = "https://homefullness.benjamin-s.workers.dev/";

async function callGemini(userQuery, systemPrompt) {
  const payload = {
    contents: [{ parts: [{ text: userQuery }, { text: systemPrompt }] }],
  };
  for (let i = 0; i < 3; i++) {
    try {
      const response = await fetch(APIURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const result = await response.json();
      // Your proxy should format Gemini's response and send only the final text
      const generatedText = result?.text || result?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (generatedText) return generatedText;
    } catch (error) {
      if (i === 2) await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
  return "Error: Could not retrieve result after multiple attempts.";
}

// --- Helper: Generic Interactor ---
function createInteractor({ inputIds, buttonId, outputId, textId, loadingId, systemPrompt }) {
  const inputs = inputIds.map(id => document.getElementById(id));
  const button = document.getElementById(buttonId);
  const output = document.getElementById(outputId);
  const text = document.getElementById(textId);
  const loading = document.getElementById(loadingId);

  button.addEventListener('click', async () => {
    let query = inputs.map(input => input.value.trim());
    if (query.some(val => !val)) {
      text.textContent = `ATTENTION: Please complete all required fields.`;
      output.classList.remove('hidden');
      return;
    }
    button.disabled = true;
    loading.classList.remove('hidden');
    output.classList.add('hidden');
    text.textContent = '';
    try {
      const result = await callGemini(Array.isArray(query) ? query.join(' ') : query, systemPrompt);
      text.innerHTML = result.replace(/\n/g, '<br>');
    } catch (e) {
      text.textContent = "Error: " + e.message;
    }
    loading.classList.add('hidden');
    output.classList.remove('hidden');
    button.disabled = false;
  });
}

// --- Pillar Interactors ---
window.addEventListener('DOMContentLoaded', () => {
  createInteractor({ inputIds: [], buttonId: "policyButton", outputId: "policyOutput", textId: "policyText", loadingId: "policyLoading", systemPrompt: SYSTEMPROMPTPOLICY });
  createInteractor({ inputIds: ["barrierInput"], buttonId: "barrierButton", outputId: "barrierOutput", textId: "barrierText", loadingId: "barrierLoading", systemPrompt: SYSTEMPROMPTDECONSTRUCTOR });
  createInteractor({ inputIds: ["carePlanInput"], buttonId: "carePlanButton", outputId: "carePlanOutput", textId: "carePlanText", loadingId: "carePlanLoading", systemPrompt: SYSTEMPROMPTCAREPLAN });
  createInteractor({ inputIds: ["defenseInput"], buttonId: "defenseButton", outputId: "defenseOutput", textId: "defenseText", loadingId: "defenseLoading", systemPrompt: SYSTEMPROMPTDEFENSE });
  createInteractor({ inputIds: ["narrativeInput"], buttonId: "narrativeButton", outputId: "narrativeOutput", textId: "narrativeText", loadingId: "narrativeLoading", systemPrompt: SYSTEMPROMPTNARRATIVE });
  createInteractor({ inputIds: ["deescalationInput"], buttonId: "deescalationButton", outputId: "deescalationOutput", textId: "deescalationText", loadingId: "deescalationLoading", systemPrompt: SYSTEMPROMPTDEESCALATION });
  createInteractor({ inputIds: ["mapperInput"], buttonId: "mapperButton", outputId: "mapperOutput", textId: "mapperText", loadingId: "mapperLoading", systemPrompt: SYSTEMPROMPTMAPPER });
  createInteractor({ inputIds: ["personaLimitingBelief", "personaTraumaticEvent"], buttonId: "personaButton", outputId: "personaOutput", textId: "personaText", loadingId: "personaLoading", systemPrompt: SYSTEMPROMPTPERSONA });
  createInteractor({ inputIds: ["advocacyInput"], buttonId: "advocacyButton", outputId: "advocacyOutput", textId: "advocacyText", loadingId: "advocacyLoading", systemPrompt: SYSTEMPROMPTADVOCACY });
  createInteractor({ inputIds: ["unificationInput"], buttonId: "unificationButton", outputId: "unificationOutput", textId: "unificationText", loadingId: "unificationLoading", systemPrompt: SYSTEMPROMPTUNIFICATION });
  createInteractor({ inputIds: ["riskInput"], buttonId: "riskButton", outputId: "riskOutput", textId: "riskText", loadingId: "riskLoading", systemPrompt: SYSTEMPROMPTRISK });
  createInteractor({ inputIds: ["milestoneInput"], buttonId: "milestoneButton", outputId: "milestoneOutput", textId: "milestoneText", loadingId: "milestoneLoading", systemPrompt: SYSTEMPROMPTMILESTONE });
  createInteractor({ inputIds: ["quantumInput"], buttonId: "quantumButton", outputId: "quantumOutput", textId: "quantumText", loadingId: "quantumLoading", systemPrompt: SYSTEMPROMPTQUANTUM });
  createInteractor({ inputIds: ["dossierInput"], buttonId: "dossierButton", outputId: "dossierOutput", textId: "dossierText", loadingId: "dossierLoading", systemPrompt: SYSTEMPROMPTDOSSIER });
  createInteractor({ inputIds: ["vocationalInput"], buttonId: "vocationalButton", outputId: "vocationalOutput", textId: "vocationalText", loadingId: "vocationalLoading", systemPrompt: SYSTEMPROMPTVOCATIONAL });
  createInteractor({ inputIds: ["handoverAgencyA", "handoverAgencyB", "handoverContext"], buttonId: "handoverButton", outputId: "handoverOutput", textId: "handoverText", loadingId: "handoverLoading", systemPrompt: SYSTEMPROMPTHANDOFF });
  createInteractor({ inputIds: ["empathyInput"], buttonId: "empathyButton", outputId: "empathyOutput", textId: "empathyText", loadingId: "empathyLoading", systemPrompt: SYSTEMPROMPTEMPATHY });
  createInteractor({ inputIds: ["costPreventative", "costCrisis"], buttonId: "costButton", outputId: "costOutput", textId: "costText", loadingId: "costLoading", systemPrompt: SYSTEMPROMPTCOSTMODEL });
  createInteractor({ inputIds: ["rapportInput"], buttonId: "rapportButton", outputId: "rapportOutput", textId: "rapportText", loadingId: "rapportLoading", systemPrompt: SYSTEMPROMPTRAPPORT });
  createInteractor({ inputIds: ["auditorInput"], buttonId: "auditorButton", outputId: "auditorOutput", textId: "auditorText", loadingId: "auditorLoading", systemPrompt: SYSTEMPROMPTAUDITOR });
  createInteractor({ inputIds: ["publicInput"], buttonId: "publicButton", outputId: "publicOutput", textId: "publicText", loadingId: "publicLoading", systemPrompt: SYSTEMPROMPTPUBLICNARRATIVE });
  createInteractor({ inputIds: ["legalInput"], buttonId: "legalButton", outputId: "legalOutput", textId: "legalText", loadingId: "legalLoading", systemPrompt: SYSTEMPROMPTLEGALNEXUS });
  createInteractor({ inputIds: ["microResourceInput"], buttonId: "microResourceButton", outputId: "microResourceOutput", textId: "microResourceText", loadingId: "microResourceLoading", systemPrompt: SYSTEMPROMPTMICRORESOURCE });
  createInteractor({ inputIds: ["conflictRuleA", "conflictRuleB"], buttonId: "conflictButton", outputId: "conflictOutput", textId: "conflictText", loadingId: "conflictLoading", systemPrompt: SYSTEMPROMPTCONFLICTIDENTIFIER });
});

// --- Chart Initialization (example for focusChart) ---
function createYourCustomChart() {
  const ctx = document.getElementById('yourChartId').getContext('2d');
  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Label 1', 'Label 2'],
      datasets: [{
        label: 'Descriptive Label',
        data: [value1, value2],
        backgroundColor: ['#Color1', '#Color2'],
        hoverOffset: 8
      }]
    },
    options: {
      plugins: { legend: { display: true } },
      cutout: 65,
      maintainAspectRatio: false
    }
  });
  return chart;
}
// Repeat similar for other charts as needed
// --- SYSTEM PROMPTS (Fully Refined for Each Pillar) ---
const SYSTEMPROMPTPOLICY = "You are an expert social worker and policy analyst. Based on the analysis of LA County social service failures—fragmentation, unrealistic timelines, punitive responses, administrative errors leading to family separation—propose a concise, single-paragraph, high-level policy recommendation focused on a relational, trauma-informed, and longitudinally supported model. The recommendation should be actionable and structural.";

const SYSTEMPROMPTDECONSTRUCTOR = "You are a senior case advocate specializing in navigating LA County bureaucratic barriers. Based on the user’s specific barrier, generate exactly three (3) immediate, actionable steps an advocate should take to bypass or escalate the issue, focusing on real-world procedures (e.g., specific forms, direct supervisor contact, formal grievances). Present the steps clearly as a numbered list.";

const SYSTEMPROMPTCAREPLAN = "You are a clinical social work supervisor focused on integrated, long-term stability. Given a client's main instability factor (e.g., IV drug use history), generate exactly three (3) specific, co-occurring support resources (DBT, Vocational Training, Peer Support Sponsorship). For each resource, explain its necessity and relationship to the client's 24-month stability timeline. Present as a numbered list with bold resource names.";

const SYSTEMPROMPTDEFENSE = "You are a legal advocate specializing in DCFS and family court, focused on trauma-informed defense. Given a punitive action, generate a concise, 3-point bulleted defense strategy. Each point must reframe the client’s failure as a trauma response, attribute the problem to systemic/administrative failure, and suggest a specific corrective action or mitigation strategy. Use strong, assertive legal language.";

const SYSTEMPROMPTNARRATIVE = "You are a peer support specialist and narrative writer. Given a dry, compliance-based fact about a client's progress, generate a single, compelling paragraph (max 3 sentences) that reframes this compliance as a personal victory of commitment, resilience, and emotional struggle. The tone must be human-centered and empathetic. Emphasize the client's internal strength over external mandates and avoid jargon.";

const SYSTEMPROMPTDEESCALATION = "You are a trauma-informed social worker specializing in de-escalation and therapeutic communication. Given a client's distressed or angry statement, generate a short script (2-3 sentences) for the advocate. The script must validate the client’s emotion/fear, acknowledge the systemic source of distress (without taking blame), and gently offer a clear choice for the next step. Avoid jargon.";

const SYSTEMPROMPTMAPPER = "You are an expert LA County resource navigator and social determinant specialist. Given a complex client profile (e.g., pregnancy, homelessness, addiction), generate 4 hyper-specific resource types (not organizations, but niche program types). For each, provide a brief justification for why it’s a critical match. Numbered list only.";

const SYSTEMPROMPTPERSONA = "You are an elite-level motivational psychologist and NLP programmer. Given a client's Limiting Belief and past Traumatic Event, synthesize a single, dense, God-Mode Affirmation (max 4 sentences). The affirmation must refute the belief by reframing the trauma as a source of power, purpose, and commitment, using evocative, declarative language.";

const SYSTEMPROMPTADVOCACY = "You are an executive coach specializing in trauma-informed self-advocacy. Given a challenging interview question, generate a concise, strength-based, three-part response: 1) Acknowledge the past fact; 2) Pivot to the learning/system failure involved; 3) Conclude with assertive, future goals. Numbered list.";

const SYSTEMPROMPTUNIFICATION = "You are a professional policy writer and reform consultant. Given a summary of systemic failures, synthesize a formal executive summary (max 4 paragraphs): 1) State the central problem (fragmentation/punitive model); 2) Present the structural solution; 3) Detail the cost of inaction; 4) Conclude with a clear, actionable mandate for policymakers or funding bodies.";

const SYSTEMPROMPTRISK = "You are a clinical analyst for DCFS/Family Court. Given a client's status, create two sections: 1) Current High-Risk Factors; 2) Mitigating Protective Factors. List exactly 3 points under each, clinically and objectively, for baseline assessment. Bullet points.";

const SYSTEMPROMPTMILESTONE = "You are a strategist specializing in 24-month recovery planning. Given a client’s goal, generate a 24-month plan divided into four 6-month phases (Stabilization, Skill Integration, Economic Independence, Sustained Growth). Each phase has 2 key objectives and 1 critical resource need. Use markdown headings for phases.";

const SYSTEMPROMPTQUANTUM = "You are a forensic accountability auditor. Given a narrative summary of a client’s negative journey, generate an institutional failure scorecard (1-10 scale) for three metrics: Fragmentation Index, Delay/Access Erosion Score, Punitive Overreach Factor. For each, provide a concise justification. Numbered list, bold metric names.";

const SYSTEMPROMPTDOSSIER = "You are an expert administrative auditor and compliance specialist. Given a client’s history, generate a list: 1) Critical Required Documents; 2) Forensic Document Gaps (High Risk); 3) Agency Rejection Predictor (name 2 agency types and predict highest rejection risk for each). Bulleted response.";

const SYSTEMPROMPTVOCATIONAL = "You are a master vocational counselor with justice/trauma expertise. Given a client’s barrier, generate a 3-point narrative for interviews: each point must transform the barrier into a transferable skill and link to future stability/employer commitment. Use professional, first-person language.";

const SYSTEMPROMPTHANDOFF = "You are a care coordinator specializing in warm handoffs. Given two agencies and context, generate a formal, standard email (max 5 sentences): 1) Introduce client/advocate; 2) State the critical, life-stabilizing need and high-risk context; 3) Confirm client expects handoff; 4) Define next action for receiving agency. Write as one cohesive paragraph.";

const SYSTEMPROMPTEMPATHY = "You are a trauma therapist and supervisor. Given summary data, generate a brief reflection for the caseworker (max 4 sentences): reframe non-compliance/distress as predictable trauma response, remind advocate of latent strengths and survival mechanisms. Purpose: combat burnout and restore relational perspective. No jargon.";

const SYSTEMPROMPTCOSTMODEL = "You are a municipal budget analyst specializing in preventative spending. Given a low-cost intervention and high-cost crisis prevented, conduct a fiscal analysis: 1) State the intervention cost; 2) Estimate institutional crisis cost; 3) Calculate net savings; 4) Conclude with a policy mandate. Financially assertive tone.";

const SYSTEMPROMPTRAPPORT = "You are an institutional negotiation specialist. Given an agency/staff obstacle, generate a concise, professional script (max 3 sentences) for the advocate: bypass gatekeeping, establish collaboration, frame high-risk needs as joint, urgent priority, always maintain shared liability and non-confrontational stance.";

const SYSTEMPROMPTAUDITOR = "You are a forensic auditor for DCFS case records. Given a caseworker’s note, generate 3 concise action points: 1) Risk Flag (identify punitive/noncompliant language); 2) Trauma Reframing (suggest alternative, defensible phrasing); 3) Audit Compliance Check (state a missing legal or procedural step). Bulleted.";

const SYSTEMPROMPTPUBLICNARRATIVE = "You are a master social media strategist and public policy communicator. Given a key policy summary, generate a high-impact, public narrative campaign script (max 5 sentences): translate the failure into a concise, urgent call to action for X/Instagram, highlighting costs, ethical betrayal, and a simple solution.";

const SYSTEMPROMPTLEGALNEXUS = "You are a civil rights attorney specializing in government litigation. Given a policy failure, generate a concise legal anchor (max 4 sentences): cite relevant constitutional/statutory principles (e.g., 14th Amendment, ADA) violated, transforming the administrative appeal into a legal confrontation.";

const SYSTEMPROMPTMICRORESOURCE = "You are an expert case manager in crisis intervention. Given a micro-expense needed, write an Emergency Disbursement Justification (max 4 sentences): frame it as a critical investment, preventing imminent systemic failure (lost eligibility, missed court date, etc.). Assertive, preventative-cost logic.";

const SYSTEMPROMPTCONFLICTIDENTIFIER = "You are a supreme policy conflict analyst. Given two conflicting agency rules, generate a concise Policy Conflict Resolution Brief (max 4 sentences): identify the contradiction, state which policy violates foundational framework (e.g. Housing First), and provide leverage for advocacy.";

// End of app.js
