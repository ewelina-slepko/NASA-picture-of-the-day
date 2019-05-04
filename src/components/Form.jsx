import React from "react";

const DateForm = props => (

    <form onSubmit={props.changeDate}>
        <input type="date" />
        <button>Submit</button>
    </form>

);



export default DateForm;

