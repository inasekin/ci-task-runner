import request from 'supertest';
import app from '../src/app';

describe('POST /build', () => {
    it('should start a new build', async () => {
        const res = await request(app).post('/build');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Build started');
    });
});