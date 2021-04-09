import Component from '@glimmer/component';

export default class ScheduleComponent extends Component {
  get staffMembers() {
    return hardcodedStaffMembers;
  }
}

const hardcodedStaffMembers = [
  { name: 'Hardcoded 1', role: 'Provider', events: [{ name: 'Visit' }] },
  {
    name: 'Hardcoded 2',
    role: 'Provider',
    events: [{ name: 'New patient visit' }, { name: 'Soreness' }],
  },
];
