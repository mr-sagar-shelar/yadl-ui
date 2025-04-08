import type { Meta, StoryObj } from "@storybook/react";
import Environment1Environment from "../Environment1Environment";

const meta: Meta<typeof Environment1Environment> = { title: "unDraw/Environment1Environment", component: Environment1Environment };

export default meta;
type Story = StoryObj<typeof Environment1Environment>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
