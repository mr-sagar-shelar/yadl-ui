import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OutdoorsOutdoors from "../OutdoorsOutdoors";

describe("OutdoorsOutdoors component", () => {
  it("OutdoorsOutdoors should render correctly", () => {
    render(<OutdoorsOutdoors />);
    expect(true).toBeTruthy();
  });
});
