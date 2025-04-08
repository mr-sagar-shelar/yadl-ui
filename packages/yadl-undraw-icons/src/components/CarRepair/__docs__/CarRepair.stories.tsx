import type { Meta, StoryObj } from "@storybook/react";
import CarRepair from "../CarRepair";

const meta: Meta<typeof CarRepair> = { title: "unDraw/CarRepair", component: CarRepair };

export default meta;
type Story = StoryObj<typeof CarRepair>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
