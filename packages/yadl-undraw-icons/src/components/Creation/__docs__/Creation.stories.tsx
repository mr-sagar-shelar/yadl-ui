import type { Meta, StoryObj } from "@storybook/react";
import Creation from "../Creation";

const meta: Meta<typeof Creation> = { title: "unDraw/Creation", component: Creation };

export default meta;
type Story = StoryObj<typeof Creation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
