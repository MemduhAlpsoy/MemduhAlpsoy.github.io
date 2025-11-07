// Small helpers for the portfolio skeleton
document.addEventListener('DOMContentLoaded', function(){
	// Set current year in footer
	const y = new Date().getFullYear();
	const el = document.getElementById('year');
	if(el) el.textContent = y;

	// Active nav link on scroll
	const navLinks = Array.from(document.querySelectorAll('.main-nav a'));
	const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

	function onScroll(){
		const scrollPos = window.scrollY + 120; // offset for header
		for(let i=sections.length-1;i>=0;i--){
			const s = sections[i];
			if(s && s.offsetTop <= scrollPos){
				navLinks.forEach(a=>a.classList.remove('active'));
				const id = '#'+s.id;
				const match = navLinks.find(a=>a.getAttribute('href')===id);
				if(match) match.classList.add('active');
				break;
			}
		}
	}

	window.addEventListener('scroll', onScroll, {passive:true});
	onScroll();
});
