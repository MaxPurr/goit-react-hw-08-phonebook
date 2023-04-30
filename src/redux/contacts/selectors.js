export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state).toLowerCase();

  if (filter) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  } else return contacts;
};
