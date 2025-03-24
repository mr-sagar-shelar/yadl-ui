import type { Meta, StoryObj } from "@storybook/react";
import DevelopApp from "../DevelopApp";

const meta: Meta<typeof DevelopApp> = { title: "unDraw/DevelopApp", component: DevelopApp };

export default meta;
type Story = StoryObj<typeof DevelopApp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
