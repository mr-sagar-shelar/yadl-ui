import type { Meta, StoryObj } from "@storybook/react";
import ElementalConductor from "../ElementalConductor";

const meta: Meta<typeof ElementalConductor> = { title: "AWS/MediaServices/ElementalConductor", component: ElementalConductor };

export default meta;
type Story = StoryObj<typeof ElementalConductor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
