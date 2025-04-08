import type { Meta, StoryObj } from "@storybook/react";
import Building from "../Building";

const meta: Meta<typeof Building> = { title: "unDraw/Building", component: Building };

export default meta;
type Story = StoryObj<typeof Building>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
