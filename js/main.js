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
			$('.rst-menu-trigger').click(function () {
				$('.menu-main').slideToggle(400);
				$(this).toggleClass('exit');
				$(this).parents('#header').toggleClass('click-menu');
				return false;
			});
			// ---------------- sub menu ---------------------------
			$('.click-mobile').click(function () {
				$('.menu').slideToggle(400);
				return false;
			});

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
		});
		$(".hambuger-mobile").on("click", function () {
			$(this).toggleClass("exit");
			$('.header-inner').toggleClass("active");
			
			$(".header-right").slideToggle();
		});
		//---------------- fixed -----------------


	}());
}
main();