// Core
import { useSelector } from 'react-redux';

// Other
import { directorySelector } from '../../redux/directory';

export const useDirectoryData = () => {
  const { sections } = useSelector(directorySelector);

  return {
    directoryData: sections,
  };
};

