import Component from '@glimmer/component';

export default class ScheduleComponent extends Component {
  get staffMembers() {
    // console.log(this.args.appointments);
    return hardcodedStaffMembers;
  }
}

const hardcodedStaffMembers = [
  { name: 'Hardcoded 1', role: 'Provider', appointments: [{ title: 'Visit' }] },
  {
    name: 'Hardcoded 2',
    role: 'Provider',
    appointments: [{ title: 'New patient visit' }, { title: 'Soreness' }],
  },
];
