import React from "react";
import PropTypes from 'prop-types';

export const Greetings = (props) => {
    return <div>
        <h1>{props.greetingPrefix},</h1>
        <h2>{props.name}</h2>
    </div>
};

Greetings.propTypes = {
    greetingPrefix: PropTypes.string,
    name: PropTypes.string.isRequired
};

Greetings.defaultProps = {
    greetingPrefix: 'Welcome'
}