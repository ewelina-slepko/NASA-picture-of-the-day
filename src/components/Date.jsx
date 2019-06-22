import React from "react";

const DateForm = ({ changeDate }) => (
    <div>
        <form onSubmit={changeDate}>
            <input type="date" />
            <button>Submit</button>
        </form>
    </div>
);

export default DateForm;
