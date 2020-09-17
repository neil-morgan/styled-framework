import React, { useState, useRef, useEffect } from "react";
import { darken, lighten } from "polished";
import styled from "styled-components/macro";
import { Text } from "../components";

const items = [
  {
    id: 1,
    value: "Pulp Fiction",
  },
  {
    id: 2,
    value: "The Prestige",
  },
  {
    id: 3,
    value: "Shrek",
  },
  {
    id: 4,
    value: "Golden Eye",
  },
  {
    id: 5,
    value: "Top Gun",
  },
  {
    id: 6,
    value: "The Hobbit",
  },
  {
    id: 7,
    value: "Black Hawk Down",
  },
  {
    id: 8,
    value: "Ice Age",
  },
];

function Dropdown({ name, placeholder, register, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);

  const toggle = () => setOpen(!open);
  const node = useRef();

  const handleItemClick = (item) => {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  };

  const handleOpenClick = (e) => {
    if (e.target.parentNode === node.current) toggle(!open);
  };

  const handleClickOutside = (e) => {
    e.stopPropagation();
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  const handleRemoveTag = (id) => {
    if (multiSelect) {
      setSelection(selection.filter((item) => item.id !== id));
    }
  };

  function isItemInSelection(item) {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <Select ref={node}>
      <Header
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={(e) => handleOpenClick(e)}
      >
        <Selected>
          {selection.length !== 0 &&
            selection.map((item, i) => (
              <Tag
                key={i}
                id={item.id}
                onClick={() => handleRemoveTag(item.id)}
              >
                {`${item.value}`}
                <Remove />
              </Tag>
            ))}

          {/* {placeholder} */}

          <Action onClick={() => toggle(!open)}>
            Select
            {/* {open ? "Close" : "Open"} */}
          </Action>
        </Selected>
      </Header>

      {open && (
        <List>
          {items.map((item) => (
            <Item key={item.id}>
              <ItemButton onClick={() => handleItemClick(item)} type="button">
                <span>{item.value}</span>
                <ItemStatus>{isItemInSelection(item) && "Selected"}</ItemStatus>
              </ItemButton>
            </Item>
          ))}
        </List>
      )}
      <HiddenInput
        name={name}
        value="test"
        onChange={() => console.log("lol")}
        ref={register}
        type="input"
      />
    </Select>
  );
}

const Select = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  ${({ theme }) => theme && theme.fontSize.small};
  background: ${({ theme }) => theme && theme.colors.primary};
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  min-height: 2.5rem;
  overflow: hidden;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  padding-left: 1rem;
  padding-right: 0.5rem;
  transition: 200ms;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;

  &:hover {
    background: ${({ theme }) => theme && darken(0.1, theme.colors.primary)};
  }
`;

const Action = styled(Tag)`
  background: ${({ theme }) => theme.colors.secondary};
  &:hover {
    background: ${({ theme }) => theme && darken(0.1, theme.colors.secondary)};
  }
`;

const Remove = styled.div`
  position: relative;
  height: 1.6rem;
  width: 1.6rem;
  margin-left: 0.5rem;
  background: ${({ theme }) => theme.colors.error};
  border-radius: 0.5rem;

  &:before,
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    content: " ";
    height: 1rem;
    width: 0.2rem;
    background-color: #fff;
  }
  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const List = styled.ul`
  position: absolute;
  z-index: 100;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  padding: 0;
  margin: 0;
  width: 100%;
  max-height: 16rem;
  overflow-y: scroll;
`;

const ItemButton = styled.button`
  ${({ theme }) => theme && theme.fontSize.small};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  min-height: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border: 0;
  border-bottom: 1px solid #ccc;
  width: 100%;
  text-align: left;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;

  &:hover,
  &:focus {
    cursor: pointer;
    background: ${({ theme }) => lighten(0.075, theme.colors.inputBackground)};
  }
`;

const Item = styled.li`
  list-style-type: none;
  &:last-of-type > ${ItemButton} {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

const ItemName = styled.span``;

const ItemStatus = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const Header = styled.div`
  ${({ theme }) => theme && theme.fontSize.regular};
  background: ${({ theme }) => theme.colors.inputBackground};
  overflow-x: visible;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  outline: none;
  border: 0;
  border-radius: 0.5rem;
  overflow: hidden;
  min-height: 4.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;

  transition: 200ms;

  &:hover {
    background: ${({ theme }) => theme.colors.inputFocus};
  }
`;

const Selected = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const HiddenInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  width: 1px;
`;

export default Dropdown;
