<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HOLLYWOOD'S FINEST: Discussion Platform</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
:root {
  --color-white: rgba(255, 255, 255, 1);
  --color-black: rgba(0, 0, 0, 1);
  --color-cream-50: rgba(252, 252, 249, 1);
  --color-cream-100: rgba(255, 255, 253, 1);
  --color-gray-200: rgba(245, 245, 245, 1);
  --color-gray-300: rgba(167, 169, 169, 1);
  --color-gray-400: rgba(119, 124, 124, 1);
  --color-slate-500: rgba(98, 108, 113, 1);
  --color-brown-600: rgba(94, 82, 64, 1);
  --color-charcoal-700: rgba(31, 33, 33, 1);
  --color-charcoal-800: rgba(38, 40, 40, 1);
  --color-slate-900: rgba(19, 52, 59, 1);
  --color-teal-300: rgba(50, 184, 198, 1);
  --color-teal-400: rgba(45, 166, 178, 1);
  --color-teal-500: rgba(33, 128, 141, 1);
  --color-teal-600: rgba(29, 116, 128, 1);
  --color-teal-700: rgba(26, 104, 115, 1);
  --color-teal-800: rgba(41, 150, 161, 1);
  --color-red-400: rgba(255, 84, 89, 1);
  --color-red-500: rgba(192, 21, 47, 1);
  --color-orange-400: rgba(230, 129, 97, 1);
  --color-orange-500: rgba(168, 75, 47, 1);
  --color-brown-600-rgb: 94, 82, 64;
  --color-teal-500-rgb: 33, 128, 141;
  --color-slate-900-rgb: 19, 52, 59;
  --color-slate-500-rgb: 98, 108, 113;
  --color-red-500-rgb: 192, 21, 47;
  --color-red-400-rgb: 255, 84, 89;
  --color-orange-500-rgb: 168, 75, 47;
  --color-orange-400-rgb: 230, 129, 97;
  --font-family-base: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-size-base: 16px;
  --line-height-normal: 1.6;
  --space-16: 16px;
  --radius-lg: 12px;
  --duration-normal: 250ms;
  --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
  --deep-space-blue: #0B1A2D;
  --electric-cyan: #00D9FF;
  --plasma-gold: #FFD700;
  --crimson-surge: #FF4444;
  --emerald-glow: #00FF88;
  --quest-gold: #FFD700;
  --quest-legendary: #FF00FF;
  --quest-epic: #9370DB;
  --quest-rare: #00BFFF;
  --quest-common: #32CD32;
  --mission-active: #FF4500;
  --mission-complete: #32CD32;
  --mission-locked: #546E7A;
  --badge-glow: rgba(255, 215, 0, 0.6);
  --progress-bar: linear-gradient(90deg, #00BFFF, #FF00FF, #FFD700);
  --bg-dark: #0F0A1F;
  --bg-darker: #08051A;
  --bg-deepest: #020014;
  --text-light: #E2E8F0;
  --text-bright: #F8FAFC;
  --streak-fire: #FF6B35;
  --achievement-border: #FFD700;
  --cyan-clarity: #00D9FF;
  --magenta-niche: #FF00FF;
  --gold-achieve: #FFD700;
  --orange-action: #FF8C00;
  --lime-growth: #00FF88;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family-base);
  background: linear-gradient(135deg, var(--bg-deepest) 0%, var(--bg-darker) 50%, var(--bg-dark) 100%);
  color: var(--text-light);
  overflow-x: hidden;
  line-height: var(--line-height-normal);
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(0, 191, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 4px;
  background: linear-gradient(90deg, var(--cyan-clarity), var(--magenta-niche), var(--gold-achieve));
  z-index: 9999;
  transition: width 0.1s ease-out;
  box-shadow: 0 0 20px rgba(0, 191, 255, 0.8);
}
.sticky-nav {
  position: fixed;
  top: -100px;
  left: 0;
  right: 0;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(20px);
  padding: 16px 0;
  z-index: 1000;
  transition: top 0.3s var(--ease-standard);
  border-bottom: 1px solid rgba(0, 191, 255, 0.3);
}

.sticky-nav.visible {
  top: 0;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-title {
  font-size: 18px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--cyan-clarity), var(--magenta-niche));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-link {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--cyan-clarity);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
.journey-hud {
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(15, 10, 31, 0.95);
  backdrop-filter: blur(20px);
  padding: 20px;
  border-radius: 12px;
  border: 2px solid var(--quest-gold);
  z-index: 1001;
  min-width: 250px;
  box-shadow: 0 10px 40px rgba(255, 215, 0, 0.3);
}

.hud-title {
  font-size: 14px;
  font-weight: 800;
  color: var(--quest-gold);
  text-transform: uppercase;
  margin-bottom: 16px;
  letter-spacing: 0.1em;
  text-align: center;
}

.hud-stat {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 13px;
}

.hud-label {
  color: var(--text-light);
  font-weight: 600;
}

.hud-value {
  color: var(--quest-gold);
  font-weight: 800;
  font-size: 16px;
}

.streak-flame {
  display: inline-block;
  animation: flameFlicker 1s ease-in-out infinite;
}

@keyframes flameFlicker {
  0%, 100% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.1) rotate(-5deg); }
  75% { transform: scale(1.1) rotate(5deg); }
}

.level-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 8px;
}

