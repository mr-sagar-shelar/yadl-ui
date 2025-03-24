import type { Meta, StoryObj } from "@storybook/react";
import ServerDownServerDown from "../ServerDownServerDown";

const meta: Meta<typeof ServerDownServerDown> = { title: "unDraw/ServerDownServerDown", component: ServerDownServerDown };

export default meta;
type Story = StoryObj<typeof ServerDownServerDown>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
