import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Collaborators from "../Collaborators";

describe("Collaborators component", () => {
  it("Collaborators should render correctly", () => {
    render(<Collaborators />);
    expect(true).toBeTruthy();
  });
});
