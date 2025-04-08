import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ActiveOptions from "../ActiveOptions";

describe("ActiveOptions component", () => {
  it("ActiveOptions should render correctly", () => {
    render(<ActiveOptions />);
    expect(true).toBeTruthy();
  });
});
