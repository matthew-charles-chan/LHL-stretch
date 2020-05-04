const findFriend = (data, name, field) => {
  let friendName;
  let contactInfo;

  data.map(contact => {
    if (contact.name === name) {
      friendName = contact.friends[0];
    }
  });

  if (!friendName) return "Not found";
  
  data.map(contact => {
    if (contact.name === friendName) {
      contactInfo = contact[field];
    }
  });

  if (!contactInfo) return "Not found";
  return {
    name: friendName,
    [field]: contactInfo
  };
};

const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];
const tests = [];
tests.push(findFriend(contacts, "Abbott", "phone"));
tests.push(findFriend(contacts, "Buster", "email"));
tests.push(findFriend(contacts, "Bob", "phone"));
tests.push(findFriend(contacts, "Costello", "birthday"));

tests.forEach(test => {
  console.log(test);
});
