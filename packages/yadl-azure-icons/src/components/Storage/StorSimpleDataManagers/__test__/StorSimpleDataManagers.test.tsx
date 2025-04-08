import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StorSimpleDataManagers from "../StorSimpleDataManagers";

describe("StorSimpleDataManagers component", () => {
  it("StorSimpleDataManagers should render correctly", () => {
    render(<StorSimpleDataManagers />);
    expect(true).toBeTruthy();
  });
});
