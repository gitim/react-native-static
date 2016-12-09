import ReactNative from 'react-native';

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

export const Text = createStaticComponent(ReactNative.Text);
export const View = createStaticComponent(ReactNative.View);
export const Image = createStaticComponent(ReactNative.Image);
