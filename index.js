import ReactNative from 'react-native';

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

export const Text = createStaticComponent(ReactNative.Text);
export const View = createStaticComponent(ReactNative.View);
export const Image = createStaticComponent(ReactNative.Image);
