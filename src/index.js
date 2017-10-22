/* @flow */
import * as React from 'react';
import PropTypes from 'prop-types';
import StaticMediaQuery from 'react-responsive';

/*
 * Provider to define the device being rendered.
 */
class MediaQueryProvider extends React.Component<{
    children: React.Node,
    width: number,
    height: number,
    // Optional
    orientation?: 'portrait' | 'landscape',
    type:
        | 'all'
        | 'grid'
        | 'aural'
        | 'braille'
        | 'handheld'
        | 'print'
        | 'projection'
        | 'screen'
        | 'tty'
        | 'tv'
        | 'embossed',
    deviceHeight?: number,
    deviceWidth?: number
}> {
    static childContextTypes = {
        device: PropTypes.object
    };

    getChildContext() {
        const { width, height, ...rest } = this.props;
        delete rest.children;

        return {
            device: {
                width,
                height,
                deviceHeight: height,
                deviceWidth: width,
                ...rest
            }
        };
    }

    render() {
        return this.props.children;
    }
}

/*
 * Wrapper around the react-responsive MediaQuery to use the define device.
 */
class MediaQuery extends React.Component<*, *> {
    static contextTypes = {
        device: PropTypes.object
    };

    render() {
        const { device } = this.context;

        return <StaticMediaQuery values={device} {...this.props} />;
    }
}

export { MediaQueryProvider, MediaQuery };