.level-fill {
  height: 100%;
  background: var(--progress-bar);
  transition: width 0.5s ease;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 64px 32px;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, rgba(0, 191, 255, 0.15) 0%, transparent 70%);
  animation: pulseGlow 4s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  opacity: 0;
  animation: fadeInScale 1.2s ease-out forwards;
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(30px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.hero-title {
  font-size: clamp(48px, 8vw, 80px);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 24px;
  background: linear-gradient(135deg, var(--cyan-clarity), var(--magenta-niche), var(--gold-achieve));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  text-shadow: 0 0 60px rgba(0, 191, 255, 0.5);
}

.hero-subtitle {
  font-size: clamp(20px, 3vw, 32px);
  font-weight: 700;
  margin-bottom: 48px;
  color: var(--text-bright);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hero-subtitle span {
  display: inline-block;
  opacity: 0;
  animation: wordReveal 0.5s ease-out forwards;
}

@keyframes wordReveal {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-mission {
  font-size: clamp(18px, 2.5vw, 24px);
  line-height: 1.8;
  margin-bottom: 48px;
  color: var(--text-light);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  animation: pulseMission 3s ease-in-out infinite;
}

@keyframes pulseMission {
  0%, 100% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.3); }
  50% { text-shadow: 0 0 40px rgba(255, 215, 0, 0.6); }
}

.scroll-indicator {
  margin-top: 64px;
  animation: bounceArrow 2s ease-in-out infinite;
}

.scroll-arrow {
  width: 40px;
  height: 40px;
  border-left: 3px solid var(--cyan-clarity);
  border-bottom: 3px solid var(--cyan-clarity);
  transform: rotate(-45deg);
  filter: drop-shadow(0 0 10px rgba(0, 191, 255, 0.8));
}

@keyframes bounceArrow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(15px); }
}
.section {
  padding: 100px 32px;
  max-width: 1400px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 900;
  text-align: center;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, var(--gold-achieve), var(--orange-action));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: clamp(18px, 2vw, 22px);
  text-align: center;
  margin-bottom: 64px;
  color: var(--text-light);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}
.video-container {<iframe width="560" height="315" src="https://www.youtube.com/embed/If8WdRSq_78?si=-ogHjRq49pXZxpyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 64px auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 2px solid var(--cyan-clarity);
}

.video-container::before {
  content: '';
  display: block;
  padding-top: 56.25%;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin: 64px 0;
}

.stat-card {
  background: rgba(0, 191, 255, 0.1);
  padding: 32px;
  border-radius: 16px;
  text-align: center;
  border: 2px solid var(--cyan-clarity);
  transition: all 0.3s ease;
  cursor: pointer;
}

.stat-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 191, 255, 0.3);
}

.stat-value {
  font-size: 64px;
  font-weight: 900;
  color: var(--gold-achieve);
  display: block;
  margin-bottom: 16px;
}

.stat-label {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.charts-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 48px;
  margin: 64px 0;
}

.chart-wrapper {
  background: rgba(15, 23, 42, 0.8);
  padding: 32px;
  border-radius: 16px;
  border: 2px solid rgba(255, 69, 0, 0.5);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.chart-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  color: var(--orange-action);
  text-align: center;
}

.chart-canvas {
  position: relative;
  height: 300px;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  margin-top: 64px;
}

.pillar-card {
  background: rgba(15, 23, 42, 0.9);
  border-radius: 16px;
  padding: 32px;
  border-left: 6px solid;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.pillar-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.05) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.pillar-card:hover::before {
  opacity: 1;
}

.pillar-card:hover {
  transform: translateY(-10px) rotateX(2deg) rotateY(2deg);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.pillar-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.pillar-emoji {
  font-size: 32px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.pillar-title {
  font-size: 20px;
  font-weight: 800;
  color: var(--text-bright);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  flex: 1;
}

.pillar-number {
  font-size: 14px;
  font-weight: 700;
  color: var(--gold-achieve);
  background: rgba(255, 215, 0, 0.1);
  padding: 4px 12px;
  border-radius: 20px;
}

.pillar-description {
  font-size: 16px;
  color: var(--text-light);
  margin-bottom: 24px;
  font-weight: 500;
}

.pillar-input {
  width: 100%;
  padding: 16px;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-bright);
  font-size: 15px;
  font-family: var(--font-family-base);
  margin-bottom: 16px;
  transition: all 0.3s ease;
}

.pillar-input:focus {
  outline: none;
  border-color: var(--cyan-clarity);
  box-shadow: 0 0 0 3px rgba(0, 191, 255, 0.2);
  background: rgba(0, 0, 0, 0.5);
}

.pillar-input::placeholder {
  color: rgba(226, 232, 240, 0.5);
}

.pillar-button {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, var(--cyan-clarity), var(--magenta-niche));
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.pillar-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.pillar-button:hover::before {
  width: 300px;
  height: 300px;
}

.pillar-button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 191, 255, 0.5);
}

.pillar-button:active {
  transform: scale(0.98);
}

.pillar-button.loading {
  pointer-events: none;
  opacity: 0.7;
}

.pillar-button.success {
  background: linear-gradient(135deg, var(--lime-growth), var(--gold-achieve));
}

.pillar-output {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, padding 0.5s ease, margin 0.5s ease;
  background: rgba(0, 191, 255, 0.05);
  border-radius: 8px;
  margin-top: 0;
}

.pillar-output.visible {
  max-height: 500px;
  padding: 20px;
  margin-top: 16px;
  border: 2px solid var(--cyan-clarity);
}

.output-content {
  color: var(--text-light);
  font-size: 15px;
  line-height: 1.8;
}

