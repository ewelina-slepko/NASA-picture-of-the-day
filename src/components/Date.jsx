import React from "react";

import Form from "./Form";
import Input from "./Input";
import Button from "./Button";

const DateForm = props => (
    <div>
        <Form onSubmit={props.changeDate}>
            <Input type="date" />
            <Button>Submit</Button>
        </Form>
    </div>
);

export default DateForm;
