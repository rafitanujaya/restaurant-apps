Feature('add Review Restaurant');

Scenario('add Review Restaurant ', ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('#resto-item a');
  I.seeElement('#resto-title a');

  I.click(locate('#resto-title a').first());

  I.wait(1);
  const userNameReview = 'Name Test for E2E';
  const reviewUser = 'Review Test for E2E';

  I.scrollTo('#form-resto');
  I.wait(1);

  I.fillField('#customerName', userNameReview);
  I.fillField('#reviews', reviewUser);
  I.click('#submitReview');

  I.scrollTo('#resto-review');
  I.see(userNameReview, '.name');
  I.see(reviewUser, '.review-text');
});
