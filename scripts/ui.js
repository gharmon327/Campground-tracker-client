
import { store } from './store.js'


const indexCampgroundsContainer = document.querySelector('#index-campground-container')
const messageContainer = document.querySelector('#message-container')
const showCampgroundContainer = document.querySelector('#show-campground-container')
const authContainer = document.querySelector('#auth-container')
const campsiteContainer = document.querySelector('#campsite-container')
const campgroundContainer = document.querySelector('#campground-container')
const indexCampsiteContainer = document.querySelector('#index-campsite-container')
const messageCampsiteContainer = document.querySelector('#message-campsite-container')
const showCampsiteContainer = document.querySelector('#show-campsite-container')
const createCampsiteForm = document.querySelector('#create-campsite-form')


// Campground Actions
export const onIndexCampgroundSuccess = (campgrounds) => {
	campgrounds.forEach((campground) => {
		const div = document.createElement('div')
        div.classList.add('content-card')
        const campsites = campground.campsite.map((campsite) => {
            return campsite.siteNumber
        })
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
    campgroundContainer.classList.remove('hide')
    createCampsiteForm.classList.remove('hide')
}


export const onShowCampgroundSuccess = (campground) => {
    campgroundContainer.classList.add('hide')
    showCampgroundContainer.classList.remove('hide')
    messageCampsiteContainer.innerText = ''
	const div = document.createElement('div')
    const campsites = campground.campsite.map((campsite) => {
        const campsiteDiv = document.createElement('div')
        campsiteDiv.classList.add('campsite-div')
        campsiteDiv.innerHTML = `
        <div id="campsite">
        <h2 id="campsite-title" class="text-success">Campsite Details</h2>
        <h3 class="text-success">Site Number:</h3>
        <h4>${campsite.siteNumber}</h4>
        <h3 class="text-success">Available:</h3>
        <h4>${campsite.isOccupied}</h4>
        </div>
        <form data-id="${campsite._id}">
        <input class="form-control" type="number" name="siteNumber" value="${campsite.siteNumber}">
        <input class="form-control" type="boolean" name="isOccupied" value="${campsite.isOccupied}">
        <input type="text" name="campgroundId" value="${campground._id}" />
        <button type="submit" class="btn btn-warning">Update Campsite</button>
    </form>
        `
        // return campsites
        showCampsiteContainer.classList.remove('hide')
        campsiteContainer.classList.remove('hide')
        showCampsiteContainer.appendChild(campsiteDiv)
    })
    console.log(campsites)
	div.innerHTML = `
        <div class="row">
            <div class="col">
                <h2 id="Campground-title" class="text-success">Campground Details (Scroll down for campsite details)</h2>
                <h3 class="text-success">Campground Name:</h3>
                <h4>${campground.name}</h4>
                <h3 class="text-success">Location:</h3>
                <h4>${campground.location}</h4>
                <h3 class="text-success">Number of Campsites:</h3>
                <h4>${campground.sites}</h4>
                <h3 class="text-success">Campground ID</h3>
                <h4>${campground._id}</h4>

                
            </div>
            <div id="update-campground-form">
                <form data-id="${campground._id}">
                    <input class="form-control"class="form-control" type="text" name="name" value="${campground.name}">
                    <input class="form-control" type="text" name="location" value="${campground.location}">
                    <input class="form-control" type="text" name="sites" value="${campground.sites}">
                    <button type="submit" class="btn btn-warning">Update Campground</button>
                    <button type="button" class="btn btn-danger" data-id="${campground._id}">Delete Campground</button>
                </form>
            </div>
        </div>
        `
        console.log(campground)
        // console.log(req.user._id)
        console.log(campground.campsite)
	showCampgroundContainer.appendChild(div)
}

export const onUpdateCampgroundSuccess = () => {
	messageContainer.innerHTML = 'You have updated a campground';
    campsiteContainer.classList.add('hide')
}

export const onDeleteCampgroundSuccess = () => {
	messageContainer.innerHTML = 'You have deleted a campground';
    campsiteContainer.classList.add('hide')
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
    campgroundContainer.classList.remove('hide')
}


// Campsite Actions
// export const onIndexCampsiteSuccess = (campsites) => {
//     campsites.forEach((campsite) => {
//         const div = document.createElement('div')
//         div.classList.add('campsite')
//         div.innerHTML = `
//         <h3>Site Number:</h3>
//         <h4>${campsite.siteNumber}</h4>
//         <h3>Available:</h3>
//         <h4>${campsite.isOccupied}</h4>
//         <button data-id-campsite="${campsite._id}">Check In</button>
//         `
//         indexCampsiteContainer.appendChild(div)
//     });
// }


export const onCreateCampsiteSuccess = () => {
    messageCampsiteContainer.innerText = 'You have created a campsite! You may continue adding more then click save :)'
}

export const onShowCampsiteSuccess = (campsite) => {
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
    <h4>${campsite.campgroundId}</h4>

    

    <form data-id-campsite="${campsite._id}">
        <input type="text" name="siteNumber" value="${campsite.siteNumber}" />
        <input type="text" name="isOccupied" value="${campsite.isOccupied}" />
        <input type="text" name="campgroundId" value="${campsite.campgroundId}" />
        <input type="submit" value="Update Campsite" />
    </form>

    
    `
    showCampsiteContainer.appendChild(div)
}

export const onUpdateCampsiteSuccess = () => {
    messageCampsiteContainer.innerText = 'Update was successful, You may continue updating then click save :)';
    // campsiteContainer.classList.add('hide')
    // indexCampsite()
    // onShowCampsiteSuccess(campsite)
    // onShowCampgroundSuccess()
    // campgroundContainer.classList.add('hide')
    // window.location = window.location
}

export const onDeleteCampsiteSuccess = () => {
    messageCampsiteContainer.innerText= 'Delete was successful :)'
}

