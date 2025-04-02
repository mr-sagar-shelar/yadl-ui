import type { Meta, StoryObj } from "@storybook/react";
import Ceres from "../Ceres";

const meta: Meta<typeof Ceres> = { title: "Azure/Other/Ceres", component: Ceres };

export default meta;
type Story = StoryObj<typeof Ceres>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
