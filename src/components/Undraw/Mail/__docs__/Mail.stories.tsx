import type { Meta, StoryObj } from "@storybook/react";
import Mail from "../Mail";

const meta: Meta<typeof Mail> = { title: "unDraw/Mail", component: Mail };

export default meta;
type Story = StoryObj<typeof Mail>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
