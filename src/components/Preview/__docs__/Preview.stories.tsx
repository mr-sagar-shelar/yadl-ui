import type { Meta, StoryObj } from "@storybook/react";
import Preview from "../Preview";
import React from "react";

const meta: Meta<typeof Preview> = { title: "Preview", component: Preview };

export default meta;
type Story = StoryObj<typeof Preview>;

export const Interactivity: Story = {
  args: {},
  render: (args) => (
    <div style={{ height: "100%", width: "100%" }}>
      <Preview />
    </div>
  ),
};
