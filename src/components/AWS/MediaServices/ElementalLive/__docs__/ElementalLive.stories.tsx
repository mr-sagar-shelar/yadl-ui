import type { Meta, StoryObj } from "@storybook/react";
import ElementalLive from "../ElementalLive";

const meta: Meta<typeof ElementalLive> = { title: "AWS/MediaServices/ElementalLive", component: ElementalLive };

export default meta;
type Story = StoryObj<typeof ElementalLive>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
