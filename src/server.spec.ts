import { expect, request, should, use } from 'chai';
import chaiHttp = require('chai-http');

use(chaiHttp);

import 'mocha';


import server from './server';

describe('server', () => {
  use(chaiHttp);
  should();

  it('should call request', (done) => {
    request(server)
      .get('/')
      .end((err, res) => {
        expect(err).to.eq(null);
        expect(res.status).to.eq(200);
        expect(res.text).to.contain('thanks for visiting');
        done();
      });
  });
});
