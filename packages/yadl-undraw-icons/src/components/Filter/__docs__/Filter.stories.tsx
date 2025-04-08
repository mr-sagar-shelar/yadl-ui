import type { Meta, StoryObj } from "@storybook/react";
import Filter from "../Filter";

const meta: Meta<typeof Filter> = { title: "unDraw/Filter", component: Filter };

export default meta;
type Story = StoryObj<typeof Filter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
