/* @flow */
import React, { Component } from 'react';
import type { ComponentType } from 'react';

interface AppProps {
    title: string;
    message: string;
}

class App extends Component<AppProps, {}> {
    static defaultProps = {
        message: 'Helloworld'
    }
    render() {
        return (
            <div>
                <div>Title: {this.props.title}</div>
                <div>Message: {this.props.message}</div>
            </div>
        );
    }
}

function injectProp<Props: {}>(
    Component: ComponentType<{ title: string } & Props>
): ComponentType<Props> {
    return function EnhancedComponent(props: Props) {
        return <Component title="Hello" {...props} />;
    }
};

export default injectProp(App);
