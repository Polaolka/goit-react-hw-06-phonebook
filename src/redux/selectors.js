export const selectContacts = state => state.contacts.contacts;
export const selectContactFilter = state => state.filter;

export const selecVisibleContacts = state => {
    const contacts = selectContacts(state);
    const filter = selectContactFilter(state);
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
}