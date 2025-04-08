import type { Meta, StoryObj } from "@storybook/react";
import Themeisle219 from "../Themeisle219";

const meta: Meta<typeof Themeisle219> = { title: "Themeisle/Themeisle219", component: Themeisle219 };

export default meta;
type Story = StoryObj<typeof Themeisle219>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
