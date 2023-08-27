/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import { mount, shallow } from "enzyme";
import App from "./App";

import { Provider } from 'react-redux';
import store from './store';
import MeetupList from "./components/meetups/MeetupList";
import MainNavigation from "./components/common/main-navigation/MainNavigation";
import { Link, MemoryRouter } from "react-router-dom";
import FavoriteMeetupList from "./components/meetups/FavoriteMeetups";
import NewMeetupForm from "./components/meetups/NewMeetupForm";
import { configureStore } from "@reduxjs/toolkit";
import MeetupItem from "./components/meetups/MeetupItem";

/**
 * Factory funcion to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<Provider store={store}><App /></Provider>);

test("renders App without crashing", () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});

test("renders MeetupList without crashing", () => {
  const wrapper = shallow(<Provider store={store}><MeetupList/></Provider>);
  expect(wrapper.exists()).toBe(true);
});

test("renders FavoriteMeetups without crashing", () => {
  const wrapper = shallow(<Provider store={store}><FavoriteMeetupList/></Provider>);
  expect(wrapper.exists()).toBe(true);
});

test("renders NewMeetupForm without crashing", () => {
  const wrapper = shallow(<Provider store={store}><NewMeetupForm/></Provider>);
  expect(wrapper.exists()).toBe(true);
});

test("App Snapshot matches", () => {
  const wrapper = setup();
  expect(wrapper).toMatchSnapshot();
});

test("the navbar shows the correct favorite number", () => {
  const wrapper = mount(<MemoryRouter><Provider store={store}><MainNavigation /></Provider></MemoryRouter>);
  const favoriteNumber = wrapper.find('span').text();
  expect(favoriteNumber).toBe('0');
});
