import type { Meta, StoryObj } from "@storybook/react";
import Taken from "../Taken";

const meta: Meta<typeof Taken> = { title: "unDraw/Taken", component: Taken };

export default meta;
type Story = StoryObj<typeof Taken>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
