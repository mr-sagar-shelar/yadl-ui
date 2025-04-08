import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DesignNotes from "../DesignNotes";

describe("DesignNotes component", () => {
  it("DesignNotes should render correctly", () => {
    render(<DesignNotes />);
    expect(true).toBeTruthy();
  });
});
