import { reactive } from 'vue'

const state = reactive({
  tabs: [
    { value: 1, label: 'Hotel', icon: 'mdi-bed' },
    { value: 2, label: 'Flight', icon: 'mdi-airplane-takeoff' },
    { value: 3, label: 'Car', icon: 'mdi-car' },
    { value: 4, label: 'Ship', icon: 'mdi-ferry' },
  ],
  destinations: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],
  childrenOptions: ['1', '2', '3', '4', '5', '6'],
  adultsOptions: ['1', '2', '3', '4', '5', '6'],
  form: {
    destination: '',
    checkIn: '',
    checkOut: '',
    children: '',
    adults: '',
  }
});
export default state;
