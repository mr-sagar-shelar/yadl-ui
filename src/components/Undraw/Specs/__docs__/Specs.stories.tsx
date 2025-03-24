import type { Meta, StoryObj } from "@storybook/react";
import Specs from "../Specs";

const meta: Meta<typeof Specs> = { title: "unDraw/Specs", component: Specs };

export default meta;
type Story = StoryObj<typeof Specs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
