import type { Meta, StoryObj } from "@storybook/react";
import Themeisle71 from "../Themeisle71";

const meta: Meta<typeof Themeisle71> = { title: "Themeisle/Themeisle71", component: Themeisle71 };

export default meta;
type Story = StoryObj<typeof Themeisle71>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
