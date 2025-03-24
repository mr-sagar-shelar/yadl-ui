import type { Meta, StoryObj } from "@storybook/react";
import Campfire from "../Campfire";

const meta: Meta<typeof Campfire> = { title: "unDraw/Campfire", component: Campfire };

export default meta;
type Story = StoryObj<typeof Campfire>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
