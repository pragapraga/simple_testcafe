import { ClientFunction, Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('Submit your Name and assert it', async t => {
    await t
        .typeText('#developer-name', 'Pragadeeswaran')
        .click('#submit-button');
    const getLocation = ClientFunction(() => document.location.href);

    await t
        .expect(getLocation()).contains('https://devexpress.github.io/testcafe/example/thank-you.html')
        .expect(await Selector('#article-header').textContent).eql('Thank you, Pragadeeswaran!');
});