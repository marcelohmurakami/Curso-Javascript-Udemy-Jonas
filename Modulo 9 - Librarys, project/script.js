'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {

    date = new Date ();
    id = (Date.now() + '').slice(-10);

    constructor(coords, distance, duration) {
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;
    };
};

class Running extends Workout {
    constructor(coords, distance, duration, pacing) {
        super(coords, distance, duration);
        this.pacing = pacing;
    };

    calcPace() {
        this.pace = this.duration/this.distance;
        return this.pace;
    }
};

class Cycling extends Workout {
    constructor(coords, distance, duration, elevation) {
        super(coords, distance, duration);
        this.elevation = elevation;
    };

    calcSpeed() {;
        this.speed = this.distance / (this.duration) / 60;
        return this.speed;
    };
};

class App {

    #map;
    #mapEvent;
    workouts = [];

    constructor() {
        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this.toggleElevationField.bind(this));
    }

    _getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function() {
                alert('Could not get your position!');
            })
        }
    }

    _loadMap(position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        const coords = [latitude, longitude];

        this.#map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        this.#map.on('click', this._showForm.bind(this)) 
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e) {
        e.preventDefault();
        const validInputs = function (...inputs) {
            return inputs.every(inp => Number.isFinite(inp)); // Agora retorna corretamente
        };
        
        const allPositives = function (...inputs) {
            return inputs.every(inp => inp > 0); // Corrigido para garantir retorno correto
        };

        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng;
        let workout;

        console.log({ type, distance, duration }); // Debugando valores

        if (type === 'running') {
            const cadence = +inputCadence.value;

            console.log(cadence);

            if(!validInputs(distance, duration, cadence) || !allPositives(distance, duration, cadence)) return alert ('The number has to be a positive number!');

            workout = new Running ([lat, lng], distance, duration, cadence);
        };

        if (type === 'cycling') {
            const elevation = +inputElevation.value;

            if(!validInputs(distance, duration, elevation) || !allPositives(distance, duration, elevation)) return alert ('The number has to be a positive number!');

            workout = new Cycling ([lat,lng], distance, duration, elevation);
        };

        this.workouts.push(workout);

        inputDistance.value = inputCadence.value = inputDuration.value = inputElevation.value = '';
    
        L.marker([lat, lng]).addTo(this.#map)
        .bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 50,
            autoclose: false,
            closeOnClick: false,
            className: 'running-popup',
        }))
        .setPopupContent('Workout')
        .openPopup();
    }
}

const app = new App();
