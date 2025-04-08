import type { Meta, StoryObj } from "@storybook/react";
import Programmer from "../Programmer";

const meta: Meta<typeof Programmer> = { title: "unDraw/Programmer", component: Programmer };

export default meta;
type Story = StoryObj<typeof Programmer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
