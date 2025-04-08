import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ResourceMover from "../ResourceMover";

describe("ResourceMover component", () => {
  it("ResourceMover should render correctly", () => {
    render(<ResourceMover />);
    expect(true).toBeTruthy();
  });
});
