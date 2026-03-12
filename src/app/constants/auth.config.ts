export const AUTH_CONFIG = {
  clientId: '49a63df5-598d-401e-9824-a9522586bfd5',
  tenantId: '513294a0-3e20-41b2-a970-6d30bf1546fa',
  secretId: '81dcdc00-d277-496e-b492-54d91376a6dd',
  redirectUri: 'http://localhost:4200/',
};

export const DASHBOARD_CARDS = {
  admin: [
    {
      title: 'BSC Template Creation',
      details: 'Create BSC template',
      image: 'assets/template_creation.png',
    },
    {
      title: 'View All BSC',
      details: 'View all BSC details',
      image: 'assets/view_bsc.png',
    },
    {
      title: 'Master Data Setup',
      details: 'Setup master data',
      image: 'assets/data_setup.png',
    },
    {
      title: 'User Management',
      details: 'Add & manage users',
      image: 'assets/user_management.png',
    },
  ],
  spoc: [
    {
      title: 'Target Settings',
      details: 'Yearly & Monthly target settings for BSC',
      image: 'assets/target.png',
    },
    {
      title: 'Tracker',
      details: 'Track BSC performance',
      image: 'assets/data_setup.png',
    },
    {
      title: 'Provide RCA',
      details: 'Provide reasons for deviations in BSC performance',
      image: 'assets/rca.png',
    },
  ],
};
