import type { Meta, StoryObj } from "@storybook/react";
import ElementalDelta from "../ElementalDelta";

const meta: Meta<typeof ElementalDelta> = { title: "AWS/MediaServices/ElementalDelta", component: ElementalDelta };

export default meta;
type Story = StoryObj<typeof ElementalDelta>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
