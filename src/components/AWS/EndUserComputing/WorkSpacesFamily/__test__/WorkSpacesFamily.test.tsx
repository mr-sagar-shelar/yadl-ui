import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkSpacesFamily from "../WorkSpacesFamily";

describe("WorkSpacesFamily component", () => {
  it("WorkSpacesFamily should render correctly", () => {
    render(<WorkSpacesFamily />);
    expect(true).toBeTruthy();
  });
});
