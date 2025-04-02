import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CPP from "../CPP";

describe("CPP component", () => {
  it("CPP should render correctly", () => {
    render(<CPP />);
    expect(true).toBeTruthy();
  });
});
