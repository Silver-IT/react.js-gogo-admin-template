/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row } from 'reactstrap';

import { Colxx } from '../../../components/common/CustomBootstrap';

import {
  getContacts,
  getConversations,
  changeConversation,
  addMessageToConversation,
} from '../../../redux/actions';
import ChatApplicationMenu from '../../../containers/applications/ChatApplicationMenu';
import ChatHeading from '../../../components/applications/ChatHeading';
import MessageCard from '../../../components/applications/MessageCard';
import SaySomething from '../../../components/applications/SaySomething';

const ChatApp = ({
  intl,
  allContacts,
  conversations,
  loadingConversations,
  loadingContacts,
  currentUser,
  selectedUser,
  selectedUserId,

  getContactsAction,
  getConversationsAction,
  changeConversationAction,
  addMessageToConversationAction,
}) => {
  const [activeTab, setActiveTab] = useState('messages');
  const [messageInput, setMessageInput] = useState('');
  const scrollBarRef = useRef(null);
  useEffect(() => {
    document.body.classList.add('no-footer');
    const currentUserId = 0;
    getContactsAction();
    getConversationsAction(currentUserId);

    return () => {
      document.body.classList.remove('no-footer');
    };
  }, [getContactsAction, getConversationsAction]);

  const focusScrollBottom = () => {
    setTimeout(() => {
      if (scrollBarRef.current) {
        scrollBarRef.current._ps.element.scrollTop =
          scrollBarRef.current._ps.contentHeight;
      }
    }, 100);
  };

  useEffect(() => {
    if (loadingConversations && loadingContacts && selectedUser == null) {
      changeConversationAction(selectedUserId);
      focusScrollBottom();
    }
  }, [
    changeConversationAction,
    loadingContacts,
    loadingConversations,
    selectedUser,
    selectedUserId,
  ]);

  useEffect(() => {
    focusScrollBottom();
  }, [selectedUserId]);

  const handleChatInputPress = (e) => {
    if (e.key === 'Enter') {
      if (messageInput.length > 0) {
        addMessageToConversationAction(
          currentUser.id,
          selectedUser.id,
          messageInput,
          conversations
        );
        setMessageInput('');
        setActiveTab('messages');
        focusScrollBottom();
      }
    }
  };

  const handleSendButtonClick = () => {
    if (messageInput.length > 0) {
      addMessageToConversationAction(
        currentUser.id,
        selectedUser.id,
        messageInput,
        conversations
      );
      setMessageInput('');
      setActiveTab('messages');
      focusScrollBottom();
    }
  };

  const { messages } = intl;

  const selectedConversation =
    loadingConversations && loadingContacts && selectedUser
      ? conversations.find(
          (x) =>
            x.users.includes(currentUser.id) &&
            x.users.includes(selectedUser.id)
        )
      : null;

  return loadingConversations && loadingContacts ? (
    <>
      <Row className="app-row">
        <Colxx xxs="12" className="chat-app">
          {loadingConversations && selectedUser && (
            <ChatHeading
              name={selectedUser.name}
              thumb={selectedUser.thumb}
              lastSeenDate={selectedUser.lastSeenDate}
            />
          )}

          {selectedConversation && (
            <PerfectScrollbar
              ref={scrollBarRef}
              // containerRef={(ref) => {}}
              options={{ suppressScrollX: true, wheelPropagation: false }}
            >
              {selectedConversation.messages.map((item, index) => {
                const sender = allContacts.find((x) => x.id === item.sender);
                return (
                  <MessageCard
                    key={index}
                    sender={sender}
                    item={item}
                    currentUserid={currentUser.id}
                  />
                );
              })}
            </PerfectScrollbar>
          )}
        </Colxx>
      </Row>
      <SaySomething
        placeholder={messages['chat.saysomething']}
        messageInput={messageInput}
        handleChatInputPress={handleChatInputPress}
        handleChatInputChange={(e) => {
          setMessageInput(e.target.value);
        }}
        handleSendButtonClick={handleSendButtonClick}
      />
      <ChatApplicationMenu activeTab={activeTab} toggleAppMenu={setActiveTab} />
    </>
  ) : (
    <div className="loading" />
  );
};

const mapStateToProps = ({ chatApp }) => {
  const {
    allContacts,
    conversations,
    loadingConversations,
    loadingContacts,
    currentUser,
    selectedUser,
    selectedUserId,
  } = chatApp;

  return {
    allContacts,
    conversations,
    loadingConversations,
    loadingContacts,
    currentUser,
    selectedUser,
    selectedUserId,
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    getContactsAction: getContacts,
    getConversationsAction: getConversations,
    changeConversationAction: changeConversation,
    addMessageToConversationAction: addMessageToConversation,
  })(ChatApp)
);
