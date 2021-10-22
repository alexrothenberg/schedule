import Component from '@glimmer/component';

export default class ScheduleComponent extends Component {
  get staffMembers() {
    // console.log(this.args.events);
    return hardcodedStaffMembers;
  }
}

const hardcodedStaffMembers = [
  { name: 'Hardcoded 1', role: 'Provider', events: [{ title: 'Visit' }] },
  {
    name: 'Hardcoded 2',
    role: 'Provider',
    events: [{ title: 'New patient visit' }, { title: 'Soreness' }],
  },
];
