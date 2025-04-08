import type { Meta, StoryObj } from "@storybook/react";
import ElementalLink from "../ElementalLink";

const meta: Meta<typeof ElementalLink> = { title: "AWS/MediaServices/ElementalLink", component: ElementalLink };

export default meta;
type Story = StoryObj<typeof ElementalLink>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
