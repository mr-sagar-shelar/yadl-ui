import type { Meta, StoryObj } from "@storybook/react";
import InternetOnTheGo from "../InternetOnTheGo";

const meta: Meta<typeof InternetOnTheGo> = { title: "unDraw/InternetOnTheGo", component: InternetOnTheGo };

export default meta;
type Story = StoryObj<typeof InternetOnTheGo>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
