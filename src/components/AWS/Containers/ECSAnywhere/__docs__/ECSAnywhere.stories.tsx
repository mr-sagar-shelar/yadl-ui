import type { Meta, StoryObj } from "@storybook/react";
import ECSAnywhere from "../ECSAnywhere";

const meta: Meta<typeof ECSAnywhere> = { title: "AWS/Containers/ECSAnywhere", component: ECSAnywhere };

export default meta;
type Story = StoryObj<typeof ECSAnywhere>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
