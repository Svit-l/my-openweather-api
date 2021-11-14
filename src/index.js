import './css/styles.css';
import { getRefs } from './getRefs';
import { fetchCountries } from './fetchCountries';
const refs = getRefs();

const DEBOUNCE_DELAY = 300;

function inputHandling() {
  let inputData = refs.searchBox.value.trim();
  return (refs.countryList.textContent = inputData);
}

// fetchCountries();

refs.searchBox.addEventListener('input', inputHandling);
