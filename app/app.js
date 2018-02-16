'use strict';

const Application = props => {
    return (
        <div>It is my resume</div>
    );
};


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Application />, document.getElementById('root'));
});
