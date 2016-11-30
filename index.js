import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';


export function createStaticComponent(BaseComponent) {
    return class extends BaseComponent {
        static displayName = `Static${BaseComponent.displayName}`;

        shouldComponentUpdate() {
            return false;
        }
    };
}

export const StaticText = createStaticComponent(Text);
export const StaticView = createStaticComponent(View);
export const StaticImage = createStaticComponent(Image);
