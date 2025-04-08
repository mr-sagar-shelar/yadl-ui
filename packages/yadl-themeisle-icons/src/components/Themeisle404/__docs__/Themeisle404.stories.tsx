import type { Meta, StoryObj } from "@storybook/react";
import Themeisle404 from "../Themeisle404";

const meta: Meta<typeof Themeisle404> = { title: "Themeisle/Themeisle404", component: Themeisle404 };

export default meta;
type Story = StoryObj<typeof Themeisle404>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
