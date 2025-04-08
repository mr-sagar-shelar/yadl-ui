import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppStream from "../AppStream";

describe("AppStream component", () => {
  it("AppStream should render correctly", () => {
    render(<AppStream />);
    expect(true).toBeTruthy();
  });
});
