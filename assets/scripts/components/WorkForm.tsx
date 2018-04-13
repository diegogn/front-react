import * as React from 'react';

export class WorkForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form method="post">
                <div className="errors"></div>
                <input type="text"/>
                <input type="text"/>
            </form>
        );
    }
}