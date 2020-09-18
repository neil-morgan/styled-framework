import React, { useState, useRef, useEffect } from "react";
import { transparentize, darken, lighten } from "polished";
import styled, { css } from "styled-components/macro";
import HoverScroll from "./HoverScroll";

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

export default ({ name, placeholder, register, multiSelect = false }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);

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

  const handleCrossTag = (id) => {
    if (multiSelect) {
      setSelection(selection.filter((item) => item.id !== id));
    }
  };

  const isItemInSelection = (item) => {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  };

  const toggle = () => setOpen(!open);

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
    <Wrapper ref={node}>
      <HiddenInput
        name={name}
        value="test"
        onChange={() => console.log("lol")}
        ref={register}
        type="input"
      />
      <Header
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={(e) => handleOpenClick(e)}
        isOpen={open}
      >
        <Selected>
          {0 !== selection.length ? (
            multiSelect ? (
              selection.map((item, i) => (
                <Tag
                  key={i}
                  id={item.id}
                  onClick={() => handleCrossTag(item.id)}
                >
                  {`${item.value}`}
                  <TagCross />
                </Tag>
              ))
            ) : (
              <Tag id={selection[0].id} onClick={() => setSelection([])}>
                {selection[0].value}
                <TagCross />
              </Tag>
            )
          ) : (
            <Placeholder onClick={() => toggle(!open)}>
              {placeholder ? placeholder : open ? "Please select" : "Open"}
            </Placeholder>
          )}
        </Selected>
      </Header>

      {/* {open && ( */}
      <RelativeRoot>
        <AbsoluteRoot isOpen={open}>
          <HoverScroll>
            <List>
              {items.map((item) => (
                <Item key={item.id}>
                  <ItemButton
                    onClick={() => handleItemClick(item)}
                    type="button"
                  >
                    <span>{item.value}</span>
                    {isItemInSelection(item) && (
                      <ItemStatus> Selected</ItemStatus>
                    )}
                  </ItemButton>
                </Item>
              ))}
            </List>
          </HoverScroll>
        </AbsoluteRoot>
      </RelativeRoot>
      {/* )} */}
    </Wrapper>
  );
};

const NoHighlight = () => css`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
`;

const RelativeRoot = styled.div`
  position: relative;
`;

const AbsoluteRoot = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;
  overflow: hidden;
  visibility: hidden;
  ${({ isOpen }) => isOpen && `visibility: visible; `}

  & > div > div {
    max-height: 18rem;
    transition: 200ms;
    transform: translateY(-100%);
    background: ${({ theme }) => lighten(0.15, theme.colors.inputBackground)};
    border: solid 0.2rem ${({ theme }) => theme.colors.inputBackground};
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    ${({ isOpen }) => isOpen && ` transform: translateY(0);`}
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
`;

const Header = styled.div`
  ${({ theme }) => theme && theme.fontSize.regular};
  background: ${({ theme }) => theme.colors.inputBackground};
  ${({ isOpen }) =>
    isOpen
      ? "border-top-left-radius:0.5rem; border-top-right-radius:0.5rem;"
      : "border-radius:0.5rem;"}
  overflow-x: visible;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  outline: none;
  border: 0;
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
  ${NoHighlight}
`;

const Selected = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Placeholder = styled.span`
  ${NoHighlight}
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
  padding-right: 1rem;
  transition: 200ms;
  ${NoHighlight}
  &:hover {
    background: ${({ theme }) => theme && darken(0.1, theme.colors.primary)};
  }
`;

const TagCross = styled.div`
  position: relative;
  height: 1.6rem;
  width: 1.6rem;
  margin-left: 1rem;
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

const List = styled.ul``;

const Item = styled.li`
  list-style-type: none;
  &:nth-child(even) {
    background: ${({ theme }) => lighten(0.1, theme.colors.inputBackground)};
  }
`;

const ItemButton = styled.button`
  ${({ theme }) => theme && theme.fontSize.small};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  min-height: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border: 0;
  width: 100%;
  text-align: left;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

const ItemName = styled.span``;

const ItemStatus = styled.span`
  color: ${({ theme }) => theme.colors.primary};
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
  ${NoHighlight}
`;
