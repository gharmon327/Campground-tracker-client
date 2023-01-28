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
	// onIndexCampsiteSuccess,
	onUpdateCampsiteSuccess,
	// onShowCampsiteSuccess,
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
const back = document.querySelector('#back')

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

back.addEventListener('click', () => {
    updateCampsite()
    // indexCampsite()
    indexCampgrounds()
    .then(campgroundContainer.classList.remove('hide'))
    .then(campsiteContainer.classList.add('hide'))
    .then(showCampgroundContainer.classList.add('hide'))
    .then(showCampsiteContainer.classList.add('hide'))
})


createCampgroundForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const campgroundData = {
        campground: {
            name: event.target['name'].value,
            location: event.target['location'].value,
            // sites: event.target['sites'].value,
        }
    }
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
			sites: event.target['sites'].value,
		},
	}

	updateCampground(campgroundData, id)
		.then(onUpdateCampgroundSuccess)
        .then(indexCampgrounds)
        .then(showCampsiteContainer.classList.add('hide'))
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
		// .then(indexCampsite)
		// .then((res) => res.json())
		// .then((res) => onIndexCampsiteSuccess(res.campsites))
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

// checkInBtn.addEventListener('click', () => {
//     console.log('its working')
    // const id = event.target.getAttribute('data-id-campsite')

    // const campsiteData = {
    //     campsite: {
    //         siteNumber: event.target['siteNumber'].value,
    //         isOccupied: event.target['isOccupied'].value,
    //     }
    // }

    // if(!id) return

    // updateCampsite(campsiteData, id)
    // .then(indexCampsite)
    // .then(onUpdateCampsiteSuccess)
    // .then(showCampsite(id)
    // .then((res) => res.json())
    // .then((res) => onShowCampsiteSuccess(res.campsite)))


indexCampsiteContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id-campsite')

    if(!id) return
    // showCampsite(id)
    //     .then((res) => res.json())
    //     .then((res) => onShowCampsiteSuccess(res.campsite))
    //     .catch(onFailure)
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

    console.log(campsiteData)
    console.log(id)
    if(!id) return

    updateCampsite(campsiteData, id)
    .then(console.log(campsiteData))
    .then(onUpdateCampsiteSuccess)
    .then(showCampgroundContainer.classList.add('hide'))
    // .then(indexCampsite)
    // .then(onUpdateCampsiteSuccess)
    // .then(showCampsite(id)
    //     .then((res) => res.json())
    //     .then((res) => onShowCampsiteSuccess(res.campsite)))
        // .then(indexCampgrounds)
		// .then((res) => res.json())
		// .then((res) => onIndexCampgroundSuccess(res.campgrounds))
    // .then(showCampgroundContainer.classList.remove('hide'))
    // .then(campsiteContainer.classList.remove('hide'))
    .catch(onFailure)
})

showCampsiteContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id-campsite')

    if(!id) return

    // deleteCampsite(id)
    //     .then(onDeleteCampsiteSuccess)
    //     .catch(onFailure)
    })


