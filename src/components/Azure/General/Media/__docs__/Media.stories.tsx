import type { Meta, StoryObj } from "@storybook/react";
import Media from "../Media";

const meta: Meta<typeof Media> = { title: "Azure/General/Media", component: Media };

export default meta;
type Story = StoryObj<typeof Media>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
