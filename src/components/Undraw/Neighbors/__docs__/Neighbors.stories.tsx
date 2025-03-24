import type { Meta, StoryObj } from "@storybook/react";
import Neighbors from "../Neighbors";

const meta: Meta<typeof Neighbors> = { title: "unDraw/Neighbors", component: Neighbors };

export default meta;
type Story = StoryObj<typeof Neighbors>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
