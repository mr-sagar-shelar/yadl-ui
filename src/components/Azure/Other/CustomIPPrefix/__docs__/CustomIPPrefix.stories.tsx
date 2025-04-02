import type { Meta, StoryObj } from "@storybook/react";
import CustomIPPrefix from "../CustomIPPrefix";

const meta: Meta<typeof CustomIPPrefix> = { title: "Azure/Other/CustomIPPrefix", component: CustomIPPrefix };

export default meta;
type Story = StoryObj<typeof CustomIPPrefix>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
