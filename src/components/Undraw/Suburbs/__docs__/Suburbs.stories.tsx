import type { Meta, StoryObj } from "@storybook/react";
import Suburbs from "../Suburbs";

const meta: Meta<typeof Suburbs> = { title: "unDraw/Suburbs", component: Suburbs };

export default meta;
type Story = StoryObj<typeof Suburbs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
