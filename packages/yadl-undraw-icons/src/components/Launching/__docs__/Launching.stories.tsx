import type { Meta, StoryObj } from "@storybook/react";
import Launching from "../Launching";

const meta: Meta<typeof Launching> = { title: "unDraw/Launching", component: Launching };

export default meta;
type Story = StoryObj<typeof Launching>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
