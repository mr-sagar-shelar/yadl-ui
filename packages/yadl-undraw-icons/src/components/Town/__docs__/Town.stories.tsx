import type { Meta, StoryObj } from "@storybook/react";
import Town from "../Town";

const meta: Meta<typeof Town> = { title: "unDraw/Town", component: Town };

export default meta;
type Story = StoryObj<typeof Town>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
