import type { Meta, StoryObj } from "@storybook/react";
import StaticWebsite from "../StaticWebsite";

const meta: Meta<typeof StaticWebsite> = { title: "unDraw/StaticWebsite", component: StaticWebsite };

export default meta;
type Story = StoryObj<typeof StaticWebsite>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
