import type { Meta, StoryObj } from "@storybook/react";
import ElementalServer from "../ElementalServer";

const meta: Meta<typeof ElementalServer> = { title: "AWS/MediaServices/ElementalServer", component: ElementalServer };

export default meta;
type Story = StoryObj<typeof ElementalServer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
