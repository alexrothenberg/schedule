import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
  model() {
    return fakeApiCall();
  }
}

function fakeApiCall() {
  return [
    {
      title: 'Checkup',
      staff: {
        name: 'Katie',
        role: 'Provider',
      },
    },
    {
      title: 'New patient visit',
      staff: {
        name: 'Alex',
        role: 'Provider',
      },
    },
    {
      title: 'Earache',
      staff: {
        name: 'Abby',
        role: 'Health Coach',
      },
    },
    {
      title: 'Fever',
      staff: {
        name: 'Alex',
        role: 'Provider',
      },
    },
  ];
}
