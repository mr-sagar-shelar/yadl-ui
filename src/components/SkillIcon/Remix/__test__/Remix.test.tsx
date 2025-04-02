import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Remix from "../Remix";

describe("Remix component", () => {
  it("Remix should render correctly", () => {
    render(<Remix />);
    expect(true).toBeTruthy();
  });
});
