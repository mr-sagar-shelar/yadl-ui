import type { Meta, StoryObj } from "@storybook/react";
import SantaClaus from "../SantaClaus";

const meta: Meta<typeof SantaClaus> = { title: "unDraw/SantaClaus", component: SantaClaus };

export default meta;
type Story = StoryObj<typeof SantaClaus>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
