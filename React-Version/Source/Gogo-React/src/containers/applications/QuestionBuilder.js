/* eslint-disable consistent-return */
import React, { useState } from 'react';
import {
  Card,
  Button,
  Collapse,
  FormGroup,
  Label,
  Form,
  Input,
  Badge,
  CustomInput,
} from 'reactstrap';
import Select from 'react-select';
import { ReactSortable } from 'react-sortablejs';

import CustomSelectInput from '../../components/common/CustomSelectInput';

const answerTypes = [
  { label: 'Text Area', value: '1', id: 1 },
  { label: 'Checkbox', value: '2', id: 2 },
  { label: 'Radiobutton', value: '3', id: 3 },
];

const SurveyQuestionBuilder = ({
  expanded,
  id,
  title,
  question,
  answerType,
  answers,
  order,
  deleteClick,
}) => {
  const [collapse, setCollapse] = useState(expanded || false);
  const [mode, setMode] = useState('edit-quesiton');
  const [qId] = useState(id);
  const [qTitle, setQTitle] = useState(title);
  const [qQuestion, setQQuestion] = useState(question || '');
  const [qAnswerType, setQAnswerType] = useState(
    answerType
      ? answerTypes.find((item) => {
          return item.id === answerType;
        })
      : null
  );
  const [qAnswers, setQAnswers] = useState(answers || []);

  const editClick = () => {
    setMode('edit-quesiton');
    setCollapse(true);
  };

  const viewClick = () => {
    setMode('view-quesiton');
    setCollapse(true);
  };

  const typeChange = (aType) => {
    if (qAnswerType) {
      if ((qAnswerType.id === 2 || qAnswerType.id === 3) && aType.id === 1) {
        setQAnswers([]);
      }
    }
    setQAnswerType(aType);
  };

  const removeAnswer = (answerId) => {
    setQAnswers(qAnswers.filter((item) => item.id !== answerId));
  };

  const addAnswer = () => {
    let nextId = 0;
    if (qAnswers.length > 0) {
      const orderedAnswers = qAnswers.slice().sort((a, b) => {
        return a.id < b.id;
      });
      nextId = orderedAnswers[0].id + 1;
    }
    setQAnswers([...qAnswers, { id: nextId, label: '' }]);
  };

  const updateAnswer = (answerId, event) => {
    const answerIndex = qAnswers.findIndex((item) => item.id === answerId);
    const tempAnswers = [...qAnswers];
    tempAnswers[answerIndex].label = event.target.value;
    setQAnswers(tempAnswers);
  };

  const renderViewModeAnswers = () => {
    if (!qAnswerType) {
      return;
    }
    switch (qAnswerType.id) {
      case 1:
        return <Input type="text" />;
      case 2:
        return (
          <FormGroup>
            {qAnswers.map((answer) => {
              return (
                <CustomInput
                  key={answer.id}
                  type="checkbox"
                  id={`checkbox${qId}_${answer.id}`}
                  name={`checkbox${qId}`}
                  label={answer.label}
                />
              );
            })}
          </FormGroup>
        );
      case 3:
        return (
          <FormGroup>
            {qAnswers.map((answer) => {
              return (
                <CustomInput
                  key={answer.id}
                  type="radio"
                  name={`radio${qId}`}
                  id={`radio${qId}_${answer.id}`}
                  label={answer.label}
                />
              );
            })}
          </FormGroup>
        );
      default:
        return (
          <Input type="text" placeholder="" value="" onChange={() => {}} />
        );
    }
  };

  return (
    <Card className={`question d-flex mb-4 ${mode}`}>
      <div className="d-flex flex-grow-1 min-width-zero">
        <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
          <div className="list-item-heading mb-0 truncate w-80 mb-1 mt-1">
            <span className="heading-number d-inline-block">{order + 1}</span>
            {qTitle}
          </div>
        </div>
        <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
          <Button
            outline
            color="theme-3"
            className="icon-button ml-1 edit-button"
            onClick={() => editClick()}
          >
            <i className="simple-icon-pencil" />
          </Button>

          <Button
            outline
            color="theme-3"
            className="icon-button ml-1 view-button no-border"
            onClick={() => viewClick()}
          >
            <i className="simple-icon-eye" />
          </Button>

          <Button
            outline
            color="theme-3"
            className={`icon-button ml-1 rotate-icon-click ${
              collapse ? 'rotate' : ''
            }`}
            onClick={() => setCollapse(!collapse)}
          >
            <i className="simple-icon-arrow-down" />
          </Button>

          <Button
            outline
            color="theme-3"
            className="icon-button ml-1"
            onClick={() => deleteClick(qId)}
          >
            <i className="simple-icon-ban" />
          </Button>
        </div>
      </div>

      <Collapse isOpen={collapse}>
        <div className="card-body pt-0">
          <div className="edit-mode">
            <Form>
              <FormGroup>
                <Label>Title</Label>
                <Input
                  type="text"
                  value={qTitle}
                  onChange={(event) => setQTitle(event.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label>Question</Label>
                <Input
                  type="text"
                  value={qQuestion}
                  onChange={(event) => setQQuestion(event.target.value)}
                />
              </FormGroup>
              <div className="separator mb-4 mt-4" />

              <FormGroup>
                <Label>Answer Type</Label>
                <Select
                  components={{ Input: CustomSelectInput }}
                  className="react-select"
                  classNamePrefix="react-select"
                  name="form-field-name"
                  value={qAnswerType}
                  onChange={(t) => typeChange(t)}
                  options={answerTypes}
                />
              </FormGroup>
              {qAnswers.length > 0 && <Label>Answers</Label>}

              <ReactSortable
                list={qAnswers}
                setList={(newState) => setQAnswers(newState)}
                className="answers"
                options={{
                  handle: '.handle',
                }}
              >
                {qAnswers.map((item) => {
                  return (
                    <FormGroup data-id={item.id} key={item.id} className="mb-1">
                      <Input
                        type="text"
                        value={item.label}
                        autoFocus
                        onChange={(event) => {
                          updateAnswer(item.id, event);
                        }}
                      />
                      <div className="input-icons">
                        <Badge className="handle" color="empty" pill>
                          <i className="simple-icon-cursor-move" />
                        </Badge>
                        <Badge
                          color="empty"
                          pill
                          onClick={() => removeAnswer(item.id)}
                        >
                          <i className="simple-icon-close" />
                        </Badge>
                      </div>
                    </FormGroup>
                  );
                })}
              </ReactSortable>

              <div className="text-center">
                {qAnswerType && qAnswerType.id !== 1 && (
                  <Button
                    outline
                    color="primary"
                    className="mt-3"
                    onClick={() => addAnswer()}
                  >
                    <i className="simple-icon-plus btn-group-icon" /> Add Answer
                  </Button>
                )}
              </div>
            </Form>
          </div>
          <div className="view-mode">
            <FormGroup>
              <Label>{qQuestion}</Label>
              {renderViewModeAnswers()}
            </FormGroup>
          </div>
        </div>
      </Collapse>
    </Card>
  );
};
export default SurveyQuestionBuilder;