.checkmark {
  display: inline-block;
  margin-right: 8px;
  color: var(--lime-growth);
  font-size: 18px;
  animation: checkPop 0.3s ease;
}

@keyframes checkPop {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.forensic-section {
  background: rgba(15, 23, 42, 0.5);
  padding: 80px 32px;
  border-radius: 16px;
  margin: 64px auto;
  max-width: 1200px;
  border: 2px solid var(--gold-achieve);
}

.forensic-content {
  color: var(--text-light);
  font-size: 18px;
  line-height: 1.9;
}

.forensic-content h3 {
  font-size: 32px;
  font-weight: 800;
  color: var(--gold-achieve);
  margin: 48px 0 24px 0;
  text-transform: uppercase;
}

.forensic-content p {
  margin-bottom: 24px;
}

.forensic-content strong {
  color: var(--orange-action);
  font-weight: 700;
}

.pull-quote {
  border-left: 6px solid var(--magenta-niche);
  padding: 32px;
  margin: 48px 0;
  background: rgba(255, 0, 255, 0.05);
  border-radius: 8px;
  font-size: 24px;
  font-style: italic;
  color: var(--text-bright);
  font-weight: 600;
  line-height: 1.6;
}

.footer-section {
  text-align: center;
  padding: 100px 32px;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 191, 255, 0.1) 100%);
}

.footer-quote {
  font-size: clamp(24px, 4vw, 40px);
  font-style: italic;
  font-weight: 700;
  color: var(--text-bright);
  max-width: 1000px;
  margin: 0 auto 48px auto;
  line-height: 1.6;
  text-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
}

.footer-cta {
  font-size: 20px;
  color: var(--text-light);
  margin-bottom: 32px;
}

.achievement-tracker {
  margin-top: 64px;
  padding: 32px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  border: 2px solid var(--gold-achieve);
}

.achievement-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--gold-achieve);
  margin-bottom: 16px;
}

.achievement-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.achievement-badge {
  padding: 12px 20px;
  background: rgba(50, 205, 50, 0.1);
  border: 2px solid var(--lime-growth);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  color: var(--lime-growth);
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0;
  transform: scale(0);
  transition: all 0.4s ease;
}

.achievement-badge.unlocked {
  opacity: 1;
  transform: scale(1);
  animation: badgePulse 0.6s ease;
}

@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}

.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .nav-links {
    gap: 16px;
  }
  
  .nav-link {
    font-size: 12px;
  }
  
  .charts-container {
    grid-template-columns: 1fr;
  }
  
  .pillars-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-section {
    min-height: 80vh;
    padding: 48px 20px;
  }
  
  .section {
    padding: 60px 20px;
  }
  
  .cta-button {
    padding: 16px 32px;
    font-size: 16px;
  }
}

/* ACCESSIBILITY */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

.text-gradient {
  background: linear-gradient(135deg, var(--cyan-clarity), var(--magenta-niche));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glow {
  filter: drop-shadow(0 0 20px currentColor);
}

.cta-button {
  margin-top: 32px;
  padding: 20px 48px;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  background: linear-gradient(135deg, var(--quest-rare), var(--quest-legendary));
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 10px 40px rgba(255, 0, 255, 0.4);
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
}

.cta-button:hover {
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 15px 50px rgba(255, 0, 255, 0.6);
}

.cta-button:active {
  transform: scale(1.05) translateY(-2px);
}

.roadmap-visual {
  padding: 40px;
  background: rgba(15, 10, 31, 0.6);
  border-radius: 16px;
  border: 2px solid var(--quest-gold);
}

.mission-node {
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 10px;
  border-radius: 50%;
  border: 4px solid;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: relative;
  transition: all 0.4s ease;
  text-align: center;
  line-height: 72px;
  font-size: 32px;
}

.mission-node.locked {
  border-color: var(--mission-locked);
  opacity: 0.4;
  cursor: not-allowed;
}

.mission-node.active {
  border-color: var(--mission-active);
  animation: pulseMission 2s ease-in-out infinite;
  box-shadow: 0 0 30px var(--mission-active);
}

.mission-node.complete {
  border-color: var(--mission-complete);
  background: rgba(50, 205, 50, 0.2);
}

.mission-node:hover:not(.locked) {
  transform: scale(1.2) translateY(-10px);
  box-shadow: 0 10px 40px rgba(255, 215, 0, 0.5);
}

@keyframes pulseMission {
  0%, 100% { box-shadow: 0 0 20px var(--mission-active); }
  50% { box-shadow: 0 0 50px var(--mission-active); }
}

.mission-connector {
  display: inline-block;
  width: 40px;
  height: 4px;
  background: linear-gradient(90deg, var(--quest-rare), var(--quest-legendary));
  vertical-align: middle;
  margin: 0 -5px;
}

.mission-layer {
  position: relative;
}

.mission-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  z-index: 2000;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow-y: auto;
}

.mission-modal.active {
  display: flex;
}

.mission-content {
  background: linear-gradient(135deg, rgba(15, 10, 31, 0.98), rgba(8, 5, 26, 0.98));
  border: 3px solid var(--quest-gold);
  border-radius: 20px;
  max-width: 900px;
  width: 100%;
  padding: 48px;
  position: relative;
  box-shadow: 0 20px 80px rgba(255, 215, 0, 0.4);
  animation: modalSlideIn 0.5s ease;
}

