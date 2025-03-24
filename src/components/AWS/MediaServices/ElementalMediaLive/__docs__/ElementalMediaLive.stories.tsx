import type { Meta, StoryObj } from "@storybook/react";
import ElementalMediaLive from "../ElementalMediaLive";

const meta: Meta<typeof ElementalMediaLive> = { title: "AWS/MediaServices/ElementalMediaLive", component: ElementalMediaLive };

export default meta;
type Story = StoryObj<typeof ElementalMediaLive>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
