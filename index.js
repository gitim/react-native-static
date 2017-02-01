import {Component} from 'react';
import {Image, Text, View} from 'react-native';

export function createStaticComponent(BaseComponent) {
    const className = `Static${BaseComponent.name || BaseComponent.displayName}`;

    return new Function(
        'BaseComponent',
        `function ${className}() {}
        ${className}.prototype = Object.create(BaseComponent.prototype, {
            constructor: {
                value: ${className},
                enumerable: false,
                writable: true,
                configurable: true,
            },
        });
        ${className}.__proto__ = BaseComponent;
        ${className}.prototype.shouldComponentUpdate = function () {
            return false;
        };
        ${className}.displayName = '${className}';
        return ${className};`
    )(BaseComponent);
}

export const StaticComponent = createStaticComponent(Component);
export const Text = createStaticComponent(Text);
export const View = createStaticComponent(View);
export const Image = createStaticComponent(Image);
