import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataLakeStorageGen1 from "../DataLakeStorageGen1";

describe("DataLakeStorageGen1 component", () => {
  it("DataLakeStorageGen1 should render correctly", () => {
    render(<DataLakeStorageGen1 />);
    expect(true).toBeTruthy();
  });
});
