import type { Meta, StoryObj } from "@storybook/react";
import Themeisle318 from "../Themeisle318";

const meta: Meta<typeof Themeisle318> = { title: "Themeisle/Themeisle318", component: Themeisle318 };

export default meta;
type Story = StoryObj<typeof Themeisle318>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
