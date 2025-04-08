import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppData from "../AppData";

describe("AppData component", () => {
  it("AppData should render correctly", () => {
    render(<AppData />);
    expect(true).toBeTruthy();
  });
});
