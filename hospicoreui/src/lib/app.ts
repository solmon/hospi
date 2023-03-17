import packageInfo from '../../package.json';

const app = {
    version: packageInfo.version,
    name: packageInfo.name,
    logoUrl: 'https://www.example.com/logo.png',
    url: 'http://localhost:3002',
};

export default app;