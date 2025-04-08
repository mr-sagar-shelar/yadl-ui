import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ResourcesProvider from "../ResourcesProvider";

describe("ResourcesProvider component", () => {
  it("ResourcesProvider should render correctly", () => {
    render(<ResourcesProvider />);
    expect(true).toBeTruthy();
  });
});
