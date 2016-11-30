import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';


export function createStaticComponent(BaseComponent) {
    const className = `Static${BaseComponent.name || BaseComponent.displayName}`;

    return new Function(
        'BaseComponent',
        `class ${className} extends BaseComponent {
            shouldComponentUpdate() {
                return false;
            }
        };
        ${className}.displayName = '${className}';
        return ${className};`
    )(BaseComponent);
}

export const StaticText = createStaticComponent(Text);
export const StaticView = createStaticComponent(View);
export const StaticImage = createStaticComponent(Image);
