import React, { useState } from 'react';
import { Button, Popover, PopoverBody } from 'reactstrap';
import classnames from 'classnames';

const StateButton = ({ id, className, color, children, onClick }) => {
  const [status, setStatus] = useState('default');
  const [message, setMessage] = useState('');
  const [messageShow, setMessageShow] = useState(false);

  const handleOnClick = () => {
    setStatus('processing');

    onClick()
      .then((res) => {
        setMessage(res);
        setStatus('success');
      })
      .catch((err) => {
        setMessage(err);
        setStatus('fail');
      })
      .finally(() => {
        setMessageShow(true);
        setTimeout(() => {
          setStatus('default');
          setMessageShow(false);
        }, 3000);
      });
  };

  return (
    <span>
      <Button
        id={id}
        className={`btn-multiple-state  ${className}  ${classnames({
          'show-spinner': status === 'processing',
          'show-success': status === 'success',
          'show-fail': status === 'fail',
        })}`}
        color={color}
        onClick={handleOnClick}
        disabled={status !== 'default'}
      >
        <Popover placement="top" isOpen={messageShow} target={id}>
          <PopoverBody>{message}</PopoverBody>
        </Popover>
        <span className="spinner d-inline-block">
          <span className="bounce1" />
          <span className="bounce2" />
          <span className="bounce3" />
        </span>
        <span className="icon success">
          <i className="simple-icon-check" />
        </span>
        <span className="icon fail">
          <i className="simple-icon-exclamation" />
        </span>
        <span className="label">{children}</span>
      </Button>
    </span>
  );
};

export default StateButton;
