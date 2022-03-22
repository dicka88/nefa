import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import { test } from "vitest";
import "@testing-library/jest-dom";

import DropdownButton from '../../DropdownButton';

test("Button should have role button", () => {
  render(
    <DropdownButton>
      Something
    </DropdownButton>
  );
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("Button should toggle dropdown on button click", () => {
  render(
    <DropdownButton>
      Something
    </DropdownButton>
  );

  fireEvent(
    screen.getByRole('button'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    })
  );

  expect(screen.getByTestId('dropdown')).toHaveClass('visible');

  fireEvent(
    screen.getByRole('button'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    })
  );

  expect(screen.getByTestId('dropdown')).toHaveClass('invisible');
});