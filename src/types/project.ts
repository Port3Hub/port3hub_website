export interface Project {
  id: string;
  name: string;
  logo: string;
  website: string;
  description: string;
  category: string[];
}

export type Category = 'DeFi' | 'NFT' | 'Infrastructure' | 'Tools' | 'Community' | 'Analytics';
