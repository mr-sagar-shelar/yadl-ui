import type { Meta, StoryObj } from "@storybook/react";
import ElementalMediaConnect from "../ElementalMediaConnect";

const meta: Meta<typeof ElementalMediaConnect> = { title: "AWS/MediaServices/ElementalMediaConnect", component: ElementalMediaConnect };

export default meta;
type Story = StoryObj<typeof ElementalMediaConnect>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
