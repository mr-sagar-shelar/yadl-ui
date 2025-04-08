import type { Meta, StoryObj } from "@storybook/react";
import TextField from "../TextField";

const meta: Meta<typeof TextField> = { title: "unDraw/TextField", component: TextField };

export default meta;
type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
