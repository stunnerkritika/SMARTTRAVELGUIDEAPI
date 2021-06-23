const axios = require('axios');
const baseurl = 'http://localhost:3000/adventurousplace';

describe('placeAPI', () => {
    let place;
    test('Post a place', async () => {
        let place = await axios.post(baseurl, {
            'name': 'Manakamana',
            'location':'kathmandu',
            'description': 'this is temple',
            'image':'pic.jpg'
        })
        expect(place.data.name).toBe('Manakamana');
        expect(place.data.location).toBe('kathmandu');
        expect(place.data.description).toBe('this is temple');
        expect(place.data.image).toBe('pic.jpg');
    })

test('Get all Place Information', async () => {
    return axios.get(baseurl)
        .then((response) => {
        places = response.data;
            expect(response.data.length).toBeGreaterThan(0);
        })
})

test('Find a Place Record by id', async () => {
    return axios.get(baseurl + `/${places[0]._id}`)
        .then((response) => {
            expect(response.data.name).toBe('Manakamana');
        })
})
test('Update a Place data', async () => {
    return axios.put(baseurl + `/${places[0]._id}`, {
        'name': 'Few Lake',
        'location' : 'Pokhara',
        'description': 'this is very nice Place to visit',
        'image':'myFile-pic5.jpg'
    })
        .then((response) => {
            expect(response.data.name).toBe('Few Lake');
            expect(response.data.location).toBe('Pokhara');
            expect(response.data.description).toBe('this is very nice Place to visit');
            expect(response.data.image).toBe('myFile-pic5.jpg');
        })
})
test('remove all Places', async () => {
    return axios.delete(baseurl)
        .then((response) => {
            expect(200)
        })
})

});