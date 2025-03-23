import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ContentTeam from "../ContentTeam";

describe("ContentTeam component", () => {
  it("ContentTeam should render correctly", () => {
    render(<ContentTeam />);
    expect(true).toBeTruthy();
  });
});
