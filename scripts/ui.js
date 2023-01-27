
import { store } from './store.js'
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
} from './api.js'

const indexCampgroundsContainer = document.querySelector('#index-campground-container')
const messageContainer = document.querySelector('#message-container')
const showCampgroundContainer = document.querySelector('#show-campground-container')
const indexContainer = document.querySelector('#index-container')
const authContainer = document.querySelector('#auth-container')
const campsiteContainer = document.querySelector('#campsite-container')
const campgroundContainer = document.querySelector('#campground-container')

const indexCampsiteContainer = document.querySelector('#index-campsite-container')
const messageCampsiteContainer = document.querySelector('#message-campsite-container')
const showCampsiteContainer = document.querySelector('#show-campsite-container')


// Campground Actions
export const onIndexCampgroundSuccess = (campgrounds) => {
	campgrounds.forEach((campground) => {
		const div = document.createElement('div')
        div.classList.add('content-card')
		div.innerHTML = `
            <h3>${campground.name} ${campground.location}</h3>
            <button type="button" class="btn btn-primary" data-id="${campground._id}">Select Campground</button>
        `
		indexCampgroundsContainer.appendChild(div)
	})
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've encountered an error. Try again later</h3>
        <p>${error}</p>
    `
}

export const onCreateCampgroundSuccess = () => {
    messageContainer.innerText = 'You have created a campground!! :)'
}

export const onShowCampgroundSuccess = (campground) => {
    // indexContainer.classList.add('hide')
    campsiteContainer.classList.remove('hide')
    campgroundContainer.classList.add('hide')
    showCampgroundContainer.classList.remove('hide')
	const div = document.createElement('div')
	div.innerHTML = `
        <div class="row">
            <div class="col">
                <h2 id="Campground-title">Campground Details</h2>
                <h3>Campground Name:</h3>
                <h4>${campground.name}</h4>
                <h3>Location:</h3>
                <h4>${campground.location}</h4>
                <h3>Number of Campsites:</h3>
                <h4>${campground.sites}</h4>
            </div>
            <div id="update-campground-form" class="hide">
                <form data-id="${campground._id}">
                    <input class="form-control"class="form-control" type="text" name="name" value="${campground.name}">
                    <input class="form-control" type="text" name="location" value="${campground.location}">
                    <input class="form-control" type="text" name="sites" value="${campground.sites}">
                    <button type="submit" class="btn btn-warning">Update Campground</button>
                </form>
                <button type="button" class="btn btn-danger" data-id="${campground._id}">Delete Campground</button>
            </div>
        </div>
        `
        // window.top.location = window.top.location
	showCampgroundContainer.appendChild(div)
}

export const onUpdateCampgroundSuccess = () => {
	messageContainer.innerHTML = 'You have updated a campground';
    // indexContainer.classList.remove('hide')
    indexCampgrounds()
    campsiteContainer.classList.add('hide')
}

export const onDeleteCampgroundSuccess = () => {
	messageContainer.innerHTML = 'You have deleted a campground';
    campsiteContainer.classList.remove('hide')
    campgroundContainer.classList.remove('hide')
    // window.top.location = window.top.location
}

// // User Actions
export const onSignUpSuccess = () => {
    messageContainer.innerHTML = 'You\'ve created a new user! Now Sign In'
}

export const onSignInSuccess = (userToken) => {
    messageContainer.innerHTML = ''
    store.userToken = userToken
    console.log(userToken)
    authContainer.classList.add('hide')
    // indexContainer.classList.remove('hide')
    // campsiteContainer.classList.remove('hide')
    campgroundContainer.classList.remove('hide')
}


// Campsite Actions
export const onIndexCampsiteSuccess = (campsites) => {
    campsites.forEach((campsite) => {
        const div = document.createElement('div')
        div.classList.add('campsite')
        div.innerHTML = `
        <h3>Site Number:</h3>
        <h4>${campsite.siteNumber}</h4>
        <h3>Available:</h3>
        <h4>${campsite.isOccupied}</h4>
        <button data-id-campsite="${campsite._id}">Check In</button>
        `
        // if(`${campsite.isOccupied}` === true){
        //     div.innerText = 'Yes'
        // } else (div.innerText = 'No')
        indexCampsiteContainer.appendChild(div)
    });
}


export const onCreateCampsiteSuccess = () => {
    messageCampsiteContainer.innerText = 'You have created a campsite!! :)'
}

export const onShowCampsiteSuccess = (campsite) => {
    // indexContainer.classList.add('hide')
    campsiteContainer.classList.add('hide')
    campgroundContainer.classList.add('hide')
	showCampsiteContainer.classList.remove('hide')
    showCampgroundContainer.classList.add('hide')
    const div = document.createElement('div')
    div.innerHTML = `
    <h2>Campsite</h2>
    <h3>Site Number:</h3>
    <h4>${campsite.siteNumber}</h4>
    <h3>Available:</h3>
    <h4>${campsite.isOccupied}</h4>
    

    <form data-id-campsite="${campsite._id}">
        <input type="text" name="siteNumber" value="${campsite.siteNumber}" />
        <input type="text" name="isOccupied" value="${campsite.isOccupied}" />
        <input type="submit" value="Update Campsite" />
    </form>

    
    `
    showCampsiteContainer.appendChild(div)
}

export const onUpdateCampsiteSuccess = () => {
    messageCampsiteContainer.innerText = 'Update was successful :)';
    // campgroundContainer.classList.add('hide')
    // window.location = window.location
}

// export const onDeleteCampsiteSuccess = () => {
//     messageCampsiteContainer.innerText= 'Delete was successful :)'
// }

// <button data-id-campsite="${campsite._id}">Delete Campsite</button>
/* <input type="text" name="siteNumber" value="${campsite.siteNumber}" /> */