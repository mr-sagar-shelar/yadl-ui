import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Dataproc from "../Dataproc";

describe("Dataproc component", () => {
  it("Dataproc should render correctly", () => {
    render(<Dataproc />);
    expect(true).toBeTruthy();
  });
});
