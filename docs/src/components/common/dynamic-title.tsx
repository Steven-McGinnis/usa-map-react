import { useEffect } from 'react';

interface Props {
  title?: string;
}

const DocumentTitle: React.FC<Props> = ({ title }) => {
  useEffect(() => {
    const defaultTitle = 'USA Map React by MiraWision';
    
    if (!title) {
      document.title = defaultTitle;
      return;
    }

    document.title = `${title} | USA Map React by MiraWision`;
  }, [title]); 

  return null;
};

export default DocumentTitle;