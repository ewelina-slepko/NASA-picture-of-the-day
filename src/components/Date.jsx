import React from "react";

const DateForm = props => (
    <div>
        <form onSubmit={props.changeDate}>
            <input type="date" />
            <button>Submit</button>
        </form>
    </div>
);

export default DateForm;
