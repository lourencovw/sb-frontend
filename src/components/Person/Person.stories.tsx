import Person from './Person';

export default {
  title: "Person",
};
const randomPerson = {
  _id: 'sd89fg7sdf8d8fg76d8f7g',
  address: "888 Thatford Avenue, Chalfant, Alabama, 2716",
  age: "60",
  birthday: "1961-07-12T05:41:09",
  name: "Lou Gardner",
  phone_number: "(053) 8589246",
  picture: "https://live.staticflickr.com/65535/52002904692_3277ccdb11_o.png",
}

export const Default = () => <Person  {...randomPerson} />;

Default.story = {
  name: 'default',
};
