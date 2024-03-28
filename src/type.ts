export interface Tool {
    name: string;
  }
  
  export interface ProjectProps {
    id: number;
    name: string;
    short_description: string;
    tools: Tool[];
    link: string;
    picture: string;
  }
  