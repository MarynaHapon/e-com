// Core
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #E5F7FF;
  padding: 0 60px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
`;

export const Navigation = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 15px;
  cursor: pointer;
  color: #413382;
  font-size: 16px;
  font-weight: 500;
  border-bottom: ${({ selected }) => selected ? '2px solid red' : '2px solid transparent'};
`;
