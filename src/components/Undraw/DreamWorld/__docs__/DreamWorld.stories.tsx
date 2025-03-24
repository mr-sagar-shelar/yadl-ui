import type { Meta, StoryObj } from "@storybook/react";
import DreamWorld from "../DreamWorld";

const meta: Meta<typeof DreamWorld> = { title: "unDraw/DreamWorld", component: DreamWorld };

export default meta;
type Story = StoryObj<typeof DreamWorld>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
