const axios = require('axios');
const baseurl = 'http://localhost:3000/hotel';

describe('hotelAPI', () => {
    let Hotel;
    test('Post a Hotel', async () => {
        let hotel = await axios.post(baseurl, {
            
                "name": "Hotel Shanker",
                "location": "Lazimpat, Kathmandu",
                "price": "6,917",
                "description": "Hotel Shanker is located in Kathmandu, next to Narayanhiti Palace Museum. The hotel offers an outdoor swimming pool and spa. Four dining options are available and parking is free. Hotel Shanker is 5 minutes by car from popular attractions, Thamel and Durbar Marg. Kathmandu International Airport is a 25-minute drive away.",
                "image": "myFile-1623740000900.jpg",
                "contactnumber":"01-4410151"      
                
        })
        expect(hotel.data.name).toBe('Hotel Shanker');
        expect(hotel.data.location).toBe('Lazimpat, Kathmandu');
        expect(hotel.data.price).toBe('6,917');
        expect(hotel.data.description).toBe('Hotel Shanker is located in Kathmandu, next to Narayanhiti Palace Museum. The hotel offers an outdoor swimming pool and spa. Four dining options are available and parking is free. Hotel Shanker is 5 minutes by car from popular attractions, Thamel and Durbar Marg. Kathmandu International Airport is a 25-minute drive away.');
        expect(hotel.data.image).toBe('myFile-1623740000900.jpg');
        expect(hotel.data.contactnumber).toBe('01-4410151');
    })

test('Get all Hotel', async () => {
    return axios.get(baseurl)
        .then((response) => {
        hotels = response.data;
            expect(response.data.length).toBeGreaterThan(0);
        })
})

test('Find a Hotel Record by id', async () => {
    return axios.get(baseurl + `/${hotels[0]._id}`)
        .then((response) => {
            expect(response.data.name).toBe('Hotel Shanker');
        })
})



test('Update a Hotel data', async () => {
    return axios.put(baseurl + `/${hotels[0]._id}`, {
        'name': 'Soltee Hotel',
        'location' : 'Kathmandu',
        'price' : 'Rs. 2000',
        'description': 'This is very nice Hotel',
        'image':'myFile-pic5.jpg'
    })
        .then((response) => {
            expect(response.data.name).toBe('Soltee Hotel');
            expect(response.data.location).toBe('Kathmandu');
            expect(response.data.price).toBe('Rs. 2000');
            expect(response.data.description).toBe('This is very nice Hotel');
            expect(response.data.image).toBe('myFile-pic5.jpg');
        })
})
test('remove all Hotels', async () => {
    return axios.delete(baseurl)
        .then((response) => {
            expect(200)
        })
})

});