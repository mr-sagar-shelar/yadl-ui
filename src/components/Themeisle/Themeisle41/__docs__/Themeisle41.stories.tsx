import type { Meta, StoryObj } from "@storybook/react";
import Themeisle41 from "../Themeisle41";

const meta: Meta<typeof Themeisle41> = { title: "Themeisle/Themeisle41", component: Themeisle41 };

export default meta;
type Story = StoryObj<typeof Themeisle41>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
