import type { Meta, StoryObj } from "@storybook/react";
import Windows10CoreServices from "../Windows10CoreServices";

const meta: Meta<typeof Windows10CoreServices> = { title: "Azure/Iot/Windows10CoreServices", component: Windows10CoreServices };

export default meta;
type Story = StoryObj<typeof Windows10CoreServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
