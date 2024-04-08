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


export interface VisibleTagsProps {
  [key: string]: boolean;
}

export interface FilterProps {
  visibleTags: VisibleTagsProps;
  setVisibleTags: React.Dispatch<React.SetStateAction<VisibleTagsProps>>;
}

export type VisibleTagsArrayProps = string[];


