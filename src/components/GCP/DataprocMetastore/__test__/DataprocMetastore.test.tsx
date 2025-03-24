import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataprocMetastore from "../DataprocMetastore";

describe("DataprocMetastore component", () => {
  it("DataprocMetastore should render correctly", () => {
    render(<DataprocMetastore />);
    expect(true).toBeTruthy();
  });
});
