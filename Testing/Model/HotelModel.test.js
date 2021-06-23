const hotel = require('../../model/hotel');

const mongoose = require('mongoose');
const testDb = 'mongodb://127.0.0.1/smartTravelGuide_test'

beforeAll( async ()=>{
    await mongoose.connect(testDb,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
   
   })

   afterAll(async ()=>{
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    })
    

    describe('Test of Hotel Schema', ()=>{

        test('should create a new Hotel',()=>{
            return hotel.create({
            name:'Soltee Hotel',
            location:'kathmandu',
            price:'Rs. 2000',
            description:'This famous Hotel for tourist',
            image:'pic1.jpg',
            contactnumber:'9856123456'
            }).then((response)=>{
            expect(response.name).toBe('Soltee Hotel');
            expect(response.location).toBe('kathmandu');
            expect(response.price).toBe('Rs. 2000');
            expect(response.description).toBe('This famous Hotel for tourist');
            expect(response.image).toBe('pic1.jpg');
            expect(response.contactnumber).toBe('9856123456');
            })
            });
    })

    