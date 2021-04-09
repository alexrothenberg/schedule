import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
  model() {
    return fakeApiCall();
  }
}

function fakeApiCall() {
  return [
    {
      name: 'Checkup',
      staff: {
        name: 'Katie',
        role: 'Provider',
      },
    },
    {
      name: 'New patient visit',
      staff: {
        name: 'Alex',
        role: 'Provider',
      },
    },
    {
      name: 'Earache',
      staff: {
        name: 'Abby',
        role: 'Health Coach',
      },
    },
    {
      name: 'Fever',
      staff: {
        name: 'Alex',
        role: 'Provider',
      },
    },
  ];
}
