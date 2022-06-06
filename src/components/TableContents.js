import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const TableContents = (props) => {
  const { clickers, captions, indices } = props;

  const filteredOptions = captions.filter((elem, i) => indices.indexOf(i) != -1);
  const filteredLinks = clickers.filter((elem, i) => indices.indexOf(i) != -1);
  const defaultOption = "Sounds of Beijing";

  const changeFuncs = {};
  for (let i = 0; i < indices.length; i++){
    changeFuncs[filteredOptions[i]] = filteredLinks[i];
  }
  const onChange = function(a) {
    changeFuncs[a["value"]]();
  }
  return <Dropdown options={filteredOptions}
                   onChange={onChange}
                   value={defaultOption}
                   placeholder="Sounds of Beijing"
         />;
};


export default TableContents;
