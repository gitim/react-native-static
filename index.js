import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';


export function createStaticComponent(WrappedComponent) {
    return class extends Component {
        static displayName = `Static(${WrappedComponent.displayName})`;

        static propTypes = {
            ...WrappedComponent.propTypes,
        };

        shouldComponentUpdate() {
            return false;
        }

        _onRef = (component) => {
            this._component = component;
        };

        render() {
            return <WrappedComponent {...this.props} ref={this._onRef} />;
        }
    };
}

export const StaticText = createStaticComponent(Text);
export const StaticView = createStaticComponent(View);
export const StaticImage = createStaticComponent(Image);
