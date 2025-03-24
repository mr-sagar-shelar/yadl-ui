import type { Meta, StoryObj } from "@storybook/react";
import Kendra from "../Kendra";

const meta: Meta<typeof Kendra> = { title: "AWS/MachineLearning/Kendra", component: Kendra };

export default meta;
type Story = StoryObj<typeof Kendra>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
