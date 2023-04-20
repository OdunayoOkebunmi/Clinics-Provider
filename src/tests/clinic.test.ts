
import request from "supertest";
import app from "../server";


const wrongUrl = '/api/v1/wrongurl';
const url = '/';
const clinicsUrl = '/clinics'

describe('Test for server', () => {
    it('should get url successfully', async () => {
        const res = await request(app).get(url);
        expect(res.status).toBe(200);
        expect(typeof res.body).toBe('object');
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Server starting');
    });
    it('should throw an error when wrong endpoint is used', async () => {
        const res = await request(app).get(wrongUrl);
        expect(res.status).toBe(404);
        expect(typeof res.body).toBe('object');
        expect(res.body).toHaveProperty('error');
        expect(res.body.error).toBe('Page not found');
    });
})


describe('Fetch Clinics', () => {
    it('should return all clinics if no search parameters are provided', async () => {
        const res = await request(app).get(clinicsUrl);
        expect(res.status).toBe(200);
        expect(typeof res.body).toBe('object');
        expect(res.body).toHaveProperty('clinics');
        expect(res.body.clinics).toEqual(expect.any(Array))
    });
    it('should return all clinics if search parameter name is given', async () => {
        const res = await request(app).get(`${clinicsUrl}/?state=Alaska`);
        expect(res.status).toBe(200);
        expect(typeof res.body).toBe('object');
        expect(res.body).toHaveProperty('clinics');
        expect(res.body.clinics[0]).toHaveProperty('state')
        expect(res.body.clinics[0].state).toEqual('Alaska')
    });

});

