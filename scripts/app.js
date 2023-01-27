import {
	indexCampgrounds,
	showCampground,
	updateCampground,
	deleteCampground,
    createCampground,
	indexCampsite,
	signUp,
	signIn,
	updateCampsite,
	showCampsite,
	// deleteCampsite,
    // createCampsite
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
	onIndexCampsiteSuccess,
	onUpdateCampsiteSuccess,
	onShowCampsiteSuccess,
	// onDeleteCampsiteSuccess
} from './ui.js'

const indexCampgroundsContainer = document.querySelector('#index-campground-container')
const showCampgroundContainer = document.querySelector('#show-campground-container')
const createCampgroundForm = document.querySelector('#create-campground-form')
const indexCampsiteContainer = document.querySelector('#index-campsite-container')
const showCampsiteContainer = document.querySelector('#show-campsite-container')
const signUpContainer = document.querySelector('#sign-up-form-container')
const signInContainer = document.querySelector('#sign-in-form-container')
const campsiteContainer = document.querySelector('#campsite-container')
const indexContainer = document.querySelector('#index-container')
const campgroundContainer = document.querySelector('#campground-container')

// const createCampsiteForm = document.querySelector('#create-campsite-form')


// Campground actions
// indexCampgrounds()
//     .then(res => res.json())
//     .then(res => {
//         console.log(res)
//         onIndexCampgroundSuccess(res.campgrounds)
//     })
//     .catch(onFailure)

createCampgroundForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const campgroundData = {
        campground: {
            name: event.target['name'].value,
            location: event.target['location'].value,
            sites: event.target['sites'].value,
        }
    }
    // console.log(characterData)
    createCampground(campgroundData)
    .then(onCreateCampgroundSuccess)
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
        .then(indexCampgrounds())
		.catch(onFailure)
})

showCampgroundContainer.addEventListener('submit', (event) => {
	event.preventDefault()
    // indexContainer.classList.remove('hide')
    
	const id = event.target.getAttribute('data-id')
	const campgroundData = {
		campground: {
			name: event.target['name'].value,
			location: event.target['location'].value,
			sites: event.target['sites'].value
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
		.then(indexCampsite)
		.then((res) => res.json())
		.then((res) => onIndexCampsiteSuccess(res.campsites))
		.then(indexCampgrounds)
		.then((res) => res.json())
		.then((res) => onIndexCampgroundSuccess(res.campgrounds))
		.catch(onFailure)
})



// Campsite Actions
// indexCampsite()
//     .then(res => res.json())
//     .then(res => {
//         console.log(res)
//         onIndexCampsiteSuccess(res.campsites)
//     })
//     .catch(onFailure)

// createCampsiteForm.addEventListener('submit', (event) => {
//     event.preventDefault()

//     const campsiteData = {
//         campsite: {
//             siteNumber: event.target['siteNumber'].value,
//             isOccupied: event.target['isOccupied'].value
//         }
//     }
//     // console.log(characterData)
//     createCampsite(campsiteData)
//     .then(onCreateCampsiteSuccess)
//     .catch(onFailure)
// })

indexCampsiteContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id-campsite')

    if(!id) return
    // console.log(id)
    showCampsite(id)
        .then((res) => res.json())
        .then((res) => onShowCampsiteSuccess(res.campsite))
        .catch(onFailure)
})

showCampsiteContainer.addEventListener('submit', (event) => {
    event.preventDefault()

    const id = event.target.getAttribute('data-id-campsite')

    const campsiteData = {
        campsite: {
            siteNumber: event.target['siteNumber'].value,
            isOccupied: event.target['isOccupied'].value,
        }
    }

    if(!id) return

    updateCampsite(campsiteData, id)
    .then(onUpdateCampsiteSuccess)
    .catch(onFailure)
})

showCampsiteContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id-campsite')

    if(!id) return

    // deleteCampsite(id)
    //     .then(onDeleteCampsiteSuccess)
    //     .catch(onFailure)
    })

// homeButton.addEventListener('click', (e) => {
//     window.location.reload()
// })
