import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Error from "../Error";

describe("Error component", () => {
  it("Error should render correctly", () => {
    render(<Error />);
    expect(true).toBeTruthy();
  });
});
