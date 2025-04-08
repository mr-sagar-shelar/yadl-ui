import type { Meta, StoryObj } from "@storybook/react";
import Themeisle451 from "../Themeisle451";

const meta: Meta<typeof Themeisle451> = { title: "Themeisle/Themeisle451", component: Themeisle451 };

export default meta;
type Story = StoryObj<typeof Themeisle451>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
