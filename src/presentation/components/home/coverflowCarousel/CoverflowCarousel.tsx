import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { CarouselCard } from "./CarouselCard";


export const CoverflowCarousel = () => {
	return (
		<Swiper
			effect={ 'coverflow' }
			grabCursor={ true }
			centeredSlides={ true }
			loop={ true }
			slidesPerView={ 'auto' }
			coverflowEffect={ {
				rotate: 0,
				stretch: 0,
				depth: 100,
				modifier: 2.5,
			} }
			navigation={ {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			} }
			modules={ [ EffectCoverflow, Pagination, Navigation ] }
			className="swiper_container"
		>

			{
				Array.from( { length: 5 } ).map( ( _, i ) => {
					return (
						<SwiperSlide className="max-w-56" key={ i }>
							<CarouselCard />
						</SwiperSlide>
					)
				} )
			}

			<div className="slider-controler hidden xl:block">
				<div className="swiper-button-prev slider-arrow text-title">
				</div>

				<div className="swiper-button-next slider-arrow text-title">
				</div>
			</div>
		</Swiper>
	)
}