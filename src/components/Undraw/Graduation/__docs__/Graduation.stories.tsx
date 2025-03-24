import type { Meta, StoryObj } from "@storybook/react";
import Graduation from "../Graduation";

const meta: Meta<typeof Graduation> = { title: "unDraw/Graduation", component: Graduation };

export default meta;
type Story = StoryObj<typeof Graduation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
