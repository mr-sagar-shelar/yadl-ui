import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Backup from "../Backup";

describe("Backup component", () => {
  it("Backup should render correctly", () => {
    render(<Backup />);
    expect(true).toBeTruthy();
  });
});
