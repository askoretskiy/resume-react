'use strict';

const Application = props => {
    return React.createElement(
        'div',
        null,
        'It is my resume'
    );
};

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(React.createElement(Application, null), document.getElementById('root'));
});
