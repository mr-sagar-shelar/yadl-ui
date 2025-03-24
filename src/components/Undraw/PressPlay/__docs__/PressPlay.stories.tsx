import type { Meta, StoryObj } from "@storybook/react";
import PressPlay from "../PressPlay";

const meta: Meta<typeof PressPlay> = { title: "unDraw/PressPlay", component: PressPlay };

export default meta;
type Story = StoryObj<typeof PressPlay>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
