import React, { Component } from 'react';
import Contact from './Contact';

const withDelay = delay => data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

class ContactsList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    );
  }
}

function loaderHOC(WrappedComponent) {
  return class extends Component {
    render() {
      return this.props.loaded ? (
        <WrappedComponent {...this.props} />
      ) : (
        <div>Loading...</div>
      );
    }
  };
}

ContactsList = loaderHOC(ContactsList);

class LoaderHOCExample extends Component {
  state = { contacts: [] };

  componentDidMount() {
    fetch('https://api.randomuser.me/?nat=us,gb&results=10')
      .then(response => response.json())
      .then(parsedResponse =>
        parsedResponse.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          thumbnail: user.picture.thumbnail,
          id: user.id.value,
        })),
      )
      .then(contacts => withDelay(2000)(contacts))
      .then(contacts => this.setState({ contacts }));
  }

  render() {
    return (
      <ContactsList
        loaded={this.state.contacts.length}
        contacts={this.state.contacts}
      />
    );
  }
}

export default LoaderHOCExample;
