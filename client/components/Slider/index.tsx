'use client';

import React, { forwardRef } from 'react';
import SlickSliderBase, { Settings } from "react-slick";
import * as S from "./styles";

export type SliderSettings = Settings;

type SlickSliderInstance = SlickSliderBase;

const SlickSlider = SlickSliderBase as unknown as React.ComponentType<
	Settings & React.RefAttributes<SlickSliderInstance> & Record<string, unknown>
>;

export type SliderProps = {
	children: React.ReactNode;
	settings: SliderSettings;
};

const Slider: React.ForwardRefRenderFunction<SlickSliderInstance, SliderProps> = (
	{ children, settings },
	ref
) => {
	return (
		<S.SliderContainer>
			<SlickSlider ref={ref} {...settings} data-testid="banner-slider">
				{children as never}
			</SlickSlider>
		</S.SliderContainer>
	);
};

export default forwardRef(Slider);
