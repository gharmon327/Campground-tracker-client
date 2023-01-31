import { store } from './store.js'

// User actions
export const signUp = (data) => {
	return fetch(`https://whispering-beach-23651.herokuapp.com/sign-up`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

export const signIn = (data) => {
	return fetch(`https://whispering-beach-23651.herokuapp.com/sign-in`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

// Campground Actions
export const indexCampgrounds = (data) => {
    return fetch(`https://whispering-beach-23651.herokuapp.com/campgrounds`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
        body: JSON.stringify(data),
	})
}

export const createCampground = (data) => {
    return fetch(`https://whispering-beach-23651.herokuapp.com/campgrounds`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    })
}

export const showCampground = (id) => {
	return fetch(`https://whispering-beach-23651.herokuapp.com/${id}`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

export const updateCampground = (data, id) => {
	return fetch(`https://whispering-beach-23651.herokuapp.com/${id}`, {
		method: 'PATCH',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${store.userToken}`
		},
		body: JSON.stringify(data),
	})
}

export const deleteCampground = (id) => {
	return fetch(`https://whispering-beach-23651.herokuapp.com/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}


// Campsite Actions
export const indexCampsite = () => {
    return fetch(`https://whispering-beach-23651.herokuapp.com/campsites`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

export const createCampsite = (data) => {
    return fetch(`https://whispering-beach-23651.herokuapp.com/campsites`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    })
}

export const showCampsite = (id) => {
    return fetch(`https://whispering-beach-23651.herokuapp.com/${id}`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

export const updateCampsite = (data, id) => {
    return fetch(`https://whispering-beach-23651.herokuapp.com/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    })
}

export const deleteCampsite = (id) => {
    return fetch(`https://whispering-beach-23651.herokuapp.com/${id}`, {
        method: 'DELETE',
        headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
    })
}