import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataLakeStoreGen1 from "../DataLakeStoreGen1";

describe("DataLakeStoreGen1 component", () => {
  it("DataLakeStoreGen1 should render correctly", () => {
    render(<DataLakeStoreGen1 />);
    expect(true).toBeTruthy();
  });
});
