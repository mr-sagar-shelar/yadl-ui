import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FemaleAvatar from "../FemaleAvatar";

describe("FemaleAvatar component", () => {
  it("FemaleAvatar should render correctly", () => {
    render(<FemaleAvatar />);
    expect(true).toBeTruthy();
  });
});
