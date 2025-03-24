import type { Meta, StoryObj } from "@storybook/react";
import Themeisle456 from "../Themeisle456";

const meta: Meta<typeof Themeisle456> = { title: "Themeisle/Themeisle456", component: Themeisle456 };

export default meta;
type Story = StoryObj<typeof Themeisle456>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
