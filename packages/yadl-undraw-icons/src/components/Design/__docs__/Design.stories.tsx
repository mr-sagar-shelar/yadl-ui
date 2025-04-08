import type { Meta, StoryObj } from "@storybook/react";
import Design from "../Design";

const meta: Meta<typeof Design> = { title: "unDraw/Design", component: Design };

export default meta;
type Story = StoryObj<typeof Design>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
