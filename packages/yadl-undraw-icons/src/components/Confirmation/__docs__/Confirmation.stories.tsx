import type { Meta, StoryObj } from "@storybook/react";
import Confirmation from "../Confirmation";

const meta: Meta<typeof Confirmation> = { title: "unDraw/Confirmation", component: Confirmation };

export default meta;
type Story = StoryObj<typeof Confirmation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
