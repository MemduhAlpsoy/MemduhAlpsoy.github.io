// Small helpers for the portfolio skeleton
document.addEventListener('DOMContentLoaded', function(){
	// Set current year in footer
	const y = new Date().getFullYear();
	const el = document.getElementById('year');
	if(el) el.textContent = y;

	// Navigation-driven single-section view
	const navLinks = Array.from(document.querySelectorAll('.main-nav a'));
	const sections = Array.from(document.querySelectorAll('main .section'));

	function showSection(hash, pushHistory = false){
		if(!hash) hash = '#hakkimda';
		const target = document.querySelector(hash);
		if(!target) return;

		// Hide others, show target
		sections.forEach(s => {
			if(s === target) s.classList.remove('is-hidden');
			else s.classList.add('is-hidden');
		});

		// Update active nav link
		navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === hash));

		// Update URL without reloading (optional)
		if(pushHistory){
			history.pushState(null, '', hash);
		}
	}

	// Click handlers for nav links
	navLinks.forEach(a => {
		a.addEventListener('click', function(e){
			e.preventDefault();
			const href = a.getAttribute('href');
			showSection(href, true);
		});
	});

	// React to back/forward and manual hash changes
	window.addEventListener('hashchange', function(){
		showSection(location.hash || '#hakkimda', false);
	});

	// Initial view: if there's a hash and matching section, show it; otherwise show hakkimda
	showSection(location.hash || '#hakkimda', false);
});
