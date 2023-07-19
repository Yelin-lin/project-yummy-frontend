import { useState } from 'react';

function useSelect(options) {
    const [selectedOption, setSelectedOption] = useState([0]);

    const handleSelect = event => {
        const selectedValue = event.target.value;
        //const selectedValue = options.find(option => option.optionKey === selectedValue);
        setSelectedOption(selectedValue);
    };

    return {
        selectedOption,
        handleSelect,
    };
}

export default useSelect;
