// script.ts
const toggleSkillsBtn = document.getElementById('toggle-skills-btn');
const skillsSection = document.getElementById('skills-section');

toggleSkillsBtn?.addEventListener('click', () => {
    const isExpanded = toggleSkillsBtn.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        skillsSection?.classList.add('collapsed');
        toggleSkillsBtn.textContent = 'Show Skills';
        toggleSkillsBtn.setAttribute('aria-expanded', 'false');
    } else {
        skillsSection?.classList.remove('collapsed');
        toggleSkillsBtn.textContent = 'Hide Skills';
        toggleSkillsBtn.setAttribute('aria-expanded', 'true');
    }
});
