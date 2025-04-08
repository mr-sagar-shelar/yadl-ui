import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EiffelTower from "../EiffelTower";

describe("EiffelTower component", () => {
  it("EiffelTower should render correctly", () => {
    render(<EiffelTower />);
    expect(true).toBeTruthy();
  });
});
