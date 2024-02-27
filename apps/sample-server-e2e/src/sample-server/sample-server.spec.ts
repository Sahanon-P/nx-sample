import axios from 'axios';

describe('GET /api', () => {
  it('should return a message', async () => {
    const res = await axios.get(`/api`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });
  it('should return another message', async () => {
    const res = await axios.get(`/api/auth`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'auth' });

    // expect(res.data).toEqual({ message: 'Hello API' });
  });
});
