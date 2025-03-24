import type { Meta, StoryObj } from "@storybook/react";
import PackageArrived from "../PackageArrived";

const meta: Meta<typeof PackageArrived> = { title: "unDraw/PackageArrived", component: PackageArrived };

export default meta;
type Story = StoryObj<typeof PackageArrived>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
