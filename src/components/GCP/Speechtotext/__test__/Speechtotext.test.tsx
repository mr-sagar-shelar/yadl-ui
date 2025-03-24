import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Speechtotext from "../Speechtotext";

describe("Speechtotext component", () => {
  it("Speechtotext should render correctly", () => {
    render(<Speechtotext />);
    expect(true).toBeTruthy();
  });
});
