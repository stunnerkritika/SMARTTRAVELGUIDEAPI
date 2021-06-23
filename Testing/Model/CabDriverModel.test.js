const Adventurous = require('../../model/cabDetails');

const mongoose = require('mongoose');
const testDb = 'mongodb://127.0.0.1/smartTravelGuide_test'

beforeAll( async ()=>{
    await mongoose.connect(testDb,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
   
   })

   afterAll(async ()=>{
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    })
    

    describe('Test of Cab Details Schema', ()=>{

        test('should create a new Cab Details',()=>{
            return Adventurous.create({
            driverimage:'pic2.jpg',
            name:'Kritika Thapa',
            contactnumber:'9813135616',
            price:'300 per km',
            description: 'I like to give service to custmer',
            cabname:'Lamboo',
            cabmodel:'350 GT',
            cabImage:'pic1.jpg',
            cabdescription:'Travel Fastest then other car'
            }).then((response)=>{
            expect(response.driverimage).toBe('pic2.jpg');
            expect(response.name).toBe('Kritika Thapa');
            expect(response.contactnumber).toBe('9813135616');
            expect(response.price).toBe('300 per km');
            expect(response.description).toBe('I like to give service to custmer');
            expect(response.cabname).toBe('Lamboo');
            expect(response.cabmodel).toBe('350 GT');
            expect(response.cabImage).toBe('pic1.jpg');
            expect(response.cabdescription).toBe('Travel Fastest then other car');
            })
            });
    })