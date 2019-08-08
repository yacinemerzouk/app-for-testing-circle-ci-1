/* eslint-env mocha chai */
// These are Chimp globals
/* globals browser expect */

describe('Page meta title', function () {
    it('should be Meteor CircleCI @watch', function () {
        browser.url('http://localhost:3000');
        expect(browser.getTitle()).to.equal('app-for-testing-circleci-1');
    });
});