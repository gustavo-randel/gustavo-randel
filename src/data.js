// This data is passed to be used in the replacers. Like a ".env" file.
// I opted to not use .env so it is possible to create custom objects, arrays and logic here.
// You can modify, create or delete any property you want.
const { colors } = require('./theme');

module.exports = {
  user: 'gustavo-randel',
  startedProgramming: '2025',
  repoQuantity: 18,
  header: {
    styles: {
      align: 'center',
      style: 'for-the-badge',
      color: colors.lightSecondary.base,
      logoColor: colors.lightSecondary.over,
    },
    description: "👋 Heyyy! I'm Gustavo Randel, a brazilian programmer.",
    badges: [
      {
        type: 'badge',
        name: 'linkedin',
        href: 'https://linkedin.com/in/gustavo-randel',
      },
      {
        type: 'badge',
        name: 'website',
        href: '',
        logo: 'esri',
      },
      {
        type: 'views',
      },
    ],
  },
  aboutme: {
    list: ['* Born in Salvador, 19 years', '* Software Engineer', '* Currently studying Typescript'],
  },
  skillswall: {
    styles: {
      style: 'for-the-badge',
      align: 'left',
      highlightColor: colors.primary,
      wallColors: [colors.secondary, colors.lightSecondary],
    },
    randomOrder: true,
    skills: [
      { name: 'JavaScript', isHighlighted: true },
      {name: 'Vite'},
      { name: 'TypeScript', isHighlighted: true },
      { name: 'HTML5' },
      { name: 'CSS3', isHighlighted: true },
      { name: 'React', isHighlighted: true },
      { name: 'React Native', logo: 'react' },
      { name: 'SASS' },
      { name: 'Bootstrap' },
      { name: 'NPM' },
      { name: 'Node.JS', isHighlighted: true },
      {name: 'Intellij IDEA'},
      {name: 'Java'},
      { name: 'Vercel' },
      { name: 'Github Pages', logo: 'github' },
      { name: 'GitHub' },
      { name: 'Git', isHighlighted: true },
      { name: 'Figma', isHighlighted: true },
      { name: 'Photoshop', logo: 'adobe-photoshop' },
      {name: 'After Effects', logo: 'adobe-after-effects'},
      { name: 'Visual Studio Code' },
      {name: 'PostgreSQL', isHighlighted: true}
    ],
  },
  recentworks: {
    styles: {
      title_color: colors.primary.base,
      text_color: colors.secondary.over,
      bg_color: colors.secondary.base,
      border_color: colors.black.base,
      icon_color: colors.secondary.over,
    },
  },
  socialMedias: {
    styles: {
      align: 'left',
      style: 'for-the-badge',
      color: colors.lightSecondary.base,
      logoColor: colors.lightSecondary.over,
    },
    links: [
      {
        name: 'Instagram',
        href: 'https://instagram.com/randeltheone',
      },
      {
        name: 'linkedin',
        href: 'https://linkedin.com/in/gustavo-randel',
      },
      {
        name: 'email',
        logo: 'gmail',
        href: 'mailto:randel.dev@hotmail.com',
      },
      {
        name: 'randel',
        logo: 'discord',
        labelColor: colors.secondary.base,
      },
    ],
  },
  githubStats: {
    styles: {
      style: 'for-the-badge',
      align: 'center',
      title_color: colors.primary.base,
      text_color: colors.secondary.over,
      bg_color: colors.secondary.base,
      border_color: colors.black.base,
      show_icons: true,
      icon_color: colors.secondary.over,
      rank_icon: 'github',
    },
  },
};
