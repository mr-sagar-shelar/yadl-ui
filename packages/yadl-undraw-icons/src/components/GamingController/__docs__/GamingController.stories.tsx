import type { Meta, StoryObj } from "@storybook/react";
import GamingController from "../GamingController";

const meta: Meta<typeof GamingController> = { title: "unDraw/GamingController", component: GamingController };

export default meta;
type Story = StoryObj<typeof GamingController>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
