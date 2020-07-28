/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import classnames from 'classnames';
import Notification from './Notification';

class Notifications extends React.Component {
  handleRequestHide = (notification) => () => {
    const { onRequestHide } = this.props;
    if (onRequestHide) {
      onRequestHide(notification);
    }
  };

  render() {
    const { notifications, enterTimeout, leaveTimeout } = this.props;
    const className = classnames('notification-container', {
      'notification-container-empty': notifications.length === 0,
    });
    return (
      <div className={className}>
        <TransitionGroup>
          {notifications.map((notification) => {
            const key = notification.id || new Date().getTime();
            return (
              <CSSTransition
                classNames="notification"
                key={key}
                timeout={{ exit: leaveTimeout, enter: enterTimeout }}
              >
                <Notification
                  key={key}
                  type={notification.type}
                  title={notification.title}
                  message={notification.message}
                  timeOut={notification.timeOut}
                  onClick={notification.onClick}
                  onRequestHide={this.handleRequestHide(notification)}
                  customClassName={notification.customClassName}
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    );
  }
}
Notifications.propTypes = {
  notifications: PropTypes.array,
  onRequestHide: PropTypes.func,
  enterTimeout: PropTypes.number,
  leaveTimeout: PropTypes.number,
};

Notifications.defaultProps = {
  notifications: [],
  onRequestHide: () => {},
  enterTimeout: 400,
  leaveTimeout: 400,
};
export default Notifications;
