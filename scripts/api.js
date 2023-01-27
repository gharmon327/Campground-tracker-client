import { store } from './store.js'

// User actions
export const signUp = (data) => {
	return fetch(`http://localhost:8002/sign-up`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

export const signIn = (data) => {
	return fetch(`http://localhost:8002/sign-in`, {
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
    return fetch(`http://localhost:8002/campgrounds`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
        body: JSON.stringify(data),
	})
}

export const createCampground = (data) => {
    return fetch(`http://localhost:8002/campgrounds`, {
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
	return fetch(`http://localhost:8002/campgrounds/${id}`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

export const updateCampground = (data, id) => {
	return fetch(`http://localhost:8002/campgrounds/${id}`, {
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
	return fetch(`http://localhost:8002/campgrounds/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}


// Campsite Actions
export const indexCampsite = () => {
    return fetch(`http://localhost:8002/campsites`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

export const createCampsite = (data) => {
    return fetch(`http://localhost:8002/campsites`, {
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
    return fetch(`http://localhost:8002/campsites/${id}`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

export const updateCampsite = (data, id) => {
    return fetch(`http://localhost:8002/campsites/${id}`, {
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
    return fetch(`http://localhost:8002/campsites/${id}`, {
        method: 'DELETE',
        headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
    })
}