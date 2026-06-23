//
// This is The Scripts used for Simply Theme
//
function main() {
	(function () {
		'use strict'
		//Script
		//-----------------------------------
		jQuery(document).ready(function ($) {
			var wd = $(window).width();

			var wd = jQuery(window).width();
			/* ---------------------------------------------- /*
				* MenuMobie
			/* ---------------------------------------------- */


			const tabs = document.querySelectorAll('.tab-btn');
			const panels = document.querySelectorAll('.tab-panel');

			tabs.forEach(btn => {
				btn.addEventListener('click', () => {
					tabs.forEach(t => t.classList.remove('tab-btn--active'));

					panels.forEach(p => p.hidden = true);

					btn.classList.add('tab-btn--active');

					const target = document.getElementById('tab-' + btn.dataset.tab);
					if (target) {
						target.hidden = false;
					}
				});
			});

			$('.faq-item__trigger').on('click', function () {
				const $trigger = $(this);
				const $item = $trigger.closest('.faq-item');
				const $panel = $item.find('.faq-item__panel');
				const isOpen = $trigger.attr('aria-expanded') === 'true';

				$('.faq-item__trigger').not($trigger).each(function () {
					const $otherTrigger = $(this);
					$otherTrigger.attr('aria-expanded', 'false');
					$otherTrigger.closest('.faq-item').find('.faq-item__panel').css('max-height', '');
				});

				if (isOpen) {
					$trigger.attr('aria-expanded', 'false');
					$panel.css('max-height', '');
				} else {
					$trigger.attr('aria-expanded', 'true');
					$panel.css('max-height', $panel.prop('scrollHeight') + 'px');
				}
			});
			const filterChips = document.querySelectorAll('.filter-chip');

			filterChips.forEach((chip) => {
				chip.addEventListener('click', () => {

					filterChips.forEach((c) => c.classList.remove('is-active'));

					chip.classList.add('is-active');

					const filterValue = chip.dataset.filter;

					console.log('Filter selected:', filterValue);
				});
			});
			$(".hambuger-mobile").on("click", function () {
				$(this).toggleClass("exit");
				$('.header-inner').toggleClass("active");

				$(".header-right").slideToggle();
			});
			const tocLinks = document.querySelectorAll('.post-toc__link');
			const sections = document.querySelectorAll('.post-section');

			function updateActiveTocLink() {
				let currentId = sections[0]?.id;

				sections.forEach((section) => {
					const rect = section.getBoundingClientRect();
					if (rect.top <= 120) {
						currentId = section.id;
					}
				});

				tocLinks.forEach((link) => {
					const isActive = link.getAttribute('href') === `#${currentId}`;
					link.classList.toggle('is-active', isActive);
				});
			}

			window.addEventListener('scroll', updateActiveTocLink);
			window.addEventListener('load', updateActiveTocLink);

			tocLinks.forEach((link) => {
				link.addEventListener('click', (e) => {
					const targetId = link.getAttribute('href').slice(1);
					const targetEl = document.getElementById(targetId);
					if (targetEl) {
						e.preventDefault();
						targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
						history.pushState(null, '', `#${targetId}`);
					}
				});
			});

			const shareBtn = document.querySelector('.post-share__btn');
			if (shareBtn) {
				shareBtn.addEventListener('click', async () => {
					try {
						await navigator.clipboard.writeText(window.location.href);
						const original = shareBtn.textContent;
						shareBtn.textContent = 'Link Copied!';
						setTimeout(() => {
							shareBtn.innerHTML = original;
						}, 2000);
					} catch (err) {
						console.error('Copy failed:', err);
					}
				});
			}

			

		});




	}());
}
main();