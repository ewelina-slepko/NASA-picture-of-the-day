import React from "react";

const DateForm = ({ changeDate }) => (
    <div className="dateWrapper">
        <form onSubmit={changeDate}>
            <input type="date" placeholder="pick some date" />
            <button>Submit</button>
        </form>
    </div>
);

export default DateForm;
