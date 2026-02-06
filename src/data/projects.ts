import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'poorlymarket',
    name: 'Poorly Market',
    logo: 'https://ui-avatars.com/api/?name=Poorly+Market&background=0969da&color=ffffff&size=128&bold=true&font-size=0.5',
    website: 'https://poorlymarket.xyz',
    description: 'A prediction market that uses PORT3 as betting chips, supporting the use of other shitcoins and providing them with application scenarios.',
    category: ['DeFi', 'Infrastructure']
  }
];

export const categories = ['DeFi', 'NFT', 'Infrastructure', 'Tools', 'Community', 'Analytics'] as const;
