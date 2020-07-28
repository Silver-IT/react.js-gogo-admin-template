import React from 'react';
import { Button, UncontrolledCollapse } from 'reactstrap';

const QuestionAnswer = ({ data }) => {
  return (
    <div>
      <Button className="p-0 pb-2 font-weight-bold" color="link" id={data.key}>
        <p className="mb-2">{data.question}</p>
      </Button>
      <UncontrolledCollapse toggler={`#${data.key}`}>
        <div className="pb-4">{data.answer}</div>
      </UncontrolledCollapse>
    </div>
  );
};
export default QuestionAnswer;
