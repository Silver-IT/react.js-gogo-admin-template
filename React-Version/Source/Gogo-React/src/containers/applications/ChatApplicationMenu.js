/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Nav, TabContent, TabPane, CardHeader, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import classnames from 'classnames';

import IntlMessages from '../../helpers/IntlMessages';
import ApplicationMenu from '../../components/common/ApplicationMenu';

import {
  changeConversation,
  createConversation,
  searchContact,
} from '../../redux/actions';

const ChatApplicationMenu = ({
  intl,
  activeTab,
  toggleAppMenu,
  contacts,
  allContacts,
  conversations,
  loadingConversations,
  loadingContacts,
  currentUser,

  changeConversationAction,
  createConversationAction,
  searchContactAction,
}) => {
  const [searchKey, setSearchKey] = useState('');

  const handleSearchContact = (keyword) => {
    setSearchKey(keyword);

    if (keyword.length > 0) {
      if (activeTab !== 'contacts') {
        toggleAppMenu('contacts');
      }
      searchContactAction(keyword);
    } else {
      searchContactAction('');
    }
  };

  const toggleMenu = (tab) => {
    if (activeTab !== tab) {
      toggleAppMenu(tab);
    }
    if (tab === 'messages') {
      handleSearchContact('');
    }
  };

  const handleConversationClick = (e, selectedUserId) => {
    changeConversationAction(selectedUserId);
    handleSearchContact('');
  };

  const handleContactClick = (userId) => {
    if (activeTab !== 'messages') {
      toggleAppMenu('messages');
      searchContactAction('');
    }

    const conversation = conversations.find(
      (x) => x.users.includes(currentUser.id) && x.users.includes(userId)
    );
    if (conversation) {
      changeConversationAction(userId);
    } else {
      createConversationAction(currentUser.id, userId, conversations);
      changeConversationAction(userId);
    }
  };

  const { messages } = intl;

  return (
    <ApplicationMenu>
      <CardHeader className="pl-0 pr-0">
        <Nav tabs className="card-header-tabs ml-0 mr-0">
          <NavItem className="w-50 text-center">
            <NavLink
              to="#"
              location={{}}
              className={classnames({
                active: activeTab === 'messages',
                'nav-link': true,
              })}
              onClick={() => toggleMenu('messages')}
            >
              <IntlMessages id="chat.messages" />
            </NavLink>
          </NavItem>
          <NavItem className="w-50 text-center">
            <NavLink
              to="#"
              location={{}}
              className={classnames({
                active: activeTab === 'contacts',
                'nav-link': true,
              })}
              onClick={() => toggleAppMenu('contacts')}
            >
              <IntlMessages id="chat.contacts" />
            </NavLink>
          </NavItem>
        </Nav>
      </CardHeader>

      <div className="pt-4 pr-4 pl-4 pb-0">
        <div className="form-group">
          <input
            type="text"
            className="form-control rounded"
            placeholder={messages['menu.search']}
            value={searchKey}
            onChange={(e) => handleSearchContact(e.target.value)}
          />
        </div>
      </div>

      <TabContent activeTab={activeTab} className="chat-app-tab-content">
        <TabPane tabId="messages" className="chat-app-tab-pane">
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            <div className="pt-2 pr-4 pl-4 pb-2">
              {loadingContacts &&
                loadingConversations &&
                conversations.map((item, index) => {
                  const otherUser = allContacts.find(
                    (u) => u.id === item.users.find((x) => x !== currentUser.id)
                  );
                  return (
                    <div
                      key={index}
                      className="d-flex flex-row mb-1 border-bottom pb-3 mb-3"
                    >
                      <NavLink
                        className="d-flex"
                        to="#"
                        location={{}}
                        onClick={(e) =>
                          handleConversationClick(e, otherUser.id)
                        }
                      >
                        <img
                          alt={otherUser.name}
                          src={otherUser.thumb}
                          className="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"
                        />
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <div className="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                            <div className="min-width-zero">
                              <p className=" mb-0 truncate">{otherUser.name}</p>
                              <p className="mb-1 text-muted text-small">
                                {item.lastMessageTime}
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
            </div>
          </PerfectScrollbar>
        </TabPane>
        <TabPane tabId="contacts" className="chat-app-tab-pane">
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            <div className="pt-2 pr-4 pl-4 pb-2">
              {loadingContacts &&
                contacts
                  .filter((x) => x.id !== currentUser.id)
                  .map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="d-flex flex-row mb-3 border-bottom pb-3"
                      >
                        <NavLink
                          className="d-flex"
                          to="#"
                          location={{}}
                          onClick={() => handleContactClick(item.id)}
                        >
                          <img
                            alt={item.name}
                            src={item.thumb}
                            className="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"
                          />
                          <div className="d-flex flex-grow-1 min-width-zero">
                            <div className="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                              <div className="min-width-zero">
                                <p className="mb-0 truncate">{item.name}</p>
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    );
                  })}
            </div>
          </PerfectScrollbar>
        </TabPane>
      </TabContent>
    </ApplicationMenu>
  );
};

const mapStateToProps = ({ chatApp }) => {
  const {
    contacts,
    allContacts,
    conversations,
    loadingConversations,
    loadingContacts,
    currentUser,
  } = chatApp;
  return {
    contacts,
    allContacts,
    conversations,
    loadingConversations,
    loadingContacts,
    currentUser,
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    changeConversationAction: changeConversation,
    createConversationAction: createConversation,
    searchContactAction: searchContact,
  })(ChatApplicationMenu)
);
