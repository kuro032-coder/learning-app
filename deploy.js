//const ghpages = require('gh-pages');

import ghpages from 'gh-pages'

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/kuro032-coder/learning-app.git',
  message: 'Deploy from gh-pages script',
  dotfiles: true, // .nojekyll を含める
  history: false, // 毎回上書き
}, (err) => {
  if (err) {
    console.error('Deploy error:', err);
  } else {
    console.log('Deploy success!');
  }
});