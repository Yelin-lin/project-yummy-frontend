import { useState } from 'react';

const useSelect = optionData => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = optionKey => {
        const selected = optionData.find(option => option.optionKey === optionKey);
        setSelectedOption(selected);
    };

    return {
        selectedOption,
        handleOptionClick,
    };
};

export default useSelect;
