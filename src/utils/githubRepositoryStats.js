const { generateElement } = require('./generateElement');
const { queryFromObject } = require('./URI');

function gitHubRepositoryStats({ user, href, ...properties }) {
  const query = queryFromObject(properties);

  const stats = generateElement('img', {
    src: `https://github-readme-stats-gustavo-randel.vercel.app/`,
    height: 100,
  });

  return href
    ? generateElement('a', {
        children: stats,
        href,
      })
    : stats;
}

module.exports = gitHubRepositoryStats;
