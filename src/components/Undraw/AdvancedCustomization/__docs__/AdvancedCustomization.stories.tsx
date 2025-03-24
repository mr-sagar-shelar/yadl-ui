import type { Meta, StoryObj } from "@storybook/react";
import AdvancedCustomization from "../AdvancedCustomization";

const meta: Meta<typeof AdvancedCustomization> = { title: "unDraw/AdvancedCustomization", component: AdvancedCustomization };

export default meta;
type Story = StoryObj<typeof AdvancedCustomization>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
