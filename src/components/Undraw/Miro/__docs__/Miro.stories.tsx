import type { Meta, StoryObj } from "@storybook/react";
import Miro from "../Miro";

const meta: Meta<typeof Miro> = { title: "unDraw/Miro", component: Miro };

export default meta;
type Story = StoryObj<typeof Miro>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
