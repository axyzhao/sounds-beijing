import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const TableContents = (props) => {
  const { clickers, captions, indices } = props;

  const filteredOptions = captions.filter((elem, i) => indices.indexOf(i) != -1)
  const defaultOption = "Sounds of Beijing";
  return <Dropdown options={filteredOptions}
                   onChange={clickers[1]}
                   value={defaultOption}
                   placeholder="Sounds of Beijing"
         />;
};


export default TableContents;
