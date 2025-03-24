import type { Meta, StoryObj } from "@storybook/react";
import Themeisle89 from "../Themeisle89";

const meta: Meta<typeof Themeisle89> = { title: "Themeisle/Themeisle89", component: Themeisle89 };

export default meta;
type Story = StoryObj<typeof Themeisle89>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
