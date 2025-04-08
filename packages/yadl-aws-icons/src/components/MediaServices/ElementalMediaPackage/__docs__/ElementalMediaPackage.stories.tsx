import type { Meta, StoryObj } from "@storybook/react";
import ElementalMediaPackage from "../ElementalMediaPackage";

const meta: Meta<typeof ElementalMediaPackage> = { title: "AWS/MediaServices/ElementalMediaPackage", component: ElementalMediaPackage };

export default meta;
type Story = StoryObj<typeof ElementalMediaPackage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
