import React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';

function SelectMenu({ options, selectedOption, onSelectOption, buttonLabel }) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size="lg" colorScheme="orange" variant="outline">
        {selectedOption || options[0].name}
      </MenuButton>
      <MenuList>
        {options.map((item) => (
          <MenuItem key={item.id} onClick={() => onSelectOption(item.name)}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SelectMenu;
