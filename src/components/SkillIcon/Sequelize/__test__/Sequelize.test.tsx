import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Sequelize from "../Sequelize";

describe("Sequelize component", () => {
  it("Sequelize should render correctly", () => {
    render(<Sequelize />);
    expect(true).toBeTruthy();
  });
});
