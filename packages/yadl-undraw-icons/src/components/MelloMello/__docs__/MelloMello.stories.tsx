import type { Meta, StoryObj } from "@storybook/react";
import MelloMello from "../MelloMello";

const meta: Meta<typeof MelloMello> = { title: "unDraw/MelloMello", component: MelloMello };

export default meta;
type Story = StoryObj<typeof MelloMello>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
