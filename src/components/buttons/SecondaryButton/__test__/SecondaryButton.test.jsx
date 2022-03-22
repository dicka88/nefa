import React from 'react';
import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import "@testing-library/jest-dom";

import SecondaryButton from '../../SecondaryButton';

test('Button should have button role', async () => {
  const buttonText = "Hello World";

  render(
    <SecondaryButton>
      {buttonText}
    </SecondaryButton>
  );

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
});

test("Button should have text", () => {
  const buttonText = "Hello World";

  render(
    <SecondaryButton>
      {buttonText}
    </SecondaryButton>
  );

  const button = screen.getByRole('button');

  expect(button).toHaveTextContent(buttonText);
});

test("Button should disabled", async () => {
  render(
    <SecondaryButton disabled>
      Button
    </SecondaryButton>
  );

  expect(screen.getByRole('button')).toBeDisabled();
});

test("Button should render children component", () => {
  const children = (
    <img src="mock" alt='mock' />
  );

  render(
    <SecondaryButton>
      {children}
    </SecondaryButton>
  );

  expect(screen.getByRole('img')).toBeInTheDocument();
});