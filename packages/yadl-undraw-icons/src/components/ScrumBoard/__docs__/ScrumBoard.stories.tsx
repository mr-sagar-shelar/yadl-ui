import type { Meta, StoryObj } from "@storybook/react";
import ScrumBoard from "../ScrumBoard";

const meta: Meta<typeof ScrumBoard> = { title: "unDraw/ScrumBoard", component: ScrumBoard };

export default meta;
type Story = StoryObj<typeof ScrumBoard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
