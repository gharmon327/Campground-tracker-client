import {
	indexCampgrounds,
	showCampground,
	updateCampground,
	deleteCampground,
    createCampground,
	signUp,
	signIn,
	updateCampsite,
    createCampsite,
} from './api.js'

import {
	onIndexCampgroundSuccess,
	onFailure,
	onShowCampgroundSuccess,
    onCreateCampgroundSuccess,
	onUpdateCampgroundSuccess,
	onDeleteCampgroundSuccess,
	onSignUpSuccess,
	onSignInSuccess,
	onUpdateCampsiteSuccess,
    onCreateCampsiteSuccess,
} from './ui.js'

const indexCampgroundsContainer = document.querySelector('#index-campground-container')
const showCampgroundContainer = document.querySelector('#show-campground-container')
const createCampgroundForm = document.querySelector('#create-campground-form')
const indexCampsiteContainer = document.querySelector('#index-campsite-container')
const showCampsiteContainer = document.querySelector('#show-campsite-container')
const signUpContainer = document.querySelector('#sign-up-form-container')
const signInContainer = document.querySelector('#sign-in-form-container')
const campsiteContainer = document.querySelector('#campsite-container')
const createCampsiteForm = document.querySelector('#create-campsite-form')
const back = document.querySelector('#back')
const save = document.querySelector('#save')
const campgroundContainer = document.querySelector('#campground-container')
const messageCampsiteContainer = document.querySelector('#message-campsite-container')
const messageContainer = document.querySelector('#message-container')


// Campground actions
back.addEventListener('click', () => {
    while(indexCampgroundsContainer.firstChild){
        indexCampgroundsContainer.removeChild(indexCampgroundsContainer.lastChild)
    }
    while(showCampsiteContainer.firstChild){
        showCampsiteContainer.removeChild(showCampsiteContainer.lastChild)
    }
    while(showCampgroundContainer.firstChild){
        showCampgroundContainer.removeChild(showCampgroundContainer.lastChild)
    }
    messageCampsiteContainer.innerText = ''
    messageContainer.innerText = ''
    indexCampgrounds()
    .then(res => res.json())
    .then(res => {
        onIndexCampgroundSuccess(res.campgrounds)
    })
    .then(campgroundContainer.classList.remove('hide'))
    .then(campsiteContainer.classList.add('hide'))
    .then(showCampsiteContainer.classList.add('hide'))
})

save.addEventListener('click', () => {
    while(indexCampgroundsContainer.firstChild){
        indexCampgroundsContainer.removeChild(indexCampgroundsContainer.lastChild)
    }
    while(showCampsiteContainer.firstChild){
        showCampsiteContainer.removeChild(showCampsiteContainer.lastChild)
    }
    while(showCampgroundContainer.firstChild){
        showCampgroundContainer.removeChild(showCampgroundContainer.lastChild)
    }
    messageCampsiteContainer.innerText = ''
    messageContainer.innerText = ''
indexCampgrounds()
    .then(res => res.json())
    .then(res => {
        onIndexCampgroundSuccess(res.campgrounds)
    })
    .then(campgroundContainer.classList.remove('hide'))
    .then(campsiteContainer.classList.add('hide'))
    .then(showCampsiteContainer.classList.add('hide'))
})

createCampgroundForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const campgroundData = {
        campground: {
            name: event.target['name'].value,
            location: event.target['location'].value,
            sites: event.target['sites'].value,
        }
    }
    while(indexCampgroundsContainer.firstChild){
        indexCampgroundsContainer.removeChild(indexCampgroundsContainer.lastChild)
    }

    createCampground(campgroundData)
    .then(onCreateCampgroundSuccess)
    .then(indexCampgrounds)
    .then((res) => res.json())
    .then((res) => onIndexCampgroundSuccess(res.campgrounds))
    .then(createCampsiteForm.classList.remove('hide'))
    .then(campgroundContainer.classList.remove('hide'))
    .then(indexCampgroundsContainer.classList.remove('hide'))
    .catch(onFailure)
})


indexCampgroundsContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	showCampground(id)
		.then((res) => res.json())
		.then((res) => {
			onShowCampgroundSuccess(res.campground)
		})
		.catch(onFailure)
})

showCampgroundContainer.addEventListener('submit', (event) => {
	event.preventDefault()
    campsiteContainer.classList.remove('hide')
    
	const id = event.target.getAttribute('data-id')
	const campgroundData = {
		campground: {
			name: event.target['name'].value,
			location: event.target['location'].value,
			sites: event.target['sites'].value,
		},
	}

	updateCampground(campgroundData, id)
		.then(onUpdateCampgroundSuccess)
        .then(indexCampgrounds)
		.catch(onFailure)
    
})

showCampgroundContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')
    campsiteContainer.classList.remove('hide')

	if (!id) return

	deleteCampground(id)
		.then(onDeleteCampgroundSuccess)
		.catch(onFailure)
})


// User Actions
signUpContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const userData = {
		credentials: {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
	signUp(userData).then(onSignUpSuccess).catch(onFailure)
})

signInContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const userData = {
		credentials: {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
	signIn(userData)
		.then((res) => res.json())
		.then((res) => onSignInSuccess(res.token))
		.then(indexCampgrounds)
		.then((res) => res.json())
		.then((res) => onIndexCampgroundSuccess(res.campgrounds))
		.catch(onFailure)
})



// Campsite Actions

createCampsiteForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const campsiteData = {
        campsite: {
            siteNumber: event.target['siteNumber'].value,
            isOccupied: event.target['isOccupied'].value,
            campgroundId: event.target['campgroundId'].value
        }
    }
    createCampsite(campsiteData)
    .then(onCreateCampsiteSuccess)
    .catch(onFailure)
})



indexCampsiteContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id-campsite')

    if(!id) return
})

showCampsiteContainer.addEventListener('submit', (event) => {
    event.preventDefault()

    const id = event.target.getAttribute('data-id')

    const campsiteData = {
        campsite: {
            siteNumber: event.target['siteNumber'].value,
            isOccupied: event.target['isOccupied'].value,
            campgroundId: event.target['campgroundId'].value,
        }
    }

    if(!id) return

    updateCampsite(campsiteData, id)
    .then(onUpdateCampsiteSuccess)
    .then(showCampgroundContainer.classList.add('hide'))
    .catch(onFailure)
})

showCampsiteContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id-campsite')

    if(!id) return
    })


