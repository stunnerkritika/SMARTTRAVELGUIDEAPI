const Adventurous = require('../../model/adventurousplaces');
const mongoose = require('mongoose');
const testDb = 'mongodb://127.0.0.1/smartTravelGuide_test'

beforeAll( async ()=>{
    await mongoose.connect(testDb,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
   })

   afterAll(async ()=>{
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    })
    describe('Test of Adventurous Places Schema', ()=>{

        test('should create a new Adventurous Places',()=>{
            return Adventurous.create({
            name:'Bishnudhawar',
            location:'kathmandu',
            description: 'This Place is very beautiful for nature lover',
            price:'Rs. 2000',
            BestTimeToVisit:'End of Summer',
            image:'pic1.jpg',
            }).then((response)=>{
            expect(response.name).toBe('Bishnudhawar');
            expect(response.location).toBe('kathmandu');
            expect(response.description).toBe('This Place is very beautiful for nature lover');
            expect(response.price).toBe('Rs. 2000');
            expect(response.BestTimeToVisit).toBe('End of Summer');
            expect(response.image).toBe('pic1.jpg');
            })
            });
    })