@keyframes modalSlideIn {
  from { opacity: 0; transform: scale(0.8) translateY(50px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.mission-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 0, 0, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mission-close:hover {
  background: rgba(255, 0, 0, 1);
  transform: rotate(90deg);
}

.mission-header {
  text-align: center;
  margin-bottom: 32px;
}

.mission-title {
  font-size: 36px;
  font-weight: 900;
  background: linear-gradient(135deg, var(--quest-gold), var(--quest-legendary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
}

.mission-description {
  font-size: 18px;
  color: var(--text-light);
  margin-bottom: 32px;
}

.sub-mission {
  background: rgba(0, 191, 255, 0.05);
  border-left: 4px solid var(--quest-rare);
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.sub-mission:hover {
  background: rgba(0, 191, 255, 0.1);
  transform: translateX(10px);
}

.sub-mission-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--quest-rare);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.sub-mission-steps {
  margin-left: 20px;
}

.quest-step {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 16px;
  color: var(--text-light);
}

.step-checkbox {
  width: 24px;
  height: 24px;
  border: 2px solid var(--quest-rare);
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background: rgba(0, 0, 0, 0.5);
}

.step-checkbox:hover {
  border-color: var(--quest-gold);
  box-shadow: 0 0 10px var(--quest-rare);
}

.step-checkbox.checked {
  background: var(--mission-complete);
  border-color: var(--mission-complete);
}

.step-checkbox.checked::after {
  content: '✓';
  color: white;
  font-weight: bold;
  font-size: 18px;
}

.mission-progress-bar {
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 32px;
  position: relative;
}

.mission-progress-fill {
  height: 100%;
  background: var(--progress-bar);
  transition: width 0.5s ease;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
}

.mission-progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 800;
  font-size: 12px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
}

.complete-mission-btn {
  width: 100%;
  padding: 20px;
  margin-top: 24px;
  background: linear-gradient(135deg, var(--mission-complete), var(--quest-gold));
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
}

.complete-mission-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 40px rgba(50, 205, 50, 0.5);
}

.complete-mission-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.badge-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  padding: 32px;
}

.badge-item {
  background: rgba(15, 10, 31, 0.8);
  border: 3px solid;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.badge-item.locked {
  border-color: var(--mission-locked);
  opacity: 0.4;
}

.badge-item.unlocked {
  border-color: var(--quest-gold);
  animation: badgeUnlock 1s ease;
}

@keyframes badgeUnlock {
  0% { transform: scale(0) rotate(-180deg); }
  60% { transform: scale(1.2) rotate(10deg); }
  100% { transform: scale(1) rotate(0deg); }
}

.badge-item:hover.unlocked {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 20px 60px var(--badge-glow);
}

.badge-icon {
  font-size: 64px;
  margin-bottom: 16px;
  display: block;
  filter: drop-shadow(0 0 20px var(--quest-gold));
}

.badge-item.locked .badge-icon {
  filter: grayscale(100%) opacity(0.3);
}

.badge-name {
  font-size: 18px;
  font-weight: 800;
  color: var(--quest-gold);
  margin-bottom: 8px;
  text-transform: uppercase;
}

.badge-tier {
  font-size: 12px;
  color: var(--text-light);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.badge-desc {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.6;
}

.badge-unlock-date {
  font-size: 11px;
  color: var(--quest-rare);
  margin-top: 12px;
  font-style: italic;
}

/* BENCHMARKS BOARD */
.benchmarks-board {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  padding: 32px;
}

.benchmark-card {
  background: rgba(15, 10, 31, 0.8);
  border: 2px solid var(--streak-fire);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
}

.benchmark-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(255, 107, 53, 0.4);
}

.benchmark-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.benchmark-title {
  font-size: 20px;
  font-weight: 800;
  color: var(--streak-fire);
  margin-bottom: 12px;
  text-transform: uppercase;
}

.benchmark-desc {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.6;
}

.benchmark-status {
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

.benchmark-status.achieved {
  background: rgba(50, 205, 50, 0.2);
  border: 2px solid var(--mission-complete);
  color: var(--mission-complete);
}

.benchmark-status.locked {
  background: rgba(84, 110, 122, 0.2);
  border: 2px solid var(--mission-locked);
  color: var(--mission-locked);
}

@media (max-width: 768px) {
  .journey-hud {
    top: 10px;
    right: 10px;
    left: 10px;
    min-width: auto;
  }
  
  .mission-content {
    padding: 24px;
  }
  
  .mission-title {
    font-size: 28px;
  }
  
  .badge-showcase,
  .benchmarks-board {
    grid-template-columns: 1fr;
  }
}
    </style>
</head>
<body>
    <!-- SCROLL PROGRESS INDICATOR -->
    <div class="scroll-progress" id="scrollProgress"></div>

    <!-- STICKY NAVIGATION -->
    <nav class="sticky-nav" id="stickyNav">
        <div class="nav-container">
            <div class="nav-title">HOLLYWOOD'S FINEST</div>
            <div class="nav-links">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#roadmap" class="nav-link">Quest Log</a>
                <a href="#missions" class="nav-link">Discussion</a>
                <a href="#badges" class="nav-link">Achievements</a>
                <a href="#benchmarks" class="nav-link">Leaderboard</a>
            </div>
        </div>
    </nav>

    <!-- JOURNEY STATS HUD -->
    <div class="journey-hud" id="journeyHud">
        <div class="hud-title">🏆 Your Journey</div>
        <div class="hud-stat">
            <span class="hud-label">Level:</span>
            <span class="hud-value" id="playerLevel">1</span>
        </div>
        <div class="hud-stat">
            <span class="hud-label">XP:</span>
            <span class="hud-value" id="playerXP">0</span>
        </div>
        <div class="level-bar">
            <div class="level-fill" id="xpBar" style="width: 0%"></div>
        </div>
        <div class="hud-stat">
            <span class="hud-label">Missions:</span>
            <span class="hud-value" id="missionsComplete">0/24</span>
        </div>
        <div class="hud-stat">
            <span class="hud-label">Streak:</span>
            <span class="hud-value"><span class="streak-flame">🔥</span> <span id="streakCount">0</span></span>
        </div>
        <div class="hud-stat">
            <span class="hud-label">Badges:</span>
            <span class="hud-value" id="badgeCount">0</span>
        </div>
    </div>

    <!-- QUEST LOG: YOUR EPIC MISSIONS -->
    <section class="section" id="roadmap" style="padding-top:140px;">
        <h2 class="section-title">The Quest Log: Your Path to Mastery</h2>
        <p class="section-description">Complete the Main Quest and Side Quests to unlock achievements, earn XP, and ascend through mastery tiers. Each quest builds your understanding of systemic barriers and intervention strategies.</p>
        <div id="skillTreeContainer" style="background:rgba(15,10,31,0.8);border-radius:16px;padding:40px;border:2px solid var(--electric-cyan);margin:32px auto;max-width:1200px;">
            <div id="skillTreeCanvas" style="min-height:600px;position:relative;overflow:auto;">
                <!-- Interactive skill tree rendered by JS -->
            </div>
        </div>
        <div id="currentTierDisplay" style="text-align:center;margin-top:32px;padding:24px;background:rgba(255,215,0,0.1);border-radius:12px;border:2px solid var(--plasma-gold);max-width:800px;margin-left:auto;margin-right:auto;">
            <h3 style="color:var(--plasma-gold);font-size:28px;font-weight:900;margin-bottom:16px;">CURRENT TIER: <span id="currentTierName">NOVICE</span></h3>
            <p style="color:var(--text-light);font-size:16px;margin-bottom:16px;" id="tierDescription">Complete 3 foundational missions to prove competency.</p>
            <div style="margin-top:16px;">
                <div style="font-size:14px;color:var(--text-light);margin-bottom:8px;">Progress to Next Tier:</div>
                <div style="width:100%;height:24px;background:rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;">
                    <div id="tierProgressBar" style="height:100%;background:var(--progress-bar);width:0%;transition:width 0.5s ease;"></div>
                </div>
                <div id="tierRequirements" style="margin-top:12px;font-size:13px;color:var(--text-light);"></div>
            </div>
        </div>
    </section>

    <!-- HERO SECTION -->
    <section class="hero-section" id="hero">
        <div class="hero-background"></div>
        <div class="hero-content">
            <h1 class="hero-title">🎬 HOLLYWOOD'S FINEST 🎬</h1>
            <h2 class="hero-subtitle" id="subtitle">
                <span>THE</span>
                <span>AWAKENING</span>
                <span>DECONSTRUCT</span>
                <span>McKENZIE'S</span>
                <span>ORDEAL</span>
            </h2>
            <p class="hero-mission">
                Welcome to the ULTIMATE gamified discussion platform—a neurochemically-engineered learning ecosystem that transforms academic discourse into an EPIC quest experience. You have witnessed McKenzie Tran's calculated struggle through bureaucratic cruelty. Your mission: Perform forensic analysis of the systemic machinery that manufactured her suffering. This is not mere academic exercise—this is preparation for dismantling systemic malignancy. Every response earns XP. Every insight unlocks badges. Every peer connection forges alliances. Your AWAKENING begins NOW.
            </p>
            <button class="cta-button" onclick="scrollToRoadmap()">🎯 ACCEPT THE AWAKENING</button>
            <div class="scroll-indicator">
                <div class="scroll-arrow"></div>
            </div>
        </div>
    </section>

    <!-- DOCUMENTARY CONTEXT -->
    <section class="section" id="origin">
        <h2 class="section-title">McKenzie's Story: The Catalyst</h2>
        <div class="stats-grid">
            <div class="stat-card">
                <span class="stat-value" data-target="1">0</span>
                <span class="stat-label">Pregnant Mother</span>
            </div>
            <div class="stat-card">
                <span class="stat-value" data-target="7">0</span>
                <span class="stat-label">Months Homeless</span>
            </div>
            <div class="stat-card">
                <span class="stat-value" data-target="34">0</span>
                <span class="stat-label">Systemic Failures</span>
            </div>
        </div>
        <p class="section-description" style="margin-top:48px;">
            Witness McKenzie Tran's journey through LA County's fragmented social services infrastructure during pregnancy and homelessness.
        </p>
        <div class="video-container">
            <iframe 
                src="https://www.youtube.com/embed/If8WdRSq_78?si=72TzFI_oDwMW5qE0" 
                title="Hollywood's Finest - McKenzie Tran Documentary" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    </section>

    <!-- PEER RESPONSE ZONE -->
    <section class="section" id="missions">
        <h2 class="section-title">Peer Alliance Zone: Forge Connections</h2>
        <p class="section-description">
            Engage with your classmates' insights. Each thoughtful peer response earns XP and builds your network of intellectual allies. Select responses below to view and respond.
        </p>
        <div id="peerResponseZone" style="margin-top:48px;">
            <div style="text-align:center;padding:64px;background:rgba(0,191,255,0.05);border-radius:16px;border:2px dashed #00D9FF;">
                <div style="font-size:64px;margin-bottom:24px;">🤝</div>
                <h3 style="color:#00D9FF;font-size:24px;font-weight:800;margin-bottom:16px;">Peer Responses Coming Soon</h3>
                <p style="color:#E2E8F0;font-size:16px;max-width:600px;margin:0 auto;line-height:1.8;">
                    Once you and your classmates submit responses, they'll appear here as "Alliance Cards." You can read their insights, provide thoughtful feedback, and earn the <strong>Compassionate Witness</strong> achievement.
                </p>
                <div style="margin-top:32px;padding:20px;background:rgba(255,215,0,0.1);border-radius:12px;max-width:500px;margin-left:auto;margin-right:auto;">
                    <div style="color:#FFD700;font-weight:700;font-size:14px;margin-bottom:8px;">🎯 SIDE QUEST AVAILABLE:</div>
                    <div style="color:#E2E8F0;font-size:14px;line-height:1.6;">
                        Provide <strong>2 thoughtful peer responses</strong> (1 paragraph each)<br>
                        Reward: <strong>100 XP</strong> + Silver Key of Discourse
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- READING MATERIALS SECTION -->
    <section class="section" id="readings" style="display:none;">
        <h2 class="section-title">Required Reading: Stratospheric Deconstruction</h2>
        <div style="max-width:900px;margin:0 auto;background:rgba(0,191,255,0.05);padding:48px;border-radius:16px;border:2px solid #00D9FF;">
            <div style="text-align:center;margin-bottom:32px;">
                <div style="font-size:64px;margin-bottom:16px;">📚</div>
                <h3 style="color:#00D9FF;font-size:28px;font-weight:900;margin-bottom:16px;">Stratospheric Deconstruction:</h3>
                <p style="color:#FFD700;font-size:20px;font-weight:700;">Systemic Dereliction Within LA County's Social Services Infrastructure</p>
            </div>
            <div style="color:#E2E8F0;font-size:16px;line-height:1.9;">
                <p style="margin-bottom:20px;">
                    This supplementary analysis provides the theoretical framework for understanding McKenzie's experience within broader systemic failures. Key concepts include:
                </p>
                <ul style="margin-left:24px;margin-bottom:24px;">
                    <li style="margin-bottom:12px;"><strong style="color:#FFD700;">The $1 vs $100 Paradox:</strong> How $1 in preventative investment could have prevented $100 in crisis intervention costs</li>
                    <li style="margin-bottom:12px;"><strong style="color:#FFD700;">Strategic Attrition:</strong> Bureaucratic processes designed to exhaust rather than serve</li>
                    <li style="margin-bottom:12px;"><strong style="color:#FFD700;">Bureaucratic Fragmentation:</strong> Siloed agencies creating impossible compliance scenarios</li>
                    <li style="margin-bottom:12px;"><strong style="color:#FFD700;">The Warm Handoff:</strong> Integrated transition protocols between service providers</li>
                    <li style="margin-bottom:12px;"><strong style="color:#FFD700;">The 34 Vows:</strong> Comprehensive framework for trauma-informed advocacy</li>
                </ul>
                <div style="background:rgba(255,215,0,0.1);padding:24px;border-radius:12px;border-left:4px solid #FFD700;margin-top:32px;">
                    <div style="color:#FFD700;font-weight:800;font-size:14px;margin-bottom:12px;">✨ ACHIEVEMENT UNLOCKED:</div>
                    <div style="color:#E2E8F0;font-size:14px;">
                        Reading this section earns you the <strong>"The Scholar"</strong> badge (+50 XP)
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- THE 24 PILLARS SECTION (HIDDEN) -->
    <section class="section" id="pillars" style="display:none;">
        <h2 class="section-title">The 24 Pillars of Transformation</h2>
        <p class="section-description">
            Revolutionary AI-powered tools designed to annihilate systemic barriers and reconstruct pathways to stability.
        </p>
        
        <div class="pillars-grid" id="pillarsGrid"></div>
    </section>

    <!-- DOCUMENTARY CONTEXT: THE CHALLENGE -->
    <section class="section" id="challenge" style="padding-top:80px;padding-bottom:80px;">
        <h2 class="section-title">The Challenge: McKenzie's System Gauntlet</h2>
        <p class="section-description">
            McKenzie Tran navigated a maze of misaligned agencies while pregnant and homeless. These charts reveal the systemic contradictions she faced.
        </p>
        <div class="charts-container">
            <div class="chart-wrapper">
                <h3 class="chart-title">Timeline Paradox: Institution vs. Clinical Reality</h3>
                <div class="chart-canvas">
                    <canvas id="timelineChart"></canvas>
                </div>
            </div>
            <div class="chart-wrapper">
                <h3 class="chart-title">Focus Misallocation</h3>
                <div class="chart-canvas">
                    <canvas id="focusChart"></canvas>
                </div>
            </div>
        </div>
    </section>

    <!-- FORENSIC COVENANT SECTION -->
    <section class="section forensic-section" id="covenant" style="display:none;">
        <h2 class="section-title">The Forensic Covenant</h2>
        <div class="forensic-content">
            <p>
                This is not advocacy—this is <strong>systemic reconstruction</strong>. The current framework operates on a 6-month compliance mandate while clinical recovery requires 24 months. This mathematical impossibility creates a predatory cycle that punishes trauma survivors for exhibiting symptoms of their trauma.
            </p>
            
            <div class="pull-quote">
                "The system measures success by housing placement dates, not by the eradication of the conditions that caused homelessness."
            </div>
            
            <h3>The Silo Problem</h3>
            <p>
                Bureaucratic fragmentation means that housing services, mental health treatment, legal advocacy, and child welfare operate as isolated kingdoms. Each demands documentation the others won't provide. Each has different eligibility criteria. Each punishes clients for the failures of the others.
            </p>
            
            <h3>The Trauma Paradox</h3>
            <p>
                When a mother with PTSD misses a DCFS appointment due to a panic attack, the system labels it "non-compliance" rather than recognizing it as a symptom requiring clinical intervention. <strong>The system criminalizes the condition it was designed to treat.</strong>
            </p>
            
            <h3>The Holistic Solution</h3>
            <p>
                The 24 Pillars represent a paradigm shift: from fragmented compliance monitoring to integrated outcome achievement. Every tool in this architecture is designed to simultaneously address multiple co-occurring needs while documenting systemic failures—not client deficiencies.
            </p>
            
            <div class="pull-quote">
                "We don't just place people in housing. We reconstruct the conditions that make stability possible."
            </div>
        </div>
    </section>

    <!-- COLLECTIBLES & ARTIFACTS SYSTEM -->
    <section class="section" id="badges">
        <h2 class="section-title">🏅 Collectibles: Functional Catalysts of Power</h2>
        <p class="section-description">
            These are not cosmetic badges—they are OPERATIONAL LEAPS. Artifacts of Insight unlock advanced tools. Volatile Data Shards assemble into policy briefs. Blueprint Fragments construct the Grand Unification Engine. Strategic Keys unlock impossible missions.
        </p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-bottom:48px;">
            <div style="background:rgba(0,191,255,0.1);border:2px solid var(--electric-cyan);border-radius:12px;padding:24px;">
                <h3 style="color:var(--electric-cyan);font-size:18px;font-weight:800;margin-bottom:12px;">⚡ Mastery Multiplier (μ-Factor)</h3>
                <div style="font-size:48px;font-weight:900;color:var(--electric-cyan);margin:16px 0;"><span id="masteryMultiplier">1.0</span>x</div>
                <p style="font-size:14px;color:var(--text-light);">Your current learning velocity multiplier. Increases with Nexus Challenge completions.</p>
            </div>
            <div style="background:rgba(255,215,0,0.1);border:2px solid var(--plasma-gold);border-radius:12px;padding:24px;">
                <h3 style="color:var(--plasma-gold);font-size:18px;font-weight:800;margin-bottom:12px;">🔑 Artifacts Collected</h3>
                <div style="font-size:48px;font-weight:900;color:var(--plasma-gold);margin:16px 0;"><span id="artifactCount">0</span>/20</div>
                <p style="font-size:14px;color:var(--text-light);">Unique collectibles that unlock advanced capabilities.</p>
            </div>
            <div style="background:rgba(255,0,255,0.1);border:2px solid var(--magenta-niche);border-radius:12px;padding:24px;">
                <h3 style="color:var(--magenta-niche);font-size:18px;font-weight:800;margin-bottom:12px;">💎 Critical Success Rate</h3>
                <div style="font-size:48px;font-weight:900;color:var(--magenta-niche);margin:16px 0;"><span id="criticalRate">10</span>%</div>
                <p style="font-size:14px;color:var(--text-light);">Chance for double XP + rare artifact on mission completion.</p>
            </div>
        </div>
        <div id="badgeShowcase" class="badge-showcase"></div>
        <div id="collectiblesInventory" style="margin-top:48px;">
            <h3 style="text-align:center;font-size:28px;font-weight:800;color:var(--plasma-gold);margin-bottom:24px;">YOUR INVENTORY</h3>
            <div id="inventoryGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;"></div>
        </div>
    </section>

    <!-- ELITE GATES & VALIDATION SCENARIOS -->
    <section class="section" id="benchmarks">
        <h2 class="section-title">🔥 Elite Gates: Validation Challenges</h2>
        <p class="section-description">These are not simple checkpoints—they are GATES TO NEW DIMENSIONS. Each tier requires comprehensive, stress-tested demonstration of expertise. Pass the validation scenarios to transcend.</p>
        <div id="tierGatesContainer" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:32px;margin:48px 0;">
            <!-- Tier gates dynamically rendered -->
        </div>
        <h3 style="text-align:center;font-size:28px;font-weight:800;color:var(--streak-fire);margin:64px 0 32px;">Benchmark Achievements</h3>
        <div id="benchmarksBoard" class="benchmarks-board"></div>
    </section>

    <!-- FOOTER SECTION -->
    <section class="footer-section">
        <p class="footer-quote">
            Your purpose is crystal clear. Your journey is eternal. Every mission conquered, every badge earned, every streak extended—this is your legacy of mastery.
        </p>
        <p class="footer-cta">
            Return daily. Unlock secrets. Ascend higher. The revolution is yours.
        </p>
        
        <div class="achievement-tracker">
            <h3 class="achievement-title">Random Motivational Boost</h3>
            <div class="achievement-list" id="motoQuotes"></div>
        </div>
        
        <!-- HALL OF FAME -->
        <div style="margin-top:64px;padding:48px;background:rgba(255,215,0,0.05);border-radius:16px;border:2px solid var(--plasma-gold);max-width:1000px;margin-left:auto;margin-right:auto;">
            <h3 style="color:var(--plasma-gold);font-size:32px;font-weight:900;text-align:center;margin-bottom:32px;text-transform:uppercase;">🏆 HALL OF FAME: TRANSCENDENT ARCHITECTS</h3>
            <p style="color:var(--text-light);text-align:center;margin-bottom:32px;font-size:16px;">
                The elite few who have achieved the ultimate tier. Their names are eternal.
            </p>
            <div id="hallOfFameLeaderboard" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:24px;">
                <div style="background:rgba(255,215,0,0.1);border:2px solid var(--plasma-gold);border-radius:12px;padding:24px;text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">🌟</div>
                    <div style="color:var(--plasma-gold);font-weight:900;font-size:18px;margin-bottom:8px;">RANK #1</div>
                    <div style="color:white;font-weight:700;font-size:16px;margin-bottom:8px;">SystemArchitect_Prime</div>
                    <div style="color:var(--text-light);font-size:14px;">128,450 XP</div>
                    <div style="color:var(--text-light);font-size:13px;margin-top:8px;">Multiplier: 3.5x</div>
                </div>
                <div style="background:rgba(229,228,226,0.1);border:2px solid #E5E4E2;border-radius:12px;padding:24px;text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">💎</div>
                    <div style="color:#E5E4E2;font-weight:900;font-size:18px;margin-bottom:8px;">RANK #2</div>
                    <div style="color:white;font-weight:700;font-size:16px;margin-bottom:8px;">PolicyWarrior_Apex</div>
                    <div style="color:var(--text-light);font-size:14px;">96,200 XP</div>
                    <div style="color:var(--text-light);font-size:13px;margin-top:8px;">Multiplier: 3.2x</div>
                </div>
                <div style="background:rgba(205,127,50,0.1);border:2px solid #CD7F32;border-radius:12px;padding:24px;text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">👑</div>
                    <div style="color:#CD7F32;font-weight:900;font-size:18px;margin-bottom:8px;">RANK #3</div>
                    <div style="color:white;font-weight:700;font-size:16px;margin-bottom:8px;">TraumaDefender_Elite</div>
                    <div style="color:var(--text-light);font-size:14px;">82,750 XP</div>
                    <div style="color:var(--text-light);font-size:13px;margin-top:8px;">Multiplier: 3.0x</div>
                </div>
                <div style="background:rgba(0,217,255,0.1);border:2px solid var(--electric-cyan);border-radius:12px;padding:24px;text-align:center;opacity:0.5;position:relative;">
                    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:64px;opacity:0.3;">❓</div>
                    <div style="font-size:48px;margin-bottom:12px;filter:blur(4px);">🎯</div>
                    <div style="color:var(--electric-cyan);font-weight:900;font-size:18px;margin-bottom:8px;">YOUR NAME HERE</div>
                    <div style="color:white;font-weight:700;font-size:16px;margin-bottom:8px;">Ascend to claim your throne</div>
                </div>
            </div>
            <div style="margin-top:32px;text-align:center;color:var(--text-light);font-size:14px;font-style:italic;">
                Leaderboard updates in real-time. Compete globally. Achieve immortality.
            </div>
        </div>
        
        <div style="margin-top:64px;padding:48px;background:rgba(0,191,255,0.05);border-radius:16px;border:2px solid var(--electric-cyan);max-width:900px;margin-left:auto;margin-right:auto;">
            <h3 style="color:var(--electric-cyan);font-size:28px;font-weight:900;text-align:center;margin-bottom:24px;">🚀 PILLAR 5: TRANSCENDENT DEPLOYMENT</h3>
            <p style="color:var(--text-light);text-align:center;margin-bottom:24px;font-size:16px;line-height:1.8;">
                This application is <strong>GitHub Pages ready</strong>, enterprise-grade, and fully functional. Deploy globally in minutes.
            </p>
            <div style="background:rgba(0,0,0,0.5);padding:24px;border-radius:12px;font-family:monospace;font-size:13px;color:#00FF88;line-height:1.8;">
                <div><span style="color:#FFD700;">$</span> git clone [repository]</div>
                <div><span style="color:#FFD700;">$</span> cd hangontoyourchonersfam/</div>
                <div><span style="color:#FFD700;">$</span> git push origin main</div>
                <div style="margin-top:12px;color:#00D9FF;"># Enable GitHub Pages in Settings &gt; Pages</div>
                <div style="color:#00D9FF;"># Source: main branch, root folder</div>
                <div style="margin-top:12px;color:#FF00FF;">✓ Live at: https://bsigala.github.io/hangontoyourchonersfam/</div>
            </div>
            <div style="margin-top:24px;text-align:center;">
                <div style="display:inline-flex;gap:16px;flex-wrap:wrap;justify-content:center;">
                    <div style="background:rgba(50,205,50,0.2);border:2px solid #32CD32;padding:12px 20px;border-radius:20px;color:#32CD32;font-weight:700;font-size:13px;">✓ 100% Static HTML/CSS/JS</div>
                    <div style="background:rgba(50,205,50,0.2);border:2px solid #32CD32;padding:12px 20px;border-radius:20px;color:#32CD32;font-weight:700;font-size:13px;">✓ No Server Dependencies</div>
                    <div style="background:rgba(50,205,50,0.2);border:2px solid #32CD32;padding:12px 20px;border-radius:20px;color:#32CD32;font-weight:700;font-size:13px;">✓ Mobile Responsive</div>
                    <div style="background:rgba(50,205,50,0.2);border:2px solid #32CD32;padding:12px 20px;border-radius:20px;color:#32CD32;font-weight:700;font-size:13px;">✓ WCAG AA Compliant</div>
                </div>
            </div>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="app.js" defer></script>
</body>
</html>
