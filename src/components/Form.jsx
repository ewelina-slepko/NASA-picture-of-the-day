import React from "react";
import Button from "./Button";

const DateForm = props => (

    <form onSubmit={props.changeDate}>
        <input type="date" />
        <Button>Submit</Button>
    </form>

);



export default DateForm;
