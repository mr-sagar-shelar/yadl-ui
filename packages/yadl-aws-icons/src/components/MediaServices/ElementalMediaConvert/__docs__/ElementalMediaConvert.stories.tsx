import type { Meta, StoryObj } from "@storybook/react";
import ElementalMediaConvert from "../ElementalMediaConvert";

const meta: Meta<typeof ElementalMediaConvert> = { title: "AWS/MediaServices/ElementalMediaConvert", component: ElementalMediaConvert };

export default meta;
type Story = StoryObj<typeof ElementalMediaConvert>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
