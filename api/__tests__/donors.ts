import 'jest';
import * as request from 'supertest';
import { ObjectId } from 'mongodb';
import { App } from '../src/app';

const seed = [
  {
    _id: new ObjectId().toHexString(),
    honor: false,
    amount: '1000',
    frequency: 'monthly',
    honor_name: '',
    honor_comment: '',
    anonymous: false,
    first_name: 'Fernando',
    last_name: 'Bandeira',
    email: 'fernando@test.com',
    phone: '(123) 123-1234',
    receive_updates: false,
    card_number: '1234 1234 1234 1234',
    cvv: '123',
    expiration: '12/19',
  },
  {
    _id: new ObjectId().toHexString(),
    honor: true,
    amount: '5000',
    frequency: 'one_time',
    honor_name: 'Test Honor',
    honor_comment: 'Test Comment',
    anonymous: true,
    first_name: 'Fernando',
    last_name: 'Bandeira',
    email: 'fernando@test.com',
    phone: '(123) 123-1234',
    receive_updates: true,
    card_number: '1234 1234 1234 1234',
    cvv: '123',
    expiration: '12/19',
  },
];
  
const { app, model } = new App({
  MONGODB_URI: 'mongodb://localhost:27017/DonorsTest',
});
  
beforeEach(() => model.remove({}).then(() => model.create(seed)));

describe('GET /', () => {
  test('It should list all donors', () => {
    return request(app).get('/').then((response) => {
      expect(response.status).toBe(200);
      expect(response.body.donors).toMatchObject(seed);
    });
  });
});
  
describe('GET /:id', () => {
  test('It should return a single donor', () => {
    const [donor] = seed;

    return request(app).get(`/${donor._id}`).then((response) => {
      expect(response.status).toBe(200);
      expect(response.body.donor).toMatchObject(donor);
    });
  });

  test('It should return a 404', () => {
    return request(app).get(`/${new ObjectId().toHexString()}`).then((response) => {
      expect(response.status).toBe(404);
    });
  });

  test('It should return a 400', () => {
    return request(app).get(`/123456`).then((response) => {
      expect(response.status).toBe(400);
    });
  });
});

describe('POST /', () => {
  test('It should create a donor', () => {
    const donor = {
      _id: new ObjectId().toHexString(),
      honor: true,
      amount: '500',
      frequency: 'weekly',
      honor_name: 'Test Honor 2',
      honor_comment: 'Test Comment 2',
      anonymous: true,
      first_name: 'Fernando2',
      last_name: 'Bandeira4',
      email: 'fernando@test2.com',
      phone: '(123) 123-1233',
      receive_updates: false,
      card_number: '1233 1234 1234 1234',
      cvv: '122',
      expiration: '12/20',
    };

    return request(app).post('/').send(donor).then((response) => {
      expect(response.status).toBe(200);
      expect(response.body.donor).toMatchObject(donor);
    });
  });

  test('It should not create a donor when missing required data', () => {
    const donor = {
      _id: new ObjectId().toHexString(),
      honor: true,
      frequency: 'weekly',
      anonymous: true,
      email: 'fernando@test2.com',
      phone: '(123) 123-1233',
      receive_updates: false,
      card_number: '1233 1234 1234 1234',
      cvv: '122',
      expiration: '12/20',
    };

    return request(app).post('/').send(donor).then((response) => {
      expect(response.status).toBe(400);
    });
  });
});

describe('PATCH /:id', () => {
  test('It should update the donor', () => {
    const donor = {
      ...seed[0],
      first_name: 'test',
    };

    return request(app).patch(`/${donor._id}`).send(donor).then((response) => {
      expect(response.status).toBe(200);
      expect(response.body.donor).toMatchObject(donor);
    });
  });

  test('It should return a 409 when patching an outdated donor', () => {
    const donor = {
      ...seed[0],
      _version: -2,
    };

    return request(app).patch(`/${donor._id}`).send(donor).then((response) => {
      expect(response.status).toBe(409);
    });
  });

  test('It should return a 404', () => {
    return request(app).patch(`/${new ObjectId().toHexString()}`).then((response) => {
      expect(response.status).toBe(404);
    });
  });

  test('It should return a 400', () => {
    return request(app).patch(`/123456`).then((response) => {
      expect(response.status).toBe(400);
    });
  });
});

describe('DELETE /:id', () => {
  test('It should delete the donor', () => {
    const [donor] = seed;

    return request(app).delete(`/${donor._id}`).then((response) => {
      expect(response.status).toBe(200);
      expect(response.body.donor).toMatchObject(donor);
    });
  });

  test('It should return a 404', () => {
    return request(app).delete(`/${new ObjectId().toHexString()}`).then((response) => {
      expect(response.status).toBe(404);
    });
  });

  test('It should return a 400', () => {
    return request(app).delete(`/123456`).then((response) => {
      expect(response.status).toBe(400);
    });
  });
});
