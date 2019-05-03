import React from "react";

const DateForm = props => (

    <form onSubmit={props.changeDate}>
        Enter a date (YYYY-MM-DD):
        <input type="Sumbit" />
        <button>Submit</button>
    </form>

);



export default DateForm;
