$(() => {
	// Карусель тегов
	if ($('.tags_cloud .swiper-container').length) {
		new Swiper('.tags_cloud .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			slidesPerView: 'auto',
			spaceBetween: 10,
			navigation: {
				nextEl: '.tags_cloud-swiper-button-next',
				prevEl: '.tags_cloud-swiper-button-prev'
			}
		})
	}


	// Карусель товаров
	if ($('.products:not(.viewed):not(.mob_other_products) .swiper-container').length) {
		new Swiper('.products:not(.viewed):not(.mob_other_products) .swiper-container', {
			loop: true,
			speed: 500,
			spaceBetween: 20,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	if ($('.products.viewed .swiper-container').length) {
		new Swiper('.products.viewed .swiper-container', {
			loop: false,
			speed: 500,
			spaceBetween: 20,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				},
				1280: {
					slidesPerView: 5
				},
				1600: {
					slidesPerView: 6
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	if ($('.products.mob_other_products .swiper-container').length) {
		new Swiper('.products.mob_other_products .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	// Галерея
	if ($('.gallery .swiper-container').length) {
		new Swiper('.gallery .swiper-container', {
			loop: true,
			speed: 500,
			spaceBetween: 20,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.item').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.item').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	// Карусель в тексте
	if ($('.text_block .text_carousel .swiper-container').length) {
		new Swiper('.text_block .text_carousel .swiper-container', {
			loop: true,
			speed: 500,
			spaceBetween: 20,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.img').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.img').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	// Страница товара
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs.swiper-container', {
			loop: false,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 10,
			slidesPerView: 4,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					touchRatio: 1
				},
				480: {
					direction: 'vertical'
				},
				1024: {
					touchRatio: 0,
					direction: 'vertical'
				}
			}
		})

		const productSlider = new Swiper('.product_info .big .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			thumbs: {
				swiper: productThumbs
			},
			on: {
				init: swiper => {
					$(swiper.slides[swiper.realIndex]).find('video')[0].play()
				},
				beforeTransitionStart: swiper => {
					$(swiper.slides[swiper.realIndex]).find('video')[0].pause()
				},
				slideChangeTransitionEnd: swiper => {
					$(swiper.slides[swiper.realIndex]).find('video')[0].play()
				}
			}
		})
	}


	// Конструктор
	$('.constructor .amount_colors label').click(function () {
		let name = $(this).data('name'),
			parent = $(this).closest('.amount_colors')

		parent.find('.title span').text(name)
	})

	$('.constructor .color label').click(function () {
		let name = $(this).data('name'),
			parent = $(this).closest('.color')

		parent.find('.title span').text(name)
	})


	// Оформление заказа
	$('.checkout_info .data .bottom .another_person_btn').click(function () {
		let parent = $(this).closest('.bottom')

		parent.find('.form').fadeIn(300)
	})

	$('.checkout_info .data .type label').click(function () {
		let content = $(this).data('content'),
			parent = $(this).closest('.data')

		parent.find('.type1, .type2').hide()
		parent.find(content).fadeIn(300)
	})

	$('.checkout_info .delivery_info .methods label').click(function () {
		let content = $(this).data('content'),
			parent = $(this).closest('.delivery_info')

		parent.find('.method_info').hide()
		parent.find(content).fadeIn(300)
	})


	// Товар в корзину
	$('.product .buy_btn, .product_info .buy_btn').click(function (e) {
		e.preventDefault()

		if ($(this).hasClass('active')) {
			$(this).toggleClass('active')
		} else {
			$(this).toggleClass('active')

			$.fancybox.open({
				src: '#add_to_cart_success',
				type: 'inline',
				touch: false,
				afterShow: () => {
					setTimeout(() => { $.fancybox.close() }, 3000)
				}
			})
		}
	})


	// Фиксация блока при скроллинге
	$('.sticky').stick_in_parent()


	// Календарь
	$('.date_input').datepicker({
		autoClose: true,
		minDate: new Date()
	})


	// Плавная прокрутка к якорю
	$('.scroll_btn').click(function (e) {
		e.preventDefault()

		let href = $(this).data('anchor'),
			addOffset = 20

		if ($(this).data('offset')) addOffset = $(this).data('offset')

		$('html, body').stop().animate({ scrollTop: $(href).offset().top - addOffset }, 1000)
	})


	// Отправка форм
	$('body').on('submit', '.custom_submit', function (e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src: '#success_modal',
			type: 'inline',
			touch: false
		})
	})
})