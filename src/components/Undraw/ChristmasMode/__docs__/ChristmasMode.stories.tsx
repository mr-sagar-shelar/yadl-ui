import type { Meta, StoryObj } from "@storybook/react";
import ChristmasMode from "../ChristmasMode";

const meta: Meta<typeof ChristmasMode> = { title: "unDraw/ChristmasMode", component: ChristmasMode };

export default meta;
type Story = StoryObj<typeof ChristmasMode>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
